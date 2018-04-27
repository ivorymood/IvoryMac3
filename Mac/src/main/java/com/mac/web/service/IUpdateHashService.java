package com.mac.web.service;

import java.util.HashMap;

import org.springframework.stereotype.Service;

@Service
public interface IUpdateHashService {
	public Object execute(HashMap<?, ?> param);
}
