package com.product.service;

import java.util.List;

import javax.management.Query;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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
	public List<Product> getAll() {
		logger.info("Service implementation - getting all the products");
		return productRepo.findAll();
	}


	@Override
	public Product getById(int id) throws IdNotFoundException {
		logger.info("Service implementation - getting product by its id");
		return productRepo.findById(id)
				.orElseThrow(()-> new IdNotFoundException("Id is invalid"));
	}

	@Override
	public List<Product> getSorted(String field, String order) {
		logger.info("Service implementation - sorting products");
		if(order.equalsIgnoreCase("asc")) {
			return productRepo.findAll(Sort.by(Sort.Direction.ASC, field));
		} else {
			return productRepo.findAll(Sort.by(Sort.Direction.DESC, field));
		}
	}

	@Override
	public Page<Product> pagination(int offset, int pageSize) {	
		logger.info("Service implementation - Pagination");
		return productRepo.findAll(PageRequest.of(offset, pageSize));
	}

	@Override
	public List<Product> keywordSearch(String keyword) {
		return productRepo.findByName(keyword);
//		return null;
	}
	
//	@Override
//	public void addProduct(Product product) {
//		logger.info("Service implementation - adding product");
//		productRepo.save(product);
//		
//	}
}
