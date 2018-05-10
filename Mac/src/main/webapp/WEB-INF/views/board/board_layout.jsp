<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<style>
/* board */		
	.div-boardList-total{
		width: 90%; 
		height: 700px;
		margin: 0 auto;
		margin-top: 70px;
		/* border: 1px solid gray; */
	}	
	.div-board-title{
		width: 300px;
		height: 100px;
		margin: 0 auto;
		font-size: 40px;
		font-weight: bold;	
	}
	.div-boardList-list{
		display: grid;
		grid-template-row: auto auto;
		border: 1px solid black;  
		text-align: center;
	    padding: 5px;
	  	grid-gap: 5px;
	    background-color: #7b7b82;
	}
	.div-boardList-list > div{
	    text-align: center;
	    background-color: rgb(222, 239, 239);
	}	
	.div-boardList-listIn{
		display: grid;
	  	grid-template-columns: 50fr 200fr 350fr 130fr 200fr 100fr ;
		height: 32px; 	
	}
	.div-boardList-listIn > div{
	 	border: 1px solid black;
		display: block;
		text-overflow: ellipsis;
		white-space: nowrap;
		word-spacing: normal;
		overflow: hidden;
		font-size: 17px;
	} 
	.div-boardList-listContent{
		height: 480px;
	}
	.div-boardList-listContents{
		display: grid;
		grid-template-columns: 50fr 200fr 350fr 130fr 200fr 100fr ;
		font-size: 18px;
		text-align: center;
	}
	 .span-boardList{
		border: 1px solid black; 
		display: block;
		text-overflow: ellipsis;
		white-space: nowrap;
		word-spacing: normal;
		overflow: hidden;
		font-size: 17px;
		height: 32px; 
	}
	.b-div-boardList-page{
		margin-left: 700px;
		font-size: 20px;
	}
	
		
		
		
		
		
		
/* write */		
	.div-write-total{
		width: 90%; 
		height: 620px;
		margin: 0 auto;
		margin-top: 70px; 
	}	
	.div-write-up{
		width: 260px;
		height: 100px;
		margin: 0 auto;
		font-size: 40px;
		font-weight: bold;
	}	
	.div-write-down{
		border: 1px solid gray; 
		height: 520px; 
		width: 100%; 
		margin: 0 auto;
		display: grid; 
		grid-template-columns: 100px 1321px;
		display: grid;
	    padding: 5px;
	    grid-gap: 5px;
	    background-color: #7b7b82;
	    font-size: 17px;
	}
	.div-write-down > div{
		/* background-color: rgb(222, 239, 239); */
	    border: 1px solid black;
	/*     height: 100%; */
	    line-height: 1.3;
		/* text-align: center; */
	}
	.div-writeText-title{
		text-align: center;
		height: 40px;
		background-color: rgb(222, 239, 239);
	}
	.div-write1{
		background-color: rgb(222, 239, 239);
	}
	.inp-write-title{
		width: 1320px;
		height: 100%;
	}
	.div-writeText-in{
		margin-top: 10px;
	}
	.div-writeText-good{
		text-align: center;
		height: 40px;
		background-color: rgb(222, 239, 239);	
	}
	.sel-write-good{
		height: 100%;
		width: 120px;
	}
	.div-writeText-good-in{
		margin-top: 10px
	}
	#inp-write-content{
		border-bottom: white;
	}
	.div-write-gg{
		background-color: rgb(222, 239, 239);
	}
	.div-writeText-content{
		text-align: center;
		height: 413px;
		background-color: rgb(222, 239, 239);
	}
	.div-writeContent-in{
		margin-top: 180px;
	}
	.div-write-cc{
		background-color: white;
	}
	.btn-write-enter{
		width: 100px;
	    height: 31px;
		border: 1px solid gray;
		margin-left: 1420px;
		background-color: #555555;
   	 	color: white;
    	border: 2px solid #555555;
   		border-radius: 4px;
   		font-size: 15px;
	}
	.btn-write-enter:hover {
		 background-color: white;
   		 color: black;
	}
	.div-write-btn{
		margin-top: 20px;
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