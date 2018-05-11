<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
	<div>
  		<div class="div-codeSearch-title1"> || 관리자 페이지 > 상품 관리</div>
    </div>
    <div>
  		<div class="div-codeSearch-title2"> || 코드 조회</div>
    </div><br /><br /> 
<form id="form_codeSearch" name="form_codeSearch">
	<div class="div-codeSearch-total">	
		<div class="div-codeSearch-up">
		  	<div class="div-codeSearch-singleSearch"> 
		  		<input id="inp-codeSearch-code" name="inp-codeSearch-code" type="text" placeholder="코드명을 입력하세요" class="inp-codeSearch-insItem"/>&nbsp; &nbsp;
		  		<button id="btn-codeSearch-oneSearch" class="btn-codeSearch-oneSearch">검 색</button><br />
		    </div>	    
		</div><br /><br /><br />
		<div class="div-codeSearch-down">
			<div class="div-codeSearch-list">	
		  		<div class="div-codeSearch-listIn">
		  			<div>등록순서</div>
		  			<div>제품명</div>
		  			<div>재고량</div>
		  			<div>색상 설명</div>
		  			<div>질감 설명</div>
		  			<div>사진 이름</div>
		  			<div>상품 코드</div>
		  		</div>
		  		<div class="div-codeSearch-listContent">
		  			<c:forEach begin="0" end="${list.size()}" items="${list}" step="1" var="item" varStatus="i">
		  				<div class="div-codeSearch-listContents">
		  					<span>${item.itemSeq}</span>
		  					<span>${item.itemName}</span>
		  					<span>${item.itemStock}</span>
		  					<span>${item.colorExp}</span>
		  					<span>${item.textureExp}</span>
		  					<span>${item.picName}</span>
		  					<span>${item.itemCode}</span>
		  			    </div>
		  			</c:forEach>
		  		</div>
		  	</div>     
		</div>
	    <div class="b-div-codeSearch-page" id="b-div-codeSearch-page">     
	  		<c:if test="${map.startBlock!=1}">
	   			<a style="margin-left: 7px;" onclick="testI(${map.startBlock-1})">&laquo;</a>  			
	  		</c:if>  
	  						
	   		<c:forEach begin="${map.startBlock}" end="${map.endBlock}" step="1" varStatus="i">
	   			<c:choose>
	   				<c:when test="${map.pageNum eq i.index}">
	   					<span class="active"  id="b-span-codeSearch-pagination">
	     					<a onclick="testI(${i.index})">${i.index}</a>
	     				</span>
	     			</c:when>
	     			<c:otherwise>
	     				 <span>
	                       <a class="a-codeSearch-pageNum" onclick="testI(${i.index})">${i.index}</a>
	                   </span>
	     			</c:otherwise>	
	   			</c:choose>	
	   		</c:forEach>
	   	
			<c:if test="${map.endBlock!=map.totalPageCount}">
				<a style="margin-left: 7px;" onclick="testI(${map.endBlock+1})" >&raquo;</a>
			</c:if>
		</div>	
	</div>     
</form>
<script>
 	 function testI(y){    //페이지네이션 할때 쓰입니다.
         	var form = document.form_codeSearch;
    		form.pageNum.value = y;
         $('#form_codeSearch')
         .attr('action','${path.context}/admin/codeSearch')
         .attr('method','post')
         .submit();
     }    
</script>
