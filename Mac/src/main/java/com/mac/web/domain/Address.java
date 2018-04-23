package com.mac.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class Address {
private String customId, addr, detailAddr;
private int zipCode;
}
