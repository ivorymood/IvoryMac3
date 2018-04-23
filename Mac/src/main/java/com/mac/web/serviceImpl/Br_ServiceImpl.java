package com.mac.web.serviceImpl;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mac.web.controller.AdminController;
import com.mac.web.domain.Command;
import com.mac.web.domain.Customer;
import com.mac.web.mapper.Br_Mapper;
import com.mac.web.service.Br_Service;

@Service
public class Br_ServiceImpl implements Br_Service{
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@Autowired Br_Mapper brMapper;
	@Override
	public List<Customer> list() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<Customer> findByName(Command cmd) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Customer findById(Command cmd) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public void deleteAddr(Command cmd) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void deleteComment(Command cmd) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void deleteCustomer(Command cmd) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void insertAddr(Command cmd) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void insertComment(Command cmd) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void insertCustomer(Command cmd) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void updateAddr(Command cmd) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void updateComment(Command cmd) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void updateCustomer(Command cmd) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public boolean count(Command cmd) {
		map
		return false;
	}
	

}
