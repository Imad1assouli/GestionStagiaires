package com.GestionStagiaires.GestionStagiaires.Service.Implementations;

import com.GestionStagiaires.GestionStagiaires.Model.Absence;
import com.GestionStagiaires.GestionStagiaires.Model.Stage;
import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import com.GestionStagiaires.GestionStagiaires.Repository.AbsenceRepository;
import com.GestionStagiaires.GestionStagiaires.Repository.StagiaireRepository;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.AbsenceService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class AbsenceServiceImpl implements AbsenceService {

    private AbsenceRepository absenceRepository;
    private StagiaireRepository stagiaireRepository;


    public AbsenceServiceImpl(AbsenceRepository absenceRepository, StagiaireRepository stagiaireRepository) {
        this.absenceRepository = absenceRepository;
        this.stagiaireRepository = stagiaireRepository;
    }

    /**
     * @param absence
     */
    @Override
    public void saveAbsence(Absence absence) {
        try {
            absenceRepository.save(absence);
            log.info("Absence sauvegardée avec succés");
        } catch (Exception e) {
            throw new RuntimeException("Error saving absence: " + e.getMessage(), e);
        }

    }

    /**
     * @param absenceId
     * @return absence
     */
    @Override
    public Absence getAbsenceById(Long absenceId) {

        Optional<Absence> absence = absenceRepository.findById(absenceId);
        if (absence.isPresent()) {
            log.info("absence trouvée avec l ' ID " + absenceId);
            return absence.get();
        } else {
            log.warn("Aucune absence trouvé avec l ' ID " + absenceId);
        }

        return null;
    }

    /**
     * @return liste des absencses
     */
    @Override
    public List<Absence> getAllAbsences() {

        List<Absence> listeAbsence = absenceRepository.findAll();
        if (!listeAbsence.isEmpty()) {
            log.info("Liste des absences trouvé avec succés ");
            return listeAbsence;
        } else {
            log.warn("Aucun absence trouvée ");
        }
        return Collections.emptyList();
    }

    /**
     * @param absenceId
     */
    @Override
    public void deleteAbsence(Long absenceId) {

        try {
            absenceRepository.deleteById(absenceId);
            log.info("Absence supprimé avec succés");
        } catch (Exception e) {
            throw new RuntimeException("Error deleting absence: " + e.getMessage(), e);
        }

    }

    /**
     * @param stagiaireId
     * @param startDate
     */
    @Override
    public void marquerAbsence(Long stagiaireId, Date startDate) {
        Optional<Stagiaire> stagiaireOptional = stagiaireRepository.findById(stagiaireId);
        if (stagiaireOptional.isPresent()) {
            Absence absence = new Absence(startDate, stagiaireOptional.get());
            absenceRepository.save(absence);
            log.info("absence marquée avec succés");
        } else {
            log.error("aucun stagiaire avec l id " + stagiaireId);
        }

    }

    /**
     * @param stagiaireId
     * @return
     */
    @Override
    public List<Absence> getAbsencesByStagiaire(Long stagiaireId) {

        Optional<Stagiaire> stagiaireOptional = stagiaireRepository.findById(stagiaireId);
        if (stagiaireOptional.isPresent()) {
            Stagiaire stagiaire = stagiaireOptional.get();
            List<Absence> absences = stagiaire.getAbsences();
            log.info("Absences du stagiaire " + stagiaireId + " trouvées avec succès.");
            return absences;
        } else {
            log.warn("Aucun stagiaire trouvé avec l'ID " + stagiaireId);
        }

        return Collections.emptyList();
    }
}

