package com.GestionStagiaires.GestionStagiaires.Model;

import com.GestionStagiaires.GestionStagiaires.Enum.StageStatus;
import com.GestionStagiaires.GestionStagiaires.Enum.StageType;
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
public class Stage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long stageId;
    private String sujet;
    private String description;
    @Temporal(TemporalType.DATE)
    private Date startDate;
    @Temporal(TemporalType.DATE)
    private Date endDate;
    private String division;
    @Enumerated(EnumType.STRING)
    private StageType type; // Enum for Affecté, Non Affecté
    @Enumerated(EnumType.STRING)
    private StageStatus status;
    @ManyToOne
    @JoinColumn(name = "encadrant_id")
    private Encadrant encadrant;

    @OneToMany(mappedBy = "stage", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Stagiaire> stagiaires;

    @OneToMany(mappedBy = "stage", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Absence> absences;

}