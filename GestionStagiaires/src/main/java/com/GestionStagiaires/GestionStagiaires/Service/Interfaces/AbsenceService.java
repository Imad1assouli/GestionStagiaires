package com.GestionStagiaires.GestionStagiaires.Service.Interfaces;

import com.GestionStagiaires.GestionStagiaires.Model.Absence;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public interface AbsenceService  {
    Absence saveAbsence(Absence absence);
    Absence getAbsenceById(Long absenceId);
    List<Absence> getAllAbsences();
    void deleteAbsence(Long absenceId);
    void marquerAbsence(Long stagiaireId, Date startDate, Date endDate);
    List<Absence> getAbsencesByStagiaire(Long stagiaireId);
    List<Absence> getAbsencesByDateBetween(Date startDate, Date endDate);

}
