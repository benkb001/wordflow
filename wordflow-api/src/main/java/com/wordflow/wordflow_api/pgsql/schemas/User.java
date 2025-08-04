package com.wordflow.wordflow_api.pgsql.schemas;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import javax.persistence.*; 
import java.util.UUID;
import java.util.List; 
import java.util.ArrayList; 

import com.wordflow.wordflow_api.pgsql.schemas.Chapter; 

@Entity
@Table(name = "users")
public class User {
    @Id
    public UUID id;

    public String username;
    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Chapter> chapters = new ArrayList<>();

    public User(UUID id, String username) {
        this.id = id; 
        this.username = username; 
    }
}