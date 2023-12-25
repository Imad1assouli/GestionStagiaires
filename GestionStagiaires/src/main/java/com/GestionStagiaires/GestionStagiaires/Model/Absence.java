package com.GestionStagiaires.GestionStagiaires.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
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

    @ManyToOne
    @JoinColumn(name = "stage_id")
    private Stage stage;

    public Absence(Date dateAbsence, Stagiaire stagiaire) {
        this.dateAbsence = dateAbsence;
        this.stagiaire = stagiaire;
    }
}
