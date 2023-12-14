package com.GestionStagiaires.GestionStagiaires.Service.Implementations;

import com.GestionStagiaires.GestionStagiaires.Enum.EncadrantType;
import com.GestionStagiaires.GestionStagiaires.Model.Encadrant;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.EncadrantService;

import java.util.List;

public class EncadrantServiceImpl implements EncadrantService {
    /**
     * @param encadrant
     * @return
     */
    @Override
    public Encadrant saveEncadrant(Encadrant encadrant) {
        return null;
    }

    /**
     * @param encadrantId
     * @return
     */
    @Override
    public Encadrant getEncadrantById(Long encadrantId) {
        return null;
    }

    /**
     * @return
     */
    @Override
    public List<Encadrant> getAllEncadrants() {
        return null;
    }

    /**
     * @param encadrantId
     */
    @Override
    public void deleteEncadrant(Long encadrantId) {

    }

    /**
     * @param email
     * @return
     */
    @Override
    public List<Encadrant> getEncadrantsByEmail(String email) {
        return null;
    }

    /**
     * @param encadrantType
     * @return
     */
    @Override
    public List<Encadrant> getEncadrantsByType(EncadrantType encadrantType) {
        return null;
    }
}
