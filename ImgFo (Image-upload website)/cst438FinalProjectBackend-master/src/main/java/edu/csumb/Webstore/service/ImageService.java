//The service file is where the heavy lifting is done.
//You will do all logic, all database access(Special database operations defined in the repository).
//Basically all your actual code is here!
package edu.csumb.Webstore.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.csumb.Webstore.model.Image;
import edu.csumb.Webstore.repositories.ImageRepository;

import java.util.ArrayList;
import java.util.List;


//Remember to annotate what type of class this is!
@Service
public class ImageService
{
    //We need to autowire the database here. If you are stuck, look at ProductController!
    @Autowired
    ImageRepository imageRepository;
    // Test Function
    public Image getImageByCreatorId(String id){
        Image temp = imageRepository.findByCreator(id);
        return temp;
    }

    public Optional<Image> getImageById(String id){
        return imageRepository.findById(id);
    }

    public Image addImage(Image image){
        return imageRepository.save(new Image(image.getId(),image.getCreatorId(), image.getTitle(),image.getImageURL(),image.getDescription(),image.getTags()));
    }

    // public Image addImage(String creatorId, String imageUrl, String title, String descInput){
    //     ArrayList<String> tags = new ArrayList<String>();
    //     return imageRepository.save(new Image(creatorId, imageUrl, title, descInput, tags));
    // }

    // Test Function
    public Iterable<Image> getAll(){
        return imageRepository.findAll();
    }
    public List<Optional<Image>> getImageByTitle(String title){
        List<Optional<Image>> finalList = new ArrayList<>();
        List<Image> imList= imageRepository.findAll();
        for(Image im : imList){
            if(im.getTitle().contains(title)){
                finalList.add(Optional.of(im));
            }
        }
        return finalList;
    }
}