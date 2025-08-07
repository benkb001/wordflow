package com.wordflow.wordflow_api.controllers;

import org.springframework.web.bind.annotation.*;

import com.wordflow.wordflow_api.exceptions.ExistingUserException; 
import com.wordflow.wordflow_api.exceptions.InvalidUsernamePasswordException; 

import com.wordflow.wordflow_api.pgsql.schemas.User; 
import com.wordflow.wordflow_api.pgsql.repositories.UserRepository; 

class AuthRequest {
    public String username; 
    public String password; 

    public String toString() {
        return username + password; 
    }
}

@RestController
public class AuthController {

    private final UserRepository userRepository; 

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository; 
    }

    @PostMapping("/sign-in")
    public User signIn(@RequestBody AuthRequest req) { 
        User u = userRepository.getUserByUsernamePassword(req.username, req.password); 
        if (u == null) {
            throw new InvalidUsernamePasswordException(); 
        }
        return u; 
    }

    @PostMapping("/sign-up")
    public User signUp(@RequestBody AuthRequest req) { 
        try {
            return userRepository.insertUser(req.username, req.password); 
        } catch (Exception e) {
            throw new ExistingUserException(); 
        }
    }
}