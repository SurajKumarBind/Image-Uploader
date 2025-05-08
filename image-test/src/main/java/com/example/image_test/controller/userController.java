package com.example.image_test.controller;

import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import com.example.image_test.model.User;
import com.example.image_test.repository.userRepository;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin("http://localhost:5173")
public class userController {
 
    @Autowired
    private userRepository UserRepository;

    @Autowired
    private Cloudinary cloudinary;

    //get mapping

    @GetMapping
    public Iterable<User> uetAlluser(){
        return UserRepository.findAll();
    }

    // Post mapping
    @PostMapping("/add")
    public User adduser(
        @RequestParam("name") String name,
        @RequestParam("image") MultipartFile image
) throws IOException{

    Map uploadResult = cloudinary.uploader().upload(image.getBytes(),ObjectUtils.emptyMap());
    String imageUrl = (String) uploadResult.get("url");

    //save to user in db

    User user = new User();
    user.setName(name);
    user.setImage(imageUrl);
    return UserRepository.save(user);

}
@DeleteMapping("/{id}")
public void deletUser (@PathVariable ("id") String id ){
    UserRepository.deleteById(id);
}
}