package com.GestionStagiaires.GestionStagiaires.Repository;

import com.GestionStagiaires.GestionStagiaires.Enum.StageStatus;
import com.GestionStagiaires.GestionStagiaires.Model.Stage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface StageRepository extends JpaRepository<Stage,Long> {
    List<Stage> findByEncadrantId(Long encadrantId);
    List<Stage> findByStatus(StageStatus status);
    List<Stage> findByStartDateBetween(Date startDate, Date endDate);
    List<Stage> findByDivision(String division);
}
