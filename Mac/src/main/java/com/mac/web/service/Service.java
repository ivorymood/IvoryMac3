package com.mac.web.service;

import java.util.List;
import org.springframework.stereotype.Component;
import com.mac.web.domain.Command;
import com.mac.web.domain.Customer;

@Component
public interface Service {
	public void addCustomer(Command cmd);
	public void modifyCustomer(Command cmd);
	public void removeCustomer(Command cmd);
	public List<Customer> list();
	public List<Customer> findByName(Command cmd);
	public Customer findById(Command cmd);
	public boolean count(Command cmd);
}