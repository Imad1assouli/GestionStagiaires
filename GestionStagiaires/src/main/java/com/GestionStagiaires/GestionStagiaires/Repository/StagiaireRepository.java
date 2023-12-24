package com.GestionStagiaires.GestionStagiaires.Repository;

import com.GestionStagiaires.GestionStagiaires.Enum.StagiaireStatus;
import com.GestionStagiaires.GestionStagiaires.Model.Stage;
import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StagiaireRepository extends JpaRepository<Stagiaire,Long> {
    Stagiaire findByCin(String cin);
    Stagiaire findByPrenom(String prenom);



    List<Stagiaire> findByNom(String nom);
    List<Stagiaire>  findByStagiaireStatus(StagiaireStatus status);
    @Query("SELECT s FROM Stagiaire s JOIN s.stage st WHERE st.id = :stageId AND s.stagiaireStatus = :status")
    List<Stagiaire> findByStageIdAndStagiaireStatus(Long stageId, StagiaireStatus status);



    List<Stagiaire> findByFiliere(String filiere);

    List<Stagiaire> findByEtablissement(String etablissement);



}
