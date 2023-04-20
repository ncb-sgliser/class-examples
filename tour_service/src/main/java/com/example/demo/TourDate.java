package com.example.demo;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class TourDate {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String venue;
    private float price;
    private String city;
    private String state;
}
