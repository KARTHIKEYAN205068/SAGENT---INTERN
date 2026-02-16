package com.library.management.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    private String name;
    private String email;
    private String password;
    private String address;
    private String phoneNo;

    @OneToMany(mappedBy = "member")
    private List<Borrow> borrows;

    @OneToMany(mappedBy = "member")
    private List<Notification> notifications;
}
