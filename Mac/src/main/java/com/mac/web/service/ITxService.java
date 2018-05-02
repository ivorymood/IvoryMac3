package com.mac.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;
@Component

public interface ITxService {
	public String execute(List<Map<String, Object>> param);
}
