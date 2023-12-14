package com.GestionStagiaires.GestionStagiaires.Service.Implementations;

import com.GestionStagiaires.GestionStagiaires.Enum.StageStatus;
import com.GestionStagiaires.GestionStagiaires.Model.Stage;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.StageService;

import java.util.Date;
import java.util.List;

public class StageServiceImpl implements StageService {
    /**
     * @param stage
     * @return
     */
    @Override
    public Stage saveStage(Stage stage) {
        return null;
    }

    /**
     * @param stageId
     * @return
     */
    @Override
    public Stage getStageById(Long stageId) {
        return null;
    }

    /**
     * @return
     */
    @Override
    public List<Stage> getAllStages() {
        return null;
    }

    /**
     * @param stageId
     */
    @Override
    public void deleteStage(Long stageId) {

    }

    /**
     * @param stageId
     * @param stagiaireId
     */
    @Override
    public void affecterStageAStagiaire(Long stageId, Long stagiaireId) {

    }

    /**
     * @param encadrantId
     * @return
     */
    @Override
    public List<Stage> getStagesByEncadrant(Long encadrantId) {
        return null;
    }

    /**
     * @param status
     * @return
     */
    @Override
    public List<Stage> getStagesByStatus(StageStatus status) {
        return null;
    }

    /**
     * @param startDate
     * @param endDate
     * @return
     */
    @Override
    public List<Stage> getStagesByDateBetween(Date startDate, Date endDate) {
        return null;
    }

    /**
     * @param division
     * @return
     */
    @Override
    public List<Stage> getStagesByDivision(String division) {
        return null;
    }
}
