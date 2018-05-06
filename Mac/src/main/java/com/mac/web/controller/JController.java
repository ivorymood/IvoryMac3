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
		System.out.println("mypage 넘어온 값은" + map.get("mypage"));
		return map;
	}

	@RequestMapping(value="/mainItems/")
	public Map<?, ?> itemSearch() {
		logger.info(":::::::::::mainItems {}", "ENTERED");//아직 화면구현 안한?
		Map<String, Object> map = new HashMap<>();
		map.put("mainItems", new IGetHashService() {

			@Override
			public Object execute(HashMap<?, ?> param) {
				return jMapper.selectMainItems(param);
			}
		}.execute((HashMap<?, ?>) map));
		System.out.println("search 넘어온 값은" + map.get("mainItems"));
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
		map.put("basketOrder", new IGetHashService() {

			@Override
			public Object execute(HashMap<?, ?> param) {
				return jMapper.selectBasket(param);
			}
		}.execute((HashMap<?, ?>) param));
		System.out.println(map.get("basketOrder").toString());
		System.out.println("basket/search 넘어온 값은" + map.get("basketOrder"));
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
				return jMapper.macBasketTotalPrice(param);
			}
		}.execute((HashMap<?, ?>) param));
		System.out.println("basket/totalPrice 넘어온 값은" + map.get("basketTotalPrice"));
		return map;
	}
	
	@RequestMapping(value="/order/search/{id}", method= RequestMethod.GET)
	public Map<?, ?> orderSearch(@PathVariable("id") String customId) { // 아직 화면 구현 ㄴㄴ
		logger.info(":::::::::::order/search/ {}", "ENTERED");
		Map<String, Object> map = new HashMap<>();
		Map<String, String> param = new HashMap<>();
		System.out.println(customId);
		param.put("customId", customId);
		map.put("orderSearch", new IGetHashService() {

			@Override
			public Object execute(HashMap<?, ?> param) {
				return jMapper.searchOrderBasket(param);
			}
		}.execute((HashMap<?, ?>) param));
		System.out.println("order/search 넘어온 값은 orderSearch" + map.get("orderSearch"));
		return map;
	}


	@RequestMapping(value = "/putBasket/{id}/{itemSeq}", method = RequestMethod.GET)
	public Map<?, ?> basketOrder(@PathVariable("id") String customId, @PathVariable("itemSeq") String itemSeq) {
		Map<String, Object> map = new HashMap<>();
		Map<String, Object> param = new HashMap<>();
		logger.info(":::::::::::putBasket {}", "ENTERED");
		System.out.println("customId: " + customId);
		System.out.println("itemSeq: " + itemSeq);
		
		param.put("type", "basket");
		param.put("col1", "custom_id");
		param.put("col2", "item_seq");
		param.put("data1", customId);
		param.put("data2", Integer.parseInt(itemSeq));
		param.put("customId", customId);
		param.put("itemSeq", Integer.parseInt(itemSeq));
		
		int flag = -1;
		int stockCount = 0;
		int count = 0;
		
		stockCount = new ICountService() {
			//플래그
			@Override
			public int execute(Command cmd) {
				cmd.setCol1("item_seq");
				cmd.setData1(itemSeq);
				return jMapper.selectItemStock(cmd);
			}
		}.execute(cmd);
		System.out.println("stockCount: "+ stockCount);
		
		if(stockCount > 0) {
			count = new ICountHashService() {
				
				@Override
				public int execute(HashMap<?, ?> param) {
					return jMapper.existIntData(param);
				}
			}.execute((HashMap<?, ?>) param);
			
			if (count > 0) {
				System.out.println("if + count" + count);
				flag = 1;
				new IUpdateHashService() {
					
					@Override
					public void execute(HashMap<?, ?> param) {
						jMapper.updateBasketExist(param);
					}
				}.execute((HashMap<?, ?>) param);
				
			} else {
				System.out.println("else + count" + count);
				flag = 1;
				new IPostHashService() {
					
					@Override
					public void execute(HashMap<?, ?> param) {
						jMapper.insertBasketNew(param);						
					}
				}.execute((HashMap<?, ?>) param);
			}
		}else {
			flag = 0;
		}
		map.put("success", flag);
		return map;
	}

	@RequestMapping(value = "/order/addr", method = RequestMethod.POST, consumes = "application/json")
	public void orderAddr(@RequestBody Map<String, String> param) {
		Map<String, Object> map = new HashMap<>();
		logger.info(":::::::::::/order/addr {}", "ENTERED");
		map.put("customId", param.get("customId"));
		map.put("customname", param.get("customName"));
		map.put("customaddr1", param.get("customAddr1"));
		map.put("detailAddr",
				param.get("customAddr2") + "-" + param.get("customAddr3") + "-" + param.get("customAddr4"));
		System.out.println(map.put("detailAddr",
				param.get("customAddr2") + "-" + param.get("customAddr3") + "-" + param.get("customAddr4")));
		map.put("phoneNum",
				param.get("customPhone") + "-" + param.get("customPhone1") + "-" + param.get("customPhone2"));
		map.put("customtext", param.get("customText"));
		new IGetHashService() {

			@Override
			public Integer execute(HashMap<?, ?> param) {

				return jMapper.basketAddr(param);
			}
		}.execute((HashMap<?, ?>) map);
	}

	@RequestMapping(value="/basket/delete", method= RequestMethod.POST, consumes = "application/json")
	public Map<?,?> basketdelete(@RequestBody Map<String, String> param) {
		logger.info(":::::::::::/basket/delete {}", "ENTERED");
		Map<String, Object> map = new HashMap<>();
		System.out.println("basketSeq: "+param.get("basketSeq"));
		new IGetHashService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				return jMapper.deleteBasketByBasketSeq(param);
			}
		}.execute((HashMap<?, ?>) param);
		return map;
	}

	@RequestMapping(value = "/basket/update", method = RequestMethod.POST, consumes = "application/json")
	public String basketUpdate(@RequestBody List<Map<String, Object>> param) {
		logger.info(":::::::::::basket/update {}", "ENTERED");
		tx.updateList(param);
		return null;
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
				return jMapper.selectAddr(cmd);
			}
		}.execute(cmd);
		System.out.println(count + "count의 값은");
		map.put("success", count);
		return map;

	}

	@RequestMapping(value = "/customer/join", method = RequestMethod.POST, consumes = "application/json")
	public void customerJoind(@RequestBody Map<String, String> param) {
		logger.info(":::::::::::/customer/join/ {}", "ENTERED");
		Map<String, Object> map = new HashMap<>();
		map.put("inputJoinId", param.get("inputJoinId"));
		map.put("inputJoinPass", param.get("inputJoinPass"));
		map.put("inputJoinName", param.get("inputJoinName"));
		map.put("inputJoinEmail", param.get("inputJoinEmail"));
		map.put("inputJoinPhoneNum", param.get("optionjoin") + "-" + param.get("inputJoinPhoneNum1") + "-"
				+ param.get("inputJoinPhoneNum2"));
		map.put("inputJoinEmailCheck", param.get("inputJoinEmailCheck"));
		map.put("inputJoinMypageProfile", param.get("inputJoinMypageProfile"));
		new IGetHashService() {

			@Override
			public Integer execute(HashMap<?, ?> param) {
				return jMapper.insertAddr(param);
			}
		}.execute((HashMap<?, ?>) map);

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
				return jMapper.joinidSearch(cmd);
			}
		}.execute(cmd);
		map.put("success", count);
		System.out.println("/joinid/search에서 count값은=" + count);

		return map;
	}
}
