<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<form id="form-write" name="form-write">
	<div class="div-write-total">
		<div class="div-write-up">REVIEW 작성
		</div>
		
		<div class="div-write-down">
			<div class="div-writeText-title">
				<div class="div-writeText-in">상품 명</div>
			</div>
			<div class="div-write1">
				<input id="inp-write-title" name="inp-write-title" class="inp-write-title" type="text" />
			</div>
			
			
			<div class="div-writeText-good">
				<div class="div-writeText-good-in">좋아요</div>
			</div>
			<div class="div-write-gg">
				<select name="sel-write-good" id="sel-write-good" class="sel-write-good">
					<option value="7" selected="selected">별점 선택</option>
					<option value="0">☆☆☆☆☆</option>
					<option value="1">★☆☆☆☆</option>
					<option value="2">★★☆☆☆</option>
					<option value="3">★★★☆☆</option>
					<option value="4">★★★★☆</option>
					<option value="5">★★★★★</option>
				</select>
			</div>
			
			
			<div class="div-writeText-content">
				<div class="div-writeContent-in">만족도 평가</div>
			</div>
			<div class="div-write-cc">
				<textarea id="inp-write-content" name="inp-write-content"  rows="18.9" cols="144.7" class="textarea-write-content">
				</textarea>
			</div>
			
		</div>
	</div>
	<div class="div-write-btn">
		<button id="btn-write-enter" class="btn-write-enter">확인</button>
	</div>
	<input type="hidden" name="custom_id" value="kimjun" />
</form>	

	<script>	
		$('#btn-write-enter').on('click', function(){
			alert("확인 클릭");
			$('#form-write')
			.attr('action','${path.context}/board/writeList')
			.attr('method','post')
			.submit();
		});
	</script>
</html>