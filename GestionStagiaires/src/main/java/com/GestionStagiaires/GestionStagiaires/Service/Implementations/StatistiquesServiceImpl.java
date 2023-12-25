package com.GestionStagiaires.GestionStagiaires.Service.Implementations;

import com.GestionStagiaires.GestionStagiaires.Model.User;
import com.GestionStagiaires.GestionStagiaires.Repository.EncadrantRepository;
import com.GestionStagiaires.GestionStagiaires.Repository.StageRepository;
import com.GestionStagiaires.GestionStagiaires.Repository.StagiaireRepository;
import com.GestionStagiaires.GestionStagiaires.Repository.UserRepository;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.StatistiquesService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class StatistiquesServiceImpl implements StatistiquesService {
    private final UserRepository userRepository;
    private final StagiaireRepository stagiaireRepository;
    private final StageRepository stageRepository;
    private final EncadrantRepository encadrantRepository;

    public StatistiquesServiceImpl(UserRepository userRepository, StagiaireRepository stagiaireRepository, StageRepository stageRepository, EncadrantRepository encadrantRepository) {
        this.userRepository = userRepository;
        this.stagiaireRepository = stagiaireRepository;
        this.stageRepository = stageRepository;
        this.encadrantRepository = encadrantRepository;
    }

    @Override
    public int getNombreStagiaires() {
        return stagiaireRepository.findAll().size();
    }

    @Override
    public int getNombreStages() {
        return stageRepository.findAll().size();
    }

    @Override
    public int getNombreEncadrants() {
        return encadrantRepository.findAll().size();
    }

    @Override
    public int getNombreUsers() {
        return userRepository.findAll().size();
    }
}
