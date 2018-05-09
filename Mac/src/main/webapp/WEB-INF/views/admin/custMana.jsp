<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<form id="form_custMana" name="form_custMana">	
  <div>
  		<div class="div-custMana-title1"> || 관리자 페이지 > 고객 관리</div>
  </div>
  <div>
  		<div class="div-custMana-title2"> || 목 록</div>
  </div><br /><br /> 
  <div class="div-custMana-total">
	  <div class="div-custMana-up">
	    <div class="div-custMana-detailSearch">
	    	<div class="div-custMana-addDay">
		    	<div>
		    		가입일
		    	</div>
		        <div class="div-custMana-glyCal">
		       		<button class="btn-custMana-glyCal" type="submit">
		       			<i class="glyphicon glyphicon-calendar"></i>
		       		</button>
		        </div>
		        <div>
    	      		<input id="inp-custMana-startDay" name="inp-custMana-startDay" type="text" class="inp-custMana-startDay" >
		        </div>
		   </div>
		   <div class="div-custMana-price">
		   		구매금액  
		   		<input type="text" class="inp-custMana-inpSize" value="0"/>원 ~ 
		     	<input type="text" class="inp-custMana-inpSize" value="500000"/>원		    
		    </div>
		    <div class="div-custMana-grade">회원 등급 
	            <select name="b-sel-custMana-grade" id="b-sel-custMana-grade" class="b-sel-custMana-grade">
	     			<option value="all" selected="selected">전체</option>
	  	 			<option value="4">다이아몬드</option>
	  	 			<option value="3">골드</option>
	  	 			<option value="2">실버</option>	 	
	  	 			<option value="1">브론즈</option>	 	
	     	    </select>
		    </div>	
			<div class="div-custMana-display"> &nbsp;&nbsp;
	    		<button class="div-custMana-btn" id="div-custMana-btn">조건 검색</button>
	   		</div>  
	 	</div>
    </div><br /><br />  
	  
	<div>
	  	회원등급: 1.브론즈(${map.bronze}명), 2.실버(${map.silver}명), 3.골드(${map.gold}명), 4.다이아몬드(${map.diamond}명)  
	</div>
	 
	<div class="div-custMana-list">	
		<div class="div-custMana-listIn">
	      	<div>가입일</div>
	      	<div>아이디</div>
	        <div>이름</div>
	      	<div>회원등급</div>
	        <div>구매금액</div>
	      	<div>폰번호</div>
            <div>이메일</div>
	    </div>
	    <div class="div-custMana-listContent">
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
	    </div>
	</div>     
  </div> <br />
  <div class="b-div-custMana-totalPage">
  	 <div class="b-div-custMana-page" id="b-div-custMana-page">
  		<c:if test="${map.startBlock!=1}">
   			<a style="margin-right: 7px" onclick="test(${map.startBlock-1})">&laquo;</a>  						
  		</c:if>  
  						
   		<c:forEach begin="${map.startBlock}" end="${map.endBlock}" step="1" varStatus="i">
   			<c:choose>
   				<c:when test="${map.pageNum eq i.index}">
   					<span class="active"  id="b-span-custMana-pagination">
     					<a onclick="test(${i.index})">${i.index}</a>
     				</span>
     			</c:when>
     			<c:otherwise>
     				 <span>
                       <a class="a-custMana-pageNum" onclick="test(${i.index})">${i.index}</a>
                   </span>
     			</c:otherwise>	
   			</c:choose>	
   		</c:forEach>
	  	 
		<c:if test="${map.endBlock!=map.totalPageCount}">
			<a style="margin-left: 7px;" onclick="test(${map.endBlock+1})">&raquo;</a>
		</c:if>
     </div>
     <input type="hidden" name="pageNum" />
  </div>
</form>
<script>
	$(document).ready(function(){
		alert('grade code :'+"${map.gradeCode}");
	 	$('#b-sel-custMana-grade option').each(function(){
	    if($(this).val()==="${map.gradeCode}"){
	      $(this).prop("selected","selected");  
	    }
	  });
	});
	
 	$('#div-custMana-btn').on('click',function(){
		$('#form_custMana')
		.attr('action','${path.context}/admin/list')
		.attr('method','post')
		.submit();
	}); 
 	function test(x){
 		alert('파라미터'+x);
 		var form = document.form_custMana;
 		form.pageNum.value = x;
 		alert('x='+form.pageNum.value);
 		$('#form_custMana')
 		.attr('action','${path.context}/admin/list')
		.attr('method','post')
		.submit();
 	} 
 	$('#inp-custMana-startDay').daterangepicker({
		"locale": {
                      "format": "YYYY-MM-DD",
                      "separator": " / ",
                      "applyLabel": "적용",
                      "cancelLabel": "취소",
                      "fromLabel": "From",
                      "toLabel": "To",
                      "customRangeLabel": "Custom",
                      "weekLabel": "W",
                      "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
                      "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                      "firstDay": 1
                  },
                  startDate : new Date(),
                  endDate : moment().add(1, 'months'),
                 "opens": "right"
	}, 
	function(start, end, label) {
	  console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	  departureTime =  start.format('YYYY-MM-DD');
	  arrivalTime = end.format('YYYY-MM-DD');
	});
</script>


