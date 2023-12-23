package com.GestionStagiaires.GestionStagiaires.Service.Implementations;

import com.GestionStagiaires.GestionStagiaires.Enum.StageStatus;
import com.GestionStagiaires.GestionStagiaires.Enum.StageType;
import com.GestionStagiaires.GestionStagiaires.Model.Stage;
import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import com.GestionStagiaires.GestionStagiaires.Repository.StageRepository;
import com.GestionStagiaires.GestionStagiaires.Repository.StagiaireRepository;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.StageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@Slf4j
public class StageServiceImpl implements StageService {
    private StageRepository stageRepository;
    private StagiaireRepository stagiaireRepository;

    public StageServiceImpl(StageRepository stageRepository,StagiaireRepository stagiaireRepository){
        this.stageRepository=stageRepository;
        this.stagiaireRepository=stagiaireRepository;
    }
    /**
     * @param stage
     */
    @Override
    public void saveStage(Stage stage) {
        try {
            stageRepository.save(stage);
            log.info("Stage creé avec succés");
        } catch (Exception e) {
            throw new RuntimeException("Error saving stage: " + e.getMessage(), e);
        }
    }

    /**
     * @param stageId
     * @return
     */
    @Override
    public Stage getStageById(Long stageId) {
        Optional<Stage> optionalStage = stageRepository.findById(stageId);
        if (optionalStage.isPresent()) {
            log.info("Stage trouvé avec l'ID : " + stageId);
            return optionalStage.get();
        } else {
            log.error("Aucun stage trouvé avec l'ID : " + stageId);
            return null;
        }
    }

    /**
     * @return
     */
    @Override
    public List<Stage> getAllStages() {
        List<Stage> stages = stageRepository.findAll();
        if (!stages.isEmpty()) {
            log.info("Liste récupérée avec succès.");
            return stages;
        } else {
            log.warn("Aucun stage trouvée dans la liste.");
        }
        return Collections.emptyList();

    }


    /**
     * @param stageId
     */
    @Override
    public void deleteStage(Long stageId) {
        try {
            Optional<Stage> stageOptional = stageRepository.findById(stageId);
            if (stageOptional.isPresent()) {
                stageRepository.deleteById(stageId);
                log.info("Stage supprimé avec succès");
            } else {
                log.warn("Aucun stage trouvé avec l'ID : " + stageId);
            }
        } catch (Exception e) {
            log.error("Erreur lors de la suppression du stage avec l'ID : " + stageId, e);
            throw new RuntimeException("Erreur lors de la suppression du stage avec l'ID : " + stageId, e);
        }
    }



    /**
     * @param stageId
     * @param stagiaireId
     */
    @Override
    public void affecterStageAStagiaire(Long stageId, Long stagiaireId) {
        Optional<Stage> stageOptional = stageRepository.findById(stageId);
        Optional<Stagiaire> stagiaireOptional = stagiaireRepository.findById(stagiaireId);

        if (stageOptional.isPresent() && stagiaireOptional.isPresent()) {
            Stage stage = stageOptional.get();
            Stagiaire stagiaire = stagiaireOptional.get();

            stage.setType(StageType.Affecte);
            stageRepository.save(stage);

            log.info("Stagiaire avec ID " + stagiaireId + " affecté au stage avec ID " + stageId);
        } else {
            log.error("Aucun stage trouvé avec l'ID : " + stageId + " ou aucun stagiaire trouvé avec l'ID : " + stagiaireId);
        }
    }

    /**
     * @param encadrantId
     * @return
     */
    @Override
    public List<Stage> getStagesByEncadrant(Long encadrantId) {
        List<Stage> stages = stageRepository.findByEncadrant_EncadrantId(encadrantId);
        if (!stages.isEmpty()) {

            log.info("Liste de stages récupérée pour l'encadrant avec l'ID : " + encadrantId);
            return stages;
        } else {
            log.warn("Aucun stage trouvé pour l'encadrant avec l'ID : " + encadrantId);
        }
        return Collections.emptyList();

    }


    /**
     * @param status
     * @return
     */
    @Override
    public List<Stage> getStagesByStatus(StageStatus status) {
        List<Stage> stages = stageRepository.findByStatus(status);
        if (!stages.isEmpty()) {
            log.info("Liste de stages récupérée pour le statut : " + status);
            return stages;
        } else {
            log.warn("Aucun stage trouvé pour le statut : " + status);
        }
        return Collections.emptyList();

    }

    /**
     * @param startDate
     * @param endDate
     * @return
     */
    @Override
    public List<Stage> getStagesByDateBetween(Date startDate, Date endDate) {
        List<Stage> stages = stageRepository.findByStartDateBetween(startDate, endDate);

        if (!stages.isEmpty()) {
            log.info("Liste de stages récupérée pour la plage de dates : " + startDate + " à " + endDate);
            return stages;
        } else {
            log.warn("Aucun stage trouvé pour la plage de dates : " + startDate + " à " + endDate);
        }
        return Collections.emptyList();

    }


    /**
     * @param division
     * @return
     */
    @Override
    public List<Stage> getStagesByDivision(String division) {
        List<Stage> stages = stageRepository.findByDivision(division);

        if (!stages.isEmpty()) {
            log.info("Liste de stages récupérée pour la division : " + division);
            return stages;
        } else {
            log.warn("Aucun stage trouvé pour la division : " + division);
        }
        return Collections.emptyList();

    }
}
