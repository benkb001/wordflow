package com.wordflow.wordflow_api.controllers;

import java.util.UUID;

import org.springframework.web.bind.annotation.*;

import java.util.List; 

import com.wordflow.wordflow_api.pgsql.schemas.Book; 
import com.wordflow.wordflow_api.pgsql.repositories.BookRepository; 

class BookRequest {
    public String id; 
    public String author_id; 
    public String content; 
    public String title; 

    public String toString() {
        return id + author_id + content + title; 
    }
}

@RestController
public class WriteController {
    private final BookRepository bookRepository; 

    public WriteController(BookRepository bookRepository) {
        this.bookRepository = bookRepository; 
    }

    @GetMapping("/books/{author_id}")
    public List<Book> getBooksByAuthorId(@PathVariable("author_id") UUID author_id) {
        return bookRepository.getBooksByAuthorId(author_id); 
    }
    
    @PostMapping("/save_book") 
    public Book saveBook(@RequestBody BookRequest req) {
        UUID author_id = UUID.fromString(req.author_id); 
        if (req.id.equals("new")) {
            return bookRepository.insertBook(author_id, req.content, req.title); 
        } else {
            UUID id = UUID.fromString(req.id); 
            return bookRepository.editBook(id, req.content, req.title); 
        }
    }
}