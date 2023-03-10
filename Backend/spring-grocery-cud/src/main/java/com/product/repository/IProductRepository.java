package com.product.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.product.model.Product;

public interface IProductRepository extends MongoRepository<Product, Integer> {

}
