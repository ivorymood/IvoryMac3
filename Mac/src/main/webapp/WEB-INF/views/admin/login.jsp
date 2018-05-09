<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<form id="form-login">
	<table id="tab-login-title">
		<tr>
			<td id="td-login-title">관리자 로그인</td>
		</tr>
	</table>
		<table id="tab-login">
			<tr>
				<td>
					<input id="inp-login-customId" name="inp-login-customId" class="int-login" type="text" value="admin" placeholder="*id"/>
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
	<input type="hidden" name="nowPage" value="1" />
	<input type="hidden" name="pageNum" value="1" />
	<input type="hidden" name="blockSize" value="5" />
	<input type="hidden" name="pageSize" value="5" />
</form>	
