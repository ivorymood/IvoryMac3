package com.mac.web.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.omg.CORBA.PUBLIC_MEMBER;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mac.web.domain.Command;
import com.mac.web.domain.Common;
import com.mac.web.domain.Customer;
import com.mac.web.mapper.Mapper;

@RestController
public class YongHoController {
	private static final Logger logger = LoggerFactory.getLogger(YongHoController.class);
	@Autowired Mapper mapper;
	@Autowired Command cmd;
	@Autowired Customer customer;
	@Autowired Common common;
	@RequestMapping(value="/{type}/login",method=RequestMethod.POST,consumes="application/json")
	public Map<?,?> login(@RequestBody Map<String, String> param) {
		System.out.println("컨트롤러는 들어옴");
		logger.info("전달된 ID: {}", param.get("id"));
		logger.info("전달된 PW: {}", param.get("pass"));
		Map<String,String> map = new HashMap<>();
	
		
		return null;
	}
}
