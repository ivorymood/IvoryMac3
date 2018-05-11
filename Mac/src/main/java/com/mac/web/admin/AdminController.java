package com.mac.web.admin;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.support.RequestContextUtils;
import com.mac.web.common.ContextFactory;
import com.mac.web.domain.Command;
import com.mac.web.domain.CommonFeature;
import com.mac.web.domain.Customer;
import com.mac.web.domain.Item;
import com.mac.web.domain.Path;

@SessionAttributes("path")
@RequestMapping("/admin")
@Controller
public class AdminController {
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@Autowired Path path;
	@Autowired Customer customer;
	@Autowired AdminService adminService;
	@Autowired Command cmd;
	@Autowired ContextFactory context;
	@Autowired Item item;
	@Autowired CommonFeature commonFeature;
	
	@RequestMapping(value="/login",method=RequestMethod.GET)
	public String loginForm(Model model) {
		
		model.addAttribute("path", context.ptx());
			return "login.login";
		
	}
	@RequestMapping(value="/signin",method=RequestMethod.POST)
	public String login(Model model,	
			@RequestParam("inp-login-customId")String customId,
			@RequestParam("inp-login-customPass")String customPass,
			@RequestParam("pageNum")String pageNum,
			@RequestParam("nowPage")String nowPage,
			@RequestParam("blockSize")String blockSize,
			@RequestParam("pageSize")String pageSize,
			RedirectAttributes redirectAttributes) {
		customer.setCustomId(customId);
		customer.setCustomPass(customPass);
		cmd.setCustomer(customer);
			String path = "redirect:/admin/login";
		if(adminService.count(cmd)) {
			model.addAttribute("loginAdmin", adminService.findById(cmd));
			redirectAttributes.addFlashAttribute("pageNum",pageNum);
			redirectAttributes.addFlashAttribute("nowPage",nowPage);
			redirectAttributes.addFlashAttribute("blockSize",blockSize);
			redirectAttributes.addFlashAttribute("pageSize",pageSize);
			path = "welcome.login";
		}
			return path;
	}
	
	@RequestMapping(value="/list", method=RequestMethod.POST)
	public String custMana(Model model,
						   HttpServletRequest request,
						   @RequestParam(value="pageNum", required=false, defaultValue="1")String pno,
						   @RequestParam(value="b-sel-custMana-grade" ,required=false, defaultValue="all")String gradeCode,
						   @RequestParam(value="inp-custMana-startDay",required=false)String searchDay) {
		Map<String,?> map = RequestContextUtils.getInputFlashMap(request);
		int pageNum = Integer.parseInt(pno);
		int	blockSize = (map!=null)?Integer.parseInt(map.get("blockSize").toString()):5;
		int	pageSize = (map!=null)?Integer.parseInt(map.get("pageSize").toString()):5;
		int	nowPage = (map!=null)?Integer.parseInt(map.get("nowPage").toString()):1;
		customer.setGradeCode(gradeCode);
		cmd.setCustomer(customer);
		cmd.setData1("CUSTOMER");
		int totalCount = adminService.totalCount(cmd);
		int totalPageCount = adminService.totalPageCount(totalCount,blockSize);
		int startRow = adminService.startRow(pageNum, pageSize);
		int endRow = adminService.endRow(pageNum,pageSize, totalCount);
		int startBlock = adminService.startBlock(pageNum,blockSize);
		int endBlock = adminService.endBlock(pageNum,blockSize, totalPageCount);
		
		Map<String,String> paramMap = new HashMap<>();
		paramMap.put("blockSize",String.valueOf(blockSize));
		paramMap.put("pageSize",String.valueOf(pageSize));
		paramMap.put("pageNum",String.valueOf(pageNum));
		paramMap.put("nowPage",String.valueOf(nowPage));
		paramMap.put("totalCount",String.valueOf(totalCount));
		paramMap.put("totalPageCount",String.valueOf(totalPageCount));
		paramMap.put("startRow",String.valueOf(startRow));
		paramMap.put("endRow",String.valueOf(endRow));
		paramMap.put("startBlock", String.valueOf(startBlock));
		paramMap.put("endBlock",String.valueOf(endBlock));
		paramMap.put("gradeCode",gradeCode);
		paramMap.put("searchDay",searchDay);
		paramMap.put("bronze",String.valueOf(adminService.countGrade("1")));
		paramMap.put("silver",String.valueOf(adminService.countGrade("2")));
		paramMap.put("gold",String.valueOf(adminService.countGrade("3")));
		paramMap.put("diamond",String.valueOf(adminService.countGrade("4")));
		
		model.addAttribute("map",paramMap);
		List<Customer> list = adminService.list(paramMap);
		model.addAttribute("list", list);
		int i = 0;
		for(i=0; i<list.size(); i++) {
			switch(list.get(i).getGradeCode()) {
			case "1":
				list.get(i).setGradeCode("브론즈");
				break;
			case "2":
				list.get(i).setGradeCode("실버");
				break;
			case "3":
				list.get(i).setGradeCode("골드");
				break;
			case "4":
				list.get(i).setGradeCode("다이아몬드");
				break;
			default:
				cmd.setData2("준비 중입니다");
				break;
			}
		}
		return "custMana.admin";
	}
	
