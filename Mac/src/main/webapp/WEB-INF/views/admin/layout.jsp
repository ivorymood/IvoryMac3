<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!doctype html>
<html lang="en">   
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Document</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-daterangepicker@2.1.30/daterangepicker.css"></link>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap-daterangepicker@2.1.30/moment.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap-daterangepicker@2.1.30/daterangepicker.js"></script>
  <style>

/*  total  */ 
	.div-custMana-frame {
	  display: grid;
	  grid-template-columns: auto auto;
	  padding: 10px;
	  grid-gap: 10px;
	  background-color: #7b7b82;
	  height: 760px;
	  width: 91%;
	  margin: 0 auto;
	  font-size: 17px;
	}
	.div-custMana-frame > div {
	  background-color: rgb(222, 239, 239);
	  border: 1px solid black;
	 /*  text-align: center; */
	  height: 100%;
	  line-height: 1.3;
	}
	.div-custMana-left{
		grid-template-row: auto auto auto auto;
	    width : 210px;
	    text-align: center;
	    height: 745px;
	    /* border: 1px solid red; */
	}
	.div-custMana-left > div{
	 	margin-top: 20px;
	 	font-size: 25px;
	 	/* border: 1px solid orange; */
	}
	.div-custMana-left > div > button{
		width: 100px;
		height: 40px;
		font-size: 15px;
		background-color: white;
   	 	color: black;
  	 	border: 2px solid #555555;
  	 	border-radius: 4px;
	}
	.div-custMana-left > div > button:hover{
		background-color: #555555;
   		color: white;
	}
	.div-custMana-right {
		width: 1218px;
	}

	
	
	
	
/*   custMana 	 */

    .div-custMana-title1{
		margin-left: 1px;
		font-size: 18px;
	}
	.div-custMana-title2{
		margin-left: 1px;
		font-size: 30px;
	}
	.div-custMana-total {
		  display: grid;
		  grid-template-row: auto auto auto;
		  grid-gap: 10px;
		  background-color: #deefef;
		  padding: 10px;
	}
	.div-custMana-total > div {
		font-size: 18px;
	}
	.div-custMana-up {
	  display: grid;
	  grid-template-row: auto auto;
	  grid-gap: 5px;
	  padding: 5px;
	  background-color: #7b7b82;
	}
	.div-custMana-up > div{
	  text-align: center;
	  background-color: rgb(222, 239, 239);
	}
	.div-custMand-singleSearch{
		height: 60px;
	}
	.b-sel-custMana-search{
		height: 31px;
	}
	.inp-custMana-contentsSearch{
		width: 400px;
	}
	.btn-custMana-oneSearch{
		width: 100px;
	    height: 31px;
	    font-size: 15px;
	    margin-left: 10px;	
		background-color: #555555;
   	 	color: white;
    	border: 2px solid #555555;
   		border-radius: 4px;
	}
	.btn-custMana-oneSearch:hover{
		 background-color: white;
   		 color: black;
 	}
	.div-custMana-detailSearch{
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 5px;
		padding: 10px;
		background-color: #7b7b82;
		width: 100%;
		margin: 0 auto;	
	}
	.div-custMana-detailSearch > div{
		 background-color: rgb(222, 239, 239);
		  height: 33px;
	}
	.div-custMana-addDay {
		display: grid;
	  	grid-template-columns: 180px 33px 210px ; 
	  	border: 1px solid black;
	}
	.div-custMana-price{
		border: 1px solid black;
	}
	.btn-custMana-glyCal{
		height: 31px;
	}
	.inp-custMana-inpSize{
	 	width: 160px; 
	 	height: 31px;
	} 
	.b-sel-custMana-grade{
		width: 197px;
	}
	.div-custMana-grade{
		display: grid;
	  	grid-template-columns:  180px 197px; 
	  	border: 1px solid black;
	  	/* margin-left: 2px; */
	}
	.div-custMana-email{
		border: 1px solid black;
	}
	.div-custMana-display {
		grid-column: 1 / 3;
	}
	.div-custMana-btn{
		width: 100px;
	    height: 40px;
	    font-size: 15px;
	    margin-right: 14px;
	    background-color: #555555;
   	 	color: white;
    	border: 2px solid #555555;
   		border-radius: 4px;
	}
	.div-custMana-btn:hover{
		 background-color: white;
   		 color: black;
	}
	.div-custMana-list{
		display: grid;
	    grid-template-row: auto auto;
	    grid-gap: 5px;
	    padding: 5px;
	    background-color: #7b7b82; 
	}
	.div-custMana-list > div{
		background-color: rgb(222, 239, 239);
	 	text-align: center;
	}
	.div-custMana-listIn {
		display: grid;
	  	grid-template-columns: 19fr 12fr 12fr 10fr 12fr 13fr 20fr;
		margin: 0 auto;
		width: 100%;
		height: 32px;
	}
	.div-custMana-listIn > div{
		border: 1px solid black;
		height: 32px;
		display: block;
		text-overflow: ellipsis;
		white-space: nowrap;
		word-spacing: normal;
		overflow: hidden;
	}
	.div-custMana-listContents{
		display: grid;
		grid-template-columns: 19fr 12fr 12fr 10fr 12fr 13fr 20fr;
		font-size: 18px;
		text-align: center;
		height: 32px;
	}
	.div-custMana-listContents > span{
		border: 1px solid black;
		display: block;
		text-overflow: ellipsis;
		white-space: nowrap;
		word-spacing: normal;
		overflow: hidden;	
	}
	.b-div-custMana-totalPage{
		height: 50px;
		width: 100%;
	}
	.b-div-custMana-page{
		text-align: center;
		display: inline-block;
		margin-left: 490px; 
	}
	.b-div-custMana-page span {
	    color: black;
	    float: left;
	    padding: 8px 16px;
	    text-decoration: none;	
	    border: 1px solid #ddd;
	}
	.b-div-custMana-page span.active{
	    background-color: #4CAF50;
    	color: white;
    	border: 1px solid #4CAF50;
	}
	.b-div-custMana-page span:hover:not(.active) {
		background-color: #ddd;
	} 
	.b-div-custMana-page > a{
		color: black;
	    float: left;
	    padding: 8px 16px;
	    text-decoration: none;	
	    border: 1px solid #ddd;
	} 
	
	
	
	
	
	
	
	
