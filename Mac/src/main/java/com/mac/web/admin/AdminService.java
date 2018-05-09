package com.mac.web.admin;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Component;
import com.mac.web.domain.Command;
import com.mac.web.domain.Customer;
import com.mac.web.domain.Item;

@Component
public interface AdminService {
	
	public List<Customer> list(Map<String, ?> map);
	
	public List<Customer> findByName(Command cmd);
	public Customer findById(Command cmd);
	
	public void deleteAddr(Command cmd);
	public void deleteComment(Command cmd);
	public void deleteCustomer(Command cmd);
	public void deleteFeature(Command cmd);
	public void deleteItem(Command cmd);
	
	public void insertAddr(Command cmd);
	public void insertComment(Command cmd);
	public void insertCustomer(Command cmd);
	public void insertFeature(Command cmd);
	public void insertItem(Command cmd);
	
	public void updateAddr(Command cmd);
	public void updateComment(Command cmd);
	public void updateCustomer(Command cmd);
	public void updateFeature(Command cmd);
	public void updateItem(Command cmd);
	
	public boolean count(Command cmd);
	//get메소드는 필요한대로. 단 네이밍규칙은 findBy###
	public int totalCount(Command cmd);
	public int searchTotalCount(Command cmd);
	public int totalPageCount(int totalCount, int pageSize);
	public int startRow(int pageNum, int pageSize);
	public int endRow(int pageNum,int pageSize,int totalCount);
	public int startBlock(int pageNum,int blockSize);
	public int endBlock(int pageNum,int blockSize,int totalPageCount);
	
	public int searchItem(Map<String, ?> map);
	
	public List<Item> findListBy(Map<String, ?> item);
	public Item findByItemSeq(Command cmd);
	public List<Customer> findAdmin();
	public int countGrade (String s);
	public int countTotal();
	public int searchCount();
	
	public List<Item> findSearch(Map<String, ?> map);
		

	
	
}