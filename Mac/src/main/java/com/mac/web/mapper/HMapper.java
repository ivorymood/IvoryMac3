package com.mac.web.mapper;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface HMapper {
	public HashMap<?,?> findByItemCodenItemSeq(HashMap<?,?> param);
	
	public HashMap<?,?> findByItemSeq(HashMap<?,?> param);
	public void insertBasket(HashMap<?,?> param);
}
