package com.college.admission.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long payId;

    private Double fee;
    private String transId;
    private LocalDate payDate;
    private String status;

    @ManyToOne
    @JoinColumn(name = "app_id")
    private Application application;
}
