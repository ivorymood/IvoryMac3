package com.mac.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
@Lazy
public class CommonFeature {
private String itemCode, commonName, commonExp, detailInfo, ingredient, weight;
private int price;
}
