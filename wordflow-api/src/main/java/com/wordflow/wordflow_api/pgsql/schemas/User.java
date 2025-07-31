package com.wordflow.wordflow_api.pgsql.schemas;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import javax.persistence.*; 
import java.util.UUID;


@Entity
@Table(name = "users")
public class User {
    @Id
    private UUID id;

    public String username;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
}