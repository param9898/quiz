package com.example.fsdproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fsdproject.entity.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    // Custom methods for user-related operations
    public List<Users> findByUsername(String username);
}