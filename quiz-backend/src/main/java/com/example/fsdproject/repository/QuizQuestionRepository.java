package com.example.fsdproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.fsdproject.entity.Quiz;
import com.example.fsdproject.entity.QuizQuestion;

public interface QuizQuestionRepository extends JpaRepository<QuizQuestion, Long> {
    // Custom methods for quiz question-related operations
    public List<QuizQuestion> findByQuiz(Quiz quiz);
}