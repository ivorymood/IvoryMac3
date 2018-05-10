package com.mac.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
@Lazy
public class Comment {
private String commentSeq, 
				title,
				contents,
				helpful,
				writeDate,
				branch, 
				customId, 
				itemSeq;
}
