package com.example.book1.Repo;

import com.example.book1.Entity.Book1Entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Book1Repo extends JpaRepository<Book1Entity,Long> {
}
