package com.mac.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class Item {
private String itemSeq, itemName, colorExp, textureExp, itemCode;
private int itemStock;
}
