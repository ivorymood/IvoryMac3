<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="context" value="<%=request.getContextPath()%>"></c:set>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Insert title here</title>
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
</head>
<body>
<div id="owl" class="owl-carousel owl-theme">
    <div class="item"><img src="${context}/resources/img/galary1.jpg"></div>
    <div class="item"><img src="${context}/resources/img/galary2.jpg"></div>
    <div class="item"><img src="${context}/resources/img/galary3.jpg"></div>
    <div class="item"><img src="${context}/resources/img/galary4.jpg"></div>
    <div class="item"><img src="${context}/resources/img/galary5.jpg"></div>
    <div class="item"><img src="${context}/resources/img/galary6.jpg"></div>
    <div class="item"><img src="${context}/resources/img/galary7.jpg"></div>
</div>
<script type="text/javascript">
$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});

});
</script>
</body>
</html>