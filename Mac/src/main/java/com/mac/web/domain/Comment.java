package com.mac.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class Comment {
private String commentSeq, title, contents, writeDate, branch, customId, itemSeq;
private int helpful;
}
