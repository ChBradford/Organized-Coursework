package com.example.christopher.otterairways;
//Author: Christopher Bradford
//Abstract: This class is for cancelling flights, it displays all flight data and matches it to the "current user" in the Account class
//Date:5/12
//ID:1820
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

import java.util.Calendar;

public class CancelFlight extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
        setContentView(R.layout.cancel_flight);
        display_cancel();
    }

    public void display_cancel(){
        if(!LogData.flightUsers.contains(Account.currently_logged_user)){
            AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setMessage("You have no reserved flights on this account")
                    .setPositiveButton("ok", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            dialog.dismiss();
                            startActivity(new Intent(CancelFlight.this,MainActivity.class));
                        }
                    });
            AlertDialog dialog = builder.create();
            dialog.show();
        }
        boolean ch0 = false, ch1 = false, ch2 = false, ch3 = false, ch4 = false, ch5 = false;
        Button button0,button1,button2,button3,button4,button5;
        for(int i = 0; i < LogData.flights.size(); i++){
            if(!ch0 && LogData.flightUsers.get(i).equals(Account.currently_logged_user)) {
                button0 = (Button) findViewById(R.id.cancel0);
                ch0 = true;
                button0.setText(LogData.flights.get(i));
                final int butval = i;
                final AlertDialog.Builder builder = new AlertDialog.Builder(this);
                button0.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        builder.setMessage("Are you sure you want to delete this flight?")
                                .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                                    @Override
                                    public void onClick(DialogInterface dialog, int which) {
                                        builder.setMessage("Flight cancellation successful");
                                        LogData.Log.add(LogData.cancelationStrings.get(butval) + ", " + Calendar.getInstance().getTime());
                                        LogData.flights.remove(butval);
                                        startActivity(new Intent(CancelFlight.this,MainActivity.class));
                                        dialog.dismiss();
                                    }
                                }).setNegativeButton("Disregard",new DialogInterface.OnClickListener(){
                                    @Override
                                    public void onClick(DialogInterface dialog,int which){
                                        builder.setMessage("Cancellation failed");
                                        startActivity(new Intent(CancelFlight.this,MainActivity.class));
                                    }
                        });
                        AlertDialog dialog = builder.create();
                        dialog.show();
                    }
                });
                continue;
            }

            if(!ch1 && LogData.flightUsers.get(i).equals(Account.currently_logged_user)){
                button1 = (Button) findViewById(R.id.cancel1);
                ch1 = true;
                button1.setText(LogData.flights.get(i));
                final int butval = i;
                final AlertDialog.Builder builder = new AlertDialog.Builder(this);
                button1.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        builder.setMessage("Are you sure you want to delete this flight?")
                                .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                                    @Override
                                    public void onClick(DialogInterface dialog, int which) {
                                        LogData.Log.add(LogData.cancelationStrings.get(butval) + ", " + Calendar.getInstance().getTime());
                                        LogData.flights.remove(butval);
                                        startActivity(new Intent(CancelFlight.this,MainActivity.class));
                                        dialog.dismiss();
                                    }
                                }).setNegativeButton("Disregard",new DialogInterface.OnClickListener(){
                            @Override
                            public void onClick(DialogInterface dialog,int which){
                                builder.setMessage("Cancellation failed");
                                startActivity(new Intent(CancelFlight.this,MainActivity.class));
                            }
                        });
                        AlertDialog dialog = builder.create();
                        dialog.show();
                    }
                });
                continue;
            }

            if(!ch2 && LogData.flightUsers.get(i).equals(Account.currently_logged_user)){
                button2 = (Button) findViewById(R.id.cancel2);
                ch2 = true;
                button2.setText(LogData.flights.get(i));
                final int butval = i;
                final AlertDialog.Builder builder = new AlertDialog.Builder(this);
                button2.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        builder.setMessage("Are you sure you want to delete this flight?")
                                .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                                    @Override
                                    public void onClick(DialogInterface dialog, int which) {
                                        LogData.Log.add(LogData.cancelationStrings.get(butval) + ", " + Calendar.getInstance().getTime());
                                        LogData.flights.remove(butval);
                                        startActivity(new Intent(CancelFlight.this,MainActivity.class));
                                        dialog.dismiss();
                                    }
                                }).setNegativeButton("Disregard",new DialogInterface.OnClickListener(){
                            @Override
                            public void onClick(DialogInterface dialog,int which){
                                builder.setMessage("Cancellation failed");
                                startActivity(new Intent(CancelFlight.this,MainActivity.class));
                            }
                        });
                        AlertDialog dialog = builder.create();
                        dialog.show();
                    }
                });
                continue;
            }

            if(!ch3 && LogData.flightUsers.get(i).equals(Account.currently_logged_user)){
                button3 = (Button) findViewById(R.id.cancel3);
                ch3 = true;
                button3.setText(LogData.flights.get(i));
                final int butval = i;
                final AlertDialog.Builder builder = new AlertDialog.Builder(this);
                button3.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        builder.setMessage("Are you sure you want to delete this flight?")
                                .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                                    @Override
                                    public void onClick(DialogInterface dialog, int which) {
                                        LogData.Log.add(LogData.cancelationStrings.get(butval) + ", " + Calendar.getInstance().getTime());
                                        LogData.flights.remove(butval);
                                        startActivity(new Intent(CancelFlight.this,MainActivity.class));
                                        dialog.dismiss();
                                    }
                                }).setNegativeButton("Disregard",new DialogInterface.OnClickListener(){
                            @Override
                            public void onClick(DialogInterface dialog,int which){
                                builder.setMessage("Cancellation failed");
                                startActivity(new Intent(CancelFlight.this,MainActivity.class));
                            }
                        });
                        AlertDialog dialog = builder.create();
                        dialog.show();
                    }
                });
                continue;
            }

            if(!ch4 && LogData.flightUsers.get(i).equals(Account.currently_logged_user)){
                button4 = (Button) findViewById(R.id.cancel4);
                ch4 = true;
                button4.setText(LogData.flights.get(i));
                final int butval = i;
                final AlertDialog.Builder builder = new AlertDialog.Builder(this);
                button4.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        builder.setMessage("Are you sure you want to delete this flight?")
                                .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                                    @Override
                                    public void onClick(DialogInterface dialog, int which) {
                                        LogData.Log.add(LogData.cancelationStrings.get(butval) + ", " + Calendar.getInstance().getTime());
                                        LogData.flights.remove(butval);
                                        dialog.dismiss();
                                        startActivity(new Intent(CancelFlight.this,MainActivity.class));
                                    }
                                }).setNegativeButton("Disregard",new DialogInterface.OnClickListener(){
                            @Override
                            public void onClick(DialogInterface dialog,int which){
                                builder.setMessage("Cancellation failed");
                                startActivity(new Intent(CancelFlight.this,MainActivity.class));
                            }
                        });
                        AlertDialog dialog = builder.create();
                        dialog.show();
                    }
                });
                continue;
            }

            if(!ch5 && LogData.flightUsers.get(i).equals(Account.currently_logged_user)){
                button5 = (Button) findViewById(R.id.cancel5);
                ch5 = true;
                button5.setText(LogData.flights.get(i));
                final int butval = i;
                final AlertDialog.Builder builder = new AlertDialog.Builder(this);
                button5.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        builder.setMessage("Are you sure you want to delete this flight?")
                                .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                                    @Override
                                    public void onClick(DialogInterface dialog, int which) {
                                        LogData.Log.add(LogData.cancelationStrings.get(butval) + ", " + Calendar.getInstance().getTime());
                                        LogData.flights.remove(butval);
                                        dialog.dismiss();
                                        startActivity(new Intent(CancelFlight.this,MainActivity.class));
                                    }
                                }).setNegativeButton("Disregard",new DialogInterface.OnClickListener(){
                            @Override
                            public void onClick(DialogInterface dialog,int which){
                                builder.setMessage("Cancellation failed");
                                startActivity(new Intent(CancelFlight.this,MainActivity.class));
                            }
                        });
                        AlertDialog dialog = builder.create();
                        dialog.show();
                    }
                });
                continue;
            }
        }
    }
}
