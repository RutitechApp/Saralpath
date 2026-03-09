package com.compliancechecklist

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.widget.ProgressBar
import androidx.appcompat.app.AppCompatActivity

class SplashActivity : AppCompatActivity() {

    private lateinit var progressBar: ProgressBar
    private var progressStatus = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.launch_screen)

        progressBar = findViewById(R.id.progress_bar)

        Thread {
            while (progressStatus < 100) {
                progressStatus += 2
                Thread.sleep(30)

                Handler(Looper.getMainLooper()).post {
                    progressBar.progress = progressStatus
                }
            }

            startActivity(Intent(this, MainActivity::class.java))
            finish()

        }.start()
    }
}