package com.example.christopher.otterairways;
//Author: Christopher Bradford
//Abstract: For creating new flights from the admin, checks for duplicate flights and to make sure everything is entered
//Date:5/12
//ID:1820
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.Spinner;

public class NewFlights extends AppCompatActivity {
    String departure;
    String arrival;
    Spinner spinner;
    Spinner spinner2;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.adminaddflights);

        spinner = (Spinner) findViewById(R.id.Dep);
        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this,R.array.Locations,android.R.layout.simple_spinner_item);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner.setAdapter(adapter);

        spinner2 = (Spinner) findViewById(R.id.Arr);
        ArrayAdapter<CharSequence> adapter2 = ArrayAdapter.createFromResource(this,R.array.Locations,android.R.layout.simple_spinner_item);
        adapter2.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner2.setAdapter(adapter2);
    }

    public void adminFlight(View view) {
        EditText num = (EditText) findViewById(R.id.newnum);
        departure = spinner.getSelectedItem().toString();
        arrival = spinner2.getSelectedItem().toString();
        EditText time = (EditText) findViewById(R.id.t);
        EditText capacity = (EditText) findViewById(R.id.capacity);
        EditText price = (EditText) findViewById(R.id.price);
        boolean tick = true;

        if (FlightAssignment.flightnumbers.contains(num.getText().toString())) {
            tick = false;
            AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setMessage("Invalid flight, flight " + num.getText().toString() + " already exists").setTitle("Invalid flight")
                    .setPositiveButton("ok", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            dialog.dismiss();
                            startActivity(new Intent(NewFlights.this, MainActivity.class));
                        }
                    });
            AlertDialog dialog = builder.create();
            dialog.show();
        }

        if (tick) {
            if (num.getText().toString().trim().length() < 0 || time.getText().toString().trim().length() < 0 || capacity.getText().toString().trim().length() < 0 || price.getText().toString().trim().length() < 0) {
                AlertDialog.Builder builder = new AlertDialog.Builder(this);
                builder.setMessage("Invalid flight, something is missing.");
                AlertDialog dialog = builder.create();
                dialog.show();
            } else {
                String c = capacity.getText().toString();

                final String number = num.getText().toString();
                final String stime = time.getText().toString();
                final int cap = Integer.parseInt(c);
                final String pri = price.getText().toString();

                final AlertDialog.Builder builder = new AlertDialog.Builder(this);
                builder.setMessage("Please confirm this information: " + "\n" + "flight no.: " + number + "\n" + "departure: " + departure + "\n" + "Arrival: " + arrival + "\n" + "Time: " + stime + "\n" + "capacity: " + Integer.toString(cap) + " seats" + "\n" + "price: " + pri)
                        .setPositiveButton("Correct", new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {
                                FlightAssignment.new_flight(number, departure, arrival, stime, cap, pri);
                                dialog.dismiss();
                                startActivity(new Intent(NewFlights.this, MainActivity.class));
                            }
                        }).setNegativeButton("Disregard", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.dismiss();
                    }
                });
                AlertDialog dialog = builder.create();
                dialog.show();
            }
        }
    }
}
