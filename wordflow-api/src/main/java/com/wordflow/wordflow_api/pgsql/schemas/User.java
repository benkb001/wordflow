package com.wordflow.wordflow_api.pgsql.schemas;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import javax.persistence.*; 
import java.util.UUID;

@Entity
@Table(name = "users")
public class User {
    @Id
    public UUID id;

    public String username;
    private String password;

    protected User(){}

    public User(UUID id, String username) {
        this.id = id; 
        this.username = username; 
    }
}