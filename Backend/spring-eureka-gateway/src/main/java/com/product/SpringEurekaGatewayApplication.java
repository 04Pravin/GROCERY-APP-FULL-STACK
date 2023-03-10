package com.product;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaClient
public class SpringEurekaGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringEurekaGatewayApplication.class, args);
	}
	@Bean
	public RouteLocator customRoutes(RouteLocatorBuilder builder) {
		return builder.routes()
				.route("productService",ps->ps.path("/product-api/**").uri("lb://PRODUCT-CRUD-SERVICE"))
				.route("productReteriveService",ps->ps.path("/product-reterive-api/**").uri("lb://PRODUCT-RETERIVE-SERVICE"))
				.build();
	}

}
