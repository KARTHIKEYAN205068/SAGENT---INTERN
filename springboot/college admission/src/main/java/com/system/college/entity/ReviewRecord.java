package com.college.admission.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReviewRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long revId;

    @ManyToOne
    @JoinColumn(name = "app_id")
    private Application application;

    @ManyToOne
    @JoinColumn(name = "off_id")
    private Officer officer;
}
