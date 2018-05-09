<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<form id="form-itemUpdate">
	  	 <div>
	  		<div class="div-itemUpdate-title1" > || 관리자 페이지 > 상품 수정</div>
	  	 </div>
	  	 <div>
	  		<div class="div-itemUpdate-title2"> || 상품 수정</div>
	  	 </div><br /><br /><br />
	  	 <div class="div-itemUpdate-choiceTo">
	  	 	<div class="div-itemUpdate-itemCode">카테고리 종류  -  ${code.data2}</div>
	  	 </div>		
	  	 	<br />
	  	 <div class="div-itemUpdate-rightDetail">
	  	 		 <div class="div-itemUpdate-rigDetLeft">아이템 명</div>
		  	 	 <div> 
		  	 	 	<input id="inp-itemUpdate-itemName" name="inp-itemUpdate-itemName" type="text" class="inp-itemUpdate-insert" value="${item.itemName}"/>
		  	 	 </div>
		  	 	 
		  	 	 <div class="div-itemUpdate-rigDetLeft">재고량</div>
		  	 	 <div> 
		  	 	 	<input id="inp-itemUpdate-itemStock" name="inp-itemUpdate-itemStock" type="text" class="inp-itemUpdate-insert" value="${item.itemStock}"/>
		  	 	 </div>	
		  	 	 
		  	 	 <div class="div-itemUpdate-rigDetLeft">색상 설명</div>
		  	 	 <div> 
		  	 	 	<input id="inp-itemUpdate-colorExp" name="inp-itemUpdate-colorExp" type="text" class="inp-itemUpdate-insert" value="${item.colorExp}" />
		  	 	 </div>	
		  	 	
		  	 	 <div class="div-itemUpdate-rigDetLeft">질감 설명</div>
		  	 	 <div> 
		  	 	 	<input id="inp-itemUpdate-textureExp" name="inp-itemUpdate-textureExp" type="text" class="inp-itemUpdate-insert" value="${item.textureExp}" />
		  	 	 </div>	
			 	 <div class="div-itemUpdate-rigDetLeft">이미지 첨부</div>
		  	 	 <div> 
		  	 	 	<input id="file" name="file" type="file" value="파일첨부" class="inp-itemUpdate-picName"/>
		  	 	 </div>			  	 
	  	 </div><br />
	  	 <div class="div-itemUpdate-insert">						
		  	  <button class="b-btn-itemUpdate-insert" id="b-btn-itemUpdate-insert"> 수 정 </button>		 	  	 	 
		 </div>
</form>
<script>
/* 	$('#b-btn-itemUpdate-insert').on('click',function(){
		location.href="@{path.context}/admin/itemUpdate/{}/{}/{}/{}/{}";
	} */
 	$('#b-btn-itemUpdate-insert').on('click',function(){
		$('#form-itemUpdate')
		.attr('action','${path.context}/admin/itemUpdate')
		.attr('method','post')
		.submit();
	});  
</script>	 