/*  addItem  */		
	.div-addItem-title1{
		margin-left: 1px;
		font-size: 18px;
	}
	.div-addItem-title2{
		margin-left: 1px;
		font-size: 30px;
	}
	.div-addItem-choiceTo{
		/* border: 1px solid black; */
		height: 45px;
	}
	.b-sel-addItem-choice{
		margin-left: 95px;
		height: 36px;
		margin-left: 30px;
		margin-top: 10px;
	}
	.b-inp-addItem-insert{
		height: 33px;
		margin-left: 70px;
	}
	.div-addItem-rightDetail{
		 display: grid;
	     grid-template-columns: 200px 500px;
	     grid-gap: 5px;
		/*  background-color: #7b7b82; */
		 padding: 5px;
	     height: 150px;
	  	 width: 715px;
		 margin: 0 auto;
		 font-size: 18px;
		 margin-left: 30px;
	}
	.div-addItem-rightDetail > div{
	  background-color: rgb(222, 239, 239);
	  height: 31px;
	}
	.inp-addItem-insert{
		width: 100%;
		height: 100%;
	}
	.div-addItem-rigDetLeft{
		text-align: center;
	}
	.div-addItem-insert{
		height: 34px;
	}
	.b-btn-addItem-insert{
		width: 100px;
	    height: 40px;
	    font-size: 15px;
	    margin-left: 645px;
	    background-color: #555555;
   	 	color: white;
    	border: 2px solid #555555;
   		border-radius: 4px;
	}
	.b-btn-addItem-insert:hover{
		 background-color: white;
   		 color: black;
	} 
	.inp-addItem-picName{
		height: 100%;
	}
	
	
	
	
	
	
