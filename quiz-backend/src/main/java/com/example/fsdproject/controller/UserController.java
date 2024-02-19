package com.example.fsdproject.controller;

// UserController.java

import com.example.fsdproject.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import com.example.fsdproject.entity.Questions;
import com.example.fsdproject.entity.Users;
import com.example.fsdproject.service.UserService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }
    //private static final Logger logger = LoggerFactory.getLogger(UserController.class);


    @PostMapping
    public Users createUser(@RequestBody Users user) {
        return userService.createUser(user);

    }

    @GetMapping("/{id}")
    public Users getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PutMapping("/{id}")
    public Users updateUser(@PathVariable Long id, @RequestBody Users user) {
        return userService.updateUser(id, user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @GetMapping
    public List<Users> getAllUsers() {
        return userService.getAllUsers();
    }
}


