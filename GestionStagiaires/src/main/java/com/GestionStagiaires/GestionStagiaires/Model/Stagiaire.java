package com.GestionStagiaires.GestionStagiaires.Model;

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
@PrimaryKeyJoinColumn(name = "etudiant_id")
public class Stagiaire extends Etudiant {

    @OneToMany(mappedBy = "stagiaire", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Absence> absences;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "stage_id")
    private Stage stage;

    public Stagiaire (){
        super();
    }

}