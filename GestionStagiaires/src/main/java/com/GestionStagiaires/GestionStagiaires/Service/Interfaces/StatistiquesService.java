package com.GestionStagiaires.GestionStagiaires.Service.Interfaces;

public interface StatistiquesService {
    Long getNombreStagiairesNouveaux();
    Long getNombreStagiairesEnCours();
    Long getNombreStagiairesEnArchive();
    Long getNombreStagesAffectes();
    Long getNombreStagesNonAffectes();
    Long getNombreEncadrantsAffectes();
    Long getNombreEncadrantsNonAffectes();
}