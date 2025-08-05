/*
package com.wordflow.wordflow_api.pgsql.schemas;

import javax.persistence.*;
import java.util.UUID;

import com.wordflow.wordflow_api.pgsql.schemas.User; 

@Entity
@Table(name = "chapters")
public class Chapter {
    @Id
    private UUID id;

    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public Chapter(String name, User user) {
        this.name = name;
        this.user = user;
    }
}
*/