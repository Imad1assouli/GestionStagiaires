package com.GestionStagiaires.GestionStagiaires.Repository;

import com.GestionStagiaires.GestionStagiaires.Model.Stage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StageRepository extends JpaRepository<Stage,Long> {
}
