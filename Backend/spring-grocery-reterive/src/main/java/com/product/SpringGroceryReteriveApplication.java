package com.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

import com.product.service.IProductService;

@SpringBootApplication
@EnableEurekaClient
public class SpringGroceryReteriveApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(SpringGroceryReteriveApplication.class, args);
	}

	@Autowired
	
	private IProductService productService;
	@Override
	public void run(String... args) throws Exception {
//		productService.getAll().forEach(System.out::println);
//		System.out.println((productService.getById(1)));
//		System.out.println(productService.keywordSearch("milk"));
	}
}
