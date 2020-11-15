package com.example.christopher.otterairways;
//Author: Christopher Bradford
//Abstract:Main page, initializes the starter accounts and flights and is basically the application's hub.
//Date:5/12
//ID:1820
import android.content.Intent;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import java.io.Serializable;
import java.util.ArrayList;

public class MainActivity extends AppCompatActivity{
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        if(!LogData.run){
            LogData.run = true;
            starterData();
        }
    }

    public void starterData(){
        Account.accounts.put("!chriS12!", "CHrIS12!!"); // initializing the premade accounts here
        Account.accounts.put("$BriAn7", "123aBc##");
        Account.accounts.put("A@lice5", "@cSit100");
        FlightAssignment.new_flight("Otter101","Monterey","Los Angeles","10:30(AM)",10,"$150.00");
        FlightAssignment.new_flight("Otter102","Los Angeles","Monterey","1:00(PM)",10,"$150.00");
        FlightAssignment.new_flight("Otter201","Monterey","Seattle","11:00(AM)", 5, "$200.50");
        FlightAssignment.new_flight("Otter205","Monterey","Seattle","3:45(PM)",15,"$150.00");
        FlightAssignment.new_flight("Otter202","Seattle","Monterey","2:10(PM)",5,"$200.50");
    }

    public void CA(View view){
        startActivity(new Intent(MainActivity.this,AccountCreation.class));
    }

    public void RS(View view){
        for(int i = 0; i < FlightAssignment.indices_of_interest.size(); i++){
            FlightAssignment.indices_of_interest.remove(i);
        }
        FlightAssignment.indices_of_interest.clear();
        startActivity(new Intent(MainActivity.this,ReserveSeat.class));
    }

    public void CF(View view){
        startActivity(new Intent(MainActivity.this,CancelLogin.class));
}

    public void MS(View view){
        startActivity(new Intent(MainActivity.this,Admin_login.class));
    }

}
