package com.example.christopher.otterairways;
//Author: Christopher Bradford
//Abstract: This class is for showing the admin log
//Date:5/12
//ID:1820
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class AdminLog extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
        setContentView(R.layout.admin_log);
        logDisplay();
    }

    public void logDisplay(){
        if(LogData.Log.size() == 0){
            final AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setMessage("There are no logs at the moment. Would you like to add new flight information?")
                    .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            startActivity(new Intent(AdminLog.this,NewFlights.class));
                            dialog.dismiss();
                        }
                    }).setNegativeButton("No",new DialogInterface.OnClickListener(){
                @Override
                public void onClick(DialogInterface dialog,int which){
                    startActivity(new Intent(AdminLog.this,MainActivity.class));
                    dialog.dismiss();
                }
            });
            AlertDialog dialog = builder.create();
            dialog.show();
        }
        boolean ch0 = false, ch1 = false, ch2 = false, ch3 = false, ch4 = false, ch5 = false, ch6 = false, ch7 = false, ch8 = false;
        TextView t0,t1,t2,t3,t4,t5,t6,t7,t8;
        for(int i = 0; i < LogData.Log.size(); i++){
            if(!ch0){
                ch0=true;
                t0 = (TextView) findViewById(R.id.t0);
                t0.setText(LogData.Log.get(i));
                continue;
            }
            if(!ch1){
                ch1=true;
                t1 = (TextView) findViewById(R.id.t1);
                t1.setText(LogData.Log.get(i));
                continue;
            }
            if(!ch2){
                ch2=true;
                t2 = (TextView) findViewById(R.id.t2);
                t2.setText(LogData.Log.get(i));
                continue;
            }
            if(!ch3){
                ch3=true;
                t3 = (TextView) findViewById(R.id.t3);
                t3.setText(LogData.Log.get(i));
                continue;
            }
            if(!ch4){
                ch4=true;
                t4 = (TextView) findViewById(R.id.t4);
                t4.setText(LogData.Log.get(i));
                continue;
            }
            if(!ch5) {
                ch5 = true;
                t5 = (TextView) findViewById(R.id.t5);
                t5.setText(LogData.Log.get(i));
                continue;
            }
            if(!ch6){
                ch6=true;
                t6 = (TextView) findViewById(R.id.t6);
                t6.setText(LogData.Log.get(i));
                continue;
            }
            if(!ch7){
                ch7=true;
                t7 = (TextView) findViewById(R.id.t7);
                t7.setText(LogData.Log.get(i));
                continue;
            }
            if(!ch8){
                ch8=true;
                t8 = (TextView) findViewById(R.id.t8);
                t8.setText(LogData.Log.get(i));
                continue;
            }
        }
    }

    public void Continue(View view){
        final AlertDialog.Builder builder = new AlertDialog.Builder(this);
                builder.setMessage("Would you like to add any new flight information?")
                        .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {
                                startActivity(new Intent(AdminLog.this,NewFlights.class));
                                dialog.dismiss();
                            }
                        }).setNegativeButton("No",new DialogInterface.OnClickListener(){
                    @Override
                    public void onClick(DialogInterface dialog,int which){
                        startActivity(new Intent(AdminLog.this,MainActivity.class));
                        dialog.dismiss();
                    }
                });
                AlertDialog dialog = builder.create();
                dialog.show();
    }
}
