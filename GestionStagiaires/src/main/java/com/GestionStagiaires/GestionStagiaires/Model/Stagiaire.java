package com.GestionStagiaires.GestionStagiaires.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@AllArgsConstructor
@Setter
@Getter
public class Stagiaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long stagiaireId;
    private String nom;
    private String prenom;
    private String cin;
    private String etablissement;
    private String filiere;
    private String adresse;
    private String email;
    private String telephone;
    private Date dateNaissance;
    private String sujetDemande;
    private Date dateDemande;

    @OneToMany(mappedBy = "stagiaire", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Absence> absences;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "stage_id")
    private Stage stage;
}