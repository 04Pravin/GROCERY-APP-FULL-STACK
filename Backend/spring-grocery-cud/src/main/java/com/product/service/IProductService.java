package com.product.service;

import com.product.Exception.IdNotFoundException;
import com.product.model.Product;

public interface IProductService {

	void addProduct(Product product);
	
	void deleteProduct(int id) throws IdNotFoundException;
	
	void updateProduct(Product product);
	
	
	
}
