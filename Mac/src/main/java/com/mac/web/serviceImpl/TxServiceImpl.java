package com.mac.web.serviceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mac.web.mapper.JMapper;
import com.mac.web.service.IGetHashService;
import com.mac.web.service.ITxService;
@Service
public class TxServiceImpl implements ITxService {

	@Autowired JMapper jMapper;
	@Override @Transactional
	public void updateList(List<Map<String, Object>> param) {
		System.out.println("----------------------------@Transactional    updateList");
		for(Map<String,Object> p : param) {			 
		 p.get("seq");
	     p.get("count");
    	  new IGetHashService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				return jMapper.macBasketUpdateOrder(param);
			}
		}.execute((HashMap<?, ?>) p);
		 }
	}
	
	@Override @Transactional
	public void delete(HashMap<?, ?> param) {
		System.out.println("---------------------------------@Transactional    delete");
		 Map<String,Object> p = new HashMap<>();
		 p.put("basketSeq", param.get("basketSeq"));
		 new IGetHashService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				return jMapper.deleteBasketByBasketSeq(param);
			}
		}.execute((HashMap<?, ?>) p);
	}

}
