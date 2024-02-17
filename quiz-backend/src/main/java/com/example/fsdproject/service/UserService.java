package com.example.fsdproject.service;

import com.example.fsdproject.entity.AuctionItem;
import com.example.fsdproject.entity.User;
import com.example.fsdproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User findByUsername(String username)
    {
        return userRepository.findByUsername(username);
    }
    public User findByEmail(String email)
    {
        return userRepository.findByUsername(email);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

}