	@RequestMapping(value="/addItem",method=RequestMethod.POST)
	public String addItem(Model model) {
		
		return "addItem.admin";
	}
	
	@RequestMapping(value="/itemList", method=RequestMethod.POST)
	public String itemList(Model model,
						   HttpServletRequest request,
						   @RequestParam(value="pageNum", required=false, defaultValue="1")String pno
						  ,@RequestParam(value="title",required=false)String title
						  ,@RequestParam(value="content",required=false)String content) {
		
		Map<String,String> paramMap = new HashMap<>();
	
		if(title==null||content==null) {
			int pageNum = Integer.parseInt(pno);
			Map<String,?> map = RequestContextUtils.getInputFlashMap(request);
			int	blockSize = (map!=null)?Integer.parseInt(map.get("blockSize").toString()):5;
			int	pageSize = (map!=null)?Integer.parseInt(map.get("pageSize").toString()):10;
			int	nowPage = (map!=null)?Integer.parseInt(map.get("nowPage").toString()):1;
			cmd.setData1("ITEM");
			int totalCount = adminService.totalCount(cmd);
			int totalPageCount = adminService.totalPageCount(totalCount,pageSize);
			int startRow = adminService.startRow(pageNum, pageSize);
			int endRow = adminService.endRow(pageNum,pageSize, totalCount);
			int startBlock = adminService.startBlock(pageNum,blockSize);
			int endBlock = adminService.endBlock(pageNum,blockSize, totalPageCount);
			int totalItem = adminService.countTotal();
			int itemCount = adminService.searchCount();
		
			paramMap.put("blockSize",String.valueOf(blockSize));
			paramMap.put("pageSize",String.valueOf(pageSize));
			paramMap.put("pageNum",String.valueOf(pageNum));
			paramMap.put("nowPage",String.valueOf(nowPage));
			paramMap.put("totalCount",String.valueOf(totalCount));
			paramMap.put("totalPageCount",String.valueOf(totalPageCount));
			paramMap.put("startRow",String.valueOf(startRow));
			paramMap.put("endRow",String.valueOf(endRow));
			paramMap.put("startBlock",String.valueOf(startBlock));
			paramMap.put("endBlock",String.valueOf(endBlock));
			paramMap.put("totalItem", String.valueOf(totalItem)); 
			paramMap.put("itemCount", String.valueOf(itemCount));
			paramMap.put("changetotalItem", String.valueOf(totalItem));
			List<Item> list = adminService.findListBy(paramMap); 
			model.addAttribute("map",paramMap);
			model.addAttribute("list", list);	
			}else {
			paramMap.put("title", title);
			paramMap.put("content", content);
			cmd.setCol1("ITEM");
			cmd.setData1(title);
			cmd.setData2(content);
			int totalCount = adminService.searchTotalCount(cmd);
			int pageNum = Integer.parseInt(pno);
			Map<String,?> map = RequestContextUtils.getInputFlashMap(request);
			int	blockSize = (map!=null)?Integer.parseInt(map.get("blockSize").toString()):5;
			int	pageSize = (map!=null)?Integer.parseInt(map.get("pageSize").toString()):10;
			int	nowPage = (map!=null)?Integer.parseInt(map.get("nowPage").toString()):1;
			int totalPageCount = adminService.totalPageCount(totalCount,pageSize);
			int startRow = adminService.startRow(pageNum, pageSize);
			int endRow = adminService.endRow(pageNum,pageSize, totalCount);
			int startBlock = adminService.startBlock(pageNum,blockSize);
			int endBlock = adminService.endBlock(pageNum,blockSize, totalPageCount);
			int totalItem = adminService.countTotal();
			int itemCount = adminService.searchCount();
			
			paramMap.put("blockSize",String.valueOf(blockSize));
			paramMap.put("pageSize",String.valueOf(pageSize));
			paramMap.put("pageNum",String.valueOf(pageNum));
			paramMap.put("nowPage",String.valueOf(nowPage));
			paramMap.put("totalCount",String.valueOf(totalCount));
			paramMap.put("totalPageCount",String.valueOf(totalPageCount));
			paramMap.put("startRow",String.valueOf(startRow));
			paramMap.put("endRow",String.valueOf(endRow));
			paramMap.put("startBlock",String.valueOf(startBlock));
			paramMap.put("endBlock",String.valueOf(endBlock));
			paramMap.put("totalItem", String.valueOf(totalItem));
			paramMap.put("changetotalItem", String.valueOf(totalCount)); 
			paramMap.put("itemCount", String.valueOf(itemCount));
			List<Item> list = adminService.findSearch(paramMap); 
		    model.addAttribute("map",paramMap);
			model.addAttribute("list", list);
		}
		return "itemList.admin";
	}
	
