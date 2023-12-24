package com.GestionStagiaires.GestionStagiaires.Service.Implementations;

import com.GestionStagiaires.GestionStagiaires.Enum.StagiaireStatus;
import com.GestionStagiaires.GestionStagiaires.Model.Stage;
import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import com.GestionStagiaires.GestionStagiaires.Repository.StageRepository;
import com.GestionStagiaires.GestionStagiaires.Repository.StagiaireRepository;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.StagiaireService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class StagiaireServiceImpl implements StagiaireService {

    private StagiaireRepository stagiaireRepository;
    private StageRepository stageRepository;

    public StagiaireServiceImpl (StagiaireRepository stagiaireRepository,StageRepository stageRepository){
        this.stagiaireRepository=stagiaireRepository;
        this.stageRepository=stageRepository;
    }

    /**
     * @param stagiaire
     */
    @Override
    public void saveStagiaire(Stagiaire stagiaire) {
        try {
            stagiaireRepository.save(stagiaire);
            log.info("Stagiaire creé avec succés");
        } catch (Exception e) {
            throw new RuntimeException("Error saving stagiaire: " + e.getMessage(), e);
        }
    }


    @Override
    public void demandeStage(Long stageId, Stagiaire stagiaire) {

        Optional<Stage> stage = stageRepository.findById(stageId);
        if (stage.isPresent()) {
            stagiaire.setStage(stage.get());
            stagiaire.setStagiaireStatus(StagiaireStatus.CANDIDAT);
            stagiaireRepository.save(stagiaire);
            log.info("Demande de stage enregistrée avec succès.");
        } else {
            log.warn("Aucun stage trouvé avec l'ID " + stageId);
            throw new NotFoundException("Stage non trouvé avec l'ID " + stageId);
        }
    }

    /**
     * @param stagiaireId
     * @return
     */
    @Override
    public Stagiaire getStagiaireById(Long stagiaireId) {
      Optional<Stagiaire> stagiaire= stagiaireRepository.findById(stagiaireId);
        if(stagiaire.isPresent()){
            log.info("Stagiaire trouvé avec l ' ID "+ stagiaireId );
            return stagiaire.get();
        }
        else{
            log.warn("Aucun Stagiaire trouvé avec l'ID " + stagiaireId);
            throw new NotFoundException("Stagiaire non trouvé avec l'ID " + stagiaireId);
        }
    }

    /**
     * @return
     */
    @Override
    public List<Stagiaire> getAllStagiaires() {
        List<Stagiaire> listeStagiaires =stagiaireRepository.findByStagiaireStatus(StagiaireStatus.STAGIAIRE);
        if (!listeStagiaires.isEmpty()){
            log.info("Liste des stagiaire trouvé avec succés ");
            return listeStagiaires;
        }
        else {
            log.warn("Aucun Stagiaire trouvé ");
        }
        return Collections.emptyList();
    }
    @Override
    public List<Stagiaire> getAllCandidats() {
        List<Stagiaire> listeStagiaires =stagiaireRepository.findByStagiaireStatus(StagiaireStatus.CANDIDAT);
        if (!listeStagiaires.isEmpty()){
            log.info("Liste des Candidats trouvé avec succés ");
            return listeStagiaires;
        }
        else {
            log.warn("Aucun Candidats trouvé ");
        }
        return Collections.emptyList();
    }

    @Override
    public List<Stagiaire> getAllCandidatsStage(Long stageId) {
        List<Stagiaire> candidats = stagiaireRepository.findByStageIdAndStagiaireStatus(stageId, StagiaireStatus.CANDIDAT);
        if (!candidats.isEmpty()) {
            log.info("Liste des candidats pour le stage avec l'ID {} trouvée avec succès", stageId);
            return candidats;
        } else {
            log.warn("Aucun candidat trouvé pour le stage avec l'ID {}", stageId);
            return Collections.emptyList();
        }
    }

    @Override
    public List<Stagiaire> getAllStagiairesStage(Long stageId) {
        List<Stagiaire> stagiaires = stagiaireRepository.findByStageIdAndStagiaireStatus(stageId, StagiaireStatus.STAGIAIRE);
        if (!stagiaires.isEmpty()) {
            log.info("Liste des stagiaires pour le stage avec l'ID {} trouvée avec succès", stageId);
            return stagiaires;
        } else {
            log.warn("Aucun stagiaire trouvé pour le stage avec l'ID {}", stageId);
            return Collections.emptyList();
        }
    }

    /**
     * @param stagiaireId
     */
    @Override
    public void deleteStagiaire(Long stagiaireId) {
        try {
            stagiaireRepository.deleteById(stagiaireId);
            log.info("Stagiaire supprimé avec succés");
        } catch (Exception e) {
            throw new RuntimeException("Error deleting stagiaire: " + e.getMessage(), e);
        }
    }

    /**
     * @param nom
     * @return
     */
    @Override
    public List<Stagiaire> getStagiairesByNom(String nom) {
        List<Stagiaire> listeStagiaires =stagiaireRepository.findByNom(nom);
        if (!listeStagiaires.isEmpty()){
            log.info("Liste des stagiaire avec le nom "+nom +" trouvé avec succés ");
            return listeStagiaires;
        }
        else {
            log.warn("Aucun Stagiaire trouvé avec le nom "+nom);
        }
        return Collections.emptyList();
    }

    /**
     * @param filiere
     * @return
     */
    @Override
    public List<Stagiaire> getStagiairesByFiliere(String filiere) {
        List<Stagiaire> listeStagiaires =stagiaireRepository.findByFiliere(filiere);
        if (!listeStagiaires.isEmpty()){
            log.info("Liste des stagiaire dans la filiére "+filiere +" trouvé avec succés ");
            return listeStagiaires;
        }
        else {
            log.warn("Aucun Stagiaire trouvé dans la filiére "+filiere);
        }
        return Collections.emptyList();
    }

    /**
     * @param etablissement
     * @return
     */
    @Override
    public List<Stagiaire> getStagiairesByEtablissement(String etablissement) {
        List<Stagiaire> listeStagiaires =stagiaireRepository.findByEtablissement(etablissement);
        if (!listeStagiaires.isEmpty()){
            log.info("Liste des stagiaire dans l' établissement "+etablissement +" trouvé avec succés ");
            return listeStagiaires;
        }
        else {
            log.warn("Aucun Stagiaire trouvé dans l' établissement "+etablissement);
        }
        return Collections.emptyList();
    }

    /**
     *@param stagiaireId
     * @return stageSujet
     */

    @Override
    public String getStageNameByStagiaireId(Long stagiaireId){
        Optional<Stagiaire> stagiaire = stagiaireRepository.findById(stagiaireId);

        if (stagiaire.isPresent()  && stagiaire.get().getStage() != null) {
            Stage stage = stagiaire.get().getStage();
            log.info("Stage trouvé pour stagiaire avec id "+stagiaireId);
            return stage.getSujet();
        }

        return "Aucun stage trouvé pour ce stagiaire.";
    }
    @Override
    public void updateStagiaire(Long stagiaireId, Stagiaire newStagiaire) {
        Optional<Stagiaire> oldStagiaire = stagiaireRepository.findById(stagiaireId);
        if (oldStagiaire.isPresent()) {
            Stagiaire existingStagiaire = oldStagiaire.get();


            existingStagiaire.setNom(newStagiaire.getNom());
            existingStagiaire.setPrenom(newStagiaire.getPrenom());
            existingStagiaire.setCin(newStagiaire.getCin());
            existingStagiaire.setEtablissement(newStagiaire.getEtablissement());
            existingStagiaire.setFiliere(newStagiaire.getFiliere());
            existingStagiaire.setAdresse(newStagiaire.getAdresse());
            existingStagiaire.setEmail(newStagiaire.getEmail());
            existingStagiaire.setTelephone(newStagiaire.getTelephone());
            existingStagiaire.setDateNaissance(newStagiaire.getDateNaissance());
            stagiaireRepository.save(existingStagiaire);
            log.info("Stagiaire modifié avec succés");
        }
        else {
            log.warn("aucun Stagiaire existant avec cet ID "+stagiaireId);
        }
    }



}
