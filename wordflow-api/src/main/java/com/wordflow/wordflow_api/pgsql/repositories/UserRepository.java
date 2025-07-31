package com.wordflow.wordflow_api.pgsql.repositories;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.UUID;

@Repository
public class UserRepository {

    private final JdbcTemplate jdbcTemplate;

    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    
    public int insertUser(String username, String password) {
        String sql = "INSERT INTO users (id, password, username) VALUES (?, ?, ?)";
        UUID id = UUID.randomUUID(); 
        return jdbcTemplate.update(sql, id, password, username);
    }
}