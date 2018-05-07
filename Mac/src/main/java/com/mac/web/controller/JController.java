package com.mac.web.controller;

import java.util.HashMap;
import java.util.List;
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
import com.mac.web.domain.Customer;
import com.mac.web.domain.Item;
import com.mac.web.mapper.JMapper;
import com.mac.web.service.ICountHashService;
import com.mac.web.service.ICountService;
import com.mac.web.service.IDeleteHashService;
import com.mac.web.service.IGetHashService;
import com.mac.web.service.IPostHashService;
import com.mac.web.service.ITxService;
import com.mac.web.service.IUpdateHashService;

@RestController
public class JController {
	private static final Logger logger = LoggerFactory.getLogger(JController.class);
	@Autowired JMapper jMapper;
	@Autowired Command cmd;
	@Autowired Customer customer;
	@Autowired Item item;
	@Autowired ITxService tx;

	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = "application/json")
	public Map<?, ?> login(@RequestBody Map<String, String> param) {
		logger.info(":::::::::::login {}", "ENTERED");
		System.out.println(param.get("customId"));
		cmd = new Command();
		cmd.setType("customer");
		cmd.setCol1("custom_id");
		cmd.setData1(param.get("customId"));
		cmd.setCol2("custom_pass");
		cmd.setData2(param.get("customPass"));
		
		int count = 0;
		Map<String, Object> map = new HashMap<>();
		count = new ICountService() {

			@Override
			public int execute(Command cmd) {
				return jMapper.exist(cmd);
			}
		}.execute(cmd);
		System.out.println("count값은=" + count);
		if (count == 1) {
			map.put("customId", param.get("customId"));
		}
		map.put("success", count);
		return map;
	}

	@RequestMapping(value="/mypage/{id}", method=RequestMethod.GET)//질문. pathvariable로 받지만 주는게 보안걸려야 할때는?
	public Map<?, ?> mypage(@PathVariable("id") String customId) {
		logger.info(":::::::::::mypage {}", "ENTERED");
		Map<String, Object> map = new HashMap<>();
		Map<String, String> param = new HashMap<>();
		System.out.println(customId);

		param.put("customId", customId);
		map.put("mypage", new IGetHashService() {

			@Override
			public Object execute(HashMap<?, ?> param) {
				return jMapper.selectMypage(param);
			}
		}.execute((HashMap<?, ?>) param));
		return map;
	}

	@RequestMapping(value="/mainItems/")
	public Map<?, ?> itemSearch() {
		logger.info(":::::::::::mainItems {}", "ENTERED");
		Map<String, Object> map = new HashMap<>();
		map.put("mainItems", new IGetHashService() {

			@Override
			public Object execute(HashMap<?, ?> param) {
				return jMapper.selectMainItems(param);
			}
		}.execute((HashMap<?, ?>) map));
		return map;
	}
	
	@RequestMapping(value = "/{type}/basket", method = RequestMethod.POST, consumes = "application/json")
	public Map<?, ?> itemsBasket(@PathVariable String type, @RequestBody Map<String, String> param) {
		logger.info(":::::::::::itemsBasket {}", "ENTERED");
		System.out.println(type + "AAAAAAAAAAAAAAAA");
		Map<String, Object> map = new HashMap<>();
		cmd = new Command();
		System.out.println(cmd.getData1() + "=data1의 값은");
		cmd.setCol1(param.get("matte"));
		System.out.println(cmd.getCol1() + "=setCol1의 값은");

		return map;
	}
	
	@RequestMapping(value="/basket/search/{id}", method= RequestMethod.GET)
	public Map<?, ?> basketSearch(@PathVariable("id") String customId) {
		logger.info(":::::::::::basketSearch {}", "ENTERED");
		Map<String, Object> map = new HashMap<>();
		Map<String, String> param = new HashMap<>();
		System.out.println(customId);
		
		param.put("customId", customId);
		map.put("basket", new IGetHashService() {

			@Override
			public Object execute(HashMap<?, ?> param) {
				return jMapper.selectBasket(param);
			}
		}.execute((HashMap<?, ?>) param));
		System.out.println(map.get("basket").toString());
		return map;
	}
	
	@RequestMapping(value="/basket/totalPrice/{id}", method= RequestMethod.GET)
	public Map<?, ?> basketTotalPrice(@PathVariable("id") String customId) {
		logger.info(":::::::::::basketTotalPrice {}", "ENTERED");
		Map<String, Object> map = new HashMap<>();
		Map<String, String> param = new HashMap<>();
		System.out.println(customId);
		param.put("customId", customId);
		map.put("basketTotalPrice", new IGetHashService() {
			@Override
			public Object execute(HashMap<?, ?> param) {
				return jMapper.selectTotalPrice(param);
			}
		}.execute((HashMap<?, ?>) param));
		System.out.println("basket/totalPrice 넘어온 값은" + map.get("basketTotalPrice"));
		return map;
	}
	
	@RequestMapping(value = "/putBasket", method = RequestMethod.POST)
	public Map<?, ?> basketOrder(@RequestBody Map<String, Object> param) {
		Map<String, Object> temp = new HashMap<>();
		logger.info(":::::::::::putBasket {}", "ENTERED");
		System.out.println("customId: " + param.get("customId"));
		System.out.println("itemSeq: " + param.get("itemSeq"));
	
		
		return tx.putBasket(param);
	}

	@RequestMapping(value="/basket/delete", method= RequestMethod.POST, consumes = "application/json")
	public Map<?,?> basketdelete(@RequestBody Map<String, String> param) {
		logger.info(":::::::::::/basket/delete {}", "ENTERED");
		Map<String, Object> map = new HashMap<>();
		System.out.println("basketSeq: "+param.get("basketSeq"));
		new IDeleteHashService() {
			
			@Override
			public void execute(HashMap<?, ?> param) {
				jMapper.deleteBasketByBasketSeq(param);
			}
		}.execute((HashMap<?, ?>) param);
		map.put("success", 1);
		return map;
	}
	@RequestMapping(value="/basket/delete/{id}", method= RequestMethod.GET)
	public Map<?,?> deleteBasketById(@PathVariable("id") String customId){
		Map<String, Object> map = new HashMap<>();
		Map<String, Object> param = new HashMap<>();
		param.put("customId", customId);
		new IDeleteHashService() {
			
			@Override
			public void execute(HashMap<?, ?> param) {
				jMapper.deleteBasketById(param);
			}
		}.execute((HashMap<?, ?>) param);
		return map;
	}

	@RequestMapping(value = "/basket/update/asOrder", method = RequestMethod.POST, consumes = "application/json")
	public Map<?,?> basketUpdate(@RequestBody List<Map<String, Object>> param) {
		logger.info(":::::::::::basket/update {}", "ENTERED");
		Map<String, Object> map = new HashMap<>();
		tx.updateBasketAsOrder(param);
		map.put("success", 1);
		return map;
	}

	@RequestMapping(value="/order/search/{id}", method= RequestMethod.GET)
	public Map<?, ?> orderSearch(@PathVariable("id") String customId) { // 아직 화면 구현 ㄴㄴ?
		logger.info(":::::::::::order/search/ {}", "ENTERED");
		Map<String, Object> map = new HashMap<>();
		Map<String, String> param = new HashMap<>();
		System.out.println(customId);
		param.put("customId", customId);
		map.put("orderSearch", new IGetHashService() {

			@Override
			public Object execute(HashMap<?, ?> param) {
				return jMapper.selectOrderById(param);
			}
		}.execute((HashMap<?, ?>) param));
		System.out.println("order/search 넘어온 값은 orderSearch" + map.get("orderSearch"));
		return map;
	}
	
	@RequestMapping(value="/make/order", method= RequestMethod.POST, consumes="application/json")
	public Map<?,?> makeOrder(@RequestBody Map<String, Object> param){
		logger.info(":::::::::::make/order {}", "ENTERED");
		Map<String, Object> map = new HashMap<>();
		tx.makeOrder(param);
		
		map.put("success", 1);
		return map;
	}
	
	@RequestMapping(value = "/addr/search/{id}", method = RequestMethod.GET)
	public Map<?, ?> addrSearch(@PathVariable("id") String customId) {
		logger.info(":::::::::::addr/search/ {}", "ENTERED");
		Map<String, Object> map = new HashMap<>();
		cmd.setCol1(customId);
		System.out.println(cmd.getCol1());
		int count = 0;
		count = new ICountService() {

			@Override
			public int execute(Command cmd) {
				return jMapper.selectAddrExist(cmd);
			}
		}.execute(cmd);
		System.out.println("해당 id의 주소 count의 값은"+count);
		map.put("exist", count);
		return map;
	}

	@RequestMapping(value = "/post/addr", method = RequestMethod.POST, consumes = "application/json")
	public Map<?,?> orderAddr(@RequestBody Map<String, String> param) {
		Map<String, Object> paramMap = new HashMap<>();
		Map<String, Object> map = new HashMap<>();
		logger.info(":::::::::::/post/addr {}", "ENTERED");
		System.out.println(paramMap.get("addr"));
		
		new IPostHashService() {
			
			@Override
			public void execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				jMapper.insertOrderAddr(param);
			}
		}.execute((HashMap<?, ?>) paramMap);
		map.put("success", 1);
		return map;
	}
	
	@RequestMapping(value = "/customer/join", method = RequestMethod.POST, consumes = "application/json")
	public Map<?,?> joinCustomer(@RequestBody Map<String, String> param) {
		logger.info(":::::::::::/customer/join/ {}", "ENTERED");
		Map<String, String> paramMap = new HashMap<>();
		Map<String, Object> map = new HashMap<>();
		paramMap.put("inputJoinId", param.get("inputJoinId"));
		paramMap.put("inputJoinPass", param.get("inputJoinPass"));
		paramMap.put("inputJoinName", param.get("inputJoinName"));
		paramMap.put("inputJoinEmail", param.get("inputJoinEmail"));
		paramMap.put("inputJoinPhoneNum", param.get("optionjoin") + "-" + param.get("inputJoinPhoneNum1") + "-"
				+ param.get("inputJoinPhoneNum2"));
		paramMap.put("inputJoinEmailCheck", param.get("inputJoinEmailCheck"));
		paramMap.put("inputJoinMypageProfile", param.get("inputJoinMypageProfile"));
		new IPostHashService() {
			
			@Override
			public void execute(HashMap<?, ?> param) {
				// TODO Auto-generated method stub
				jMapper.insertCustomer(param);
				
			}
		}.execute((HashMap<?, ?>) paramMap);;
		map.put("success", 1);
		return map;
	}

	@RequestMapping(value = "/joinId/search/{id}", method = RequestMethod.GET)
	public Map<?, ?> joinIdSearch(@PathVariable("id") String joinId) {
		logger.info(":::::::::::/joinId/search {}", "ENTERED");
		int count = 0;
		Map<String, Object> map = new HashMap<>();
		cmd.setCol1(joinId);
		count = new ICountService() {

			@Override
			public int execute(Command cmd) {
				return jMapper.selectIdExist(cmd);
			}
		}.execute(cmd);
		map.put("success", count);
		System.out.println("/joinid/search에서 count값은=" + count);

		return map;
	}
}
