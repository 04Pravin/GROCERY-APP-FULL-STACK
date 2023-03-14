package com.product.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
	
	@GetMapping("/products/id/{id}")
	@PreAuthorize("hasAnyRole({'Manager','Editor','User'})")
	ResponseEntity<Product>getById(@PathVariable int id){
		logger.info("Controller - Getting product by id");
		return ResponseEntity.status(HttpStatus.OK).header("info","Getting products based on id").body(productService.getById(id));		
	}

	@GetMapping("/products/{record}/{pageIndex}/{key}/{sort}")
	@PreAuthorize("hasAnyRole({'Manager','Editor','User'})")
	ResponseEntity<List<Product>>sortPagination(@PathVariable int pageIndex, @PathVariable int record, @PathVariable String key, @PathVariable boolean sort){
		logger.info("Controller - Pagination");
		return ResponseEntity.status(HttpStatus.OK).header("info", "Pagination").body(productService.getAllSortedPagintor(pageIndex, record, key, sort).getContent());
	}
	
	@GetMapping("/products/count")
	@PreAuthorize("hasAnyRole({'Manager','Editor','User'})")
	ResponseEntity<Long>totalRecords(){
		return ResponseEntity.status(HttpStatus.OK).header("info","Greting user").body(productService.totalRecords());
	}
	
}
