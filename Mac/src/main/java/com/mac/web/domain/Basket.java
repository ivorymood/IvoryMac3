package com.mac.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
@Lazy
public class Basket {
private String basketSeq, customId, orderDate, itemSeq;
private int totalPrice;
}
