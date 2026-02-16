package com.college.admission.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Officer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long offId;

    @OneToOne
    @JoinColumn(name = "log_id")
    private Login login;
}
