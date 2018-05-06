package com.mac.web.mapper;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.mac.web.domain.Command;

@Repository
public interface JMapper {
	public int exist(Command cmd);
	public int existIntData(HashMap<?, ?> param);
	
	public List<?> selectMainItems(HashMap<?, ?> param);
	public List<?> selectBasket(HashMap<?, ?> param);
	public HashMap<?,?> selectMypage(HashMap<?, ?> param);
	public List<?> selectMypageItem(HashMap<?, ?> param);
	public int selectAddr(Command cmd);
	public int selectItemStock(Command cmd);
	
	public int joinidSearch(Command cmd);
	public int basketAddr(Map<?, ?> param);
	public List<?> macBasketTotalPrice(HashMap<?, ?> param);
	public List<?> addrSearch(HashMap<?, ?> param);
	public List<?> searchOrderBasket(HashMap<?, ?> param);
	
	public void insertOrder(Map<?, ?> param);
	public void insertOrderedItems(Map<?, ?> param);
	public int insertAddr(Map<?, ?> param);
	public void insertBasketNew(Map<?, ?> param);
	public void insertMember(Command cmd);
	
	public int macBasketUpdateOrder(Map<?, ?> param);
	public void updateBasketExist(Map<?, ?> param);
	
	public int deleteBasketByBasketSeq(HashMap<?, ?> param);
	public void deleteBasketById(HashMap<?, ?> param);
}