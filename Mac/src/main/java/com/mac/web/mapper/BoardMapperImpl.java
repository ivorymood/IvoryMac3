package com.mac.web.mapper;

import java.util.List;
import java.util.Map;
import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.mac.web.domain.Command;
import com.mac.web.domain.Comment;

@Repository
public class BoardMapperImpl implements BoardMapper{
	private static final Logger logger = LoggerFactory.getLogger(AdminMapperImpl.class);
	@Autowired SqlSessionTemplate sqlSession;
	@Autowired Comment comment;
	String ns = "com.mac.web.mapper.BoardMapper.";
	
	@Override
	public void insertBoard(Map<String,String> paramMap) {
		logger.info("보더 서비스임플 도착 insertBoard()=====================================");
		sqlSession.selectOne(ns+"insertBoard", paramMap);
	}

	@Override
	public void updateBoard(Command cmd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteBoard(Command cmd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Comment selectOne(Command cmd) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Comment> selectList(Command cmd) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Comment> selectAll(Map<String, ?> map) {
		logger.info("BoardMapperImpl selectAll()===========================");
		return sqlSession.selectOne(ns+"selectAll");
	}

	@Override
	public int count(Command cmd) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int selectToCount() {
		return sqlSession.selectOne(ns+"selectToCount");
	}

}
