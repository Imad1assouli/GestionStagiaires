package com.GestionStagiaires.GestionStagiaires.Controller;

import com.GestionStagiaires.GestionStagiaires.Enum.EncadrantType;
import com.GestionStagiaires.GestionStagiaires.Enum.StageStatus;
import com.GestionStagiaires.GestionStagiaires.Model.*;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final StagiaireService stagiaireService;
    private final StageService stageService;
    private final EncadrantService encadrantService;
    private final AbsenceService absenceService;
    private final UserService userService;

    public AdminController(StagiaireService stagiaireService,
                           StageService stageService,
                           EncadrantService encadrantService,
                           AbsenceService absenceService, UserService userService) {
        this.stagiaireService = stagiaireService;
        this.stageService = stageService;
        this.encadrantService = encadrantService;
        this.absenceService = absenceService;
        this.userService = userService;
    }

    //Gestion Users
    @PostMapping("/users")
    public void saveUser(@RequestBody User user) { userService.saveUser(user); }

    @PutMapping("/users/{userId}")
    public void updateUser(@PathVariable Long userId, @RequestBody User updatedUser) {
        userService.updateUser(userId, updatedUser);
    }

    @DeleteMapping("/users/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
    }

    @GetMapping("/users/username/{username}")
    public User getUserByUsername(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() { return userService.getAllUsers(); }

    @GetMapping("/users/{userId}")
    public User getUserById(@PathVariable Long userId) { return userService.getUserById(userId); }

    @GetMapping("/users/count")
    public int getUserCount() {
        return userService.getAllUsers().size();
    }

    //gestion Stagiaires
    @GetMapping("/stagiaires")
    public List<Stagiaire> getAllStagiaires() {
        return stagiaireService.getAllStagiaires();
    }

    @GetMapping("/candidats")
    public List<Stagiaire> getAllCandidats() {
        return stagiaireService.getAllCandidats();
    }
    @GetMapping("/stagiaires/{stageId}")
    public Stagiaire getStagiaireById(@PathVariable Long stageId) {
        return stagiaireService.getStagiaireById(stageId);
    }

    @GetMapping("/candidats/stage/{stageId}")
    public List<Stagiaire> getAllCandidatsStage(@PathVariable Long stageId) {
        return stagiaireService.getAllCandidatsStage(stageId);
    }

    @GetMapping("/stagiaires/count")
    public int getStagiaireCount() {
        return stagiaireService.getAllStagiaires().size();
    }

    @GetMapping("/stagiaires/stage/{stageId}")
    public List<Stagiaire> getAllStagiairesStage(@PathVariable Long stageId) {
        return stagiaireService.getAllStagiairesStage(stageId);
    }

    @PutMapping("/stagiaires/{stagiaireId}")
    public void updateStagiaire(@PathVariable Long stagiaireId,@RequestBody Stagiaire stagiaire){
        stagiaireService.updateStagiaire(stagiaireId,stagiaire);
    }

    @PostMapping("/stagiaires")
    public void saveStagiaire(@RequestBody Stagiaire stagiaire) {
        stagiaireService.saveStagiaire(stagiaire);
    }

    @DeleteMapping("/stagiaires/{id}")
    public void deleteStagiaire(@PathVariable Long id) {
        stagiaireService.deleteStagiaire(id);
    }

    @GetMapping("/stagiaires/nom/{nom}")
    public List<Stagiaire> getStagiairesByNom(@PathVariable String nom) {
        return stagiaireService.getStagiairesByNom(nom);
    }

    //gestion Stages
    @PostMapping("/stages")
    public void saveStage(@RequestBody Stage stage) {
        stageService.saveStage(stage);
    }

    @PutMapping("/stages/{stageId}")
    public void updateStage(@PathVariable Long stageId, @RequestBody Stage updatedStage) {
        stageService.updateStage(stageId, updatedStage);
    }

    @GetMapping("/stages")
    public List<Stage> listAllStages() {
        return stageService.getAllStages();
    }

    @GetMapping("/stages/{stageId}")
    public Stage getStageById(@PathVariable Long stageId) {
        return stageService.getStageById(stageId);
    }

    @GetMapping("/stages/count")
    public int getStageCount() {
        return stageService.getAllStages().size();
    }

    @GetMapping("/stages/status/{status}")
    public List<Stage> getStagesByStatus(@PathVariable StageStatus status) {
        return stageService.getStagesByStatus(status);
    }

    @GetMapping("/stages/date-between")
    public List<Stage> getStagesByDateBetween(@RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate,
                                              @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) {
        return stageService.getStagesByDateBetween(startDate, endDate);
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
    public void marquerAbsence(@RequestParam Long stagiaireId, @RequestBody Absence absence) {
        absenceService.marquerAbsence(stagiaireId, absence);
    }

    //affecter stage
    @GetMapping("/stages/affecter")
    public void affecterStageAStagiaire(@RequestParam Long stageId, @RequestParam Long stagiaireId) {
        stageService.affecterStageAStagiaire(stageId, stagiaireId);
    }

}
