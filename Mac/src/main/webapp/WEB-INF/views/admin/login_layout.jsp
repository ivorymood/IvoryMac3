<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<style>
		#tab-login-title{
			border: 1px solid gray; 
			margin: 0 auto;
			margin-top: 60px;
		}
		#td-login-title{
			border: 1px solid gray;
			font-size: 40px;
		}
		#tab-login{
			border: 1px solid gray; 
			margin: 0 auto;	
			margin-top: 80px;	
		}
		#td-login-text{
			border: 1px solid gray;
			font-size: 12px;
		}
		#tab-login tr{
			border: 1px solid gray; 
			width: 320px;
			/* margin: 0 auto;	 */
			height: 50px;	
		}
		#tab-login tr td{
			border: 1px solid gray; 
			width: 320px;	
			/* margin: 0 auto;	 */
			height: 50px;
		}
		.int-login{
			width: 96%;
			height: 70%;	
		}
		#btn-login{
			width: 320px;
			height: 54px;
		}
		#a-login-searchPass{
			margin-bottom: 30px;
			font-size: 12px;
			border: 1px solid gray; 
		}
	</style>
</head>
<body>

	<section>
		<div id="content">
 			<tiles:insertAttribute name="content"/>
		</div>
 	</section>

</body>
	
</html>