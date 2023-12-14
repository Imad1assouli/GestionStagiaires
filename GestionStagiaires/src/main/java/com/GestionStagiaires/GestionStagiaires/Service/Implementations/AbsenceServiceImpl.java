package com.GestionStagiaires.GestionStagiaires.Service.Implementations;

import com.GestionStagiaires.GestionStagiaires.Model.Absence;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.AbsenceService;

import java.util.Date;
import java.util.List;

public class AbsenceServiceImpl implements AbsenceService {
    /**
     * @param absence
     * @return
     */
    @Override
    public Absence saveAbsence(Absence absence) {
        return null;
    }

    /**
     * @param absenceId
     * @return
     */
    @Override
    public Absence getAbsenceById(Long absenceId) {
        return null;
    }

    /**
     * @return
     */
    @Override
    public List<Absence> getAllAbsences() {
        return null;
    }

    /**
     * @param absenceId
     */
    @Override
    public void deleteAbsence(Long absenceId) {

    }

    /**
     * @param stagiaireId
     * @param startDate
     * @param endDate
     */
    @Override
    public void marquerAbsence(Long stagiaireId, Date startDate, Date endDate) {

    }

    /**
     * @param stagiaireId
     * @return
     */
    @Override
    public List<Absence> getAbsencesByStagiaire(Long stagiaireId) {
        return null;
    }

    /**
     * @param startDate
     * @param endDate
     * @return
     */
    @Override
    public List<Absence> getAbsencesByDateBetween(Date startDate, Date endDate) {
        return null;
    }
}
