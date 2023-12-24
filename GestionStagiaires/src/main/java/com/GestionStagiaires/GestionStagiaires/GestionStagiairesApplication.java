package com.GestionStagiaires.GestionStagiaires;

import com.GestionStagiaires.GestionStagiaires.Controller.AdminController;
import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import com.GestionStagiaires.GestionStagiaires.Service.Implementations.StagiaireServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GestionStagiairesApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestionStagiairesApplication.class, args);
	}
	@Autowired
	private AdminController adminController;
	@Bean
	public CommandLineRunner start() {
		return args -> {
			// Vos tests ici
			System.out.println("Console here :"+adminController.getStagiaireById(1L).getNom());



		};
	}
}
