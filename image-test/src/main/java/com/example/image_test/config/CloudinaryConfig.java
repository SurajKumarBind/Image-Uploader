package com.example.image_test.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.cloudinary.utils.ObjectUtils;

import com.cloudinary.Cloudinary;

@Configuration
public class CloudinaryConfig {

 @Bean
 public Cloudinary cloudinary(){
    return new Cloudinary(ObjectUtils.asMap(
        "cloud_name", "dio0u8mhv",
        "api_key", "177987122799816",
        "api_secret", "AOsMNLxgTN9ZO66McjdFmaHIYFY"
    ));
  }
}