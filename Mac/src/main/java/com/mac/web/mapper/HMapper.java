package com.mac.web.mapper;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface HMapper {
	public List<HashMap<String,?>> selectSubMainItems(HashMap<?,?> param);
	public List<HashMap<String,?>> getItemsByItemCode(HashMap<?,?> param);
	
	public int selectFirstItem(HashMap<?,?> param);
	
	public HashMap<String,?> findByItemCodenItemSeq(HashMap<?,?> param);
	public HashMap<String,?> findByItemSeq(HashMap<?,?> param);
	public List<HashMap<String,?>> selectChart(HashMap<?, ?> param);
	
	
	public void insertBasket(HashMap<?,?> param);
}
