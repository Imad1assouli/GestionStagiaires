package com.GestionStagiaires.GestionStagiaires.Service.Interfaces;

import com.GestionStagiaires.GestionStagiaires.Enum.EncadrantType;
import com.GestionStagiaires.GestionStagiaires.Model.Encadrant;
import org.springframework.stereotype.Service;

import java.util.List;


public interface EncadrantService {
    void saveEncadrant(Encadrant encadrant);
    Encadrant getEncadrantById(Long encadrantId);
    List<Encadrant> getAllEncadrants();
    void deleteEncadrant(Long encadrantId);
    List<Encadrant> getEncadrantsByEmail(String email);
    List<Encadrant> getEncadrantsByType(EncadrantType encadrantType);

}
