package com.wordflow.wordflow_api.controllers;

import java.util.UUID;

import org.springframework.web.bind.annotation.*;

import java.util.List; 

import com.wordflow.wordflow_api.pgsql.schemas.Book; 
import com.wordflow.wordflow_api.pgsql.schemas.User; 
import com.wordflow.wordflow_api.pgsql.repositories.BookRepository; 
import com.wordflow.wordflow_api.pgsql.repositories.UserRepository; 

class BookUserResponse {
    public Book book; 
    public User user; 

    public BookUserResponse(Book book, User user) {
        this.book = book; 
        this.user = user; 
    }
}

@RestController
public class ReadController {
    private final BookRepository bookRepository; 
    private final UserRepository userRepository; 

    public ReadController(
        BookRepository bookRepository, 
        UserRepository userRepository
    ) {
        this.bookRepository = bookRepository; 
        this.userRepository = userRepository; 
    }

    @GetMapping("/random_book")
    public BookUserResponse getRandomBook() {
        Book book = bookRepository.getRandomBook(); 
        User user = userRepository.getUserById(book.author_id); 
        return new BookUserResponse(book, user); 
    }
}