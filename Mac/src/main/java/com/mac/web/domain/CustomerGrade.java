package com.mac.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
@Lazy
public class CustomerGrade {
private String gradeCode
			  ,gradeName
			  ,customId;   /*plusDiscount*/
private int accumMoney;  
}
