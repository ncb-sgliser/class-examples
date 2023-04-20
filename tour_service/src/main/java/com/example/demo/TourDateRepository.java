package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "tourdates", path = "tour_dates")
public interface TourDateRepository extends JpaRepository<TourDate, Long>{
    
}
