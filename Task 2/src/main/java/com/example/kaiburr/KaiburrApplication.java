package com.example.kaiburr;

import com.example.kaiburr.controller.TaskController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses = TaskController.class)
public class KaiburrApplication {

	public static void main(String[] args) {
		SpringApplication.run(KaiburrApplication.class, args);
	}

}
