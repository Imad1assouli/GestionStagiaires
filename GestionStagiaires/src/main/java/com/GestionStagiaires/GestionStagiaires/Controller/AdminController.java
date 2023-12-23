package com.GestionStagiaires.GestionStagiaires.Controller;

import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.StagiaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final StagiaireService stagiaireService;

    @Autowired
    public AdminController(StagiaireService stagiaireService) {
        this.stagiaireService = stagiaireService;
    }

    @GetMapping("/stagiaires")
    public List<Stagiaire> getAllStagiaires() {
        return stagiaireService.getAllStagiaires();
    }

    @GetMapping("/stagiaire/{id}")
    public Stagiaire getStagiaireById(@PathVariable Long id) {
        return stagiaireService.getStagiaireById(id);
    }

    @PostMapping("/stagiaire")
    public void saveStagiaire(@RequestBody Stagiaire stagiaire) {
        stagiaireService.saveStagiaire(stagiaire);
    }

    @DeleteMapping("/stagiaire/{id}")
    public void deleteStagiaire(@PathVariable Long id) {
        stagiaireService.deleteStagiaire(id);
    }

    @GetMapping("/stagiaires/nom/{nom}")
    public List<Stagiaire> getStagiairesByNom(@PathVariable String nom) {
        return stagiaireService.getStagiairesByNom(nom);
    }

    // Ajoutez d'autres méthodes en fonction des besoins de votre application
}
