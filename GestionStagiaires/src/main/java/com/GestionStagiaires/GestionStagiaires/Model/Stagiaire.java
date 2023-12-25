package com.GestionStagiaires.GestionStagiaires.Model;

import com.GestionStagiaires.GestionStagiaires.Enum.StagiaireStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Setter
@Getter
@AllArgsConstructor
public class Stagiaire  {
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

    @Enumerated(EnumType.STRING)
    private StagiaireStatus stagiaireStatus;

    @OneToMany(mappedBy = "stagiaire", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Absence> absences;

    @ManyToOne()
    @JoinColumn(name = "stage_id")
    @JsonIgnore
    private Stage stage;

    public Stagiaire() {
        this.stagiaireStatus=StagiaireStatus.CANDIDAT;
    }

    public Stagiaire(String nom, String prenom, String cin, String etablissement, String filiere, String adresse, String email, String telephone, Date dateNaissance, String sujetDemande, Date dateDemande) {
        this.nom = nom;
        this.prenom = prenom;
        this.cin = cin;
        this.etablissement = etablissement;
        this.filiere = filiere;
        this.adresse = adresse;
        this.email = email;
        this.telephone = telephone;
        this.dateNaissance = dateNaissance;
        this.sujetDemande = sujetDemande;
        this.dateDemande = dateDemande;
        this.stagiaireStatus=StagiaireStatus.CANDIDAT;

    }
}
