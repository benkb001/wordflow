package com.wordflow.wordflow_api;

import javax.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WordflowApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(WordflowApiApplication.class, args);
	}

	@PostConstruct
	public void logStartupMessage() {
		System.out.println(">>> Wordflow API has started. This is build X.");
	}
}
