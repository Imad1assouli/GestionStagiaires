package com.GestionStagiaires.GestionStagiaires.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@AllArgsConstructor
@Setter
@Getter
public class Absence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date dateAbsence;

    @ManyToOne
    @JoinColumn(name = "stagiaire_id")
    private Stagiaire stagiaire;

    public Absence(Date dateAbsence,Stagiaire stagiaire ){
        this.dateAbsence=dateAbsence;
        this.stagiaire=stagiaire;
    }
}