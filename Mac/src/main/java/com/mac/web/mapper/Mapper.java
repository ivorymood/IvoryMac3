package com.mac.web.mapper;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.mac.web.domain.Command;
import com.mac.web.domain.Customer;

@Repository
public interface Mapper {
	public void insertMember(Command cmd);
	public int macBasket(Map<?, ?> param);
	public int macBasketUpdate(Map<?, ?> param);
	public List<?> macBasketTotalPrice(HashMap<?, ?> param);
	public int exist(Command cmd);
	public int selectBasket(Command cmd);
	public Customer serachCustomerById(Command cmd);
	public List<?> macDate(HashMap<?, ?> param);
	public List<?> macOrderBasket(HashMap<?, ?> param);
}