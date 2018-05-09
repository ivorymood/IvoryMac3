<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<form id="form-addItem">
	  	 <div>
	  		<div class="div-addItem-title1"> || 관리자 페이지 > 상품 관리</div>
	  	 </div>
	  	 <div>
	  		<div class="div-addItem-title2"> || 등 록</div>
	  	 </div><br /><br />
	  	 <div class="div-addItem-choiceTo">
	  	 	 <select class="b-sel-addItem-choice" name="b-sel-addItem-choice" id="b-sel-addItem-choice">
	  	 	 	<option value="카테고리 선택">카테고리 선택</option>
	  	 		<option value="1000">붓</option>
	  	 		<option value="2000">립스틱</option>
	  	 		<option value="3000">아이섀도우</option>
	  	 	 </select>
	  		 <input class="b-inp-addItem-insert" id="inp-addItem-itemName" name="inp-addItem-itemName" type="text" placeholder="*상품명을 입력하세요"/> 	 
	  	 </div>		
	  	 	<br /><br />
	  	 <div class="div-addItem-rightDetail">
		  	 	 <div class="div-addItem-rigDetLeft">재고량</div>
		  	 	 <div> 
		  	 	 	<input id="inp-addItem-itemStock" name="inp-addItem-itemStock" type="text" class="inp-addItem-insert"/>
		  	 	 </div>	
		  	 	 
		  	 	 <div class="div-addItem-rigDetLeft">색상 설명</div>
		  	 	 <div> 
		  	 	 	<input id="inp-addItem-colorExp" name="inp-addItem-colorExp" type="text" class="inp-addItem-insert" />
		  	 	 </div>	
		  	 	
		  	 	 <div class="div-addItem-rigDetLeft">질감 설명</div>
		  	 	 <div> 
		  	 	 	<input id="inp-addItem-textureExp" name="inp-addItem-textureExp" type="text" class="inp-addItem-insert" />
		  	 	 </div>	
			 	 <div class="div-addItem-rigDetLeft">이미지 첨부</div>
		  	 	 <div> 
		  	 	 	<input id="file" name="file" type="file" value="파일첨부" class="inp-addItem-picName"/>
		  	 	 </div>			  	 
	  	 </div><br />
	  	 <div class="div-addItem-insert">						
		  	  <button class="b-btn-addItem-insert" id="b-btn-addItem-insert"> 추가 </button>		 	  	 	 
		 </div>
</form>		 
<script>
	$('#b-btn-addItem-insert').on('click',function(){
		alert('추가 클릭');
		$('#form-addItem')
		.attr('action','${path.context}/admin/add')
		.attr('method','post')
		.attr('enctype','multipart/form-data') 
		.submit();
	}); 
</script>