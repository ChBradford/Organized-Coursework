//This is your model. This file should only contain getters and setters, along with the variables your struct uses.
//DONT FORGET THE CONSTRUCTOR! Getters and setters must be setup to match the name exactly
//or else you will have many errors.
package edu.csumb.Webstore.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import org.springframework.data.annotation.Id;

import io.swagger.annotations.ApiModelProperty;

public class User
{
    // Variables
    // @Id
    // @GeneratedValue
    // @ApiModelProperty(hidden = true, required = false)
    // public String userId;

    @Id
    public String email;
    public String username;
    public String password;

    public ArrayList<String> createdId = new ArrayList();
    public ArrayList<String> bookmarkedId = new ArrayList();

    public User(){
        username = "";
        password = "";
        email = "";
    }
    
    public User(String username, String password, String email){
        this.username = username;
        this.password = password;
        this.email = email;
    }

    // Getters
    public String getUsername(){
        return username;
    }

    public String getPassword(){
        return password;
    }

    public String getEmail(){
        return email;
    }

    public ArrayList<String> getCreatedIds(){
        return this.createdId;
    }

    public ArrayList<String> getBookmarkedIds(){
        return this.bookmarkedId;
    }

    // Setters
    public void setUsername(String username){
        this.username = username;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public void setEmail(){
        this.email = email;
    }

    public void setCreatedIds(ArrayList<String> createdId){
        this.createdId = createdId;
    }

    public void setBookmarkedIds(ArrayList<String> bookmarkedId){
        this.bookmarkedId = bookmarkedId;
    }

    public void addCreatedId(String createId){
        this.createdId.add(createId);
    }

    public void addBookmarkedId(String bookmarkId){
        this.bookmarkedId.add(bookmarkId);
    }

    public void removeBookmarkedId(String bookmarkId){
        this.bookmarkedId.remove(bookmarkId);
    }
}