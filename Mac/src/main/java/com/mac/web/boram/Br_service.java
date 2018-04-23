package com.mac.web.boram;

import java.util.List;

import org.springframework.stereotype.Component;

import com.mac.web.domain.Command;
import com.mac.web.domain.Customer;
@Component
public interface Br_service {
	
	public List<Customer> list();
	public List<Customer> findByName(Command cmd);
	public Customer findById(Command cmd);
	
	public void deleteAddr(Command cmd);
	public void deleteComment(Command cmd);
	public void deleteCustomer(Command cmd);
	public void insertAddr(Command cmd);
	public void insertComment(Command cmd);
	public void insertCustomer(Command cmd);
	public void updateAddr(Command cmd);
	public void updateComment(Command cmd);
	public void updateCustomer(Command cmd);
	
	public boolean count(Command cmd);
	
	
}