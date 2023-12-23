package com.GestionStagiaires.GestionStagiaires.Repository;

import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StagiaireRepository extends JpaRepository<Stagiaire,Long> {
    Stagiaire findByCin(String cin);
    Stagiaire findByPrenom(String username);


    List<Stagiaire> findByNom(String nom);

    List<Stagiaire> findByFiliere(String filiere);

    List<Stagiaire> findByEtablissement(String etablissemet);


}
