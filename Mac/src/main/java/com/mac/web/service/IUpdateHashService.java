package com.mac.web.service;

import java.util.HashMap;

import org.springframework.stereotype.Service;

@Service @FunctionalInterface
public interface IUpdateHashService {
	public void execute(HashMap<?, ?> param);
}
