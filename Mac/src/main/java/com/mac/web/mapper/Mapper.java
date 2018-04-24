package com.mac.web.mapper;

import org.springframework.stereotype.Repository;

import com.mac.web.domain.Command;

@Repository
public interface Mapper {
	public void insertMember(Command cmd);
}