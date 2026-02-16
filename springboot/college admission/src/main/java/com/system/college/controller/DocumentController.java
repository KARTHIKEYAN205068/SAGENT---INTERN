package com.college.admission.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.college.admission.entity.Document;
import com.college.admission.repository.DocumentRepository;

@RestController
@RequestMapping("/documents")
@RequiredArgsConstructor
public class DocumentController {

    private final DocumentRepository repository;

    @PostMapping
    public Document create(@RequestBody Document doc) {
        return repository.save(doc);
    }

    @GetMapping
    public List<Document> getAll() {
        return repository.findAll();
    }
}
