package com.mac.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.mac.web.domain.Command;
import com.mac.web.domain.Customer;
import com.mac.web.factory.ContextFactory;

@SessionAttributes("loginUser")
/*@RequestMapping("/admin")*/
@Controller
public class AdminController {
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@Autowired Command cmd;
	@Autowired Customer custom;
	@Autowired ContextFactory ctx;
	@RequestMapping(value="/admin/login",method=RequestMethod.GET)
	public String custMana(Model model) {
		model.addAttribute("path", ctx.ptx());
		//logger.info("어드민 컨트롤러 custMana() =============================");
		/*custom.setCustomPass("1");*/
		int a = 1;
		if(a==1) {
		//	logger.info("어드민 컨트롤러 custMana111111111() =============================");
			return "login.login";
		}else {
			return "redirect:/admin";
		}		
	}
	@RequestMapping(value="/admin/custMana",method=RequestMethod.POST)
	public String custMana(Model model,
			@RequestParam("inp-login-customId")String id,
            @RequestParam("inp-login-customPass")String pass
			) {
		logger.info("아이디{}", id);
		logger.info("어드민 컨트롤러 custMana() =============================");
	/*	custom.setCustomPass("1");*/
	/*	if(id=="admin") {
			logger.info("어드민 컨트롤러 custMana111111111() =============================");
			custom.setCustomId(id);
			custom.setCustomPass(pass);
			logger.info("아이디는 {}", custom.getCustomId());
			logger.info("비번은 {}", custom.getCustomPass());
			return "custMana.admin";
		}else {
			return "redirect:/admin";
		}	*/	
		return "custMana.admin";
	}
	@RequestMapping(value="/admin/member",method=RequestMethod.GET)
	public String member() {
		logger.info("어드민 컨트롤러 addItem()===============================");
		return "custMana.admin";
	}
	@RequestMapping(value="/admin/addItem",method=RequestMethod.GET)
	public String addItem() {
		logger.info("어드민 컨트롤러 addItem()===============================");
		return "addItem.admin";
	}
	
	@RequestMapping(value="/admin/itemList", method=RequestMethod.GET)
	public String itemList() {
		logger.info("어드민 컨트롤러 itemList()===============================");
		return "itemList.admin";
	}
	
}