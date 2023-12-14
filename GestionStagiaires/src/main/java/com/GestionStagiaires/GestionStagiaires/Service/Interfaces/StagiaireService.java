package com.GestionStagiaires.GestionStagiaires.Service.Interfaces;

import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public interface StagiaireService {
    Stagiaire saveStagiaire(Stagiaire stagiaire);
    Stagiaire getStagiaireById(Long stagiaireId);
    List<Stagiaire> getAllStagiaires();
    void deleteStagiaire(Long stagiaireId);
    List<Stagiaire> getStagiairesByNom(String nom);
    List<Stagiaire> getStagiairesByFiliere(String filiere);
    List<Stagiaire> getStagiairesByEtablissement(String etablissement);
    List<Stagiaire> getStagiairesByDateNaissanceBetween(Date startDate, Date endDate);
}
