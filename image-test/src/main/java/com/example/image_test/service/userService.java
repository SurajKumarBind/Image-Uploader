package com.example.image_test.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.image_test.dto.userDto;
import com.example.image_test.model.User;
import com.example.image_test.repository.userRepository;

@Service
public class userService {

     @Autowired
    private userRepository UserRepository;

    @Autowired
    private CloudinaryService cloudinaryservice;

    public List<User> getAlluser(){
        return UserRepository.findAll();
    }

    public User addUser(userDto UserDto,byte[] imagebytes) throws IOException{
        String imageUrl = cloudinaryservice.uploadImage(imagebytes);

        User user = User.builder()
        .name(UserDto.getName())
        .image(imageUrl)
        .build();
        return UserRepository.save(user);


    }

    public void deletUser(String id) {
        UserRepository.deleteById(id);
    }
}
