
package com.wordflow.wordflow_api.pgsql.schemas;

import javax.persistence.*;
import java.util.UUID;

import com.wordflow.wordflow_api.pgsql.schemas.User; 

@Entity
@Table(name = "books")
public class Book {
    @Id
    public UUID id;
    public UUID author_id; 
    public String title;
    public String content;

    public Book(UUID id, UUID author_id, String content, String title) {
        this.id = id; 
        this.content = content; 
        this.title = title;
        this.author_id = author_id;
    }

    protected Book(){}
}
