//The controller file determines where someone can access your service.
//The controller shouldn't be doing any logic, and you should NEVER import the database into controller.
//Use the service for any logic, or even one line functions. 99 % of the time, the controller should only have
//the return statement, and nothing else!
package edu.csumb.Webstore.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.ApiOperation;
import edu.csumb.Webstore.model.User;
import edu.csumb.Webstore.service.UserService;

@CrossOrigin("*")
@RestController
public class UserController
{
    //This is autowiring(Telling spring to just connect to the dang service automatically) for us.
    @Autowired
    UserService userService;

    // Authenticate the user to make sure that they exist and the information is correct (GET)
    @RequestMapping(method = RequestMethod.GET, value = "/user/userAuthentication/{username}{password}")
    @ApiOperation(value = "Authenticating the user to make sure they actually exist or that the username and password is correct")
    public User userAuthentication(@RequestParam String username, @RequestParam String password){
        return userService.authenticateUser(username, password);
    }

    // Get user by id (GET) TEST
    @RequestMapping(method = RequestMethod.GET, value = "/user/get/{id}")
    @ApiOperation(value = "Getting the user by its id")
    public Optional<User> getById(@RequestParam String id){ 
        return userService.getUser(id);
    }

    // Get all users request (GET) TEST
    @RequestMapping(method = RequestMethod.GET, value = "/user/getAll")
    @ApiOperation(value = "Getting all the products")
    public Iterable<User> getAll(){
        return userService.getAll();
    }

    // Add user
    @RequestMapping(method = RequestMethod.POST, value = "/user/addUser")
    @ApiOperation(value = "Adding a user")
    public boolean addUser(@RequestParam String username, @RequestParam String password, @RequestParam String email){
        return userService.addUser(username, password, email); 
    }

    // Add uploaded image id
    @RequestMapping(method = RequestMethod.GET, value = "/user/addCreatedId/{id}{email}")
    @ApiOperation(value = "Adding the id of the uploaded image to the user")
    public boolean addUploadId(@RequestParam String id, @RequestParam String email){
        return userService.addCreatedId(id, email);
    }

    // // Add bookmarked image id
    // @RequestMapping(method = RequestMethod.POST, value = "/user/addBookmarkedId")
    // @ApiOperation(value = "Adding the id of the bookmarked image to the user")
    // public boolean addBookmarkedId(@RequestParam String bookmarkedId, @RequestParam String email){
    //     return userService.addBookmarkedId(bookmarkedId, email);
    // }
    // Add bookmarked image id
    @RequestMapping(method = RequestMethod.GET, value = "/user/addBookmarkedId/{id}{email}")
    @ApiOperation(value = "Adding the id of the bookmarked image to the user")
    public boolean addBookmarkId(@RequestParam String id, @RequestParam String email){
        return userService.addBookmarkedId(id, email);
    }

    // Remove bookmarked image id
    @RequestMapping(method = RequestMethod.GET, value = "/user/removeBookmarkedId/{id}{email}")
    @ApiOperation(value = "Removing the id of the bookmarked image from the user")
    public boolean removeBookmarkedId(@RequestParam String id, @RequestParam String email){
        return userService.removedBookmarkedId(id, email);
    }

}