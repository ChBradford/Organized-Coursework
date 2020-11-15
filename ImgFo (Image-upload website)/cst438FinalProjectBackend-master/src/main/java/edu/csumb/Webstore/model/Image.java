//This is your model. This file should only contain getters and setters, along with the variables your struct uses.
//DONT FORGET THE CONSTRUCTOR! Getters and setters must be setup to match the name exactly
//or else you will have many errors.
package edu.csumb.Webstore.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import org.springframework.data.annotation.Id;
import edu.csumb.Webstore.model.User;
import io.swagger.annotations.ApiModelProperty;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.GeneratedValue;

public class Image
{
    @Id
    @GeneratedValue
    @JsonIgnore
    String id;
    String creatorId;
    String title;
    String imageURL;
    String description;
    ArrayList<String> Tags;

    Image(){
        imageURL = "";
        title = "";
        description = "";
    }
    //construct filled product
    public Image(String id, String creatorId, String setTitle, String setImageURL, String setDescription, ArrayList<String> setTags){
        this.creatorId = creatorId;
        this.title = setTitle;
        this.imageURL = setImageURL;
        this.description = setDescription;
        this.Tags = setTags;
    }
    /**
     * @return the imageURL
     */
    public String getImageURL() {
        return imageURL;
    }
    /**
     * @return the title
     */
    public String getTitle() {
        return title;
    }
    public void setId(String setId){
        this.id = setId;
    }
    public void setCreatorId(String creatorId){
        this.creatorId = creatorId;
    }
    public String getCreatorId(){
        return creatorId;
    }
    public String getId(){
        return id;
    }
    /**
     * @return the description
     */
    public String getDescription() {
        return description;
    }
    /**
     * @return the tags
     */
    public ArrayList<String> getTags() {
        return Tags;
    }
    /**
     * @param imageURL the imageURL to set
     */
    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }
    /**
     * @param tags the tags to set
     */
    public void setTags(ArrayList<String> tags) {
        this.Tags = tags;
    }
    /**
     * @param description the description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }
    /**
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }
}