package com.college.admission.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.college.admission.entity.Application;
import com.college.admission.repository.ApplicationRepository;

@RestController
@RequestMapping("/applications")
@RequiredArgsConstructor
public class ApplicationController {

    private final ApplicationRepository repository;

    @PostMapping
    public Application create(@RequestBody Application app) {
        return repository.save(app);
    }

    @GetMapping
    public List<Application> getAll() {
        return repository.findAll();
    }
}
