package com.example.christopher.otterairways;
//Author: Christopher Bradford
//Abstract: For reserving seats, takes data from spinner and adds to indices of interest, determining what to display on the FlightList page.
//Date:5/12
//ID:1820
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;
import android.widget.Spinner;
import java.util.ArrayList;
import android.widget.ArrayAdapter;
import android.widget.AdapterView;

public class ReserveSeat extends AppCompatActivity {
    String departure;
    String arrival;
    Spinner spinner;
    Spinner spinner2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
        setContentView(R.layout.reserve_seats);

        spinner = (Spinner) findViewById(R.id.spinnerDeparture);
        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this,R.array.Locations,android.R.layout.simple_spinner_item);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner.setAdapter(adapter);

        spinner2 = (Spinner) findViewById(R.id.spinnerArrival);
        ArrayAdapter<CharSequence> adapter2 = ArrayAdapter.createFromResource(this,R.array.Locations,android.R.layout.simple_spinner_item);
        adapter2.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner2.setAdapter(adapter2);
        //arrival = spinner2.getSelectedItem().toString();
    }


    public void flightCheck(View view) {
        boolean exists = false;
        departure = spinner.getSelectedItem().toString();
        arrival = spinner2.getSelectedItem().toString();
        EditText tickets = (EditText) findViewById(R.id.editTextTickets);
        String tic = tickets.getText().toString();
        LogData.req_tickets = Integer.parseInt(tic);
        boolean work = true;

        if(LogData.req_tickets == 0){
            AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setMessage("Please request at least 1 ticket.");
            AlertDialog dialog = builder.create();
            dialog.show();
            work = false;
        }

        if (LogData.req_tickets > 7) {
            AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setMessage("Due to system limitations, you cannot request more than 7 tickets.");
            AlertDialog dialog = builder.create();
            dialog.show();
            work = false;
        }
        if(work) {
            for (int i = 0; i < FlightAssignment.departures.size(); i++) {
                if (FlightAssignment.departures.get(i).contains(departure) && FlightAssignment.arrivals.get(i).contains(arrival)) {
                    FlightAssignment.indices_of_interest.add((Integer) i);
                    exists = true;
                }
            }
        }
        if (!exists && work) {
            AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setMessage("No flight exists")
                    .setPositiveButton("Exit", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog,int which) {
                            dialog.dismiss();
                            startActivity(new Intent(ReserveSeat.this,MainActivity.class));
                        }
                    });
            AlertDialog dialog = builder.create();
            dialog.show();
        }
        if (exists && work) {
            startActivity(new Intent(ReserveSeat.this, FlightList.class));
        }
    }
}
