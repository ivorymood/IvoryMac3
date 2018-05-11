<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
  <div>
  		<div class="div-itemList-title1"> || 관리자 페이지 > 상품 관리</div>
  </div>
  <div>
  		<div class="div-itemList-title2"> || 목 록</div>
  </div><br /><br />
<form id="form_itemList" name="form_itemList">
  <div class="div-itemList-total">
	  <div class="div-itemList-up">
	  	<div class="div-itemList-singleSearch">
	  		<select  name="title" id="b-sel-itemList-oSearch" class="inp-itemList-glycal">
	  			<option selected="selected"  value="all" >선택</option>
	  			<option value="item_name">제품명</option>
		  		<option value="item_stock">재고량</option>
		  		<option value="texture_exp">질감 설명</option> 
	  		</select> &nbsp;&nbsp;
	  		<input name="content" id="inp-itemList-title" type="text" placeholder="상품명을 입력하세요" class="inp-itemList-insItem"/>&nbsp; &nbsp;
	  		<button onclick="testI(${map.startBlock})" id="btn-itemList-oneSearch" class="btn-itemList-oneSearch">검 색</button><br />
	    </div>  
	  </div> <br/><br/>
	  <div>
	  	총 등록 상품 : ${map.totalItem}개/ 검색된 상품: ${map.changetotalItem}개 <br />	
<%-- 	${map.nowPage}, ${map.pageNum}, ${map.pageSize}, ${map.blockSize} <br />
    ${map.totalCount},  ${map.totalPageCount} <br />
    ${map.startRow}, ${map.endRow}, ${map.startBlock}, ${map.endBlock} <br /> --%>
                                                                                    
	  </div>
	  <div>
	  	<div class="div-itemList-list">	
	  		<div class="div-itemList-listIn">
	  			<div>등록순서</div>
	  			<div>제품명</div>
	  			<div>재고량</div>
	  			<div>색상 설명</div>
	  			<div>질감 설명</div>
	  			<div>사진 이름</div>
	  			<div>상품 코드</div>
	  			<div>수정/삭제</div>
	  		</div>
	  		<div class="div-itemList-listContent">
	  			<c:forEach begin="0" end="${list.size()}" items="${list}" step="1" var="item" varStatus="i">
	  				<div class="div-itemList-listContents">
	  					<span>${item.itemSeq}</span>
	  					<span>${item.itemName}</span>
	  					<span>${item.itemStock}</span>
	  					<span>${item.colorExp}</span>
	  					<span>${item.textureExp}</span>
	  					<span>${item.picName}</span>
	  					<span>${item.itemCode}</span>
	  					<span>
	  						<a id="b-a-itmeList-update" onclick="testU(${item.itemSeq},${item.itemCode})">수정</a>
	  						<a id="b-a-itemList-delete${i.index+1}" onclick="testD(${item.itemSeq},${map.pageNum})">/삭제</a>	
	  					</span> 
	  			    </div>
	  			</c:forEach>
	  		</div>
	  	</div>     
	</div>
    <div class="b-div-itemList-page" id="b-div-itemList-page">     
  		<c:if test="${map.startBlock!=1}">
   			<a style="margin-left: 7px;" onclick="testI(${map.startBlock-1})">&laquo;</a>  			
  		</c:if>  
  						
   		<c:forEach begin="${map.startBlock}" end="${map.endBlock}" step="1" varStatus="i">
   			<c:choose>
   				<c:when test="${map.pageNum eq i.index}">
   					<span class="active"  id="b-span-itemList-pagination">
     					<a onclick="testI(${i.index})">${i.index}</a>
     				</span>
     			</c:when>
     			<c:otherwise>
     				 <span>
                       <a class="a-itemList-pageNum" onclick="testI(${i.index})">${i.index}</a>
                   </span>
     			</c:otherwise>	
   			</c:choose>	
   		</c:forEach>
   	
		<c:if test="${map.endBlock!=map.totalPageCount}">
			<a style="margin-left: 7px;" onclick="testI(${map.endBlock+1})" >&raquo;</a>
		</c:if>
     </div>
   	<input type="hidden" name="pageNum" />
   	<input type="hidden" name="itemSeq" />
   	<input type="hidden" name="itemCode" />
   	<input type="hidden" name="a" />
   	<input type="hidden" name="b" />
   </div> 
 </form>         
<script>

 	 function testI(y){    //페이지네이션 할때 쓰입니다.
         	var form = document.form_itemList;
    		form.pageNum.value = y;
    		form.title.value = $('select[name=title]').val();
    		form.content.value = $('#inp-itemList-title').val();
         $('#form_itemList')
         .attr('action','${path.context}/admin/itemList')
         .attr('method','post')
         .submit(); 
 
     } 
 	
     function testU(x,z){
    	 	var form = document.form_itemList;
    	 	form.itemSeq.value = x;
    	 	form.itemCode.value = z;
    	 $('#form_itemList')
    	 .attr('action','${path.context}/admin/update')
         .attr('method','post')
         .submit();
     }
     
     function testD(i,k){
    	 	var form = document.form_itemList;
    	 	form.a.value = i;
    	 	form.b.value = k;  	 	 	 	
    	 $('#form_itemList')
    	 .attr('action','${path.context}/admin/itemListDelete ')
         .attr('method','post')
         .submit();
     }
/*     $('#btn-itemList-oneSearch').on('click',function(){
    	 alert('검색 클릭');
    	 var form = document.form_itemList;

    	  $('form_itemList')
    	   .attr('action','${path.context}/admin/itemSearch')  
    	  .attr('method','post')
         .submit();      
    	 console.log(conceptName);
     });  */ 
</script>

