package com.mac.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
@Lazy
public class Customer {
	private String customId
				  ,customPass
				  ,name
				  ,email
				  ,phoneNum				  
				  ,profile
				  ,joinDate
				  ,consumption
				  ,gradeCode;

}