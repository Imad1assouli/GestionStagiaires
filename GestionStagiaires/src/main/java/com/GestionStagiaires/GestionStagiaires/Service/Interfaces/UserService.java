package com.GestionStagiaires.GestionStagiaires.Service.Interfaces;

import com.GestionStagiaires.GestionStagiaires.Model.Stagiaire;
import com.GestionStagiaires.GestionStagiaires.Model.User;

import java.util.List;

public interface UserService  {
    void saveUser(User user);
    User getUserById(Long UserId);
    List<User> getAllUsers();
    List<User> getAllAdminDrh();
    List<User> getAllChefDrh();
    void deleteUser(Long UserId);
    User getUserByUsername(String username);
    void updateUser(Long UserId,User user);
    boolean authentificateAdmin(String username,String password);
    boolean authentificateAdminDDRH(String username,String password);
    boolean authentificateChefDRH(String username,String password);

}
