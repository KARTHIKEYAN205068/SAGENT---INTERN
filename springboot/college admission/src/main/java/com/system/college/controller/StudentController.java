package com.college.admission.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long stuId;

    private String name;
    private String dob;

    @OneToOne
    @JoinColumn(name = "log_id")
    private Login login;
}
