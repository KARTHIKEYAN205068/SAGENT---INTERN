package com.college.admission.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.college.admission.entity.AppStatus;
import com.college.admission.repository.AppStatusRepository;

@RestController
@RequestMapping("/status")
@RequiredArgsConstructor
public class AppStatusController {

    private final AppStatusRepository repository;

    @PostMapping
    public AppStatus create(@RequestBody AppStatus status) {
        return repository.save(status);
    }

    @GetMapping
    public List<AppStatus> getAll() {
        return repository.findAll();
    }
}
