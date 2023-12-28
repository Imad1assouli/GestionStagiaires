package com.GestionStagiaires.GestionStagiaires.Service.Implementations;

import com.GestionStagiaires.GestionStagiaires.Enum.UserType;
import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import com.GestionStagiaires.GestionStagiaires.Model.User;
import com.GestionStagiaires.GestionStagiaires.Repository.UserRepository;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository){
        this.userRepository=userRepository;
    }
    /**
     * @param user
     */
    @Override
    public void saveUser(User user) {
        try {
            userRepository.save(user);
            log.info("Utilisateur creé avec succés");
        } catch (Exception e) {
            throw new RuntimeException("Error saving user: " + e.getMessage(), e);
        }
    }

    /**
     * @param UserId
     * @return
     */
    @Override
    public User getUserById(Long UserId) {
        Optional<User> user= userRepository.findById(UserId);
        if(user.isPresent()){
            log.info("user trouvé avec l ' ID "+ UserId );
            return user.get();
        }
        else{
            log.warn("Aucun user trouvé avec l ' ID "+ UserId);
        }
        return null;
    }

    /**
     * @return
     */
    @Override
    public List<User> getAllUsers() {
        List<User> listeUsers =userRepository.findAll();
        if (!listeUsers.isEmpty()){
            log.info("Liste des users trouvé avec succés ");
            return listeUsers;
        }
        else {
            log.warn("Aucun user trouvé ");
        }
        return Collections.emptyList();
    }
    @Override
    public List<User> getAllAdminDrh() {
        List<User> listeUsers =userRepository.findByUserType(UserType.AdminDRH);
        if (!listeUsers.isEmpty()){
            log.info("Liste des users trouvé avec succés ");
            return listeUsers;
        }
        else {
            log.warn("Aucun user trouvé ");
        }
        return Collections.emptyList();
    }
    @Override
    public List<User> getAllChefDrh() {
        List<User> listeUsers =userRepository.findByUserType(UserType.ChefDRH);
        if (!listeUsers.isEmpty()){
            log.info("Liste des users trouvé avec succés ");
            return listeUsers;
        }
        else {
            log.warn("Aucun user trouvé ");
        }
        return Collections.emptyList();
    }



    /**
     * @param UserId
     */
    @Override
    public void deleteUser(Long UserId) {
        try {
            userRepository.deleteById(UserId);
            log.info("Utilisateur supprimé avec succés");
        } catch (Exception e) {
            throw new RuntimeException("Error deleting user: " + e.getMessage(), e);
        }
    }

    @Override
    public User getUserByUsername(String username) {
        Optional<User> user= userRepository.findByUsername(username);
        if(user.isPresent()){
            log.info("user trouvé avec le username "+ username );
            return user.get();
        }
        else{
            log.warn("Aucun user trouvé avec l ' username "+ username);
        }
        return null;
    }

    @Override
    public void updateUser(Long userId, User newUser) {
        Optional<User> existingUser = userRepository.findById(userId);
        if (existingUser.isPresent()) {
            User userToUpdate = existingUser.get();

            // Mettez à jour les propriétés de l'utilisateur existant avec les nouvelles valeurs
            userToUpdate.setNom(newUser.getNom());
            userToUpdate.setPrenom(newUser.getPrenom());
            userToUpdate.setUsername(newUser.getUsername());
            userToUpdate.setPassword(newUser.getPassword());
            userToUpdate.setUserType(newUser.getUserType());

            // Sauvegardez l'utilisateur mis à jour
            userRepository.save(userToUpdate);
        }
        else {
            log.warn("aucun User existant avec cet ID "+userId);
        }
    }

    @Override
    public boolean authentificateAdmin(String username, String password) {
        Optional<User> storedUser = userRepository.findByUsername(username);

        if (storedUser.isPresent()) {

            if (storedUser.get().getPassword().equals(password) &&  UserType.Admin.equals(storedUser.get().getUserType())) {
                return true;
            }
        }

        return false;
    }





    @Override
    public boolean authentificateAdminDDRH(String username, String password) {
        Optional<User> storedUser = userRepository.findByUsername(username);

        if (storedUser.isPresent()) {

            if (storedUser.get().getPassword().equals(password) &&  UserType.AdminDRH.equals(storedUser.get().getUserType())) {
                return true;
            }
        }

        return false;
    }

    @Override
    public boolean authentificateChefDRH(String username, String password) {
        Optional<User> storedUser = userRepository.findByUsername(username);

        if (storedUser.isPresent()) {

            if (storedUser.get().getPassword().equals(password) &&  UserType.ChefDRH.equals(storedUser.get().getUserType())) {
                return true;
            }
        }

        return false;
    }
}
