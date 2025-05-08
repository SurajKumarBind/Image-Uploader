package com.example.image_test.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Document(collection= "jobs")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {
    @Id
  private String id ;
  private String name;
  private String image;
}