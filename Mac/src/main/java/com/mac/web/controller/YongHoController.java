package com.mac.web.controller;


import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mac.web.domain.Command;
import com.mac.web.domain.Common;
import com.mac.web.domain.Customer;
import com.mac.web.mapper.Mapper;
import com.mac.web.service.ICountService;
import com.mac.web.service.IGetHashService;
import com.mac.web.service.IGetService;

@RestController
public class YongHoController {
	private static final Logger logger = LoggerFactory.getLogger(YongHoController.class);
	@Autowired Mapper mapper;
	@Autowired Command cmd;
	@Autowired Customer customer;
	@Autowired Common common;
	
	@RequestMapping(value="/{type}/login",method=RequestMethod.POST,consumes="application/json")
	public Map<?,?> login(@PathVariable String type,@RequestBody Map<String, String> param) {
		System.out.println("컨트롤러는 들어옴");
		logger.info("전달된 ID: {}", param.get("customId"));
		logger.info("전달된 PW: {}", param.get("customPass"));
		cmd = new Command();
		cmd.setCol1(param.get("customId"));
		cmd.setCol2(param.get("customPass"));
		cmd.setData1(type);
		System.out.println(cmd.getData1()+"=data1의 값은");
		int count = 0;
		Map<String,Object> map = new HashMap<>();
		count = new ICountService() {
			
			@Override
			public int execute(Command cmd) {
				// TODO Auto-generated method stub
				return mapper.exist(cmd);
			}
		}.execute(cmd);
		map.put("success", count);
		System.out.println("count값은="+count);
		if(count==1) {
			map.put("customer", new IGetService() {
				
				@Override
				public Object execute(Command cmd) {
					return mapper.serachCustomerById(cmd);
				}
			}.execute(cmd));
		}
		
		return map;
	}
	
	@RequestMapping(value="/{type}/basket",method=RequestMethod.POST,consumes="application/json")
	public Map<?,?> itemsBasket(@PathVariable String type,
			@RequestBody Map<String, String> param) {
		System.out.println("컨트롤러는 들어옴");
		System.out.println(type+"AAAAAAAAAAAAAAAA");
		Map<String,Object> map = new HashMap<>();
		cmd = new Command();
		System.out.println(cmd.getData1()+"=data1의 값은");
		cmd.setCol1(param.get("matte"));
		System.out.println(cmd.getCol1()+"=setCol1의 값은");
		
		
		return map;
	}
	@RequestMapping("/search/")
	public Map<?,?> itemSearch() {
		System.out.println("컨트롤러는 들어옴");
		Map<String,Object> map = new HashMap<>();
		map.put("main", new IGetHashService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.macDate(param);
			}
		}.execute((HashMap<?, ?>) map));		
		return map;
	}
	
	
}
