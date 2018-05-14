package com.mac.web.board;

import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mac.web.domain.Command;
import com.mac.web.domain.Comment;
import com.mac.web.mapper.BoardMapper;

@Service
public class BoardServiceImpl implements BoardService {
	private static final Logger logger = LoggerFactory.getLogger(BoardServiceImpl.class);
	@Autowired BoardMapper boardMapper;
	
	@Override
	public void addBoard(Map<String,String> paramMap) {
		boardMapper.insertBoard(paramMap);
	}

	@Override
	public void modify(Command cmd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void remove(Command cmd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Comment findById(Command cmd) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Comment> findByName(Command cmd) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Comment> findAll(Map<String, ?> map) {
		List<Comment> t = boardMapper.selectAll(map); 
		return t;
	}

	@Override
	public boolean count(Command cmd) {
		// TODO Auto-generated method stub
		return false;
	}

	
	
	@Override
	public int totalCount() {
		return boardMapper.selectToCount();
	}

	@Override
	public int totalPageCount(int totalCount, int pageSize) {
		int totalPageCount = ((totalCount%pageSize==0)?(totalCount/pageSize):((totalCount/pageSize)+1));
		return totalPageCount;
	}

	@Override
	public int startRow(int pageNum, int pageSize) {
		int startRow = ((pageNum-1)*pageSize)+1;
		return startRow;
	}

	@Override
	public int endRow(int pageNum,int pageSize,int totalCount) {
		int endRow = pageNum*pageSize;
		int t = 0;
		if(endRow<=totalCount) {
			 t=endRow;
		}else {
			 t=totalCount;
		}
		return t;
	}

	@Override
	public int startBlock(int pageNum,int blockSize) {
		int startBlock=(((pageNum-1)/blockSize)*blockSize)+1;
		return startBlock;
	}

	@Override
	public int endBlock(int pageNum,int blockSize,int totalPageCount) {
		int endBlock=(((pageNum-1)/blockSize)*blockSize)+5; 
		int y = 0;
		if(endBlock<=totalPageCount) {
			y=endBlock;
		}else {
			y=totalPageCount;
		}		
		return y;
	}


}
