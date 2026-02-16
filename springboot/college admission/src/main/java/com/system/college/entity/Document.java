package com.college.admission.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long docId;

    private String type;
    private String docUpload;

    @ManyToOne
    @JoinColumn(name = "app_id")
    private Application application;
}
