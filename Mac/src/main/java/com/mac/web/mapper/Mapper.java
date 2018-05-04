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
	public int joinidSearch(Command cmd);
	public int insertAddr(Map<?, ?> param);
	public int basketAddr(Map<?, ?> param);
	public int macBasket(Map<?, ?> param);
	public int selectAddr(Command cmd);
	public int macBasketUpdate(Map<?, ?> param);
	public int macBasketUpdateOrder(Map<?, ?> param);
	public List<?> macBasketTotalPrice(HashMap<?, ?> param);
	public List<?> selectMypage(HashMap<?, ?> param);
	public List<?> selectMypageItem(HashMap<?, ?> param);
	public int exist(Command cmd);
	public int selectBasket(Command cmd);
	public List<?> addrSearch(HashMap<?, ?> param);
	public Customer serachCustomerById(Command cmd);
	public List<?> macDate(HashMap<?, ?> param);
	public int deleteBasket(HashMap<?, ?> param);
	public List<?> macOrderBasket(HashMap<?, ?> param);
	public List<?> searchOrderBasket(HashMap<?, ?> param);
	public List<?> searchChart(HashMap<?, ?> param);
}