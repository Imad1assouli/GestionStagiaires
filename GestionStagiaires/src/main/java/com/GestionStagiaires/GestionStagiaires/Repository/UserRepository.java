package com.GestionStagiaires.GestionStagiaires.Repository;

import com.GestionStagiaires.GestionStagiaires.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    User FindByUsername(String username);
}
