package com.mac.web.admin;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mac.web.domain.Command;
import com.mac.web.domain.Customer;
import com.mac.web.domain.Item;
import com.mac.web.mapper.AdminMapper;

@Service
public class AdminServiceImpl implements AdminService {
	private static final Logger logger = LoggerFactory.getLogger(AdminServiceImpl.class);
	@Autowired AdminMapper adminMapper;
	
	@Override
	public List<Customer> list(Map<String,?> map) {
		logger.info(":::어드민서비스:::list()======================================================");
		return adminMapper.selectAll(map);
	}

	@Override
	public List<Customer> findByName(Command cmd) {
		return null;
	}

	@Override
	public Customer findById(Command cmd) {
		logger.info(":::어드민서비스:::findById()==========================");
		Customer i = adminMapper.selectById(cmd);
		return i;
	}

	@Override
	public void deleteAddr(Command cmd) {
		
	}

	@Override
	public void deleteComment(Command cmd) {
		
	}

	@Override
	public void deleteCustomer(Command cmd) {
		
	}

	@Override
	public void deleteFeature(Command cmd) {
		
	}

	@Override
	public void deleteItem(Command cmd) {
		adminMapper.removeItem(cmd);
	}

	@Override
	public void insertAddr(Command cmd) {
		
	}

	@Override
	public void insertComment(Command cmd) {
		
	}

	@Override
	public void insertCustomer(Command cmd) {
		logger.info("AdminServiceImpl insertCustomer()==================================");
		adminMapper.addCustomer(cmd);
	}

	@Override
	public void insertFeature(Command cmd) {
		
	}

	@Override
	public void insertItem(Command cmd) {
		logger.info("AdminServiceImpl insertItem()==================================");
		adminMapper.addItem(cmd);
	}

	@Override
	public void updateAddr(Command cmd) {
		
	}

	@Override
	public void updateComment(Command cmd) {
		
	}

	@Override
	public void updateCustomer(Command cmd) {

	}

	@Override
	public void updateFeature(Command cmd) {
		
	}

	@Override
	public void updateItem(Command cmd) {
		logger.info("AdminServiceImpl updateItem()==================================");
		adminMapper.modifyItem(cmd);;
		
	}

	@Override
	public boolean count(Command cmd) {
		logger.info("AdminServiceImpl count()==================================");
		boolean g = false;
		int k = adminMapper.selectCount(cmd);
		if(k!=0) {
			g = true;
		}else {
			g = false;
		}
		return g;
	}

	@Override
	public int totalCount(Command cmd) {
		int z = adminMapper.selectTCount(cmd);
		return z;
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

	@Override
	public List<Item> findListBy(Map<String, ?> map) {
		logger.info(":::AdminServiceImpl:::findListBy()======================================================");
		List<Item> findListBy = adminMapper.selectListBy(map);
		return findListBy;
	}

	@Override
	public Item findByItemSeq(Command cmd) {
		logger.info(":::AdminServiceImpl:::findByItemSeq()======================================================");
		Item k = adminMapper.selectByitemSeq(cmd);
		return k;
	}

	@Override
	public List<Customer> findAdmin() {
		logger.info(":::AdminServiceImpl:::findAdmin()======================================================");
		return adminMapper.selectAdmin();
	}

	@Override
	public int countGrade (String s) {
		return adminMapper.gradeCount(s);
	}

	@Override
	public int countTotal() {
		logger.info(":::AdminServiceImpl:::countTotal()======================================================");
		return adminMapper.countSum();
	}

	@Override
	public int searchCount() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Item> findSearch(Map<String, ?> map) {
		logger.info(":::AdminServiceImpl:::findSearch()======================================================");
		return adminMapper.selectSearch(map);
	}

	@Override
	public int searchItem(Map<String, ?> map) {
		logger.info(":::AdminServiceImpl:::searchItem()======================================================");
		return adminMapper.selectSearchItem(map);
	}

	@Override
	public int searchTotalCount(Command cmd) {
		
		return adminMapper.selectTotalCount(cmd);
	}


}