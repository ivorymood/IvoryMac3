<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<style>		
.div-write-down{
	background:white;
}
.div-write-total{
	    border: solid;
	    margin-top: 30px;
	    width: 1100px;
	    margin-left: 150px;
}	
.div-write1{
		display: inline-block;
} 
.div-writeText-good{
	    display: inline-block;
	    margin-left: 20px;
}	
.div-writeText-good-in{
		display: inline-block;
}
.sel-write-good{
		display: inline-block;
}	
.div-write-gg{
		display: inline-block;
}
.div-writebtn-enter{
		margin-left: 148px;
		display: inline-block;
}
.div-write-enter-btn{
		display: inline-block;
}

.btn-write-enter{
		margin-top:30px;
		background:black;
		color:white;
		width:150px;
		height:50px;
}		
	</style>
<form id="form-write" name="form-write"  method="post">
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
				<textarea id="inp-write-content" name="inp-write-content"  rows="18.9" cols="153.8" class="textarea-write-content">
				</textarea>
			</div>
			
		</div>
	</div>
	<!-- <input type="hidden" name="custom_id" value="kimjun" /> -->
	<div class="div-writebtn-enter">
	<div class="div-write-enter-btn">
	 <button id="btn-write-enter" class="btn-write-enter">확인</button>
	 </div>
	 </div>
</form>	
</html>
<script>

			$('#btn-write-enter').on('click',function(){
				alert('추가 클릭');
				$('#form-write')
				.attr('action','${path.context}/board/write_exec')
				.attr('method','post')
				.submit();
			});   

</script>

