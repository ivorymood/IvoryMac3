package com.mac.web.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mac.web.mapper.Mapper;

@Service
public class TxService implements ITxService  {
	@Autowired Mapper mapper;
	@Override @Transactional
	public String execute(List<Map<String, Object>> param) {
		 for(Map<String,Object> map : param) {			 
		 map.get("seq");
	     map.get("count");
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
		 new IGetHashService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				
				return mapper.deleteBasket(param);
			}
		}.execute((HashMap<?, ?>) map);
		return null;
	}
	@Override @Transactional
	public String executes(Map<String, String> param) {
		Map<String,Object> map = new HashMap<>();
		 map.put("orderTotal", param.get("orderTotal"));
		 map.put("customid", param.get("customId"));
         map.put("customname", param.get("customName"));
         map.put("customaddr1", param.get("customAddr1"));
         map.put("detailAddr", param.get("customAddr2")+"-"+param.get("customAddr3")+"-"+param.get("customAddr4"));
         map.put("phoneNum", param.get("customPhone")+"-"+param.get("customPhone1")+"-"+param.get("customPhone2"));
         map.put("customtext", param.get("customText"));
         new IGetHashService() {
				
				@Override
				public Integer execute(HashMap<?, ?> param) {
					
					return mapper.basketAddr(param);
				}
			}.execute((HashMap<?, ?>) map);
		new IDeleteService() {
			
			@Override
			public void execute(HashMap<?, ?> param) {
				mapper.deleteBasketById(param);
				
			}
		}.execute((HashMap<?, ?>) map);
		new IUpdateService() {
			
			@Override
			public void execute(HashMap<?, ?> param) {
				mapper.orderUpdate(param);
				
			}
		}.execute((HashMap<?, ?>) map);
		
		return null;
	}

}
