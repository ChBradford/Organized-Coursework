package com.example.christopher.otterairways;
//Author: Christopher Bradford
//Abstract: This class creates accounts and checks the requirements. Sends users back to home page after 2 fails.
//Date:5/12
//ID:1820
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import java.util.Calendar;

public class AccountCreation extends AppCompatActivity{
    static int kick=0;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
        setContentView(R.layout.create_account);
    }

    public void checkAccount(View view){  //check new username and new password
        EditText username = (EditText)findViewById(R.id.editTextNU); //NA, NewUser
        EditText password = (EditText)findViewById(R.id.editTextNP); //NP, NewPassword
        String user = username.getText().toString();
        String pass = password.getText().toString();
        int tick = 0;

        boolean duplicateFlag = false;
        boolean invalidFlag = false;
        if(user.matches(".*[A-Z].*") && user.matches(".*[0-9].*") && user.matches(".*[a-z].*") && ((user.matches(".*[!-%].*") || user.contains("@")))) {
            tick += 1;
        } else {
            invalidFlag = true;
        }

        if(pass.matches(".*[A-Z].*") && pass.matches(".*[0-9].*") && pass.matches(".*[a-z].*") && ((pass.matches(".*[!-%].*") || pass.contains("@")))) {
            tick += 1;
        } else {
            invalidFlag = true;
        }

        if(user.equals("!admiM2")) {
            tick -= 1;
            duplicateFlag = true;
        }

        if(Account.accounts.containsKey(user)){
            tick -= 1;
            duplicateFlag = true;
        }

        if(tick == 2) {
            Account.accounts.put(user,pass);
            LogData.Log.add("Transaction type = new account " + user + ", " + Calendar.getInstance().getTime());
            kick = 0;

            AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setMessage("New account successfully created")
                    .setPositiveButton("ok", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog,int which) {
                            dialog.dismiss();
                            startActivity(new Intent(AccountCreation.this,MainActivity.class));
                        }
                    });
            AlertDialog dialog = builder.create();
            dialog.show();
        }else{
            kick++;
        }

        if(kick==2 && !invalidFlag && duplicateFlag){
            kick=0;
            AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setMessage("Please choose another username").setTitle("duplicate account")
                    .setPositiveButton("ok",new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which){
                            dialog.dismiss();
                            startActivity(new Intent(AccountCreation.this,MainActivity.class));
                        }
                    });
            AlertDialog dialog = builder.create();
            dialog.show();
        }

        if(kick==2 && invalidFlag){
            kick=0;
            AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setMessage("Invalid username/password").setTitle("Invalid account")
                    .setPositiveButton("ok",new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which){
                            dialog.dismiss();
                            startActivity(new Intent(AccountCreation.this,MainActivity.class));
                        }
                    });
            AlertDialog dialog = builder.create();
            dialog.show();
        }

            if (!invalidFlag&& duplicateFlag&& kick!=2) {
                AlertDialog.Builder builder = new AlertDialog.Builder(this);
                builder.setMessage("Please choose another username").setTitle("duplicate account")
                        .setPositiveButton("ok", new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {
                                dialog.dismiss();
                            }
                        });
                AlertDialog dialog = builder.create();
                dialog.show();
            }

        if(!duplicateFlag&&invalidFlag&&kick!=2){
            AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setMessage("Invalid username and/or password").setTitle("invalid account")
                    .setPositiveButton("ok",new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which){
                            dialog.dismiss();
                        }
            });
            AlertDialog dialog = builder.create();
            dialog.show();
        }
    }

}
