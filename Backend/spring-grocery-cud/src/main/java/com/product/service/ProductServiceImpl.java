package com.product.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.Exception.IdNotFoundException;
import com.product.controller.ProductController;
import com.product.model.Product;
import com.product.repository.IProductRepository;

@Service
public class ProductServiceImpl implements IProductService{

	private Logger logger = LoggerFactory.getLogger(ProductController.class);

	private IProductRepository productRepo;
	@Autowired
	public void setProductRepo(IProductRepository productRepo) {
		this.productRepo = productRepo;
	}
	

	@Override
	public void addProduct(Product product) {
		logger.info("Service implementation - adding product");
		productRepo.save(product);
		
	}
	
	@Override
	public void updateProduct(Product product) {
		logger.info("Service implementation - updating product");
		productRepo.save(product);
		
	}
	
	@Override
	public void deleteProduct(int id) throws IdNotFoundException {
		logger.info("Service implementation - deleting product");
//		if(productRepo.findById(id) == null) {
//			throw new IdNotFoundException("Id is invalid");
//		}
		productRepo.deleteById(id);		
	}

}
