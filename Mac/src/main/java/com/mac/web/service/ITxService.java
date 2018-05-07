package com.mac.web.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;
@Component
public interface ITxService {
	public void updateBasketAsOrder(List<Map<String, Object>> param);
	public void makeOrder(Map<String, Object> param);
	public HashMap<String, Object> putBasket(Map<String, Object> param);
}
