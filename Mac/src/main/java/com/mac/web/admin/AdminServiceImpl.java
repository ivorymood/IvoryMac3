package com.mac.web.admin;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mac.web.domain.Command;
import com.mac.web.domain.Customer;

@Service
public class AdminServiceImpl implements AdminService{

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
		// TODO Auto-generated method stub
		return false;
	}

}