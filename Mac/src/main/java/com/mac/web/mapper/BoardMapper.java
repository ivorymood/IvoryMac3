package com.mac.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.mac.web.domain.Command;
import com.mac.web.domain.Comment;

@Component
public interface BoardMapper {
	public void insertBoard(Map<String,String> paramMap);
	public void updateBoard(Command cmd);
	public void deleteBoard(Command cmd);
	public Comment selectOne(Command cmd);
	public List<Comment> selectList(Command cmd);
	public List<Comment> selectAll(Map<String, ?> map);
	public int count(Command cmd);
	
	public int selectToCount();
}