/*  itemList  */

 	.div-itemList-title1{
		margin-left: 1px;
		font-size: 18px;
	}
	.div-itemList-title2{
		margin-left: 1px;
		font-size: 30px;
	}
	.div-itemList-total {
		  display: grid;
		  grid-template-row: auto auto auto;
		  grid-gap: 10px;
		  background-color: #deefef;
		  padding: 10px;
	}
	.div-itemList-total > div {
	  font-size: 18px;
	}
	.div-itemList-up {
	  display: grid;
	  grid-template-row: auto auto;
	  grid-gap: 5px;
	  padding: 5px;
	  background-color: #7b7b82;
	}
	.div-itemList-up > div{
	  text-align: center;
	  background-color: rgb(222, 239, 239);
	}
	.div-itemList-singleSearch{
		height: 60px;
	}
	.btn-itemList-oneSearch{
		width: 100px;
	    height: 31px;
	    font-size: 15px;
	    margin-left: 10px;	
		background-color: #555555;
   	 	color: white;
    	border: 2px solid #555555;
   		border-radius: 4px;
	}
	.btn-itemList-oneSearch:hover{
		 background-color: white;
   		 color: black;
 	}
	.div-itemList-detailSearch{
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 5px;
		padding: 10px;
		background-color: #7b7b82;
		width: 100%;
		margin: 0 auto;	
	}
	.div-itemList-detailSearch > div{
		 background-color: rgb(222, 239, 239);
		  height: 33px;
	}
	.div-itemList-detail{
		border: 1px solid black;
		display: grid;
	  	grid-template-columns: 250px 243px; 
	}
    .div-itemList-display{
		grid-column: 1 / 3;
	}
    .b-btn-itemList-detSearClick{
    	float: right;
		width: 100px;
	    height: 40px;
	    font-size: 15px; 
   		margin-right: 532px;
	    background-color: #555555;
   	 	color: white;
    	border: 2px solid #555555;
   		border-radius: 4px;
	}
	.b-btn-itemList-detSearClick:hover{
		 background-color: white;
   		 color: black;
	}
	.div-itemList-list{
		display: grid;
		grid-template-row: auto auto;
		border: 1px solid black;  
		text-align: center;
	    width: 100%;
	    padding: 5px;
	  	grid-gap: 5px;
	    background-color: #7b7b82;
	}
	.div-itemList-list > div{
	  text-align: center;
	  background-color: rgb(222, 239, 239);
	}
	.div-itemList-listIn{
		display: grid;
	  	grid-template-columns: 87px 186px 80px 295px 129px 209px 99px 101px;
		height: 32px; 	
	}
	.div-itemList-listIn > div{
		border: 1px solid black;
		display: block;
		text-overflow: ellipsis;
		white-space: nowrap;
		word-spacing: normal;
		overflow: hidden;
	} 
	.di-itemList-listContent{
		height: 220px;
	}
	.div-itemList-listContents{
		display: grid;
		grid-template-columns: 87px 186px 80px 295px 129px 209px 99px 101px;
		font-size: 18px;
		text-align: center;
	}
	.div-itemList-listContents > span {
		border: 1px solid black; 
		height: 32px;
		display: block;
		text-overflow: ellipsis;
		white-space: nowrap;
		word-spacing: normal;
		overflow: hidden;
	}
	.text-itemList-exp{
		height: 30px;
	}
	.div-itemList-btn{
		float: right;
	}
	.div-itemList-addDay{
		display: grid;
	  	grid-template-columns: 250px 33px 210px; 
	  	border: 1px solid black;
	}
	.inp-itemList-glycal {
	 	width: 160px; 
	 	height: 29px;
	} 
	.inp-itemList-insItem{
		height: 29px;
		width: 180px;
	}
	.div-itemList-price{
		display: grid;
	  	grid-template-columns: 5fr 8fr 2fr 8fr; 
	  	border: 1px solid black;
	}
	.inp-itemList-price {
		width: 140px;
		height: 27px;
	}
	.b-div-itemList-page{
		text-align: center;
		display: inline-block;
		margin-left: 490px;
	}
	.b-div-itemList-page span {
	    color: black;
	    float: left;
	    padding: 8px 16px;
	    text-decoration: none;	
	    border: 1px solid #ddd;
	}
	.b-div-itemList-page span.active{
	    background-color: #4CAF50;
    	color: white;
    	border: 1px solid #4CAF50;
	}
	.b-div-itemList-page span:hover:not(.active) {
		background-color: #ddd;
	} 
	.b-div-itemList-page > a{
		color: black;
	    float: left;
	    padding: 8px 16px;
	    text-decoration: none;	
	    border: 1px solid #ddd;
	} 
	
	
	
