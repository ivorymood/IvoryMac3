package com.mac.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
@Lazy
public class Command {
	protected String type, col1, col2, data1, data2;
	protected Address address;
	protected Comment comment;
	protected CommonFeature commonFeature;
	protected Customer customer;
	protected CustomerGrade customerGrade;
	protected Item item;
	protected Order order;
	protected Path path;
	
}
	