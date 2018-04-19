<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<form id="form-login">
	<table id="tab-login-title">
		<tr>
			<td id="td-login-title">관리자 로그인</td>
		</tr>
	</table>
		<table id="tab-login">
			<tr>
				<td>
					<input id="inp-login-customId" name="inp-login-customId" class="int-login" type="text" value="admin" placeholder="*예시:USERNAME@NETWORT.CO.KR"/>
				</td>
				<td>
					<input id="inp-login-customPass" name="inp-login-customPass" class="int-login" type="text" value="admin" placeholder="*비밀번호"/>
				</td>
			</tr>
		
			<tr>
				<td>
					<button id="btn-login">로그인
					</button>
				</td>
				<td>
				</td>
			</tr>
	</table>
</form>	
<script>
		$('#btn-login').on('click',function(){
			alert("로그인 클릭");
			$('#form-login')
			.attr('action','${path.context}/admin/login')
			.attr('method','post')
			.submit();
		});
</script>