/*  itemUpdate  */		
	.div-itemUpdate-title1{
		margin-left: 1px;
		font-size: 18px;
	}
	.div-itemUpdate-title2{
		margin-left: 1px;
		font-size: 30px;
	}
	.div-itemUpdate-choiceTo{
		height: 45px;
	}
	.b-sel-itemUpdate-choice{
		margin-left: 95px;
		height: 36px;
		margin-left: 30px;
		margin-top: 10px;
	}
	.b-inp-itemUpdate-insert{
		height: 33px;
		margin-left: 70px;
		/* border: 1px solid black; */
	}
	.div-itemUpdate-itemCode{
		margin-left: 30px;
		font-size: 19px;
	}
	
	.div-itemUpdate-rightDetail{
		 display: grid;
	     grid-template-columns: 200px 500px;
	     grid-gap: 5px;
		 background-color: #7b7b82;
		 padding: 5px;
	     height: 185px;
	  	 width: 715px;
		 margin: 0 auto;
		 font-size: 18px;
		 margin-left: 30px;
	}
	.div-itemUpdate-rightDetail > div{
	  background-color: rgb(222, 239, 239);
	  height: 31px;
	}
	.inp-itemUpdate-insert{
		width: 100%;
		height: 100%;
	}
	.div-itemUpdate-rigDetLeft{
		text-align: center;
	}
	.div-itemUpdate-insert{
		height: 34px;
	}
	.b-btn-itemUpdate-insert{
		width: 80px;
		height: 33px;
		margin-left: 664px; 
	}
	.inp-itemUpdate-picName{
		height: 100%;
	}
	.hr{
		border: 1px solid gray;
	}
	
	
	
	
	
/* custSearch */
	
	.div-custSearch-up{
	  display: grid;
	  grid-template-row: auto auto;
	  grid-gap: 5px;
	  padding: 5px;
	  background-color: #7b7b82;
	}
	.div-custSearch-up > div{
	  text-align: center;
	  background-color: rgb(222, 239, 239);
	}
	.div-custSearch-singleSearch{
		height: 60px;
	}
	.b-sel-custSearch-search{
		width: 160px;
		height: 29px;
	}
	.inp-custSearch-contentsSearch{
		width: 180px;
		height: 29px;
	}
	.btn-custSearch-oneSearch{
		width: 100px;
	    height: 31px;
	    font-size: 15px;
	    margin-left: 10px;	
		background-color: #555555;
   	 	color: white;
    	border: 2px solid #555555;
   		border-radius: 4px;
	}
	.btn-custSearch-oneSearch:hover{
		 background-color: white;
   		 color: black;
 	}
 	.div-custSearch-total {
		  display: grid;
		  grid-template-row: auto auto auto;
		  grid-gap: 10px;
		  background-color: #deefef;
		  padding: 10px;
	}
	.div-custSearch-total > div {
		font-size: 18px;
	}
	.div-custSearch-result{
		display: grid;
  		grid-template-columns: 1fr 2.5fr;
  		padding: 5px;
  		grid-gap: 5px;
  		background-color: #7b7b82;
  	 	 height: 150px;
	  	 width: 600px; 
	  	 margin-left: 200px;
	  	 border: 1px solid gray;		
	}
	.div-custSearch-image{
		background-color: rgb(222, 239, 239);
  		text-align: center;
  		 border: 1px solid gray;
	}
	.div-custSearch-info{
		display: grid;
  		grid-template-columns: 1fr 2.5fr;
  		grid-gap: 5px;
  		background-color: #7b7b82;
		font-size: 18px;
		border: 1px solid gray;
	}
	.div-custSearch-info > div{
		background-color: rgb(222, 239, 239);
  		text-align: center; 
  		border:  1px solid gray;
  		height: 42px;
  		border: 1px solid gray;	
	}
	
	
	
/* joinE */	
	.div-joinE-title1{
		margin-left: 1px;
		font-size: 18px;
	}
	.div-joinE-title2{
		margin-left: 1px;
		font-size: 30px;
	}
	.div-joinErightDetail{
		 display: grid;
	     grid-template-columns: 200px 500px;
	     grid-gap: 5px;
		 /* background-color: #7b7b82; */
		 padding: 5px;
	     height: 220px;
	  	 width: 715px;
		 margin: 0 auto;
		 font-size: 18px;
		 margin-left: 30px;
	}
	.div-joinErightDetail > div{
		background-color: rgb(222, 239, 239);
	  	height: 31px;
	  	font-size: 17px;
	}
	.div-joinE-left{
		text-align: center;
	}
	.sel-joinE-email2{
		height: 28px;
    	width: 170px;
	}
	.b-btn-joinE-insert{
		width: 100px;
	    height: 40px;
	    font-size: 15px;
	    margin-left: 645px;
	    background-color: #555555;
   	 	color: white;
    	border: 2px solid #555555;
   		border-radius: 4px;
	}
	.b-btn-joinE-insert:hover{
		background-color: white;
   		color: black;
	}
	.div-joinE-phoneTotal{
		display: grid;
	    grid-template-columns: 120px 26px 120px 26px 120px;
	}
	.div-joinE-phoneTotal{
		width: 150px;
	}
	
	
	
	

