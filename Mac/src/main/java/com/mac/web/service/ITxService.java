package com.mac.web.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;
@Component

public interface ITxService {
	public String executes(Map<String, String> param);
	public String execute(List<Map<String, Object>> param);
	public String delete(HashMap<?, ?> param);

}
