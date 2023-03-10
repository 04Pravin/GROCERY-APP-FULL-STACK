package com.product.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.product.model.Product;

@Repository
public interface IProductRepository extends MongoRepository<Product, Integer> {

//	@Query("{ $text: { $search: ?0 } }")
	List<Product> findByName(String keyword);
}
