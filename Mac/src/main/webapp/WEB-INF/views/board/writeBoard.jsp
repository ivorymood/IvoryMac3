<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
</head>
	<body>
		<form id="form-welUpdate">
			<div class="div-writeBoard-body">
				리뷰 등록 완료
			</div>
			<input id="btn-writeBoard" class="btn-writeBoard"/>
		</form>
	</body>
<script>
	$('#form-welUpdate')
		.attr('action','${path.context}/board/boardList')
		.attr('method','post')
		.submit(); 
	
</script>
</html>