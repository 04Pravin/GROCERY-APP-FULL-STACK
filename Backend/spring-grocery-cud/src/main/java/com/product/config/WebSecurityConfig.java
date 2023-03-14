package com.product.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.cors() //allows cross-origin requests from browser
		.and().authorizeRequests() // to authorize all the request
		.anyRequest()
		.authenticated() // any request to the server must be authenticated 
		.and() // to chain multiple configurations together 
		.oauth2ResourceServer() // configure the server to act as OAuth 2.0 resource server
		.jwt() // the server will use JSON token for authentication
		.jwtAuthenticationConverter(jwtAuthenticationConverter()); // converts the JWT token into authentication object used for authorization
		return http.build();
	}

	JwtAuthenticationConverter jwtAuthenticationConverter() {
		final JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();
		jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(new KeycloakRoleConverter());

		return jwtAuthenticationConverter;
	}

}
