//The service file is where the heavy lifting is done.
//You will do all logic, all database access(Special database operations defined in the repository).
//Basically all your actual code is here!
package edu.csumb.Webstore.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.csumb.Webstore.model.User;
import edu.csumb.Webstore.repositories.UserRepository;

//Remember to annotate what type of class this is!
@Service
public class UserService
{
    //We need to autowire the database here. If you are stuck, look at ProductController!
    @Autowired
    UserRepository userRepository;

    // Test Function
    public Optional<User> getUser(String id){
        return userRepository.findById(id);
    }

    // Test Function
    public Iterable<User> getAll(){
        return userRepository.findAll();
    }

    // Add User
    public boolean addUser(String username, String password, String email){
        User temp = userRepository.findByEmail(email);
        if(username.equals("") || password.equals("") || email.equals("")){
            return false;
        }
        if(temp == null){
            userRepository.save(new User(username, password, email));
            return true;
        }
        else {
            return false;
        }
    }

    // User authentication function, returns true if info is correct, false otherwise
    public User authenticateUser(String username, String password){
        User temp = userRepository.findByRepositoryId(username);
        if(temp == null){
            return null;
        }
        if(temp.getUsername().equals(username) && temp.getPassword().equals(password)){
            return userRepository.findByRepositoryId(username);
        }
        else {
            return null;
        }
    }

    public boolean addCreatedId(String createdId, String email){
        User temp = userRepository.findByEmail(email);
        temp.addCreatedId(createdId);
        userRepository.save(temp);
        return true;
    }

    public boolean addBookmarkedId(String bookmarkedId, String email){
        User temp = userRepository.findByEmail(email);
        if(temp.getBookmarkedIds().contains(bookmarkedId)){
            return false;
        }
        temp.addBookmarkedId(bookmarkedId);
        userRepository.save(temp);
        return true;
    }

    public boolean removedBookmarkedId(String bookmarkedId, String email){
        User temp = userRepository.findByEmail(email);
        if(temp.getBookmarkedIds().contains(bookmarkedId)){
            temp.removeBookmarkedId(bookmarkedId);
            userRepository.save(temp);
            return true;
        }
        return false;
    }

}