package com.college.admission.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.college.admission.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
