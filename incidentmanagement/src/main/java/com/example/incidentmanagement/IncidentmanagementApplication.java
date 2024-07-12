package com.example.incidentmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.example.incidentmanagement.repository")
public class IncidentmanagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(IncidentmanagementApplication.class, args);
	}

}
