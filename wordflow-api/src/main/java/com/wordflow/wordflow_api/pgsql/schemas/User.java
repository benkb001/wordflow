package com.wordflow.wordflow_api.pgsql.schemas;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class User {
    @Id
    private UUID id;

    private String username;
    private String password;
}