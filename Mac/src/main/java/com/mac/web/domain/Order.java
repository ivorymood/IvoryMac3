package com.mac.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class Order {
private String orderSeq, customId, orderDate, itemSeq;
private int totalPrice;
}
