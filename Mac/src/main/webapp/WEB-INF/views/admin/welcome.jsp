<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<form id="form-welcome">
	<div class="div-welcome-body">
		관리자님 안녕하세요 ! 
	</div>
	<input type="submit" id="btn-welcome" class="btn-welcome"/>
</form>
<script>
 $('#form-welcome')
 	.attr('action','${path.context}/admin/itemList')
	.attr('method','post')
	.submit();
</script>