/* listEmployee */	
	.div-listEmployee-title1{
		margin-left: 1px;
		font-size: 18px;
	}
	.div-listEmployee-title2{
		margin-left: 1px;
		font-size: 30px;
	}
	.div-listEmployee-total{     
		border: 1px solid gray;
		 width: 820px;
		 height: 620px;
		margin-left: 200px;
	}
    .div-listEmployee-in{
    	border: 1px solid gray;
    	display: grid;
	     grid-template-columns: 1fr 1fr 1fr;
	     grid-gap: 5px;
		 background-color: #7b7b82;
		 padding: 5px;
		 font-size: 18px;
		 width: 820px;
		 height: 620px;
    }
	.div-listEmployee-in > div{
    	border: 1px solid gray;
    	background-color: rgb(222, 239, 239);
    	height: 300px;
    }
    .div-listEmployee-four{
    	 border: 1px solid gray;
    	 display: grid;
	     grid-template-rows: 4fr 1fr;
	     grid-gap: 5px;
		 background-color: #7b7b82;
		 padding: 5px;
    }
    .div-listEmployee-up{
    	border: 1px solid gray;
    }
    .div-listEmployee-down{
    	border: 1px solid gray;
    }
	
	
	
	
	
/* codeSearch */

    .div-codeSearch-title1{
		margin-left: 1px;
		font-size: 18px;
	}
	.div-codeSearch-title2{
		margin-left: 1px;
		font-size: 30px;
	}
	.div-codeSearch-up {
	  display: grid;
	  grid-template-row: auto auto;
	  grid-gap: 5px;
	  padding: 5px;
	  background-color: #7b7b82;
	  width: 1198px;
	  margin: 0 auto;
	}
	.div-codeSearch-up > div{
	  text-align: center;
	  background-color: rgb(222, 239, 239);
	}
	.div-codeSearch-singleSearch{
		height: 60px;
	}
	.inp-codeSearch-insItem{
		width: 260px;
	}
	.btn-codeSearch-oneSearch{
		width: 100px;
	    height: 31px;
	    font-size: 15px;
	    margin-left: 10px;	
		background-color: #555555;
   	 	color: white;
    	border: 2px solid #555555;
   		border-radius: 4px;
	}
	.btn-codeSearch-oneSearch:hover{
		 background-color: white;
   		 color: black;
 	}
 	.div-codeSearch-down{
		width: 1198px;
	    margin: 0 auto;
 	}
	.div-codeSearch-list{
		display: grid;
		grid-template-row: auto auto;
		border: 1px solid black;  
		text-align: center;
	    width: 100%;
	    padding: 5px;
	  	grid-gap: 5px;
	    background-color: #7b7b82;
	}
	.div-codeSearch-list > div{
	  text-align: center;
	  background-color: rgb(222, 239, 239);
	}
	.div-codeSearch-listIn{
		display: grid;
	  	grid-template-columns: 87fr 186fr 80fr 295fr 129fr 209fr 99fr;
		height: 32px; 	
	}
	.div-codeSearch-listIn > div{
		border: 1px solid black;
		display: block;
		text-overflow: ellipsis;
		white-space: nowrap;
		word-spacing: normal;
		overflow: hidden;
	} 
	.di-codeSearch-listContent{
		height: 220px;
	}
	.div-codeSearch-listContents{
		display: grid;
		grid-template-columns: 87fr 186fr 80fr 295fr 129fr 209fr 99fr;
		font-size: 18px;
		text-align: center;
	}
	.div-codeSearch-listContents > span{
		border: 1px solid black; 
		height: 32px;
		display: block;
		text-overflow: ellipsis;
		white-space: nowrap;
		word-spacing: normal;
		overflow: hidden;
	}
	.b-div-codeSearch-page{
		text-align: center;
		display: inline-block;
		margin-left: 490px;
	}
	.b-div-codeSearch-page span {
	    color: black;
	    float: left;
	    padding: 8px 16px;
	    text-decoration: none;	
	    border: 1px solid #ddd;
	}
	.b-div-codeSearch-page span.active{
	    background-color: #4CAF50;
    	color: white;
    	border: 1px solid #4CAF50;
	}
	.b-div-codeSearch-page span:hover:not(.active) {
		background-color: #ddd;
	} 
	.b-div-codeSearch-page > a{
		color: black;
	    float: left;
	    padding: 8px 16px;
	    text-decoration: none;	
	    border: 1px solid #ddd;
	} 
	
	
	
	
	