	@RequestMapping(value="/itemListDelete",method=RequestMethod.POST)
	public String itemDelete(Model model,
							 HttpServletRequest request,
							 @RequestParam("a")String itemSeq,
							 @RequestParam("b")int pageNum) {
		item.setItemSeq(itemSeq);
		cmd.setItem(item);
		adminService.deleteItem(cmd);
		Map<String,?> map = RequestContextUtils.getInputFlashMap(request);
		int	blockSize = (map!=null)?Integer.parseInt(map.get("blockSize").toString()):5;
		int	pageSize = (map!=null)?Integer.parseInt(map.get("pageSize").toString()):10;
		int	nowPage = (map!=null)?Integer.parseInt(map.get("nowPage").toString()):1;
		cmd.setData1("ITEM");
		int totalCount = adminService.totalCount(cmd);
		int totalPageCount = adminService.totalPageCount(totalCount,pageSize);
		int startRow = adminService.startRow(pageNum, pageSize);
		int endRow = adminService.endRow(pageNum,pageSize, totalCount);
		int startBlock =adminService.startBlock(pageNum,blockSize);
		int endBlock = adminService.endBlock(pageNum,blockSize, totalPageCount);
		Map<String,String> paramMap = new HashMap<>();
		paramMap.put("blockSize",String.valueOf(blockSize));
		paramMap.put("pageSize",String.valueOf(pageSize));
		paramMap.put("pageNum",String.valueOf(pageNum));
		paramMap.put("nowPage",String.valueOf(nowPage));
		paramMap.put("totalCount",String.valueOf(totalCount));
		paramMap.put("totalPageCount",String.valueOf(totalPageCount));
		paramMap.put("startRow",String.valueOf(startRow));
		paramMap.put("endRow",String.valueOf(endRow));
		paramMap.put("startBlock",String.valueOf(startBlock));
		paramMap.put("endBlock",String.valueOf(endBlock));
		model.addAttribute("map",paramMap);
		model.addAttribute("list", adminService.findListBy(paramMap));
		return "itemList.admin";	
	}
	
	
	@RequestMapping(value="/update",method=RequestMethod.POST)
	public String updateItem(Model model,
						     HttpServletRequest request,
						     @RequestParam("itemSeq")String itemSeq,
						     @RequestParam("itemCode")String itemCode) {
		Map<String,String> paramMap = new HashMap<>();
		model.addAttribute("map",paramMap);
		switch(itemCode) {
		case "3000":
			cmd.setData2("아이 섀도우입니다");
			break;
		case "2000":
			cmd.setData2("매트 립스틱입니다");
			break;
		case "1000":
			cmd.setData2("붓입니다");
			break;
		default:
			cmd.setData2("준비 중입니다");
			break;
		}
		item.setItemSeq(itemSeq);
		cmd.setItem(item);
	    Item i = adminService.findByItemSeq(cmd);
	    model.addAttribute("code",cmd);
		model.addAttribute("item", i);
		return "itemUpdate.admin";
	}
	
	@RequestMapping(value="/itemUpdate", method=RequestMethod.POST)
	public String addItemUpdate(Model model,
							    /*RedirectAttributes redirectAttributes,*/
							    HttpServletRequest request,
							    @RequestParam("inp-itemUpdate-itemName")String itemName,
							    @RequestParam("inp-itemUpdate-itemStock")int itemStock,
							    @RequestParam("inp-itemUpdate-colorExp")String colorExp,
							    @RequestParam("inp-itemUpdate-textureExp")String textureExp,
							    @RequestParam("file")String picName) {
		item.setItemName(itemName);
		item.setItemStock(itemStock);
		item.setColorExp(colorExp);
		item.setTextureExp(textureExp);
		item.setPicName(picName);
		cmd.setItem(item);
		adminService.updateItem(cmd);
		return "welcomeUpdate.login";
	}
	
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public String add(FileProxy pxy, Model model,
					      @RequestParam("b-sel-addItem-choice")String commonFeature,
			              @RequestParam("inp-addItem-itemName")String itemName,
			              @RequestParam("inp-addItem-itemStock")int itemStock,
			              @RequestParam("inp-addItem-colorExp")String colorExp,
			              @RequestParam("inp-addItem-textureExp")String textureExp)throws IllegalStateException, IOException{
		String fileName=pxy.getFile().getOriginalFilename();
		String path=ImageRepo.UPLOAD_PATH.toString()+fileName;
		File files=new File(path);
		pxy.getFile().transferTo(files);
		model.addAttribute("pngName",fileName);	 
		item.setItemName(itemName);
		item.setItemStock(itemStock);
		item.setColorExp(colorExp);
		item.setTextureExp(textureExp);
		item.setItemCode(commonFeature);
		item.setPicName(fileName);
		cmd.setItem(item);
		adminService.insertItem(cmd);
		return "addItem.admin";
	}
	
