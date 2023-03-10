package com.product.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.product.model.Product;
import com.product.service.IProductService;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping("product-reterive-api")
public class ProductController {
	
	private Logger logger = LoggerFactory.getLogger(ProductController.class);

	private IProductService productService;
	@Autowired
	public void setProductService(IProductService productService) {
		this.productService = productService;
	}
	
	@GetMapping("/products")
	ResponseEntity<List<Product>>getAll(){
		logger.info("Controller - Getting all products");
		return ResponseEntity.status(HttpStatus.OK).header("info","Getting all the products").body(productService.getAll());		
	}
	
	@GetMapping("/products/id/{id}")
	ResponseEntity<Product>getById(@PathVariable int id){
		logger.info("Controller - Getting product by id");
		return ResponseEntity.status(HttpStatus.OK).header("info","Getting products based on id").body(productService.getById(id));		
	}
	
	@GetMapping("/products/field/{field}/order/{order}")
	ResponseEntity<List<Product>>getSorted(@PathVariable String field, @PathVariable String order){
		logger.info("Controller - Getting all products sorted");
		return ResponseEntity.status(HttpStatus.OK).header("info","Getting all products sorted").body(productService.getSorted(field, order));		
	}
	
	@GetMapping("/products/offset/{offset}/pageSize/{pageSize}")
	ResponseEntity<Page<Product>>pagination(@PathVariable int offset, @PathVariable int pageSize){
		logger.info("Controller - Pagination");
		return ResponseEntity.status(HttpStatus.OK).header("info", "Pagination").body(productService.pagination(offset, pageSize));
	}
	
	@GetMapping("/products/keyword/{keyword}")
	ResponseEntity<List<Product>>keywordSearch(@PathVariable String keyword){
		return ResponseEntity.status(HttpStatus.OK).header("info", "Keyword search").body(productService.keywordSearch(keyword));
	}
	
	
}
