package com.example.incidentmanagement.util;


import java.time.LocalDate;
import java.util.Random;

public class Utility {

    public static String generateIncidentId() {
        Random random = new Random();
        int randomNumber = 10000 + random.nextInt(90000);
        int year = LocalDate.now().getYear();
        return "RMG" + randomNumber + year;
    }
}

