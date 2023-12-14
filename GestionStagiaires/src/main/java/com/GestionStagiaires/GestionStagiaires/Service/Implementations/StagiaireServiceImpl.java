package com.GestionStagiaires.GestionStagiaires.Service.Implementations;

import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.StagiaireService;

import java.util.Date;
import java.util.List;

public class StagiaireServiceImpl implements StagiaireService {
    /**
     * @param stagiaire
     * @return
     */
    @Override
    public Stagiaire saveStagiaire(Stagiaire stagiaire) {
        return null;
    }

    /**
     * @param stagiaireId
     * @return
     */
    @Override
    public Stagiaire getStagiaireById(Long stagiaireId) {
        return null;
    }

    /**
     * @return
     */
    @Override
    public List<Stagiaire> getAllStagiaires() {
        return null;
    }

    /**
     * @param stagiaireId
     */
    @Override
    public void deleteStagiaire(Long stagiaireId) {

    }

    /**
     * @param nom
     * @return
     */
    @Override
    public List<Stagiaire> getStagiairesByNom(String nom) {
        return null;
    }

    /**
     * @param filiere
     * @return
     */
    @Override
    public List<Stagiaire> getStagiairesByFiliere(String filiere) {
        return null;
    }

    /**
     * @param etablissement
     * @return
     */
    @Override
    public List<Stagiaire> getStagiairesByEtablissement(String etablissement) {
        return null;
    }

    /**
     * @param startDate
     * @param endDate
     * @return
     */
    @Override
    public List<Stagiaire> getStagiairesByDateNaissanceBetween(Date startDate, Date endDate) {
        return null;
    }
}
