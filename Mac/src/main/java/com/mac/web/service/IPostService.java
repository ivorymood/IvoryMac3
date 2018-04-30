package com.mac.web.service;

import org.springframework.stereotype.Service;

import com.mac.web.domain.Command;
@Service @FunctionalInterface
public interface IPostService {
	 public void execute(Command cmd);
}
