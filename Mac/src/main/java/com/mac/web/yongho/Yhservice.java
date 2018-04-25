package com.mac.web.yongho;

import org.springframework.stereotype.Component;

import com.mac.web.domain.Command;
@Component
public interface Yhservice {
	public void deleteBasketById(Command cmd);
	public void deleteGrade(Command cmd);
	public void deleteOrder(Command cmd);
	public void insertBasket(Command cmd);
	public void insertGrade(Command cmd);
	public void insertOrder(Command cmd);
	public void insertOrderThroughBasket(Command cmd);
	public void updateBasketByIdnItemSeq(Command cmd);
	public void updateGrade(Command cmd);
	////get메소드는 필요한대로. 단 네이밍규칙은 findBy###
}
