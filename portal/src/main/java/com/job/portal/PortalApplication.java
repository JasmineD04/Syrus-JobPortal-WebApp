package com.job.portal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class PortalApplication {

	public static void main(String[] args) {
    ConfigurableApplicationContext applicationContext= SpringApplication.run(PortalApplication.class, args);
    System.out.println("running");
	}


}
