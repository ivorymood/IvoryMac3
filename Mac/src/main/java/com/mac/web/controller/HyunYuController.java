package com.mac.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mac.web.mapper.HMapper;
import com.mac.web.service.IGetHashService;


@RestController
@RequestMapping(value="/hyunyu")
public class HyunYuController {
	private static final Logger logger = LoggerFactory.getLogger(HyunYuController.class);
	@Autowired HMapper hMapper;
	
	
	@RequestMapping(value="/item/{code1}/{code2}", method=RequestMethod.GET )
	public Map<?,?> getItem(@PathVariable("code1") String itemSeq, @PathVariable("code2") String itemCode){
		Map<String, Object> map = new HashMap<>();
		Map<String, String> param = new HashMap<>();
		logger.info("getItem {}", "ENTERED");
		logger.info("itemSeq {}", itemSeq);
		logger.info("itemCode {}", itemCode);
		
		map.put("item", new IGetHashService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return hMapper.findByItemCodenItemSeq(param);
			}
		}.execute((HashMap<?, ?>) param));
		
		
		return map;
	}

	
}
