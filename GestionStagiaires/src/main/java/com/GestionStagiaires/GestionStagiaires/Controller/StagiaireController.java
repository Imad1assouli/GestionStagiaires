package com.GestionStagiaires.GestionStagiaires.Controller;

import com.GestionStagiaires.GestionStagiaires.Model.Stage;
import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.StageService;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.StagiaireService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class StagiaireController {
    private final StageService stageService;
    private final StagiaireService stagiaireService;

    public StagiaireController(StageService stageService,StagiaireService stagiaireService){
        this.stageService=stageService;
        this.stagiaireService=stagiaireService;
    }

    @GetMapping("/stages")
    public List<Stage> listerStages() {
        return stageService.getAllStages();
    }
    @PostMapping("/stagiaires")
    public void saveStagiaire(@RequestBody Stagiaire stagiaire) {
        stagiaireService.saveStagiaire(stagiaire);
    }

}
