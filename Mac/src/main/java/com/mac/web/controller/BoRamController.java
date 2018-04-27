package com.mac.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.mac.web.domain.Command;
import com.mac.web.domain.Customer;

@SessionAttributes("loginUser")
@RequestMapping("/admin")
@Controller
public class BoRamController {
	private static final Logger logger = LoggerFactory.getLogger(BoRamController.class);
	@Autowired Command cmd;
	@Autowired Customer custom;
	@RequestMapping(value="/login",method=RequestMethod.GET)
	public String custMana() {
		logger.info("어드민 컨트롤러 custMana() =============================");
		custom.setCustomPass("1");
		int a = 1;
		if(a==1) {
			logger.info("어드민 컨트롤러 custMana111111111() =============================");
			return "login:login.tiles";
		}else {
			return "redirect:/admin";
		}
	}
	@RequestMapping(value="/member",method=RequestMethod.GET)
	public String member() {
		logger.info("어드민 컨트롤러 addItem()===============================");
		return "custMana.admin";
	}
	@RequestMapping(value="/addItem",method=RequestMethod.GET)
	public String addItem() {
		logger.info("어드민 컨트롤러 addItem()===============================");
		return "addItem.admin";
	}
	
	@RequestMapping(value="/itemList",method=RequestMethod.GET)
	public String itemList() {
		logger.info("어드민 컨트롤러 itemList()===============================");
		return "itemList.admin";
	}
	
}