<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
</head>
<body>
  <div>
  		<div class="div-custMana-title1"> || 관리자 페이지 > 고객 관리</div>
  </div>
  <div>
  		<div class="div-custMana-title2"> || 조 회</div>
  </div><br /><br /> 
	<div class="div-custSearch-total">
  		<div class="div-custSearch-up">
	    	<div class="div-custSearch-singleSearch">단일 검색 &nbsp;&nbsp; 
	  			<span>
	  				<select name="b-sel-custSearch-search" id="b-sel-custSearch-search" class="b-sel-custSearch-search">
  	 					<option value="선택">선택</option>
  	 					<option selected="selected" value="customId">아이디</option>
  	 					<option selected="selected" value="name">이름</option>
  	 					<option selected="selected" value="email">이메일</option>
  	 					<option selected="selected" value="phoneNum">전화번호</option>	  	 		
  	 				</select>  &nbsp;&nbsp;
	  			</span>
	  			<span>
	  				<input id="inp-custSearch-contentsSearch" name="inp-custSearch-contentsSearch" class="inp-custSearch-contentsSearch" type="text" placeholder="내용을 입력해 주세요" />
	  			</span>
	  			<span>
	  	 			<button id="btn-custSearch-oneSearch" class="btn-custSearch-oneSearch">검 색</button>  		
	  			</span>
			</div> 
  		</div> <br /><br />
  
  		<div class="div-custSearch-result">
  			<c:forEach begin="1" end="1" >
  				<div class="div-custSearch-image">
  					<div class="div-custSearch-pic">사진
  					
  					</div>
  				</div>
  				<div>
		  			<div class="div-custSearch-info">
		  				<div>아이디</div>	
		  				<div>2</div>	
		  				<div>이름</div>	
		  				<div>4</div>	
		  				<div>회원 등급</div>	
		  				<div>6</div>	
		  			</div>
 	 			</div> 
  			</c:forEach>
  		</div> <br />
  		
  		<%-- <div class="div-custMana-listContent">
	      	<c:forEach begin="0" end="${list.size()}" items="${list}" step="1" var="customer" varStatus="i">
	     		<div class="div-custMana-listContents">
	     			<span>${customer.joinDate}</span>
	     			<span>${customer.customId}</span>
	     			<span>${customer.name}</span>
	     			<span>${customer.gradeCode}</span> 
	     			<span>${customer.consumption}</span>
	     			<span>${customer.phoneNum}</span>
	     			<span>${customer.email}</span>
	     		</div>
	      	</c:forEach>	
	    </div> --%>
  		
  		
	</div>	
</body>
<script>

</script>
</html>