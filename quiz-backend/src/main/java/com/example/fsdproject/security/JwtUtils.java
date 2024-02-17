package com.example.fsdproject.security;

import com.example.fsdproject.entity.User;

import java.util.Date;

public class JwtUtils {

    private static final long EXPIRATION_TIME = 86400000; // 1 day in milliseconds

    public static String generateToken(User user) {
        // Creating a simple, unencrypted token string
        return user.getUsername() +"|"+ user.getEmail()+"|" + (System.currentTimeMillis() + EXPIRATION_TIME);
    }
}
