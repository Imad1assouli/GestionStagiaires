package com.GestionStagiaires.GestionStagiaires.Controller;

import com.GestionStagiaires.GestionStagiaires.Enum.EncadrantType;
import com.GestionStagiaires.GestionStagiaires.Enum.StageStatus;
import com.GestionStagiaires.GestionStagiaires.Model.*;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.*;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/chefDrh")
public class ChefDRHController {
    private final StagiaireService stagiaireService;
    private final StageService stageService;
    private final EncadrantService encadrantService;
    private final AbsenceService absenceService;
    private final UserService userService;

    public ChefDRHController(StagiaireService stagiaireService,
                             StageService stageService,
                             EncadrantService encadrantService,
                             AbsenceService absenceService, UserService userService) {
        this.stagiaireService = stagiaireService;
        this.stageService = stageService;
        this.encadrantService = encadrantService;
        this.absenceService = absenceService;
        this.userService = userService;
    }

    // gestion stage
    @GetMapping("/stages/count")
    public int getStageCount() {
        return stageService.getAllStages().size();
    }

    @PostMapping("/stages")
    public void saveStage(@RequestBody Stage stage) {
        stageService.saveStage(stage);
    }

    @PutMapping("/stages/{stageId}")
    public void updateStage(@PathVariable Long stageId, @RequestBody Stage updatedStage) {
        stageService.updateStage(stageId,updatedStage);
    }

    @GetMapping("/stages")
    public List<Stage> listerStages() {
        return stageService.getAllStages();
    }

    @GetMapping("/stages/{stageId}")
    public Stage getStage(@PathVariable Long stageId) {
        return stageService.getStageById(stageId);
    }
    @PostMapping("/stagiaires")
    public void saveStagiaire(@RequestBody Stagiaire stagiaire) {
        stagiaireService.saveStagiaire(stagiaire);
    }

    @GetMapping("/stages/statut/{status}")
    public List<Stage> getStagesParStatut(@PathVariable StageStatus status) {
        return stageService.getStagesByStatus(status);
    }

    @GetMapping("/stages/division/{division}")
    public List<Stage> getStagesParDivision(@PathVariable String division) {
        return stageService.getStagesByDivision(division);
    }


    // gestion Stagiaires
    @GetMapping("/stagiaires/count")
    public int getStagiaireCount() {
        return stagiaireService.getAllStagiaires().size();
    }
    @GetMapping("/stagiaires")
    public List<Stagiaire> listerStagiaires() {
        return stagiaireService.getAllStagiaires();
    }
    @GetMapping("/candidats")
    public List<Stagiaire> getAllCandidats() {
        return stagiaireService.getAllCandidats();
    }
    @GetMapping("/candidats/stage/{stageId}")
    public List<Stagiaire> getAllCandidatsStage(@PathVariable Long stageId) {
        return stagiaireService.getAllCandidatsStage(stageId);
    }

    @GetMapping("/stagiaires/stage/{stageId}")
    public List<Stagiaire> getAllStagiairesStage(@PathVariable Long stageId) {
        return stagiaireService.getAllStagiairesStage(stageId);
    }

    @PutMapping("/stagiaires/update")
    public void updateStagiaire(@RequestParam Long stagiaireId,@RequestBody Stagiaire stagiaire){
        stagiaireService.updateStagiaire(stagiaireId,stagiaire);
    }

    @GetMapping("/stagiaires/{nom}")
    public List<Stagiaire> chercherStagiairesParNom(@PathVariable String nom) {
        return stagiaireService.getStagiairesByNom(nom);
    }

    // gestiun users
    @GetMapping("/users/count")
    public int getUserCount() {
        return userService.getAllUsers().size();
    }

    // gestion encadrants
    @PostMapping("/encadrants")
    public void saveEncadrant(@RequestBody Encadrant encadrant) {
        encadrantService.saveEncadrant(encadrant);
    }
    @PutMapping("/encadrants/{encadrantId}")
    public void updateEncadrant(@PathVariable Long encadrantId, @RequestBody Encadrant updatedEncadrant) {
        encadrantService.updateEncadrant(encadrantId,updatedEncadrant);
    }
    @GetMapping("/encadrants/count")
    public int getEncadrantCount() {
        return encadrantService.getAllEncadrants().size();
    }
    @GetMapping("/encadrants")
    public List<Encadrant> listerEncadrants() {
        return encadrantService.getAllEncadrants();
    }

    @DeleteMapping("/encadrants/{encadrantId}")
    public void supprimerEncadrant(@PathVariable Long encadrantId) {
        encadrantService.deleteEncadrant(encadrantId);
    }

    @GetMapping("/encadrants/email/{email}")
    public List<Encadrant> chercherEncadrantsParEmail(@PathVariable String email) {
        return encadrantService.getEncadrantsByEmail(email);
    }

    @GetMapping("/encadrants/type/{encadrantType}")
    public List<Encadrant> chercherEncadrantsParType(@PathVariable EncadrantType encadrantType) {
        return encadrantService.getEncadrantsByType(encadrantType);
    }

    //  Absence
    @DeleteMapping("/absences/{absenceId}")
    public void supprimerAbsence(@PathVariable Long absenceId) {
        absenceService.deleteAbsence(absenceId);
    }

    //  mark Absence for a Stagiaire
    @PostMapping("/absences")
    public void marquerAbsence(@RequestParam Long stagiaireId, @RequestParam Date startDate) {
        absenceService.marquerAbsence(stagiaireId, startDate);
    }
    //affecter stage
    @PostMapping("/stages/affecter")
    public void affecterStageAStagiaire(@RequestParam Long stageId, @RequestParam Long stagiaireId) {
        stageService.affecterStageAStagiaire(stageId, stagiaireId);
    }



}
