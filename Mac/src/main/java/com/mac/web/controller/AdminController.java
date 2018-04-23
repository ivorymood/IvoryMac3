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
import com.mac.web.service.Br_Service;

@SessionAttributes("loginUser")
/*@RequestMapping("/admin")*/
@Controller
public class AdminController {
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@Autowired Command cmd;
	@Autowired Customer custom;
	@Autowired ContextFactory ctx;
	@Autowired Br_Service brService;
	
	@RequestMapping(value="/admin/login",method=RequestMethod.GET)
	public String login(Model model) {
		model.addAttribute("path", ctx.ptx());
		logger.info("어드민 컨트롤러 login() =============================");
		int a = 1;
		if(a==1) {
			logger.info("어드민 컨트롤러 login() =============================");
			return "login.login";
		}else {
			return "redirect:/admin";
		}		
	}
	
	@RequestMapping(value="/admin/custMana", method=RequestMethod.POST)
	public String custMana(Model model,
			@RequestParam("inp-login-customId")String customId,
			@RequestParam("inp-login-customPass")String customPass) {
		logger.info("어드민 컨트롤러 custMana()=================================");
		model.addAttribute("path", ctx.ptx());
		custom.setCustomId(customId);
		custom.setCustomPass(customPass);
		cmd.setCustom(custom);
		brService.count(cmd);
		
		String a = "";
		return a;
	}
	
	
	@RequestMapping(value="/admin/member",method=RequestMethod.GET)
	public String member(Model model) {
		logger.info("어드민 컨트롤러 addItem()===============================");
		model.addAttribute("path", ctx.ptx());
		return "custMana.admin";
	}
	@RequestMapping(value="/admin/addItem",method=RequestMethod.GET)
	public String addItem(Model model) {
		logger.info("어드민 컨트롤러 addItem()===============================");
		model.addAttribute("path", ctx.ptx());
		return "addItem.admin";
	}
	
	@RequestMapping(value="/admin/itemList", method=RequestMethod.GET)
	public String itemList(Model model) {
		logger.info("어드민 컨트롤러 itemList()===============================");
		model.addAttribute("path", ctx.ptx());
		return "itemList.admin";
	}
	
}