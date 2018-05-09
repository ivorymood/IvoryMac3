<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<form id="form_listEmployee" name="form_listEmployee">	
  	<div>
  		<div class="div-listEmployee-title1"> || 관리자 페이지 > 직원 관리</div>
  	</div>
  	<div>
  		<div class="div-listEmployee-title2"> || 목 록</div>
  	</div><br /> 
 
  	<div class="div-listEmployee-total">
  		<div class="div-listEmployee-in">
  			<c:forEach begin="0" end="${adminList.size()}" items="${adminList}" step="1" var="customer" varStatus="i">	
	  			<div class="div-listEmployee-four">
	  				<div class="div-listEmployee-up">
	  					<img src="${path.img}/${customer.profile}" alt="" style="width: 250px; height: 250px;"/>
	  				</div>	
	  				<div class="div-listEmployee-down">${customer.name}</div>	
	  			</div>
		    </c:forEach>
  		</div>
  	</div>
</form>
