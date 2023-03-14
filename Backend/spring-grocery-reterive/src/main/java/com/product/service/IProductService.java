package com.product.service;

import org.springframework.data.domain.Page;

import com.product.Exception.IdNotFoundException;
import com.product.model.Product;

public interface IProductService {
	
	
	Product getById(int id) throws IdNotFoundException;
	
	Page<Product> getAllSortedPagintor( int pageIndex,  int record,  String key,  boolean sort);
	
	long totalRecords();
}
