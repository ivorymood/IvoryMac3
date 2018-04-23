package com.mac.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class Basket {
private String basketSeq, customId, OrderDate, ItemSeq;
private int totalPrice;
}
