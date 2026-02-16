package com.college.admission.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.college.admission.entity.Officer;
import com.college.admission.repository.OfficerRepository;

@RestController
@RequestMapping("/officers")
@RequiredArgsConstructor
public class OfficerController {

    private final OfficerRepository repository;

    @PostMapping
    public Officer create(@RequestBody Officer officer) {
        return repository.save(officer);
    }

    @GetMapping
    public List<Officer> getAll() {
        return repository.findAll();
    }
}