/* board */	

		#tab-list-title{
			/* border: 1px solid gray; */
			margin: 0 auto;
			margin-top: 80px;
		}
		#tab-list{
			/* border: 1px solid gray; */
			margin: 0 auto;
			margin-top: 80px;
			width: 80%;
		}
		#tab-list tr{
			/* border: 1px solid gray; */
		}
		#tab-list tr td{
		    border: 1px solid gray;
		   /*  width: 70px; */
		}
		.text-center{
			text-align: center;
		}
		#inp-list{
			width: 97%;
		}
		#btn-list-search{
			/* border: 1px solid gray; */
			margin: 0 auto;
		}
		#div-page{
			margin: 0 auto;
			width: 24%;
		}
		#span-list-pagination{
			margin-left: 12%
		}
		.text-pagination{
			margin-left: 10%;
		} 
		#tr-list-attribute{
			margin-top: 30px;
		}
	
	
	
/* write */	
			#tab-write-title{
			/* border: 1px solid gray; */
			margin: 0 auto;
			margin-top: 80px;
		}
		#tab-write{
			/* border: 1px solid gray; */
			margin: 0 auto;
			margin-top: 80px;
			width: 80%;
		}
		#tab-write tr{
			/* border: 1px solid gray; */
		}
		#tab-write tr td{
			/* border: 1px solid gray; */
			width:20%;
		}
		#inp-write-content{
			/* border: 1px solid gray; */
			width: 100%;
			height: 300px;
		}
		#inp-write-title{
			/* border: 1px solid gray; */
			width: 100%;
		}
		
		
		
  </style>

</head>
<form id="form-layout"></form>
<body>
  <div class="div-custMana-frame">
	  <div class="div-custMana-left">
	  	 <div>관리자 페이지</div>
	  	 	<hr class="hr">
	  	 
	  	 <div>상품 관리</div>
	  	 <div>
	    	  <button id="b-button-custMana-addItem">등 록</button>
	     </div>
	     <div>
	    	  <button id="b-button-custMana-itemList">목 록</button> 
	     </div>
	     <div>
	    	  <button id="b-button-custMana-codeSearch">코드 조회</button> 	     		
	     </div>
	     	<hr class="hr">
	  	 
	  	 <div>고객 관리</div>
	  	 <div>
	  		<button id="b-button-custMana-custMana">목 록</button>
	  	 </div>
	  	 <div>
	  	 	<button id="b-button-custMana-search">조 회</button>
	  	 </div>
	     	<hr class="hr">	
	     
	     <div>직원 관리</div>
	     <div>
	     	<button id="b-button-custMana-addEmployee">등 록</button> 
	     </div>
	     <div>
	     	<button id="b-button-custMana-employeeList">목 록</button>	
	     </div>
	     
	  </div>
	  <div class="div-custMana-right"> 
	     
 		 <section>
      		<div id="content">
         		<tiles:insertAttribute name="content"/>
      		</div>
   		 </section>
	  
	  </div>
   </div>
</body>
	<script>
		$('#b-button-custMana-custMana').on('click',function(){
			$('#form-layout')
			.attr('action','${path.context}/admin/list')
			.attr('method','post')
			.submit();
		});  
		$('#b-button-custMana-addItem').on('click',function(){
			$('#form-layout')
			.attr('action','${path.context}/admin/addItem')
			.attr('method','post')
			.submit();
		});
		$('#b-button-custMana-itemList').on('click',function(){
			$('#form-layout')
			.attr('action','${path.context}/admin/itemList')
			.attr('method','post')
			.submit();
		});  
		$('#b-button-custMana-search').on('click',function(){
			$('#form-layout')
			.attr('action','${path.context}/admin/custSearch')
			.attr('method','post')
			.submit();
		});
		$('#b-button-custMana-addEmployee').on('click',function(){
			$('#form-layout')
			.attr('action','${path.context}/admin/addEmployee')
			.attr('method','post')
			.submit();
		});
		$('#b-button-custMana-employeeList').on('click',function(){
			$('#form-layout')
			.attr('action','${path.context}/admin/listE')
			.attr('method','post')
			.submit();
		});
		$('#b-button-custMana-codeSearch').on('click',function(){
			$('#form-layout')
			.attr('action','${path.context}/admin/codeSearch')
			.attr('method','post')
			.submit();
		});
		
		
	</script>
</html>