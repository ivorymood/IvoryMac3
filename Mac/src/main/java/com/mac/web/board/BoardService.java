package com.mac.web.board;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;
import com.mac.web.domain.Command;
import com.mac.web.domain.Comment;

@Component
public interface BoardService {
	public void addBoard(Map<String,String> paramMap);
	public void modify(Command cmd);
	public void remove(Command cmd);
	public Comment findById(Command cmd);
	public List<Comment> findByName(Command cmd);
	public List<Comment> findAll(Map<String, ?> map);
	public boolean count(Command cmd);
	
	public int totalCount();
	public int totalPageCount(int totalCount, int pageSize);
	public int startRow(int pageNum, int pageSize);
	public int endRow(int pageNum,int pageSize,int totalCount);
	public int startBlock(int pageNum,int blockSize);
	public int endBlock(int pageNum,int blockSize,int totalPageCount);
}
