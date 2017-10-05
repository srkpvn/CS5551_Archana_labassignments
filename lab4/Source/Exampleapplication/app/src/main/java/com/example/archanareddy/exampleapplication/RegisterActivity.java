package com.example.archanareddy.exampleapplication;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.TextView;

/**
 * Created by ARCHANA REDDY on 9/19/2017.
 */

public class RegisterActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_regi);
        TextView ls= (TextView) findViewById(R.id.btn_login);

        /*
        ls.setOnClickListener(new View.OnClickListener(){
            public void onClick(View arg0){
                finish();
            }

        });
        */
    }
}