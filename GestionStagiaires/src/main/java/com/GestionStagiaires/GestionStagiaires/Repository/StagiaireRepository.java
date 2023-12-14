package com.GestionStagiaires.GestionStagiaires.Repository;

import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StagiaireRepository extends JpaRepository<Stagiaire,Long> {
    Stagiaire FindByCin(String cin);
    Stagiaire FindByPrenom(String username);
}
