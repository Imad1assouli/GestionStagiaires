package com.GestionStagiaires.GestionStagiaires.Repository;

import com.GestionStagiaires.GestionStagiaires.Enum.StageStatus;
import com.GestionStagiaires.GestionStagiaires.Enum.StagiaireStatus;
import com.GestionStagiaires.GestionStagiaires.Model.Encadrant;
import com.GestionStagiaires.GestionStagiaires.Model.Stage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface StageRepository extends JpaRepository<Stage,Long> {
    List<Stage> findByEncadrant_EncadrantId(Long encadrantId);
    List<Stage> findByStatus(StageStatus status);
    List<Stage> findByStartDateBetween(Date startDate, Date endDate);
    List<Stage> findByDivision(String division);
    @Query("SELECT s.encadrant FROM Stage s WHERE s.stageId = :stageId")
    Optional<Encadrant> findEncadrantByStageId(@Param("stageId") Long stageId);

}
