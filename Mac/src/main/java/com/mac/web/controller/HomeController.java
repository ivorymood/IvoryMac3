package com.mac.web.controller;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;


import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.mac.web.common.ContextFactory;
import com.mac.web.domain.Customer;
import com.mac.web.domain.Path;


@SessionAttributes("path,user")
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Path path;
	@Autowired ContextFactory context;
	@Autowired Customer customer;
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String intro(Locale locale, Model model) {
	
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		model.addAttribute("path", context.ptx());
		model.addAttribute("serverTime", formattedDate );
		
		return "intro";
	}
	@RequestMapping(value = "/board/{id}", method = RequestMethod.GET)
    public String galary(Model model
    		,@PathVariable("id") String customId) {
    
        customer.setCustomId(customId);
        model.addAttribute("user", customer.getCustomId());
        model.addAttribute("path", context.ptx());
        return "board/write";
    }
	@RequestMapping(value = "/home/", method = RequestMethod.POST)
    public String home(Model model) {
       
        model.addAttribute("path", context.ptx());
        return "home";
    }
	@RequestMapping(value = "/homeSecond/", method = RequestMethod.POST)
    public String homeSecond(Model model) {
    
        model.addAttribute("user", customer.getCustomId());
        model.addAttribute("path", context.ptx());
        return "homeSecond";
    }
}
