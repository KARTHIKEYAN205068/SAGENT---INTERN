package com.college.admission.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.college.admission.entity.Payment;
import com.college.admission.repository.PaymentRepository;

@RestController
@RequestMapping("/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentRepository repository;

    @PostMapping
    public Payment create(@RequestBody Payment payment) {
        return repository.save(payment);
    }

    @GetMapping
    public List<Payment> getAll() {
        return repository.findAll();
    }
}
