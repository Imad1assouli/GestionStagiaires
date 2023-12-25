package com.GestionStagiaires.GestionStagiaires.Controller;

import com.GestionStagiaires.GestionStagiaires.Model.Stage;
import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import com.GestionStagiaires.GestionStagiaires.Model.User;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin
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

    @GetMapping("/stagiaire/{id}")
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
    @PostMapping("/stagiaire")
    public void saveStagiaire(@RequestBody Stagiaire stagiaire) {
        stagiaireService.saveStagiaire(stagiaire);
    }

    @DeleteMapping("/stagiaire/{id}")
    public void deleteStagiaire(@PathVariable Long id) {
        stagiaireService.deleteStagiaire(id);
    }

    @GetMapping("/stagiaires/{nom}")
    public List<Stagiaire> getStagiairesByNom(@PathVariable String nom) {
        return stagiaireService.getStagiairesByNom(nom);
    }

    @GetMapping ("/stages")
    public List<Stage> getAllStages(){
        return stageService.getAllStages();
    }

   @PostMapping("/absence")
    public void marquerAbsence(@RequestParam Long stagiaireId,@RequestParam Date startDate){

        absenceService.marquerAbsence(stagiaireId,startDate);
   }

   @PostMapping ("/stages/affecter")
     public void affecterStageAstagiaire (@RequestParam Long stageId,@RequestParam Long StagiaireId){
        stageService.affecterStageAStagiaire(stageId,StagiaireId);

   }
    @PutMapping("/stagiaires/update")
    public void updateStagiaire(@RequestParam Long stagiaireId, @RequestBody Stagiaire stagiaire) {
        stagiaireService.updateStagiaire(stagiaireId, stagiaire);
    }

}
