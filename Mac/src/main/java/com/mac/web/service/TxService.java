package com.mac.web.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mac.web.mapper.Mapper;

@Service
public class TxService implements ITxService {
	@Autowired Mapper mapper;
	@Override @Transactional
	public String execute(List<Map<String, Object>> param) {
		 for(Map<String,Object> map : param) {			 
		 map.get("seq");
	     map.get("count");
    	 System.out.println(map.get("seq"));
    	 System.out.println(map.get("count"));
    	  new IGetHashService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.macBasketUpdateOrder(param);
			}
		}.execute((HashMap<?, ?>) map);
		 }
		
		return null;
	}
	@Override @Transactional
	public String delete(HashMap<?, ?> param) {
		 Map<String,Object> map = new HashMap<>();
		 map.put("basketSeq", param.get("basketSeq"));
		 System.out.println(map.put("basketSeq", param.get("basketSeq")));
		 new IGetHashService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				
				return mapper.deleteBasket(param);
			}
		}.execute((HashMap<?, ?>) map);
		return null;
	}

	


}
