<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<div class="jumbotron text-center">
  <h1>My First Team Project</h1>
  <p>Start now!</p> 
</div>
  
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <h3>TEAM NAME</h3>
      <p>M A C</p>
    </div>
    <div class="col-sm-4">
      <h3>PROJEC NAME</h3>
      <p>MAC SHOP</p>
    </div>
    <div class="col-sm-4">
      <h3>Participants</h3>        
      <p>JUNG YONG HO</p>
      <p>HAN BO RAM</p>
      <p>LIM HYUN YOU</p>
    </div>
  </div>
</div>
<div style="background:black; margin-top: 100px;" class="jumbotron text-center">
	<h1 style="color:white;">MAC SHOP OPEN</h1>
	<form id="form_home" name="form_home">
	<button id="home_jsp_search" style="background:black; color:white; width:100px; height:70px; font-size:30px;">click</button>
	</form>
</div>
</body>
<script>
	$('#home_jsp_search').on('click',function(){
		 $('#form_home')
		 	.attr('action','${path.context}/home/')
			.attr('method','POST')
			.submit();
	})

</script>
</html>
