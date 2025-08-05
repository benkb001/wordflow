package com.wordflow.wordflow_api.controllers;

import java.util.Map;
import java.util.HashMap;

import org.springframework.web.bind.annotation.*;

import com.wordflow.wordflow_api.pgsql.schemas.User; 
import com.wordflow.wordflow_api.pgsql.repositories.UserRepository; 

class SignInRequest {
    public String username; 
    public String password; 

    public String toString() {
        return username + password; 
    }
}

@RestController
public class SignInController {

    private final UserRepository userRepository; 

    public SignInController(UserRepository userRepository) {
        this.userRepository = userRepository; 
    }

    @PostMapping("/api/sign-in")
    public User home(@RequestBody SignInRequest request) { 
        System.out.println("hit the endpoint"); 
        System.out.println(request); 
        return userRepository.getUserByUsernamePassword(request.username, request.password); 
    }
}