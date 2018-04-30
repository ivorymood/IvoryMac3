package com.mac.web.service;

import org.springframework.stereotype.Service;

import com.mac.web.domain.Command;
@Service @FunctionalInterface
public interface ICountService {
	public int  execute(Command cmd);
}
