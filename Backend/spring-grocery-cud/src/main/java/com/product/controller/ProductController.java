package com.product.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.product.model.Product;
import com.product.service.IProductService;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("product-api")
public class ProductController {
	
	private Logger logger = LoggerFactory.getLogger(ProductController.class);

	private IProductService productService;
	@Autowired
	public void setProductService(IProductService productService) {
		this.productService = productService;
	}

	@PostMapping("/products")
	ResponseEntity<Void>addProduct(@RequestBody Product product){
		logger.info("Controller - Adding product");
		productService.addProduct(product);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}
	
	@PutMapping("/products")
	ResponseEntity<Void>updateProduct(@RequestBody Product product){
		logger.info("Controller - Updating product");
		productService.updateProduct(product);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}
	@DeleteMapping("/id/{id}")
	ResponseEntity<Void>deleteProduct(@PathVariable int id){
		logger.info("Controller - Deleting product");
		productService.deleteProduct(id);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}
	
	
}
