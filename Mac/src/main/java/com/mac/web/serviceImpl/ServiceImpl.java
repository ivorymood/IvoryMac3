package com.mac.web.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mac.web.domain.Command;
import com.mac.web.domain.Customer;
import com.mac.web.service.CommonService;

@Service
public class ServiceImpl implements CommonService{

	@Override
	public void addCustomer(Command cmd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void modifyCustomer(Command cmd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeCustomer(Command cmd) {
		// TODO Auto-generated method stub
		
	}

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
	public boolean count(Command cmd) {
		// TODO Auto-generated method stub
		return false;
	}

}