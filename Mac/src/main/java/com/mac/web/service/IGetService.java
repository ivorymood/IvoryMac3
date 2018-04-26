package com.mac.web.service;

import org.springframework.stereotype.Service;

import com.mac.web.domain.Command;

@Service
public interface IGetService {
 public Object execute(Command cmd);
}
