<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<form id="form-joinE">
	  	 <div>
	  		<div class="div-joinE-title1"> || 관리자 페이지 > 직원 관리</div>
	  	 </div>
	  	 <div>
	  		<div class="div-joinE-title2"> || 등 록</div>
	  	 </div><br /><br /><br /><br />
	  	 <div class="div-joinErightDetail">
		  	 	 <div class="div-joinE-left">아이디</div>
		  	 	 <div> 
		  	 	 	<input id="inp-joinE-id" name="inp-joinE-id" type="text" class="inp-joinE-id" placeholder="*아이디"/>
		  	 	 </div>	
		  	 	 
		  	 	 <div class="div-joinE-left">비밀 번호</div>
		  	 	 <div> 
		  	 	 	<input id="inp-joinE-pass" name="inp-joinE-pass" type="text" class="inp-joinE-pass" placeholder="*비밀번호"/>
		  	 	 </div>	
		  	 	
		  	 	 <div class="div-joinE-left">이름</div>
		  	 	 <div> 
		  	 	 	<input id="inp-joinE-name" name="inp-joinE-name" type="text" class="inp-joinE-name" placeholder="이름" />
		  	 	 </div>	
		  	 	 
		  	 	  <div class="div-joinE-left">이메일</div>
		  	 	 <div> 
		  	 	 	<input id="inp-joinE-email1" name="inp-joinE-email1" type="email" class="inp-joinE-email1" placeholder="*user@networt.com" />
			  	 	<select  id="sel-joinE-email2" name="sel-joinE-email2" class="sel-joinE-email2">
						<option value="선 택">선 택</option>
						<option value="@naver.com">@naver.com</option>
						<option value="@gmail.com">@gmail.com</option>
						<option value="@hanmail.net">@hanmail.net</option>
						<option value="@hanmail2.net">@hanmail2.net</option>
						<option value="@hotmail.com">@hotmail.com</option>
						<option value="@outlook.com">@outlook.com/</option>
						<option value="@google.com">@google.com</option>
						<option value="@nate.com">@nate.com</option>
					</select>
		  	 	 </div>	
		  	 	 
		  	 	 <div class="div-joinE-left">전화 번호</div>
		  	 	 <div class="div-joinE-phoneTotal"> 
		  	 	 	<select id="div-joinE-phone1" name="div-joinE-phone1" class="div-joinE-phone">
						<option value="선택">선택</option>
						<option value="010">010</option>
						<option value="011">011</option>
						<option value="016">016</option>
						<option value="017">017</option>
						<option value="018">018</option>
						<option value="019">019</option>
					</select>&nbsp;&nbsp;-
		  	 	 	<input id="inp-joinE-phone2" name="inp-joinE-phone2" type="tel" class="inp-joinE-phone" placeholder="번호 앞자리" />&nbsp;&nbsp;-
		  	 	 	<input id="inp-joinE-phone3" name="inp-joinE-phone3" type="tel" class="inp-joinE-phone" placeholder="번호 뒷자리" />
		  	 	 </div>	
		  	 	 
			 	 <div class="div-joinE-left">이미지 첨부</div>
		  	 	 <div> 
		  	 	 	<input id="file" name="file" type="file" value="파일첨부" class="inp-joinE-profile"/>
		  	 	 </div>			  	 
	  	 </div><br />
	  	 <div class="div-joinE-insert">						
		  	  <button class="b-btn-joinE-insert" id="b-btn-joinE-insert"> 추가 </button>		 	  	 	 
		 </div>
</form>		 
<script>
	$('#b-btn-joinE-insert').on('click',function(){
		alert('추가 클릭');
		$('#form-joinE')
		.attr('action','${path.context}/admin/plusEmployee')
		.attr('method','post')
		.attr('enctype','multipart/form-data') 
		.submit();
	}); 
</script>