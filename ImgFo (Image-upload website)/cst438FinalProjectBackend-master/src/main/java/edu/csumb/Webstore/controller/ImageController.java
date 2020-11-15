//The controller file determines where someone can access your service.
//The controller shouldn't be doing any logic, and you should NEVER import the database into controller.
//Use the service for any logic, or even one line functions. 99 % of the time, the controller should only have
//the return statement, and nothing else!
package edu.csumb.Webstore.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.ApiOperation;
import edu.csumb.Webstore.model.Image;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import edu.csumb.Webstore.service.ImageService;

@CrossOrigin("*")
@RestController
public class ImageController
{
    //This is autowiring(Telling spring to just connect to the dang service automatically) for us.

    @Autowired
    ImageService imageService;

    @RequestMapping(method = RequestMethod.POST, value = "/image/addIm")
    @ApiOperation(value = "Add Image")
    public Image addIm(@RequestBody Image i){
        return imageService.addImage(i);
    }

    // @RequestMapping(method = RequestMethod.GET, value = "/image/addIm/{creatorId}{imageUrl}{title}{descInput}{tags}")
    // @ApiOperation(value = "Add Image")
    // public Image addIm(@RequestParam String creatorId, @RequestParam String imageUrl, @RequestParam String title, @RequestParam String descInput){
    //     return imageService.addImage(creatorId, imageUrl, title, descInput);
    // }

    // Get all users request (GET) TEST
    @RequestMapping(method = RequestMethod.GET, value = "/user/getAllimages")
    @ApiOperation(value = "Getting all the Images")
    public Iterable<Image> getAll(){
        return imageService.getAll();
    }
     // Get user by id (GET) TEST
     @RequestMapping(method = RequestMethod.GET, value = "/image/getByTitle/{title}")
     @ApiOperation(value = "Getting the Image by its id")
     public List<Optional<Image>> getByTitle(@RequestParam String title){ 
         return imageService.getImageByTitle(title);
     }

    //Get image by id (GET) TEST
    @RequestMapping(method = RequestMethod.GET, value = "/image/getByCreator/{id}")
    @ApiOperation(value = "Getting the image by its id")
    public Image getByCreatorId(@RequestParam String id){ 
        return imageService.getImageByCreatorId(id);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/image/get/{id}")
    @ApiOperation(value = "Getting the image by its id")
    public Optional<Image> getById(@RequestParam String id){ 
        return imageService.getImageById(id);
    }

}