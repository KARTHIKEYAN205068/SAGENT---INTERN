package com.college.admission.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.college.admission.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
