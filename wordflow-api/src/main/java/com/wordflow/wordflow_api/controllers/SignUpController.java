package com.wordflow.wordflow_api.controllers;

import java.util.Map;
import java.util.HashMap;

import org.springframework.web.bind.annotation.*;

import com.wordflow.wordflow_api.pgsql.schemas.User; 
import com.wordflow.wordflow_api.pgsql.repositories.UserRepository; 

class SignUpRequest {
    public String username; 
    public String password; 

    public String toString() {
        return username + password; 
    }
}

@RestController
public class SignUpController {

    private final UserRepository userRepository; 

    public SignUpController(UserRepository userRepository) {
        this.userRepository = userRepository; 
    }

    @PostMapping("/signup")
    public int home(@RequestBody SignUpRequest request) {
        System.out.println(request);  
        System.out.println("look above"); 
        return userRepository.insertUser(request.username, request.password); 
    }
}