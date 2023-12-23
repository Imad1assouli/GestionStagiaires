package com.GestionStagiaires.GestionStagiaires.Model;

import jakarta.persistence.*;
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
@Inheritance (strategy = InheritanceType.TABLE_PER_CLASS)
public class Etudiant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "etudiant_seq")
    @SequenceGenerator(name = "etudiant_seq", allocationSize = 1)
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
