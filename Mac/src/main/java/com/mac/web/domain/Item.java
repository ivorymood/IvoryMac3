package com.mac.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
@Lazy
public class Item {
private String itemSeq,
			   itemName, 
			   colorExp,
			   textureExp,
			   picName,
			   itemCode;
private int itemStock;
}
