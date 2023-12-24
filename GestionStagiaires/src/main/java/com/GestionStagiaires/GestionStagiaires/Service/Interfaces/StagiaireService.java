package com.GestionStagiaires.GestionStagiaires.Service.Interfaces;

import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;


public interface StagiaireService {
    void saveStagiaire(Stagiaire stagiaire);
    void demandeStage(Long stageId,Stagiaire stagiaire);
    Stagiaire getStagiaireById(Long stagiaireId);
    List<Stagiaire> getAllStagiaires();
    List<Stagiaire> getAllCandidats();
    List<Stagiaire> getAllCandidatsStage(Long stageId);
    List<Stagiaire> getAllStagiairesStage(Long stageId);
    void deleteStagiaire(Long stagiaireId);
    List<Stagiaire> getStagiairesByNom(String nom);
    List<Stagiaire> getStagiairesByFiliere(String filiere);
    List<Stagiaire> getStagiairesByEtablissement(String etablissement);

    String getStageNameByStagiaireId(Long stagiaireId);


    void updateStagiaire(Long stagiaireId,Stagiaire stagiaire);


}
