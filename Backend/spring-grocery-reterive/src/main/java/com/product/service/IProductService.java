package com.product.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.product.Exception.IdNotFoundException;
import com.product.model.Product;

public interface IProductService {
	
	List<Product>getAll();
	
	Product getById(int id) throws IdNotFoundException;
	
	List<Product> getSorted(String field, String order);
	
	Page<Product> pagination(int offset, int pageSize);
	
	List<Product> keywordSearch(String keyword);
	
//	void addProduct(Product product);
}
