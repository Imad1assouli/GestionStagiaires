package com.GestionStagiaires.GestionStagiaires.Model;

import com.GestionStagiaires.GestionStagiaires.Enum.EncadrantType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Encadrant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long encadrantId;
    private String nom;
    private String prenom;
    private String email;
    private String telephone;
    @Enumerated(EnumType.STRING)
    private EncadrantType encadrantType;

    @OneToMany(mappedBy = "encadrant")
    private List<Stage> stagesEncadres;
}