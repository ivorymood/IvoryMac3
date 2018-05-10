package com.mac.web.board;

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
import org.springframework.web.servlet.support.RequestContextUtils;
import com.mac.web.admin.AdminService;
import com.mac.web.common.ContextFactory;
import com.mac.web.domain.Command;
import com.mac.web.domain.Comment;
import com.mac.web.domain.Path;

@SessionAttributes("path")
@RequestMapping("/board")
@Controller
public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	@Autowired Path path;
	@Autowired AdminService adminService;
	@Autowired Command cmd;
	@Autowired ContextFactory context;
	@Autowired BoardService boardService;
	
	@RequestMapping(value="/boardList",method=RequestMethod.POST)
	public String board(Model model,
						HttpServletRequest request,
						@RequestParam(value="pageNum", required=false, defaultValue="1")String pno) {
		logger.info("보더 컨트롤러 board도착===========================");	
		Map<String,String> paramMap = new HashMap<>();
		int pageNum = Integer.parseInt(pno);
		Map<String,?> map = RequestContextUtils.getInputFlashMap(request);
		int	blockSize = (map!=null)?Integer.parseInt(map.get("blockSize").toString()):5;
		int	pageSize = (map!=null)?Integer.parseInt(map.get("pageSize").toString()):15;
		int	nowPage = (map!=null)?Integer.parseInt(map.get("nowPage").toString()):1;
		
		int totalCount = boardService.totalCount();
		logger.info("게시판 글의 수는 {}", totalCount);
		int totalPageCount = boardService.totalPageCount(totalCount,pageSize);
		int startRow = boardService.startRow(pageNum, pageSize);
		int endRow = boardService.endRow(pageNum,pageSize, totalCount);
		int startBlock = boardService.startBlock(pageNum,blockSize);
		int endBlock = boardService.endBlock(pageNum,blockSize, totalPageCount);
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
		
		List<Comment> list = boardService.findAll(paramMap);
		logger.info("게시판 리스트 값은 {}", list);
		model.addAttribute("map", paramMap);	
		model.addAttribute("list", list);	
		return "board.board";
	}
	
	@RequestMapping(value="/write",method=RequestMethod.POST)
	public String write(Model model,
						HttpServletRequest request
						 ) {
		return "write.board";	
	}
	
	@RequestMapping(value="/writeList", method=RequestMethod.POST)
	public String writeList(Model model,
							HttpServletRequest request,
							@RequestParam("inp-write-title")String title,
							@RequestParam("sel-write-good")String helpful2,
							@RequestParam("inp-write-content")String contents,
							@RequestParam("custom_id")String customId) {
		logger.info("title은 {} ",title);
		logger.info("helpful은 {} ",helpful2);
		logger.info("contents은 {} ",contents);
		String a = "";
		int helpful = Integer.parseInt(helpful2);
		switch (helpful) {
		case 7:
			a = "☆☆☆☆☆";
			break;
		case 0:
			a = "☆☆☆☆☆";
			break;
		case 1:
			a = "★☆☆☆☆";
			break;
		case 2:
			a = "★★☆☆☆";
			break;
		case 3:
			a = "★★★☆☆";
			break;
		case 4:
			a = "★★★★☆";
			break;
		case 5:
			a = "★★★★★";
			break;
		default:
			break;
		}
		Map<String,String> paramMap = new HashMap<>();
		paramMap.put("title",String.valueOf(title));
		paramMap.put("helpful",String.valueOf(a));
		paramMap.put("contents",String.valueOf(contents));
		paramMap.put("customId",String.valueOf(customId));
		
		model.addAttribute("map", paramMap);	
		boardService.addBoard(paramMap);
		logger.info("a {} ", a);
		return "writeBoard.board";
		
	}
	
}
