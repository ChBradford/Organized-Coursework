package com.example.christopher.otterairways;
//Author: Christopher Bradford
//Abstract:Holds miscellaneous arrays and values like log data and flight users, using index to connect reserved flights and users
//Date:5/12
//ID:1820
import java.util.ArrayList;

public class LogData {
    static ArrayList<String> Log = new ArrayList<>();
    static ArrayList<String> flights = new ArrayList<>();
    static ArrayList<String> cancelationStrings = new ArrayList<>();
    static ArrayList<String> flightUsers = new ArrayList<>();
    static int resnumb = 0;
    static int req_tickets = 0;
    static boolean run=false;
}
