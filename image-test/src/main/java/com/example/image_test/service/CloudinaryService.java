package com.example.image_test.service;

import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

@Service
public class CloudinaryService {

    private final Cloudinary cloudinary;
    public CloudinaryService(
        @Value("${cloudinary.cloud_name}") String cloudName,
        @Value("${cloudinary.api_key}") String apikey,
        @Value("${cloudinary.api_Secret}") String apiSecret
    ){
        this.cloudinary = new Cloudinary(ObjectUtils.asMap(
            "cloud_name", cloudName,
            "api_key", apikey,
            "api_secret",apiSecret
        ));
    }

    public String uploadImage(byte[] imageBytes) throws IOException{

        Map uploadResult = cloudinary.uploader().upload(imageBytes , ObjectUtils.emptyMap());
        return (String) uploadResult.get("secure_url");
    }
}
