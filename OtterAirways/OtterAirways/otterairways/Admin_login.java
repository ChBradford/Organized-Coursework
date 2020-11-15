package com.example.christopher.otterairways;
//Author: Christopher Bradford
//Abstract: This class is for logging the admin in, it's specific to the admin as only 1 entry works here (The admin account).
//Date:5/12
//ID:1820
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;

public class Admin_login extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
        setContentView(R.layout.admin_login);
    }

    public void adminLogin(View view){
        EditText user = (EditText)findViewById(R.id.editTextAU);
        EditText pass = (EditText)findViewById(R.id.editTextAP);
        String username = user.getText().toString();
        String password = pass.getText().toString();

        if(username.equals("!admiM2") && password.equals("!admiM2")){
            AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setMessage("Admin login successful")
                    .setPositiveButton("ok", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog,int which) {
                            dialog.dismiss();
                            startActivity(new Intent(Admin_login.this,AdminLog.class));
                        }
                    });
            AlertDialog dialog = builder.create();
            dialog.show();
        } else{
            AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setMessage("Invalid admin username/password")
                    .setPositiveButton("ok", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog,int which) {
                            dialog.dismiss();
                        }
                    });
            AlertDialog dialog = builder.create();
            dialog.show();
        }
    }
}
