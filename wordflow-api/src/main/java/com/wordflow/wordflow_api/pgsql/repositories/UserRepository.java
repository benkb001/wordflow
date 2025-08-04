package com.wordflow.wordflow_api.pgsql.repositories;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.UUID;

import com.wordflow.wordflow_api.pgsql.schemas.User;

@Repository
public class UserRepository {

    private final JdbcTemplate jdbcTemplate;

    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    
    private final RowMapper<User> userRowMapper = (rs, rowNum) -> {
        UUID id = UUID.fromString(rs.getString("id")); 
        String username = rs.getString("username");
        return new User(id, username);
    };

    public User insertUser(String username, String password) {
        String insertSql = "INSERT INTO users (id, password, username) VALUES (?, ?, ?)";
        UUID id = UUID.randomUUID(); 
        jdbcTemplate.update(insertSql, id, password, username);
        return getUserById(id); 
    }

    public User getUserById(UUID id) {
        String querySql = "SELECT * FROM users WHERE id = ?"; 
        return jdbcTemplate.queryForObject(querySql, userRowMapper, id);
    }

    public User getUserByUsernamePassword(String username, String password) {
        String querySql = "SELECT * FROM users WHERE username = ? AND password = ?"; 
        return jdbcTemplate.queryForObject(querySql, userRowMapper, username, password);
    }
}