package com.mac.web.mapper;

import java.util.List;
import java.util.Map;
import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.mac.web.domain.Command;
import com.mac.web.domain.Customer;
import com.mac.web.domain.Item;

@Repository
public class AdminMapperImpl implements AdminMapper{
	private static final Logger logger = LoggerFactory.getLogger(AdminMapperImpl.class);
	@Autowired SqlSessionTemplate sqlSession;
	@Autowired Customer customer;
	String ns = "com.mac.web.mapper.AdminMapper.";
	
	@Override
	public List<Customer> selectAll(Map<String,?> map) {
		logger.info("AdminMapperImpl selectAll()===========================");
		return sqlSession.selectOne(ns+"selectAll");
	}

	@Override
	public List<Customer> findByName(Command cmd) {
		
		return null;
	}

	@Override
	public Customer selectById(Command cmd) {
		Customer y = sqlSession.selectOne(ns+"selectById", cmd);
		logger.info("AdminMapperImpl findByName()==========================");
		return y;
	}

	@Override
	public void removeAddr(Command cmd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeComment(Command cmd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeCustomer(Command cmd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeFeature(Command cmd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeItem(Command cmd) {
		logger.debug("AdminMapperImpl removeItem()==========================");	
		sqlSession.delete(ns+"removeItem", cmd);
	}

	@Override
	public void addAddr(Command cmd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void addComment(Command cmd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void addCustomer(Command cmd) {
		logger.debug("AdminMapperImpl addCustomer()==========================");
		sqlSession.insert(ns+"addCustomer", cmd);
		
	}

	@Override
	public void addFeature(Command cmd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void addItem(Command cmd) {
		logger.debug("AdminMapperImpl addItem()==========================");
		sqlSession.insert(ns+"addItem", cmd);
	}

	@Override
	public void modifyAddr(Command cmd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void modifyComment(Command cmd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void modifyCustomer(Command cmd) {

	}

	@Override
	public void modifyFeature(Command cmd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void modifyItem(Command cmd) {
		logger.info("AdminMapperImpl modifyItem()==================================");
		sqlSession.update(ns+"modifyItem", cmd);
		
	}

	@Override
	public int selectCount(Command cmd) {
		logger.info("AdminMapperImpl selectCount()==================================");
		int k = sqlSession.selectOne(ns+"selectCount", cmd);
		return k;
	}

	@Override
	public int selectTCount(Command cmd) {
		int t = sqlSession.selectOne(ns+"selectTCount");
		return t;
	}

	@Override
	public List<Item> selectListBy(Map<String, ?> map) {
		logger.info(":::AdminMapperImpl:::selectListBy()======================================================");
		List<Item> h = sqlSession.selectList(ns+"selectListBy");
		return h;
	}

	@Override
	public Item selectByitemSeq(Command cmd) {
		logger.debug(":::AdminMapperImpl:::selectByitemSeq()======================================================");
		Item u = sqlSession.selectOne(ns+"selectByitemSeq", cmd);
		logger.debug("AdminMapperImpl ::: item의 값은 {} ",u.toString());
		System.out.println("AdminMapperImpl ::: item의 값은 "+u.toString());
		return u;
	}

	@Override
	public List<Customer> selectAdmin() {
		logger.info(":::AdminMapperImpl:::selectAdmin()======================================================");
		return sqlSession.selectOne(ns+"selectAdmin");
	}

	@Override
	public int gradeCount(String grade) {
		return sqlSession.selectOne(ns+"gradeCount",grade);
	}

	@Override
	public int countSum() {
		logger.info(":::AdminMapperImpl:::countSum()======================================================");
		return sqlSession.selectOne(ns+"countSum");
	}

	@Override
	public int countSearch() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Item> selectSearch(Map<String, ?> map) {
		logger.info(":::AdminMapperImpl:::selectSearch()======================================================");
		return sqlSession.selectOne(ns+"selectSearch",map);
	}

	@Override
	public int selectSearchItem(Map<String, ?> map) {
		logger.info(":::AdminMapperImpl:::selectSearchItem()======================================================");
		return sqlSession.selectOne(ns+"selectSearchItem",map);
	}

	@Override
	public int selectTotalCount(Command cmd) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne(ns+"selectTotalCount",cmd);
	}


}
