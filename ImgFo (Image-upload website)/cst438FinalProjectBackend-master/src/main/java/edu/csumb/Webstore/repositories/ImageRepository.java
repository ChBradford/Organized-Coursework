//Every Java file should start with what package it's in! This ussually means a folder.
package edu.csumb.Webstore.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import edu.csumb.Webstore.model.Image;
import java.util.List;
import org.springframework.data.repository.query.Param;

//Remember to denote what type of folder it is!
@Repository
//Setting up our database to be a MongoDB with Key's that are users, and values that are strings.
public interface ImageRepository extends MongoRepository<Image,String>
{
    //Will largely stay empty. You can add extra database features here if you want!
    @Query (value = "{'title':?0}")
    Image findByRepositoryId(String title);

    @Query (value = "{'creatorId':?0}")
    Image findByCreator(String creatorId);

    // @Query ("SELECT Image FROM Image title WHERE Image.title LIKE %:title%")
    // List<Image> searchByTitleLike(@Param("title") String title);
}