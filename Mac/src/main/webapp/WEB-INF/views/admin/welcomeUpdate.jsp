<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
</head>
	<body>
		<form id="form-welUpdate">
			<div class="div-welUpdate-body">
				수정되었습니다
			</div>
			<input id="btn-welUpdate" class="btn-welUpdate"/>확  인
		</form>
	</body>	
<script>
	$('#form-welUpdate')
		.attr('action','${path.context}/admin/itemList')
		.attr('method','post')
		.submit(); 
	
</script>
</html>