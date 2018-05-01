package com.mac.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data @Lazy
public class Orders {
	private String orderSeq, customId, orderDate, itemSeq, totalPrice;
}
