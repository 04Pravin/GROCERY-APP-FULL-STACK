package com.product.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.product.Exception.FieldNotFoundException;
import com.product.Exception.IdNotFoundException;
import com.product.controller.ProductController;
import com.product.model.Product;
import com.product.repository.IProductRepository;

@Service
public class ProductServiceImpl implements IProductService {

	private Logger logger = LoggerFactory.getLogger(ProductController.class);

	private IProductRepository productRepo;

	@Autowired
	public void setProductRepo(IProductRepository productRepo) {
		this.productRepo = productRepo;
	}

	@Override
	public Product getById(int id) throws IdNotFoundException {
		logger.info("Service implementation - getting product by its id");
		return productRepo.findById(id).orElseThrow(() -> new IdNotFoundException("Id is invalid"));
	}

	@Override
	public Page<Product> getAllSortedPagintor(int pageIndex, int record, String key, boolean sort) {
		logger.info("Service implementation - Pagination and sorting");
		if (key.equals(null)) {
			throw new FieldNotFoundException("The selected field is invalid");
		} else {
			if (!sort) {
				return productRepo
						.findAll(PageRequest.of(record, pageIndex).withSort(Sort.by(Sort.Direction.ASC, key)));
			} else {
				return productRepo
						.findAll(PageRequest.of(record, pageIndex).withSort(Sort.by(Sort.Direction.DESC, key)));
			}
		}
	}

	@Override
	public long totalRecords() {

		return productRepo.count();
	}

}
