package com.mac.web.mapper;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface HMapper {
	public HashMap<String,String> findByItemCodenItemSeq(HashMap<?,?> param);
	
	
	
}
