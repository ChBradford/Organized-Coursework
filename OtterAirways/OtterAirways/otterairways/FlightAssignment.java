package com.example.christopher.otterairways;
//Author: Christopher Bradford
//Abstract: This class holds all the data for the flights, including an "indices of interest" arrayList that works with the reserve seat class to display flights correctly.
//Date:5/12
//ID:1820
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

public class FlightAssignment {
    static ArrayList<String> flightnumbers = new ArrayList<>();
    static ArrayList<String> departures = new ArrayList<>();
    static ArrayList<String> arrivals = new ArrayList<>();
    static ArrayList<String> times = new ArrayList<>();
    static ArrayList<Integer> capacities = new ArrayList<>();
    static ArrayList<String> prices = new ArrayList<>();
    static ArrayList<Integer> indices_of_interest = new ArrayList<>();
    static ArrayList<String> friendly_price = new ArrayList<>();

    static void new_flight(String num, String departure, String arrival, String time, int capacity, String price){
        flightnumbers.add(num);
        departures.add(departure);
        arrivals.add(arrival);
        times.add(time);
        capacities.add(capacity);
        prices.add(price);
        String sub_price = price.replace("$","");
        friendly_price.add(sub_price);
    }
}
