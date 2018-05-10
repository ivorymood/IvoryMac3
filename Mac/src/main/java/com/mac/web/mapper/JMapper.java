package com.mac.web.mapper;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.mac.web.domain.Command;

@Repository
public interface JMapper {
	public int exist(Command cmd);
	public int selectIdExist(Command cmd);
	public int selectAddrExist(Command cmd);
	public int selectItemStock(HashMap<?, ?> param);
	public int existIntData(HashMap<?, ?> param);
	public int existIntBasket(HashMap<?, ?> param);
	public int selectLastAddrSeq(HashMap<?, ?> param);
	public int selectLastOrderSeq(HashMap<?, ?> param);
	
	public HashMap<?,?> selectMypage(HashMap<?, ?> param);
	public HashMap<?,?> selectTotalPrice(HashMap<?, ?> param);
	public HashMap<?,?> selectAddrSeqById(HashMap<?, ?> param);
	public HashMap<String, Object> checkItemStockBefore(Map<?,?> param);
	public List<?> selectMainItems(HashMap<?, ?> param);
	public List<HashMap<String, Object>> selectBasket(HashMap<?, ?> param);
	public List<?> selectMypageItem(HashMap<?, ?> param);
	
	public List<?> selectOrderById(HashMap<?, ?> param);
	
	
	public void insertOrder(Map<?, ?> param);
	public void insertOrderedItems(Map<?, ?> param);
	public void insertBasketNew(Map<?, ?> param);
	public void insertCustomer(Map<?, ?> param);
	public void insertOrderAddr(Map<?, ?> param);
	public void insertNewAddr(Map<?,?> param);
	
	public void updateBasketExist(Map<?, ?> param);
	public void updateBasketAsOrder(Map<?, ?> param);
	public void updateItemStock(HashMap<?,?> param);
	public void updateGradeCodeById(HashMap<?,?> param);
	public void updateConsumption(HashMap<?,?> param);
	
	
	public void deleteBasketById(HashMap<?, ?> param);
	public void deleteBasketByBasketSeq(HashMap<?, ?> param);
}