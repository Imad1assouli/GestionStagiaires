package com.GestionStagiaires.GestionStagiaires.Service.Interfaces;

import com.GestionStagiaires.GestionStagiaires.Enum.StageStatus;
import com.GestionStagiaires.GestionStagiaires.Enum.StageType;
import com.GestionStagiaires.GestionStagiaires.Model.Encadrant;
import com.GestionStagiaires.GestionStagiaires.Model.Stage;
import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;


public interface StageService {

    void saveStage(Stage stage);
    Stage getStageById(Long stageId);
    void updateStage(Long stageId,Stage stage);
    List<Stage> getAllStages();
    void deleteStage(Long stageId);
    void affecterStageAStagiaire(Long stageId, Long stagiaireId);
    void affecterStageAEnacdrant(Long stageId, Long encadrantId);
    List<Stage> getStagesByEncadrant(Long encadrantId);
    List<Stage> getStagesByStatus(StageStatus status);
    List<Stage> getStagesByDateBetween(Date startDate, Date endDate);
    List<Stage> getStagesByDivision(String division);
    Optional<Encadrant> getEncadrantOfStage(Long stageId);
}