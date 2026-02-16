package com.college.admission.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.college.admission.entity.AppStatus;

public interface AppStatusRepository extends JpaRepository<AppStatus, Long> {
}
