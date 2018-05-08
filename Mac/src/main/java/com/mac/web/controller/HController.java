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
import com.mac.web.service.IPostHashService;


@RestController
public class HController {
	private static final Logger logger = LoggerFactory.getLogger(HController.class);
	@Autowired HMapper hMapper;
	
	@RequestMapping(value="/subMainItems/{classCode}", method=RequestMethod.GET)
	public Map<?,?> getSubMainItems(@PathVariable("classCode") String classCode){
		logger.info("::::::::::::::::::::::::::::subMainItem {}", "ENTERED");
		Map<String, Object> map = new HashMap<>();
		HashMap<String, Object> param = new HashMap<>();
		param.put("classCode", classCode);
		map.put("subMainItems", new IGetHashService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				return hMapper.selectSubMainItems(param);
			}
		}.execute(param));
		System.out.println(map.get("subMainItems"));
		
		
		return map;
	}
	@RequestMapping(value="/item/{code1}/{code2}", method=RequestMethod.GET )
	public Map<?,?> getItem(@PathVariable("code1") String itemSeq, @PathVariable("code2") String itemCode){
		Map<String, Object> map = new HashMap<>();
		Map<String, Object> param = new HashMap<>();
		logger.info("::::::::::::::::::::::::::::getItem {}", "ENTERED");
		logger.info("itemSeq {}", itemSeq);
		logger.info("itemCode {}", itemCode);
		param.put("itemSeq", Integer.parseInt(itemSeq));
		param.put("itemCode", itemCode);
		
	
		map.put("item", new IGetHashService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				return hMapper.findByItemCodenItemSeq(param);
			}
		}.execute((HashMap<?, ?>) param));
		
		System.out.println("map 결과: "+map);
		return map;
	}
	@RequestMapping(value="/toBasket/{code1}/{code2}", method=RequestMethod.GET)
	public  Map<?,?> pushItem(@PathVariable("code1") String itemSeq, @PathVariable("code2") String itemCode){
		Map<String, Object> map = new HashMap<>();
		Map<String, String> param = new HashMap<>();
		logger.info("::::::::::::::::::::::::::::pushItem {}", "ENTERED");
		logger.info("itemSeq {}", itemSeq);
		logger.info("itemCode {}", itemCode);
		
		param.put("itemSeq", itemSeq);
		param.put("itemCode", itemCode);
		
		new IPostHashService() {
			
			@Override
			public void execute(HashMap<?, ?> param) {
				hMapper.insertBasket(param);
			}
		}.execute((HashMap<?, ?>) param);
		map.put("flag", "success");
		return map;
	}
	
}
