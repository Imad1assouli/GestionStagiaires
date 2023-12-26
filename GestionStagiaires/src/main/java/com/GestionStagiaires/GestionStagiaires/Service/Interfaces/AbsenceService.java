package com.GestionStagiaires.GestionStagiaires.Service.Interfaces;

import com.GestionStagiaires.GestionStagiaires.Model.Absence;
import com.GestionStagiaires.GestionStagiaires.Model.Stage;
import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;


public interface AbsenceService  {
    void saveAbsence(Absence absence);
    Absence getAbsenceById(Long absenceId);
    List<Absence> getAllAbsences();
    void deleteAbsence(Long absenceId);
    void marquerAbsence(Long stagiaireId, Absence absence);
    List<Absence> getAbsencesByStagiaire(Long stagiaireId);

}
