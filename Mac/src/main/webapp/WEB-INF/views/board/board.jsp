<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<form id="form_board" name="form_board">
	<div class="div-boardList-total">
		<div class="div-board-title">TOTAL REVIEW
		</div>
 	    <div>
	  		<div class="div-boardList-list">	
		  		<div class="div-boardList-listIn">
		  			<div>no</div>
		  			<div>상품 명</div>
		  			<div>만족도 평가</div>
		  			<div>좋아요</div>
		  			<div>작성 일</div>
		  			<!-- <div>매장 위치</div> -->
		  			<div>작성 자</div>
		  			<!-- <div>상품 번호</div> -->
		  		</div>
		  		<div class="div-boardList-listContent">
		  			<c:forEach begin="0" end="${list.size()}" items="${list}" step="1" var="comment" varStatus="i">
		  				<div class="div-boardList-listContents">
		  					<span class="span-boardList">${comment.commentSeq}</span>
		  					<span class="span-boardList">${comment.title}</span>
		  					<span class="span-boardList">${comment.contents}</span>
		  					<span class="span-boardList">${comment.helpful}</span>
		  					<span class="span-boardList">${comment.writeDate}</span>
		  					<%-- <span class="span-boardList">${comment.branch}</span> --%>
		  					<span  class="span-boardList">${comment.customId}</span>
		  					<%-- <span class="span-boardList">${comment.itemSeq}</span> --%>
		  			    </div>
		  			</c:forEach>
		  		</div>
	  		</div>     
		</div> &nbsp; &nbsp;&nbsp; &nbsp;
		
    <div class="b-div-boardList-page" id="b-div-boardList-page">     
  		<c:if test="${map.startBlock!=1}">
   			<a style="margin-left: 7px;" onclick="board(${map.startBlock-1})">&laquo;</a>  			
  		</c:if>  
  						
   		<c:forEach begin="${map.startBlock}" end="${map.endBlock}" step="1" varStatus="i">
   			<c:choose>
   				<c:when test="${map.pageNum eq i.index}">
   					<span class="active"  id="b-span-boardList-pagination">
     					<a onclick="board(${i.index})">${i.index}</a>
     				</span>
     			</c:when>
     			<c:otherwise>
     				 <span>
                       <a class="a-boardList-pageNum" onclick="board(${i.index})">${i.index}</a>
                   </span>
     			</c:otherwise>	
   			</c:choose>	
   		</c:forEach>
   	
		<c:if test="${map.endBlock!=map.totalPageCount}">
			<a style="margin-left: 7px;" onclick="board(${map.endBlock+1})" >&raquo;</a>
		</c:if>
     </div>
  </div> 
	
   	<input type="hidden" name="pageNum" />
   	<input type="hidden" name="boardSeq" />
   	<input type="hidden" name="a" />
   	<input type="hidden" name="b" />
   	<div style="text-align: center;'">
   	<button style="background: black; color: white; width: 150px;" id="btn_main">메인이동</button>
	</div>
 </form>         
<script>
 	 function board(y){    //페이지네이션 할때 쓰입니다.
         alert('파라미터'+y);
         	var form = document.form_board;
    		form.pageNum.value = y;
         alert('y='+form.pageNum.value);
         $('#form_board')
         .attr('action','${path.context}/board/boardList')
         .attr('method','GET')
         .submit(); 
     } 
 	
   
     $('#btn_main').on('click', function(){
			$('#form_board')
			.attr('action','${path.context}/homeSecond/')
			.attr('method','POST')
			.submit();
	 }); 
</script>
</html>