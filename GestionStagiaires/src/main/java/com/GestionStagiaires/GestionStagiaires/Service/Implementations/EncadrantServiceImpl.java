package com.GestionStagiaires.GestionStagiaires.Service.Implementations;

import com.GestionStagiaires.GestionStagiaires.Enum.EncadrantType;
import com.GestionStagiaires.GestionStagiaires.Model.Encadrant;
import com.GestionStagiaires.GestionStagiaires.Repository.EncadrantRepository;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.EncadrantService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j

public class EncadrantServiceImpl implements EncadrantService {

    private EncadrantRepository encadrantRepository;

    public EncadrantServiceImpl(EncadrantRepository encadrantRepository) {
        this.encadrantRepository = encadrantRepository;
    }
    /**
     * @param encadrant
     */
    @Override
    public void saveEncadrant(Encadrant encadrant) {
        try {
            Encadrant savedEncadrant = encadrantRepository.save(encadrant);
            log.info("Encadrant sauvegardé avec succès : " + savedEncadrant.getEncadrantId());
        } catch (DataAccessException e) {
            log.error("Erreur lors de la sauvegarde de l'encadrant : " + e.getMessage(), e);
            throw new RuntimeException("Erreur lors de la sauvegarde de l'encadrant : " + e.getMessage(), e);
        }
    }
    public void updateEncadrant(Long encadrantId, Encadrant updatedEncadrant) {
        Optional<Encadrant> optionalEncadrant = encadrantRepository.findById(encadrantId);
        if (optionalEncadrant.isPresent()) {
            Encadrant existingEncadrant = optionalEncadrant.get();
            existingEncadrant.setNom(updatedEncadrant.getNom());
            existingEncadrant.setPrenom(updatedEncadrant.getPrenom());
            existingEncadrant.setEmail(updatedEncadrant.getEmail());
            existingEncadrant.setTelephone(updatedEncadrant.getTelephone());
            existingEncadrant.setEncadrantType(updatedEncadrant.getEncadrantType());
            encadrantRepository.save(existingEncadrant);
        } else {
            log.error("Encadrant introuvable.");
        }
    }


    /**
     * @param encadrantId
     * @return
     */
    @Override
    public Encadrant getEncadrantById(Long encadrantId) {
        Optional<Encadrant> optionalEncadrant = encadrantRepository.findById(encadrantId);
        if (optionalEncadrant.isPresent()) {
            log.info("Encadrant trouvé avec l'ID : " + encadrantId);
            return optionalEncadrant.get();
        } else {
            log.error("Aucun encadrant trouvé avec l'ID : " + encadrantId);
            return null;
        }
    }

    /**
     * @return
     */
    @Override
    public List<Encadrant> getAllEncadrants() {
        List<Encadrant> encadrants = encadrantRepository.findAll();
        if (!encadrants.isEmpty()) {
            log.info("Liste de tous les encadrants récupérée avec succès.");
        } else {
            log.warn("Aucun encadrant trouvé dans la liste.");
        }

        return encadrants;
    }

    /**
     * @param encadrantId
     */
    @Override
    public void deleteEncadrant(Long encadrantId) {
        Optional<Encadrant> encadrantOptional = encadrantRepository.findById(encadrantId);
        if (encadrantOptional.isPresent()) {
            encadrantRepository.deleteById(encadrantId);
            log.info("Encadrant supprimé avec succès.");
        } else {
            log.error("Aucun encadrant trouvé avec l'ID : " + encadrantId);
        }

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
        return encadrantRepository.findByEncadrantType(encadrantType);
    }
}
