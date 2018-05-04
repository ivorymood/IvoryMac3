package com.mac.web.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.RestController;

import com.mac.web.domain.Command;
import com.mac.web.domain.Item;
import com.mac.web.mapper.Mapper;
import com.mac.web.service.ICountService;
import com.mac.web.service.IGetHashService;
import com.mac.web.service.IGetService;
import com.mac.web.service.ITxService;
@RestController
public class JController {

    @Autowired Mapper mapper;
    @Autowired Command cmd;
    @Autowired Item item; 
    @Autowired ITxService tx;
    
    @RequestMapping("/basket/delete")
    public String basketdelete(@RequestBody Map<String,String> param
    		, HttpServletRequest request) { 
    	 Map<String,Object> map = new HashMap<>();
    	 map.put("basketSeq", param.get("basketSeq"));
		return tx.delete((HashMap<?, ?>) map);
    }
	@RequestMapping(value="/basket/update",method=RequestMethod.POST,consumes="application/json")
    public String basketUpdate(@RequestBody List<Map<String, Object>> param
    		, HttpServletRequest request) { 
		return tx.execute(param);
    	} 
    @RequestMapping(value="/addr/search")
    public Map<?,?> addrSearch(HttpServletRequest request) {
        Map<String,Object> map = new HashMap<>();
        HttpSession session = request.getSession();
        cmd.setCol1((String) session.getAttribute("name"));
        System.out.println(cmd.getCol1());
        int count= 0;
        		count = new ICountService() {
					
					@Override
					public int execute(Command cmd) {
						return mapper.selectAddr(cmd);
					}
				}.execute(cmd);
		map.put("success", count);
        return map;
 
}
    @RequestMapping(value="/{type}/login",method=RequestMethod.POST,consumes="application/json")
    public Map<?,?> login(@PathVariable String type
            , @RequestBody Map<String, String> param
            , HttpServletRequest request) {
        cmd = new Command();
        cmd.setCol1(param.get("customId"));
        cmd.setCol2(param.get("customPass"));
        cmd.setData1(type);
        System.out.println(cmd.getData1());
        int count = 0;
        Map<String,Object> map = new HashMap<>();
        count = new ICountService() {
            
            @Override
            public int execute(Command cmd) {
                return mapper.exist(cmd);
            }
        }.execute(cmd);
        map.put("success", count);
        if(count==1) {  
            map.put("customer", new IGetService() {
                
                @Override
                public Object execute(Command cmd) {
                    return mapper.serachCustomerById(cmd);
                }
            }.execute(cmd));            
            HttpSession session = request.getSession();
            session.setAttribute("name", param.get("customId"));
            
            System.out.println(session.getAttribute("name"));
        }
        
        return map;
    }
    @RequestMapping(value="/customer/join/",method=RequestMethod.POST,consumes="application/json")
    public void customerJoind(@RequestBody Map<String,String> param){
    	Map<String,Object> map = new HashMap<>();
    	map.put("inputJoinId", param.get("inputJoinId"));
    	map.put("inputJoinPass", param.get("inputJoinPass"));
    	map.put("inputJoinName", param.get("inputJoinName"));
    	map.put("inputJoinEmail", param.get("inputJoinEmail"));
    	map.put("inputJoinPhoneNum",param.get("optionjoin")+"-"+param.get("inputJoinPhoneNum1")+"-"+param.get("inputJoinPhoneNum2"));
    	map.put("inputJoinEmailCheck", param.get("inputJoinEmailCheck"));
    	map.put("inputJoinMypageProfile", param.get("inputJoinMypageProfile"));
    	new IGetHashService() {
			
			@Override
			public Integer execute(HashMap<?, ?> param) {
				return mapper.insertAddr(param);
			}
		}.execute((HashMap<?, ?>) map);
    	
    }
    @RequestMapping(value="/joinid/search",method=RequestMethod.POST,consumes="application/json")
    public Map<?,?> joinIdSearch(@RequestBody Map<String,String> param){
    	int count = 0;
    	 Map<String,Object> map = new HashMap<>();
    	 cmd.setCol1(param.get("inputJoinId"));
        count = new ICountService() {
            
            @Override
            public int execute(Command cmd) {
                return mapper.joinidSearch(cmd);
            }
        }.execute(cmd);
        map.put("success", count);
        System.out.println("/joinid/search에서 count값은="+count);
        
    	return map;
    }
    @RequestMapping("/mypage/")
    public Map<?,?> mypage(HttpServletRequest request) {
        Map<String,Object> map = new HashMap<>();
        HttpSession session = request.getSession();
        map.put("customid",session.getAttribute("name"));
        map.put("mypage", new IGetHashService() {
            
            @Override
            public Object execute(HashMap<?, ?> param) {
                return mapper.selectMypage(param);
            }
        }.execute((HashMap<?, ?>) map));  
        return map;
    }
    @RequestMapping("/search/")
    public Map<?,?> itemSearch() {
        Map<String,Object> map = new HashMap<>();
        map.put("main", new IGetHashService() {
            
            @Override
            public Object execute(HashMap<?, ?> param) {
                return mapper.macDate(param);
            }
        }.execute((HashMap<?, ?>) map));  
        return map;
    }

