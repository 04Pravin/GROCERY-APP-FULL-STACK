package com.product.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Products")
public class Product {
	
	@Id
	private Integer id;
	private String name;
	private String category;
	private String brand;
	private double price;
	private double discount;
	private Date manufDate;
	private Date expDate;
	private double rating;
	private double quantity;
	private String unit;
	private String availability;
	private String orginiOfCountry;
	private long barcodeNum;
	private String storage;
	private String benefits;
	private String usedFor;
	private String container;
	private ManfDetails manfDetails;
	
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(Integer id, String name, String category, String brand, double price, double discount, Date manufDate,
			Date expDate, double rating, double quantity, String unit, String availability, String orginiOfCountry, long barcodeNum,
			String storage, String benefits, String usedFor, String container, ManfDetails manfDetails) {
		super();
		this.id = id;
		this.name = name;
		this.category = category;
		this.brand = brand;
		this.price = price;
		this.discount = discount;
		this.manufDate = manufDate;
		this.expDate = expDate;
		this.rating = rating;
		this.quantity = quantity;
		this.unit=unit;
		this.availability = availability;
		this.orginiOfCountry = orginiOfCountry;
		this.barcodeNum = barcodeNum;
		this.storage = storage;
		this.benefits = benefits;
		this.usedFor = usedFor;
		this.container = container;
		this.manfDetails = manfDetails;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public double getdiscount() {
		return discount;
	}

	public void setdiscount(double discount) {
		this.discount = discount;
	}

	public Date getManufDate() {
		return manufDate;
	}

	public void setManufDate(Date manufDate) {
		this.manufDate = manufDate;
	}

	public Date getExpDate() {
		return expDate;
	}

	public void setExpDate(Date expDate) {
		this.expDate = expDate;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public double getQuantity() {
		return quantity;
	}

	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}

	public String getAvailability() {
		return availability;
	}

	public void setAvailability(String availability) {
		this.availability = availability;
	}

	public String getOrginiOfCountry() {
		return orginiOfCountry;
	}

	public void setOrginiOfCountry(String orginiOfCountry) {
		this.orginiOfCountry = orginiOfCountry;
	}

	public long getBarcodeNum() {
		return barcodeNum;
	}

	public void setBarcodeNum(long barcodeNum) {
		this.barcodeNum = barcodeNum;
	}

	public String getStorage() {
		return storage;
	}

	public void setStorage(String storage) {
		this.storage = storage;
	}

	public String getBenefits() {
		return benefits;
	}

	public void setBenefits(String benefits) {
		this.benefits = benefits;
	}

	public String getUsedFor() {
		return usedFor;
	}

	public void setUsedFor(String usedFor) {
		this.usedFor = usedFor;
	}

	public String getContainer() {
		return container;
	}

	public void setContainer(String container) {
		this.container = container;
	}

	public ManfDetails getManfDetails() {
		return manfDetails;
	}

	public void setManfDetails(ManfDetails manfDetails) {
		this.manfDetails = manfDetails;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", category=" + category + ", brand=" + brand + ", price="
				+ price + ", discount=" + discount + ", manufDate=" + manufDate + ", expDate=" + expDate + ", rating="
				+ rating + ", quantity=" + quantity + ", unit=" + unit + ", availability=" + availability
				+ ", orginiOfCountry=" + orginiOfCountry + ", barcodeNum=" + barcodeNum + ", storage=" + storage
				+ ", benefits=" + benefits + ", usedFor=" + usedFor + ", container=" + container + ", manfDetails="
				+ manfDetails + "]";
	}


	
}
