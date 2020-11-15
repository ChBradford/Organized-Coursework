package com.example.christopher.otterairways;
//Author: Christopher Bradford
//Abstract: This is the login page before the cancellation page. Confirms the currently logged user.
//Date:5/12
//ID:1820
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;

public class CancelLogin extends AppCompatActivity {
        int kick = 0;
        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(null);
            setContentView(R.layout.login_page);
        }

    public void logIn(View view){
        EditText username = (EditText)findViewById(R.id.editTextU); //NA, NewUser
        EditText password = (EditText)findViewById(R.id.editTextP); //NP, NewPassword
        String user = username.getText().toString();
        String pass = password.getText().toString();

        if(kick == 2){
            startActivity(new Intent(CancelLogin.this,MainActivity.class));
        }

        if(!Account.accounts.containsKey(user) || !Account.accounts.containsValue(pass))
        {
            kick+=1;
            AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setMessage("Incorrect username/password")
                    .setPositiveButton("ok", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            dialog.dismiss();
                        }
                    });
            AlertDialog dialog = builder.create();
            dialog.show();
        }

        else if(Account.accounts.get(user).equals(pass)){
            Account.set_user(user);
            AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setMessage("Login successful")
                    .setPositiveButton("ok", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog,int which) {
                            dialog.dismiss();
                            startActivity(new Intent(CancelLogin.this,CancelFlight.class));
                        }
                    });
            AlertDialog dialog = builder.create();
            dialog.show();
        }

        else if(!Account.accounts.get(user).equals(pass)){
            kick+=1;
            AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setMessage("Incorrect username/password")
                    .setPositiveButton("ok", new DialogInterface.OnClickListener() {
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
