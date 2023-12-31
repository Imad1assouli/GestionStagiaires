package com.GestionStagiaires.GestionStagiaires.Service.Implementations;

import com.GestionStagiaires.GestionStagiaires.Enum.EncadrantType;
import com.GestionStagiaires.GestionStagiaires.Enum.StageStatus;
import com.GestionStagiaires.GestionStagiaires.Enum.StageType;
import com.GestionStagiaires.GestionStagiaires.Enum.StagiaireStatus;
import com.GestionStagiaires.GestionStagiaires.Model.Encadrant;
import com.GestionStagiaires.GestionStagiaires.Model.Stage;
import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import com.GestionStagiaires.GestionStagiaires.Repository.EncadrantRepository;
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
    private EncadrantRepository encadrantRepository;

    public StageServiceImpl(StageRepository stageRepository,StagiaireRepository stagiaireRepository,EncadrantRepository encadrantRepository){
        this.stageRepository=stageRepository;
        this.stagiaireRepository=stagiaireRepository;
        this.encadrantRepository=encadrantRepository;
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

    public void updateStage(Long stageId ,Stage updatedStage) {
        Optional<Stage> optionalStage = stageRepository.findById(stageId);
        if (optionalStage.isPresent()) {
            Stage existingStage = optionalStage.get();
            existingStage.setDescription(updatedStage.getDescription());
            existingStage.setStatus(updatedStage.getStatus());
            existingStage.setEncadrant(updatedStage.getEncadrant());
            existingStage.setType(updatedStage.getType());
            existingStage.setStartDate(updatedStage.getStartDate());
            existingStage.setEndDate(updatedStage.getEndDate());
            existingStage.setDivision(updatedStage.getDivision());
            existingStage.setSujet(updatedStage.getSujet());
            stageRepository.save(existingStage);

        } else {
            log.error("Stage introuvable.");

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




    @Override
    public void affecterStageAStagiaire(Long stageId, Long stagiaireId) {
        Optional<Stage> stageOptional = stageRepository.findById(stageId);
        Optional<Stagiaire> stagiaireOptional = stagiaireRepository.findById(stagiaireId);

        if (stageOptional.isPresent() && stagiaireOptional.isPresent()) {
            Stage stage = stageOptional.get();
            Stagiaire stagiaire = stagiaireOptional.get();
            stage.getStagiaires().add(stagiaire);
            stagiaire.setStage(stage);
            stagiaire.setSujetDemande(stage.getSujet());
            stagiaire.setStagiaireStatus(StagiaireStatus.STAGIAIRE);
            stagiaireRepository.save(stagiaire);

            stage.setType(StageType.Affecte);
            stageRepository.save(stage);

            log.info("Stagiaire avec ID " + stagiaireId + " affecté au stage avec ID " + stageId);
        } else {
            log.error("Aucun stage trouvé avec l'ID : " + stageId + " ou aucun stagiaire trouvé avec l'ID : " + stagiaireId);

        }
    }
    @Override
    public void affecterStageAEnacdrant(Long stageId, Long encadrantId) {
        Optional<Stage> stageOptional = stageRepository.findById(stageId);
        Optional<Encadrant> encadrantOptional = encadrantRepository.findById(encadrantId);

        if (stageOptional.isPresent() && encadrantOptional.isPresent()) {
            Stage stage = stageOptional.get();
            Encadrant encadrant = encadrantOptional.get();
            stage.setEncadrant(encadrant);
            encadrant.getStagesEncadres().add(stage);
            encadrant.setEncadrantType(EncadrantType.Affecte);
            encadrantRepository.save(encadrant);
            stageRepository.save(stage);

            log.info("encadtant avec ID " + encadrantId + " affecté au stage avec ID " + stageId);
        } else {
            log.error("Aucun stage trouvé avec l'ID : " + stageId + " ou aucun encadrant trouvé avec l'ID : " + encadrantId);

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
    @Override
    public Optional<Encadrant> getEncadrantOfStage(Long stageId) {
        return stageRepository.findEncadrantByStageId(stageId);
    }

}
