package com.college.admission.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long appId;

    private String address;
    private Double percentage;

    @ManyToOne
    @JoinColumn(name = "stu_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "cou_id")
    private Course course;
}
