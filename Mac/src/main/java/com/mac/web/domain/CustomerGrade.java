package com.mac.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class CustomerGrade {
private String gradeCode, customId, gradeName;
private int accumMoney;
}
