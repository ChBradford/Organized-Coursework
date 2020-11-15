package com.example.christopher.otterairways;
//Author: Christopher Bradford
//Abstract: This page is for confirming the flight information selected
//Date:5/12
//ID:1820
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.TextView;

import org.w3c.dom.Text;

import java.util.Calendar;

public class ConfirmPage  extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
        setContentView(R.layout.confirm_page);
        confirmationStrings();
    }

    public void confirmationStrings(){
        float trueprice = Float.parseFloat(FlightAssignment.friendly_price.get(FlightList.saveValue)) * LogData.req_tickets;
        String p = Float.toString(trueprice);

        String currentUser = "Username: " + Account.currently_logged_user;
        TextView zero = (TextView) findViewById(R.id.tv0);
        zero.setText(currentUser);

        String fn = ("Flight number: " + FlightAssignment.flightnumbers.get(FlightList.saveValue));
        TextView one = (TextView) findViewById(R.id.tv1);
        one.setText(fn);

        String dep = ("Departure: " + FlightAssignment.departures.get(FlightList.saveValue) + ", " + FlightAssignment.times.get(FlightList.saveValue));
        TextView two = (TextView) findViewById(R.id.tv2);
        two.setText(dep);

        String arr = ("Arrival: " + FlightAssignment.arrivals.get(FlightList.saveValue));
        TextView three = (TextView) findViewById(R.id.tv3);
        three.setText(arr);

        String number_tickets = ("Number of tickets: " + LogData.req_tickets);
        TextView four = (TextView) findViewById(R.id.tv4);
        four.setText(number_tickets);

        String res_numb = ("Reservation number: " + LogData.resnumb);
        TextView five = (TextView) findViewById(R.id.tv5);
        five.setText(res_numb);

        String price = "Total: " + "$" + p;
        TextView six = (TextView) findViewById(R.id.tv6);
        six.setText(price);
    }

    public void confirmConfirm(View view){
        float trueprice = Float.parseFloat(FlightAssignment.friendly_price.get(FlightList.saveValue)) * LogData.req_tickets;
        String p = Float.toString(trueprice);

        LogData.resnumb++;
        LogData.Log.add("Transaction type = Reserve Seat, " + Account.currently_logged_user + ", " + "Flight number: " + FlightAssignment.flightnumbers.get(FlightList.saveValue) + ", " + "Departure: " + FlightAssignment.departures.get(FlightList.saveValue) + ", Arrival: " + FlightAssignment.arrivals.get(FlightList.saveValue) + ", " + "Tickets: " + LogData.req_tickets + ", " + "Reservation number: " + LogData.resnumb + ", " + "Price: $" + p + ", Time logged: " + Calendar.getInstance().getTime());
        LogData.flights.add("Flight number: " + FlightAssignment.flightnumbers.get(FlightList.saveValue) + ", " + "Departure: " + FlightAssignment.departures.get(FlightList.saveValue) + ", " + "Arrival: " + FlightAssignment.arrivals.get(FlightList.saveValue) + ", " + "Tickets: " + LogData.req_tickets + ", " + "Reservation number: " + LogData.resnumb + ", " + "Price: $" + p);
        LogData.flightUsers.add(Account.currently_logged_user);
        LogData.cancelationStrings.add("Transaction type = Cancelation, " + Account.currently_logged_user + ", " + LogData.resnumb + ", " + FlightAssignment.flightnumbers.get(FlightList.saveValue) + ", " + FlightAssignment.departures.get(FlightList.saveValue) + ", " + FlightAssignment.arrivals.get(FlightList.saveValue) + ", " + LogData.req_tickets);
        startActivity(new Intent(ConfirmPage.this,MainActivity.class));

    }
}
