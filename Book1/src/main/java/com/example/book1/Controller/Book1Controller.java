package com.example.book1.Controller;

import com.example.book1.Entity.Book1Entity;
import com.example.book1.Repo.Book1Repo;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Book1")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class Book1Controller {
    private final Book1Repo book1repo;

    public Book1Controller(Book1Repo book1repo) {
        this.book1repo = book1repo;
    }

    @PostMapping
    public Book1Entity CreateBook1(@RequestBody Book1Entity book1entity){
        return book1repo.save(book1entity);
    }

    @GetMapping
     public List<Book1Entity> getAllBook1(){
        return book1repo.findAll();
    }
}
