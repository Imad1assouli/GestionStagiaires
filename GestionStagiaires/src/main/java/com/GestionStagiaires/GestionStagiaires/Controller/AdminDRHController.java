package com.GestionStagiaires.GestionStagiaires.Controller;

import com.GestionStagiaires.GestionStagiaires.Model.Absence;
import com.GestionStagiaires.GestionStagiaires.Model.Stage;
import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import com.GestionStagiaires.GestionStagiaires.Model.User;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/adminDrh")
public class AdminDRHController {

    private final StagiaireService stagiaireService;
    private final StageService stageService;
    private final AbsenceService absenceService;
    private final UserService userService;
    private final EncadrantService encadrantService;

    @Autowired
    public AdminDRHController(StagiaireService stagiaireService, StageService stageService,
                              AbsenceService absenceService, UserService userService, EncadrantService encadrantService) {
        this.stageService = stageService;
        this.stagiaireService = stagiaireService;
        this.absenceService = absenceService;
        this.userService = userService;
        this.encadrantService = encadrantService;
    }

    @GetMapping("/stagiaires")
    public List<Stagiaire> getAllStagiaires() {
        return stagiaireService.getAllStagiaires();
    }

    @GetMapping("/users/count")
    public int getUserCount() {
        return userService.getAllUsers().size();
    }

    @GetMapping("/stagiaires/count")
    public int getStagiaireCount() {
        return stagiaireService.getAllStagiaires().size();
    }

    @GetMapping("/stages/count")
    public int getStageCount() {
        return stageService.getAllStages().size();
    }

    @GetMapping("/encadrants/count")
    public int getEncadrantCount() {
        return encadrantService.getAllEncadrants().size();
    }

    @GetMapping("/candidats")
    public List<Stagiaire> getAllCandidats() {
        return stagiaireService.getAllCandidats();
    }

    @GetMapping("/stagiaires/{id}")
    public Stagiaire getStagiaireById(@PathVariable Long id) {
        return stagiaireService.getStagiaireById(id);
    }
    @GetMapping("/candidats/stage/{stageId}")
    public List<Stagiaire> getAllCandidatsStage(@PathVariable Long stageId) {
        return stagiaireService.getAllCandidatsStage(stageId);
    }

    @GetMapping("/stagiaires/stage/{stageId}")
    public List<Stagiaire> getAllStagiairesStage(@PathVariable Long stageId) {
        return stagiaireService.getAllStagiairesStage(stageId);
    }
    @PostMapping("/stagiaires")
    public void saveStagiaire(@RequestBody Stagiaire stagiaire) {
        stagiaireService.saveStagiaire(stagiaire);
    }

    @DeleteMapping("/stagiaires/{id}")
    public void deleteStagiaire(@PathVariable Long id) {
        stagiaireService.deleteStagiaire(id);
    }

    @GetMapping("/stagiairesnom/{nom}")
    public List<Stagiaire> getStagiairesByNom(@PathVariable String nom) {
        return stagiaireService.getStagiairesByNom(nom);
    }

    @GetMapping ("/stages")
    public List<Stage> getAllStages(){
        return stageService.getAllStages();
    }
    @DeleteMapping("/stages/{id}")
    public void deleteStage(@PathVariable Long id) {
        stageService.deleteStage(id);
    }
    @GetMapping("/statistics")
    public ResponseEntity<Map<String, Integer>> getStatistics() {
        Map<String, Integer> statistics = new HashMap<>();
        statistics.put("numberOfEncadrants", encadrantService.getAllEncadrants().size());
        statistics.put("numberOfStagiaires", stagiaireService.getAllStagiaires().size());
        statistics.put("numberOfStages", stageService.getAllStages().size());
        statistics.put("numberOfAdminDrh",userService.getAllAdminDrh().size() );
        statistics.put("numberOfChefDrh", userService.getAllChefDrh().size());
        return new ResponseEntity<>(statistics, HttpStatus.OK);
    }

    @PostMapping("/absences")
    public void marquerAbsence(@RequestParam Long stagiaireId, @RequestBody Absence absence) {
        absenceService.marquerAbsence(stagiaireId, absence);
    }

    @GetMapping("/stages/affecter")
    public void affecterStageAStagiaire(@RequestParam Long stageId, @RequestParam Long stagiaireId) {
        stageService.affecterStageAStagiaire(stageId, stagiaireId);
    }

    @PutMapping("/stagiaires/update")
    public void updateStagiaire(@RequestParam Long stagiaireId, @RequestBody Stagiaire stagiaire) {
        stagiaireService.updateStagiaire(stagiaireId, stagiaire);
    }

}
