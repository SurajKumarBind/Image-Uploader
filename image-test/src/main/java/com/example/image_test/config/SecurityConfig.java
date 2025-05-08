package com.example.image_test.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // CSRF ko disable kiya
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll() // Sare request allow kiya
            )
            .cors(); // CORS allow kar diya

        return http.build();
    }
}
