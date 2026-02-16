package com.college.admission.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.college.admission.entity.Officer;

public interface OfficerRepository extends JpaRepository<Officer, Long> {
}
