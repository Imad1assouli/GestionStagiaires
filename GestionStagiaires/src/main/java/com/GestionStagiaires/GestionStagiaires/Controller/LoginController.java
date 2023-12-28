package com.GestionStagiaires.GestionStagiaires.Controller;

import com.GestionStagiaires.GestionStagiaires.Service.Implementations.UserServiceImpl;
import com.GestionStagiaires.GestionStagiaires.Service.Interfaces.UserService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/login")
public class LoginController {
    private final UserService userService;

    public LoginController(UserService userService){
        this.userService=userService;
    }

    @GetMapping("/loginAdmin")
    public boolean authentificateAdmin(@RequestParam String username,@RequestParam String password){
        return userService.authentificateAdmin(username,password);
    }

    @GetMapping("/loginAdminDRH")
    public boolean authentificateAdminDRH(@RequestParam String username,@RequestParam String password){
        return userService.authentificateAdminDDRH(username,password);
    }

    @GetMapping("/loginChefDRH")
    public boolean authentificateChefDRH(@RequestParam String username,@RequestParam String password){
        return userService.authentificateChefDRH(username,password);
    }
}
