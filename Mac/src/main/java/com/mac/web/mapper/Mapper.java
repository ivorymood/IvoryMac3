package com.mac.web.mapper;


import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.mac.web.domain.Command;
import com.mac.web.domain.Customer;

@Repository
public interface Mapper {
	public void insertMember(Command cmd);
	public int exist(Command cmd);
	public Customer serachCustomerById(Command cmd);
	public List<?> macDate(HashMap<?, ?> param);
}