package com.mac.web.serviceImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mac.web.domain.Command;
import com.mac.web.mapper.JMapper;
import com.mac.web.service.ITxService;
@Service
public class TxServiceImpl implements ITxService {

	@Autowired JMapper jMapper;
	@Autowired Command cmd;
	@Override @Transactional
	public void updateBasketAsOrder(List<Map<String, Object>> param) {
		System.out.println("----------------------------@Transactional    updateList");
		for(Map<String,Object> p : param) {			 
			p.get("itemSeq");
		    p.get("itemCount");
		    jMapper.updateBasketAsOrder(p);
		}
	}
	
	@Override @Transactional
	public void makeOrder(Map<String, Object> param) {
		System.out.println("---------------------------------@Transactional    makeOrder");
		int flag = (int) param.get("newAddr");
		int addrSeq = 0;
		HashMap<String, Object> temp = new HashMap<>();
		HashMap<String, Object> paramMap = new HashMap<>();
		
		if(flag == 1) {
			System.out.println("flag =1");
			jMapper.insertOrderAddr(param);
			addrSeq = jMapper.selectLastAddrSeq((HashMap<?, ?>) param);
		}else {
			System.out.println("flag !=1");
			addrSeq = (int) jMapper.selectAddrSeqById((HashMap<?, ?>) param).get("addrSeq");
		}
		paramMap.put("addrSeq", addrSeq);
		paramMap.put("customId", param.get("customId"));
		paramMap.put("totalPrice", jMapper.selectTotalPrice((HashMap<?, ?>) param).get("discountedTotal"));
		
		jMapper.insertOrder(paramMap);
		
		
		List<HashMap<String, Object>> tempList = new ArrayList<>();
		tempList = jMapper.selectBasket(paramMap);
		
		temp.put("orderSeq", jMapper.selectLastOrderSeq(paramMap));
		for(int i=0; i<tempList.size(); i++) {
			System.out.println("tempList: "+tempList.get(i));
			
			temp.put("itemSeq", tempList.get(i).get("itemSeq"));
			temp.put("itemCount", tempList.get(i).get("itemCount"));
			jMapper.insertOrderedItems(temp);
			jMapper.updateItemStock(temp);
		}
		
		jMapper.deleteBasketById(paramMap);
	}

	@Override @Transactional
	public HashMap<String, Object> putBasket(Map<String, Object> param) {
		System.out.println("---------------------------------@Transactional    putBasket");
		HashMap<String, Object> map = new HashMap<>();
		HashMap<String, Object> paramMap = new HashMap<>();
		
		int flag = -1;
		int stockCount = 0;
		int count = 0;
	
		paramMap.put("col1", "item_seq");
		paramMap.put("data1", param.get("itemSeq"));
		paramMap.put("col2", "custom_id");
		paramMap.put("data2", param.get("customId"));
		paramMap.put("type", "basket");
		
		stockCount = jMapper.selectItemStock(paramMap);
		System.out.println("stockCount: "+ stockCount);
		
		if(stockCount > 0) {
			count = jMapper.existIntData(paramMap);
			
			if (count > 0) {
				System.out.println("if + count" + count);
				flag = 1;
				jMapper.updateBasketExist(param);
			} else {
				System.out.println("else + count" + count);
				flag = 1;
				jMapper.insertBasketNew(param);						
			}
			
		}else {
			flag = 0;
		}
		map.put("success", flag);
		
		
		return map;
	}

}
