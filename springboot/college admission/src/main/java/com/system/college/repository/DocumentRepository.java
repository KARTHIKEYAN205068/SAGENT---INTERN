package com.college.admission.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.college.admission.entity.Document;

public interface DocumentRepository extends JpaRepository<Document, Long> {
}