	@RequestMapping(value="/custSearch",method=RequestMethod.POST)
	public String custSearch(Model model) {
		return "custSearch.admin";
	}
							
	@RequestMapping(value="/addEmployee",method=RequestMethod.POST)
	public String joinE(){
		return "joinE.admin";
		
	}
	
	@RequestMapping(value="/plusEmployee",method=RequestMethod.POST)
	public String joinE(FileProxy pxy, Model model,
			            @RequestParam("inp-joinE-id")String customId,
			            @RequestParam("inp-joinE-pass")String customPass,
			            @RequestParam("inp-joinE-name")String name,
			            @RequestParam("inp-joinE-email1")String email1,
			            @RequestParam("sel-joinE-email2")String email2,
			            @RequestParam("div-joinE-phone1")String phoneNum1,
			            @RequestParam("inp-joinE-phone2")String phoneNum2,
			            @RequestParam("inp-joinE-phone3")String phoneNum3)throws IllegalStateException, IOException{
		String fileName=pxy.getFile().getOriginalFilename();
		String path=ImageRepo.UPLOAD_PATH.toString()+fileName;
		File files=new File(path);
		pxy.getFile().transferTo(files);
		model.addAttribute("pngName",fileName);
		customer.setCustomId(customId);
		customer.setCustomPass(customPass);
		customer.setName(name);
		customer.setEmail(email1+email2);
		customer.setPhoneNum(phoneNum1+phoneNum2+phoneNum3);
		customer.setProfile(fileName);
		cmd.setCustomer(customer);
		adminService.insertCustomer(cmd);
		return "joinE.admin";
	}
	
	@RequestMapping(value="/listE",method=RequestMethod.POST)
	public String listE(Model model){
		List<Customer> adminList = adminService.findAdmin();
		int i = 0;
		for(i=0; i<adminList.size(); i++) {
			adminList.get(i).getName();
			adminList.get(i).getCustomId();
			adminList.get(i).getGradeCode();
		}
		model.addAttribute("adminList",adminList);
		return "listEmployee.admin";
	}
	
	
	@RequestMapping(value="/codeSearch",method=RequestMethod.POST)
	public String codeSearch(Model model,
			   HttpServletRequest request,
			   @RequestParam(value="pageNum", required=false, defaultValue="1")String pno) {
		int pageNum = Integer.parseInt(pno);
		Map<String,?> map = RequestContextUtils.getInputFlashMap(request);
		int	blockSize = (map!=null)?Integer.parseInt(map.get("blockSize").toString()):5;
		int	pageSize = (map!=null)?Integer.parseInt(map.get("pageSize").toString()):10;
		int	nowPage = (map!=null)?Integer.parseInt(map.get("nowPage").toString()):1;
		cmd.setData1("ITEM");
		int totalCount = adminService.totalCount(cmd);
		int totalPageCount = adminService.totalPageCount(totalCount,pageSize);
		int startRow = adminService.startRow(pageNum, pageSize);
		int endRow = adminService.endRow(pageNum,pageSize, totalCount);
		int startBlock = adminService.startBlock(pageNum,blockSize);
		int endBlock = adminService.endBlock(pageNum,blockSize, totalPageCount);
		
		Map<String,String> paramMap = new HashMap<>();
		paramMap.put("blockSize",String.valueOf(blockSize));
		paramMap.put("pageSize",String.valueOf(pageSize));
		paramMap.put("pageNum",String.valueOf(pageNum));
		paramMap.put("nowPage",String.valueOf(nowPage));
		paramMap.put("totalCount",String.valueOf(totalCount));
		paramMap.put("totalPageCount",String.valueOf(totalPageCount));
		paramMap.put("startRow",String.valueOf(startRow));
		paramMap.put("endRow",String.valueOf(endRow));
		paramMap.put("startBlock",String.valueOf(startBlock));
		paramMap.put("endBlock",String.valueOf(endBlock));
		List<Item> list = adminService.findListBy(paramMap); 
		model.addAttribute("map",paramMap);
		model.addAttribute("list", list);
		
		return "codeSearch.admin";
	}
	
}