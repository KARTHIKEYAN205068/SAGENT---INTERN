package com.college.admission.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.college.admission.entity.ReviewRecord;
import com.college.admission.repository.ReviewRecordRepository;

@RestController
@RequestMapping("/reviews")
@RequiredArgsConstructor
public class ReviewRecordController {

    private final ReviewRecordRepository repository;

    @PostMapping
    public ReviewRecord create(@RequestBody ReviewRecord review) {
        return repository.save(review);
    }

    @GetMapping
    public List<ReviewRecord> getAll() {
        return repository.findAll();
    }
}