    @RequestMapping("/basket/search")
    public Map<?,?> basketSearch(HttpServletRequest request) {
        Map<String,Object> map = new HashMap<>();
        HttpSession session = request.getSession();
       
        map.put("customid",session.getAttribute("name"));
        map.put("basketOrder", new IGetHashService() {
            
            @Override
            public Object execute(HashMap<?, ?> param) {
                return mapper.macOrderBasket(param);
            }
        }.execute((HashMap<?, ?>) map));  
        return map;
    }
    @RequestMapping("/order/search")
    public Map<?,?> orderSearch(HttpServletRequest request) {
        Map<String,Object> map = new HashMap<>();
        HttpSession session = request.getSession();
       
        map.put("customid",session.getAttribute("name"));
        map.put("orderSearch", new IGetHashService() {
            
            @Override
            public Object execute(HashMap<?, ?> param) {
                return mapper.searchOrderBasket(param);
            }
        }.execute((HashMap<?, ?>) map));  
        return map;
    }
    @RequestMapping("/basket/totalPrice")
    public Map<?,?> basketTotalPrice(HttpServletRequest request) {
        Map<String,Object> map = new HashMap<>();
        HttpSession session = request.getSession();
        map.put("customid",session.getAttribute("name"));
        map.put("basketTotalPrice", new IGetHashService() { 
            @Override
            public Object execute(HashMap<?, ?> param) {
                return mapper.macBasketTotalPrice(param);
            }
        }.execute((HashMap<?, ?>) map));  
        return map;
    }
    @RequestMapping(value="/basket/order",method=RequestMethod.POST,consumes="application/json")
    public Map<?,?> basketOrder(@RequestBody Map<String, String> param
            ,HttpServletRequest request) {
        Map<String,Object> map = new HashMap<>();
        HttpSession session = request.getSession();
        map.put("customid",session.getAttribute("name"));
        map.put("itemseq", param.get("itemseq"));
        map.put("itemcode", param.get("itemcode"));
        cmd.setCol1((String) session.getAttribute("name"));
        cmd.setCol2(param.get("itemseq"));
        int count = 0;
        count = new ICountService() {
            
            @Override
            public int execute(Command cmd) {
                return mapper.selectBasket(cmd);
            }
        }.execute(cmd);
        map.put("success", count);
        if(count > 0   ) {
            System.out.println("if+count"+count);
            map.put("basket", new IGetHashService() {
            
                @Override
                public Integer execute(HashMap<?, ?> param) {
                    return mapper.macBasketUpdate(param);
                }
            }.execute((HashMap<?, ?>) map));
        }else {
        	 System.out.println("else+count"+count);
        	
            map.put("basket", new IGetHashService() {
                
                @Override
                public Integer execute(HashMap<?, ?> param) {
                    return mapper.macBasket(param);
                }
            }.execute((HashMap<?, ?>) map));
        }
        return map;
    }
       @RequestMapping(value="/order/addr",method=RequestMethod.POST,consumes="application/json")
        public void orderAddr(@RequestBody Map<String, String> param
                ,HttpServletRequest request) {
            Map<String,Object> map = new HashMap<>();
            HttpSession session = request.getSession();
            map.put("customid",session.getAttribute("name"));
            map.put("customname", param.get("customName"));
            map.put("customaddr1", param.get("customAddr1"));
            map.put("detailAddr", param.get("customAddr2")+"-"+param.get("customAddr3")+"-"+param.get("customAddr4"));
            System.out.println(map.put("detailAddr", param.get("customAddr2")+"-"+param.get("customAddr3")+"-"+param.get("customAddr4")));
            map.put("phoneNum", param.get("customPhone")+"-"+param.get("customPhone1")+"-"+param.get("customPhone2"));
            map.put("customtext", param.get("customText"));
            new IGetHashService() {
				
				@Override
				public Integer execute(HashMap<?, ?> param) {
					
					return mapper.basketAddr(param);
				}
			}.execute((HashMap<?, ?>) map);
    }
       @RequestMapping(value="/chart/search")
       public Map<?,?> chartSearch(){
    	Map<String,Object> map = new HashMap<>();
    	map.put("chart", new IGetHashService() {
			
			@Override
			public Object execute(HashMap<?, ?> param) {
				return mapper.searchChart(param);
			}
		}.execute((HashMap<?, ?>) map));
		
    	map.get("chart");
    	System.out.println(map.get("chart"));
		return map;
       }
        
    
	
}