package com.mac.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class CommonFeature {
private String itemCode, CommonName, CommonExp, detailInfo, ingredient, weight;
private int price;
}
