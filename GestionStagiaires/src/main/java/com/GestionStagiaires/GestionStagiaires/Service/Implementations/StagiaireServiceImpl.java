package com.GestionStagiaires.GestionStagiaires.Service.Implementations;

import com.GestionStagiaires.GestionStagiaires.Model.Stage;
import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import com.GestionStagiaires.GestionStagiaires.Repository.StageRepository;
import com.GestionStagiaires.GestionStagiaires.Repository.StagiaireRepository;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.StagiaireService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class StagiaireServiceImpl implements StagiaireService {

    private StagiaireRepository stagiaireRepository;

    public StagiaireServiceImpl (StagiaireRepository stagiaireRepository){
        this.stagiaireRepository=stagiaireRepository;
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
            log.warn("Aucun Stagiaire trouvé avec l ' ID "+ stagiaireId);
        }
        return null;
    }

    /**
     * @return
     */
    @Override
    public List<Stagiaire> getAllStagiaires() {
        List<Stagiaire> listeStagiaires =stagiaireRepository.findAll();
        if (!listeStagiaires.isEmpty()){
            log.info("Liste des stagiaire trouvé avec succés ");
            return listeStagiaires;
        }
        else {
            log.warn("Aucun Stagiaire trouvé ");
        }
        return Collections.emptyList();
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

}
