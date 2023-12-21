package com.GestionStagiaires.GestionStagiaires.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
@Entity
@AllArgsConstructor
@Setter
@Getter
@NoArgsConstructor
public class Etudiant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long etudiantId;
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

}
