package com.mac.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Component @Data @Lazy
public class Common {
	private String name1
	  ,email1
	  ,email2
	  ,customPass1
	  ,customPass2
	  ,phone1
	  ;
}