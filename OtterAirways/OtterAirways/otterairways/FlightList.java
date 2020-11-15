package com.example.christopher.otterairways;
//Author: Christopher Bradford
//Abstract:This page will display the flight list based on the data collected from the Reserve seats class and put into the indices of interest ArrayList
//Date:5/12
//ID:1820
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

import java.util.ArrayList;

public class FlightList extends AppCompatActivity {
    Button button0, button1, button2,button3,button4;
    static int saveValue; //use in confirmation page for the page
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
        setContentView(R.layout.flight_display);
        buttonSetup();
    }

    public void buttonSetup(){
        boolean ch0 = false, ch1 = false, ch2 = false, ch3 = false, ch4 = false;
        for (int i = 0; i < FlightAssignment.indices_of_interest.size(); i++) {
            if (!ch0) {
                button0 = (Button) findViewById(R.id.fbutton0);
                button0.setText(FlightAssignment.flightnumbers.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.departures.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.arrivals.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.times.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.capacities.get(FlightAssignment.indices_of_interest.get(i)) +" seats" + " | " + FlightAssignment.prices.get(FlightAssignment.indices_of_interest.get(i)));
                ch0 = true;
                final int val = FlightAssignment.indices_of_interest.get(i);
                button0.setOnClickListener(new View.OnClickListener(){
                    @Override
                    public void onClick(View v){
                        saveValue = val;
                        startActivity(new Intent(FlightList.this,Login.class));
                    }
                });
                continue;
            }
            if (!ch1) {
                button1 = (Button) findViewById(R.id.fbutton1);
                button1.setText(FlightAssignment.flightnumbers.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.departures.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.arrivals.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.times.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.capacities.get(FlightAssignment.indices_of_interest.get(i)) +" seats" + " | " + FlightAssignment.prices.get(FlightAssignment.indices_of_interest.get(i)));
                ch1 = true;
                final int val = FlightAssignment.indices_of_interest.get(i);
                button1.setOnClickListener(new View.OnClickListener(){
                    @Override
                    public void onClick(View v){
                        saveValue = val;
                        startActivity(new Intent(FlightList.this,Login.class));
                    }
                });
                continue;
            }
            if (!ch2) {
                button2 = (Button) findViewById(R.id.fbutton2);
                button2.setText(FlightAssignment.flightnumbers.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.departures.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.arrivals.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.times.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.capacities.get(FlightAssignment.indices_of_interest.get(i)) +" seats" + " | " + FlightAssignment.prices.get(FlightAssignment.indices_of_interest.get(i)));
                ch2 = true;
                final int val = FlightAssignment.indices_of_interest.get(i);
                button2.setOnClickListener(new View.OnClickListener(){
                    @Override
                    public void onClick(View v){
                        saveValue = val;
                        startActivity(new Intent(FlightList.this,Login.class));
                    }
                });
                continue;
            }
            if (!ch3) {
                button3 = (Button) findViewById(R.id.fbutton3);
                button3.setText(FlightAssignment.flightnumbers.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.departures.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.arrivals.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.times.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.capacities.get(FlightAssignment.indices_of_interest.get(i)) +" seats" + " | " + FlightAssignment.prices.get(FlightAssignment.indices_of_interest.get(i)));
                ch3 = true;
                final int val = FlightAssignment.indices_of_interest.get(i);
                button3.setOnClickListener(new View.OnClickListener(){
                    @Override
                    public void onClick(View v){
                        saveValue = val;
                        startActivity(new Intent(FlightList.this,Login.class));
                    }
                });
                continue;
            }
            if (!ch4) {
                button4 = (Button) findViewById(R.id.fbutton4);
                button4.setText(FlightAssignment.flightnumbers.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.departures.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.arrivals.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.times.get(FlightAssignment.indices_of_interest.get(i)) + " | " + FlightAssignment.capacities.get(FlightAssignment.indices_of_interest.get(i)) +" seats" + " | " + FlightAssignment.prices.get(FlightAssignment.indices_of_interest.get(i)));
                ch4 = true;
                final int val = FlightAssignment.indices_of_interest.get(i);
                button4.setOnClickListener(new View.OnClickListener(){
                    @Override
                    public void onClick(View v){
                        saveValue = val;
                        startActivity(new Intent(FlightList.this,Login.class));
                    }
                });
                continue;
            }
        }
    }
}
