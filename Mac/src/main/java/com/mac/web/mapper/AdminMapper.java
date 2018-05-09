package com.mac.web.mapper;

import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Component;
import com.mac.web.domain.Command;
import com.mac.web.domain.Customer;
import com.mac.web.domain.Item;

@Component
public interface AdminMapper {
	
	public List<Customer> selectAll(Map<String,?> map);
	public List<Customer> findByName(Command cmd);
	public Customer selectById(Command cmd);
	
	public void removeAddr(Command cmd);
	public void removeComment(Command cmd);
	public void removeCustomer(Command cmd);
	public void removeFeature(Command cmd);
	public void removeItem(Command cmd);
	
	public void addAddr(Command cmd);
	public void addComment(Command cmd);
	public void addCustomer(Command cmd);
	public void addFeature(Command cmd);
	public void addItem(Command cmd);
	
	public void modifyAddr(Command cmd);
	public void modifyComment(Command cmd);
	public void modifyCustomer(Command cmd);
	public void modifyFeature(Command cmd);
	public void modifyItem(Command cmd);
	
	public int selectCount(Command cmd);
	public int selectTCount(Command cmd);
	public int selectTotalCount(Command cmd);
	public List<Item> selectListBy(Map<String, ?> map);
	
	public int selectSearchItem(Map<String, ?> map);

	public Item selectByitemSeq(Command cmd);
		
	public List<Customer> selectAdmin();
	public int gradeCount(String s);
	public int countSum();
	public int countSearch();
	
	public List<Item> selectSearch(Map<String, ?> map);
}
