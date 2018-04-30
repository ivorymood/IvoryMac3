package com.mac.web.service;

import java.util.HashMap;

import org.springframework.stereotype.Service;
@Service @FunctionalInterface
public interface IGetHashService {
	public Object execute(HashMap<?, ?> param);
}
