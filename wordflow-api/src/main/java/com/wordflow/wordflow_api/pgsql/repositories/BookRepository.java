package com.wordflow.wordflow_api.pgsql.repositories;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.UUID;

import com.wordflow.wordflow_api.pgsql.schemas.User;
import com.wordflow.wordflow_api.pgsql.schemas.Book;

import com.wordflow.wordflow_api.exceptions.UserDoesNotExistException; 

@Repository
public class BookRepository {
    private final JdbcTemplate jdbcTemplate;
    private final UserRepository userRepository; 

    public BookRepository(
        JdbcTemplate jdbcTemplate, 
        UserRepository userRepository
        ) {
        this.jdbcTemplate = jdbcTemplate; 
        this.userRepository = userRepository; 
    }

    private final RowMapper<Book> bookRowMapper = (rs, rowNum) -> {
        UUID id = UUID.fromString(rs.getString("id")); 
        UUID author_id = UUID.fromString(rs.getString("author_id")); 
        String title = rs.getString("title");
        String content = rs.getString("content"); 

        return new Book(id, author_id, content, title); 
    };

    public Book insertBook(UUID author_id, String content, String title) {
        UUID id = UUID.randomUUID(); 

        if (!userRepository.userExists(author_id)) {
            throw new UserDoesNotExistException(author_id); 
        }

        String insertSql = "INSERT INTO books (id, author_id, content, title) VALUES (?, ?, ?, ?)"; 
        jdbcTemplate.update(insertSql, id, author_id, content, title);
        return getBookById(id); 
    }

    public Book editBook(UUID id, String content, String title) {
        String sql = "UPDATE books SET content = ?, title = ? WHERE id = ?"; 
        jdbcTemplate.update(sql, content, title, id); 
        return getBookById(id); 
    }

    public Book getBookById(UUID id) {
        String query = "SELECT * FROM books WHERE id = ?"; 
        return jdbcTemplate.queryForObject(query, bookRowMapper, id);
    }

    public List<Book> getBooksByAuthorId(UUID author_id) {
        String query = "SELECT * FROM books WHERE author_id = ?"; 
        return jdbcTemplate.query(query, bookRowMapper, author_id); 
    }

    public Book getRandomBook() {
        String query = 
        "SELECT * FROM books " +
        "ORDER BY RANDOM()" + 
        "LIMIT 1"; 
        return jdbcTemplate.queryForObject(query, bookRowMapper); 
    }
}