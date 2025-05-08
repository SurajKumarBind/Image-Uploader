package com.example.image_test.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.image_test.model.User;

public interface userRepository extends MongoRepository<User, String> {
	
}