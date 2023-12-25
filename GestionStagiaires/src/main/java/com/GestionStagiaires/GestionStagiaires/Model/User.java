package com.GestionStagiaires.GestionStagiaires.Model;

import com.GestionStagiaires.GestionStagiaires.Enum.UserType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String nom;
    private String prenom;
    private String username;
    private String password;

    @Enumerated(EnumType.STRING)
    private UserType userType;
}
