package com.example.christopher.otterairways;
//Author: Christopher Bradford
//Abstract: This class holds account data and the currently logged in user.
//Date:5/12
//ID:1820
import java.util.ArrayList;
import java.util.HashMap;

/**
 * Created by chris on 5/6/2018.
 */

public class Account {
    static String currently_logged_user = " ";
    static HashMap<String,String> accounts = new HashMap<>();
    private String username;
    private String password;
    /*Account(String username, String password){
        this.username = username;
        this.password = password;
        accounts.put(username,password);
    }*/

    static void set_user(String username){
        currently_logged_user = username;
    }
}
