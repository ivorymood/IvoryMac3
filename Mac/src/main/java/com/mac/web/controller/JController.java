package com.mac.web.controller;
import java.util.HashMap;
import java.util.Map;
import javax.mail.Session;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
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
import com.mac.web.domain.Item;
import com.mac.web.mapper.Mapper;
import com.mac.web.service.ICountService;
import com.mac.web.service.IGetHashService;
import com.mac.web.service.IGetService;
@RestController
public class JController {
    private static final Logger logger = LoggerFactory.getLogger(JController.class);
    @Autowired Mapper mapper;
    @Autowired Command cmd;
    @Autowired Customer customer;
    @Autowired Common common;
    @Autowired Item item; 
    
    @RequestMapping(value="/{type}/login",method=RequestMethod.POST,consumes="application/json")
    public Map<?,?> login(@PathVariable String type
            , @RequestBody Map<String, String> param
            , HttpServletRequest request) {
        System.out.println("컨트롤러는 들어옴");
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
            HttpSession session = request.getSession();
            session.setAttribute("name", param.get("customId"));
            
            System.out.println(session.getAttribute("name"));
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
        System.out.println("넘어온 값은"+map.get("main"));
        return map;
    }
    @RequestMapping("/basket/search")
    public Map<?,?> basketSearch(HttpServletRequest request) {
        System.out.println("/basket/search컨트롤러는 들어옴");
        Map<String,Object> map = new HashMap<>();
        HttpSession session = request.getSession();
        map.put("customid",session.getAttribute("name"));
        map.put("basketOrder", new IGetHashService() {
            
            @Override
            public Object execute(HashMap<?, ?> param) {
                return mapper.macOrderBasket(param);
            }
        }.execute((HashMap<?, ?>) map));  
        System.out.println("넘어온 값은"+map.get("basketOrder"));
        return map;
    }
    @RequestMapping("/basket/totalPrice")
    public Map<?,?> basketTotalPrice(HttpServletRequest request) {
        System.out.println("/basket/search컨트롤러는 들어옴");
        Map<String,Object> map = new HashMap<>();
        HttpSession session = request.getSession();
        map.put("customid",session.getAttribute("name"));
        map.put("basketTotalPrice", new IGetHashService() {
            
            @Override
            public Object execute(HashMap<?, ?> param) {
                return mapper.macBasketTotalPrice(param);
            }
        }.execute((HashMap<?, ?>) map));  
        System.out.println("넘어온 값은"+map.get("basketTotalPrice"));
        return map;
    }
    @RequestMapping(value="/basket/order",method=RequestMethod.POST,consumes="application/json")
    public Map<?,?> basketOrder(@RequestBody Map<String, String> param
            ,HttpServletRequest request) {
        Map<String,Object> map = new HashMap<>();
        System.out.println("장바구니 컨트롤러  들어옴");
        System.out.println(param.get("itemseq"));
        HttpSession session = request.getSession();
        map.put("customid",session.getAttribute("name"));
        cmd.setCol1((String) session.getAttribute("name"));
        map.put("basket_seq", "2");
        map.put("itemseq", param.get("itemseq"));
        cmd.setCol2(param.get("itemseq"));
        System.out.println(cmd.getCol2()+"getCol2");
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
    
    
}