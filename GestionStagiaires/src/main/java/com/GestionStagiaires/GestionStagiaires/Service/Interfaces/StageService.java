package com.GestionStagiaires.GestionStagiaires.Service.Interfaces;

import com.GestionStagiaires.GestionStagiaires.Enum.StageStatus;
import com.GestionStagiaires.GestionStagiaires.Model.Stage;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public interface StageService {

    Stage saveStage(Stage stage);
    Stage getStageById(Long stageId);
    List<Stage> getAllStages();
    void deleteStage(Long stageId);
    void affecterStageAStagiaire(Long stageId, Long stagiaireId);
    List<Stage> getStagesByEncadrant(Long encadrantId);
    List<Stage> getStagesByStatus(StageStatus status);
    List<Stage> getStagesByDateBetween(Date startDate, Date endDate);
    List<Stage> getStagesByDivision(String division);
}