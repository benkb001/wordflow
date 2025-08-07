package com.wordflow.wordflow_api.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import java.util.UUID;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class UserDoesNotExistException extends RuntimeException {
    public UserDoesNotExistException(UUID id) {
        super("There is no user with id" + id);
    }
}