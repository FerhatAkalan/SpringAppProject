package com.hoaxify.ws.user;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@Service
public class UserService {

    UserRepository userRepository;
    PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void save(User user) {
        user.setPassword(this.passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }
}
