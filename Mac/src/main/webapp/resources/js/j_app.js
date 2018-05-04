
var app = app || {};
app = (()=>{
	var init = x =>{
	    $.getScript(x+'/resources/js/router.js',()=>{
	        $.extend(new Router(x));
	        app.main.onCreate();
	    })
	};
	return {init:init};
})();
var createImg1=x=>{
    return '<img id = "'+x.id+'" src = "'+x.src+'" alt="'+x.alt+'"></img>';
};
var createSection=x=>{
    return '<section id="'+x.id+'" class = "'+x.clazz+'"></section>';
};
var createBody=()=>{
	return '<body onload="myFunction()"></body>';
};
var createNavgation=x=>{
	return+'<div class="btn-group">'
	  +'<button type="button" class="btn btn-danger">Action</button>'
	  +'<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-expanded="false">'
	    +'<span class="caret"></span>'
	    +'<span class="sr-only">Toggle Dropdown</span>'
	  +'</button>'
	  +'<ul class="dropdown-menu" role="menu">'
	    +'<li><a href="#">Action</a></li>'
	    +'<li><a href="#">Another action</a></li>'
	    +'<li><a href="#">Something else here</a></li>'
	    +'<li class="divider"></li>'
	    +'<li><a href="#">Separated link</a></li>'
	  +'</ul>'
	+'</div>';
}

var createNav=x=>{
    return'<nav id="'+x.id+'" class="'+x.clazz+'"></nav>';
}
var createFont=x=>{
    return '<font>'+x.val+'</font>';
}
var createATag=x=>{
    return '<a id="'+x.id+'" href="#">'+x.val+'</a>';
}
var createNavATag=x=>{
    return '<a id="'+x.id+'" class="'+x.clazz+'" href="#">'+x.val+'</a>';
}
var createATagGrid=x=>{
    return '<a id="'+x.id+'" href="#">'+x.val+'</a>';
}
var createSpan=x=>{
    return '<span id="'+x.id+'" class="glyphicon '+x.clazz+'" aria-hidden="true"> &nbsp;'
    +x.val+'</span>'
}

var createNav=x=>{
    return '<nav id="'+x.id+'" class="'+x.clazz+'"></nav>'
}
var createNavSpan=x=>{
    return '<span id="'+x.id+'" class="'+x.clazz+'" aria-hidden="true"></span>'
}
var createHTag=x=>{
    return '<h'+x.num+'>'+x.val+'</h'+x.num+'>';
}
var createSelect=()=>{
	return '<select style="width: 350px; height: 50px;">  </select>';
}

var createOption=x=>{
	return '<option id="option-join">'+x.val+'</option>'
}


var createDiv=x=>{
    return '<div id="'+x.id+'" class="'+x.clazz+'"></div>';
}
var createTab=x=>{
    return tab = '<table id="'+x.id+'" class="'+x.clazz+'"></table>';
}
var createButton=x=>{
    return '<button type="button" id="'+x.id+'" class="btn'+x.clazz+'" >'+x.val+'</button>';
}
var createUL=(x)=>{
    return '<ul id="'+x.id+'" class="'+x.clazz+'"></ul>';
}
var createInput=x=>{
    return '<input id="'+x.id+'" placeholder="'+x.val+'" type="'+x.type+'"/>'
}
var createText=x=>{
    return '<h1 style="text-align: center;" id="'+x+'"></h1>';
}
var createForm=x=>{
    return '<form id="'+x.id+'" action="'+x.action+'" class="'+x.clazz+'" method="post"></form>';
}

var createPtag=x=>{
	return '<p class="'+x.clazz+'" id="'+x.id+'">'+x.val+'</p>';
}

var createEmail=()=>{
	return '<div class="site-email-signup-v1 site-email-signup">'
	+'<a id="site-email-signup" href="/customer_service/contact_us.tmpl" title="이메일 문의하기" class="site-email-signup__link jquery-once-1-processed"><i class="icon--envelope site-email-signup__link-icon"></i></a>'
	+'</div>';
}

var createGridDiv=x=>{
	return '<div id="div-order-grid" class="order-grid-container">'
	+'</div>';
}
var createGridDiv1=x=>{
	return '<div id="div-order-grid1" class="order-grid-container1">'
	+'</div>';
}
var createGridDiv2=x=>{
	return '<div id="div-order-grid2" class="order-grid-container2">'
	+'</div>';
}
var createGridDiv3=x=>{
	return '<div id="div-order-grid3" class="order-grid-container3">'
	+'</div>';
}
var createGridDiv4=x=>{
	return '<div id="div-order-grid4" class="order-grid-container4"></div>';
}
var createGridDiv5=x=>{
	return '<div id="div-order-grid5" class="order-grid-container5">'
	+'</div>';
}
var createGridDiv6=x=>{
	return '<div id="div-order-grid6" class="order-grid-container6">'
	+'</div>';
}
var createGridDivContent=x=>{
	return '<div>'+x.val+'</div>';
}
var createGridDivRow=x=>{
	return '<div class="">'
	  +'<div>'+x.val+'</div>'
	  +'<div>'+x.eval+'</div>'
	  +'<div>'+x.weight+'</div>'
	  +'<div>'+x.color+'</div>  '
	  +'<div></div>'
	  +'<div><a href="#">위시리스트 담기</a></div>'
	  +'<div><a href="#">삭제</a></div>'
	+'</div>'
}
var createGridDivRow1=x=>{
	return '<div class="grid-container-row1">'
	  +'<div>'+x.val+'</div>'
	  +'<div>'+x.eval+'</div>'
	  +'<div>'+x.weight+'</div>'
	  +'<div>'+x.color+'</div>  '
	+'</div>'
}
var createGridDivRow2=x=>{
	return '<div class="grid-container-row2">'
	  +'<div>'+x.val1+'</div>'
	  +'<div>'+x.val2+'</div>'
	  +'<div>'+x.val3+'</div>'
	  +'<div>'+x.val4+'</div>'
	  +'<div>'+x.val5+'</div>'
	  +'<div>'+x.val6+'</div>'
	  +'<div>'+x.val7+'</div>'
	+'</div>'
}
var createGridDivRowPrice=x=>{
	return '<div class="create-GridDiv-RowPrice">'
	  +'<div>'+x.prcie+'</div>'
	  +'<div>'+x.sprcie+'</div>'
	  +'<div>'+x.sale+'</div>'
	+'</div>'
}

var createImg=x=>{
	return '<img src="'+$.image()+'/'+x.img+'" alt="Matte Lipstick" title="Matte Lipstick">';
}
var createBasketImg=x=>{
	return '<img style="width: 150px;" src="'+$.image()+'/'+x.img+'" alt="Matte Lipstick" title="Matte Lipstick">';
}
var createNavImg=x=>{
	return '<img id="'+x.id+'" src="'+$.image()+'/'+x.img+'" alt="Matte Lipstick" title="Matte Lipstick">';
}
var createOl=x=>{
	return '<ol id="'+x.id+'" class="'+x.clazz+'"></ol>'
}
var createLI=(x)=>{
    return '<li id="'+x.id+'" class="'+x.clazz+'">'+x.val+'</li>';
}
var createMainImg=()=>{
	return ''
	+'    <a class="left carousel-control" href="#myCarousel" data-slide="prev">'
	+'      <span class="glyphicon glyphicon-chevron-left"></span>'
	+'      <span class="sr-only">Previous</span>'
	+'    </a>'
	+'    <a class="right carousel-control" href="#myCarousel" data-slide="next">'
	+'      <span class="glyphicon glyphicon-chevron-right"></span>'
	+'      <span class="sr-only">Next</span>'
	+'    </a>'
	+' <ol class="carousel-indicators">'
      +'<li data-target="#myCarousel" data-slide-to="0" class="active"></li>'
      +'<li data-target="#myCarousel" data-slide-to="1"></li>'
      +'<li data-target="#myCarousel" data-slide-to="2"></li>'
    +'</ol>'
;
}
app.basketUpdate=(()=>{
	var $wrapper,context,view,image;
	var onCreate=()=>{
		 hview = $.javascript()+'/h_app.js';
		 $wrapper = $('#wrapper');
		 $content = $('#content');
		 context = $.context();
		 image = $.image();
	     view = $.javascript()+'/j_app.js';
	     setContentView();
	 };
	 var setContentView=()=>{		
		 $.getScript(view,()=>{
			$('#div-modal-body').empty();
			$('#div-modal-body').html($(createDiv({id:'first_delete',clazz:''})));
			$('#modal-footer').html($(createDiv({id:'second_delete',clazz:''})))
			$.getJSON(context+'/basket/search',e=>{
				 var basketObj = e.basketOrder;
				 console.log(e.basketOrder);
				 for(var i =0 ;  i < basketObj.length ; i++){
						if(i > basketObj.length){
							return false;
						}
						console.log(basketObj[i]);
						$(createDiv({id:'',clazz:'grid-container'}))
						 .append($(createDiv({id:'grid-item',clazz:'grid-item'}))
								 .append($(createBasketImg({img:e.basketOrder[i].picName+'.jpg'}))))
							 .append($(createDiv({id:'',clazz:'grid-item'}))
								 .append($(createDiv({id:'',clazz:''}))
							 .append($(createHTag({num:'4',val:basketObj[i].itemName}))))										 
							 .append($(createDiv({id:'',clazz:''}))
								 .append($(createHTag({num:'4',val:basketObj[i].textureExp}))))
							 .append($(createDiv({id:'',clazz:''}))
								 .append($(createButton({id:'',clazz:'',val:(createImg({img:'minus.jpg'}))}))
										 .attr('style','background:white;')
										 .attr('readonly','readonly')
										 .on('click',function(){
											 console.log($(this).parent().find("input").attr("count"));
											 var countNumber = parseInt($(this).parent().find("input").attr("count")) - 1 ;
											 countNumber = countNumber < 0 ? 0 : countNumber; 
											 $(this).parent().find("input").attr("count", countNumber);
											 $(this).parent().find("input").attr("placeholder", countNumber);
										 }))
								 .append($(createInput({id:'',val:basketObj[i].itemCount,type:'text'}))
										 .attr('style','    width: 30px; text-align:center;')
										 .attr('readonly','readonly')
										 .addClass("basketInput")
										 .attr('count',basketObj[i].itemCount)
										 .attr('seq',basketObj[i].itemSeq))
								 .append($(createButton({id:'',clazz:'',val:(createImg({img:'plus.jpg'}))}))
										 .attr('style','background:white;')
										 .attr('readonly','readonly')
										 .on('click',function(){
											 var countNumber = parseInt($(this).parent().find("input").attr("count")) + 1;
											 $(this).parent().find("input").attr("count", countNumber);
											 $(this).parent().find("input").attr("placeholder", countNumber);
										})))
							  .append($(createDiv({id:'',clazz:''}))
								 .append($(createHTag({num:'5',val:'₩'+basketObj[i].total}))))
							 .append($(createDiv({id:'',clazz:''}))
								 .append($(createButton({id:'',clazz:'',val:'삭제'}))
										 .attr('basketSeq',basketObj[i].basketSeq)
									 .on('click',function(){
										 var jason = {
												 basketSeq : $(this).attr("basketSeq")
										 }
										$.ajax({
											 url:context+'/basket/delete',
											 method:'POST',
											 data: JSON.stringify(jason),
											 dataType:'json',
											 contentType: 'application/json',
										})
										app.basketUpdate.onCreate();
									 })
									 .attr('style','background:black;color:white;')))).appendTo('#first_delete');
				 };
				 	
				 
			 });
			 $.getJSON(context+'/basket/totalPrice',e=>{
				 var basketObjTotal = e.basketTotalPrice;
				 console.log(basketObjTotal);
			$(createDiv({id:'modal-footer',clazz:'modal-footer'}))
						 .append($(createDiv({id:'',clazz:'grid-container'}))
							 .append($(createDiv({id:'',clazz:'grid-item'}))
								 .append($(createHTag({num:'4',val:'총금액'}))))
							 .append($(createDiv({id:'',clazz:'grid-item'}))
								 .append($(createHTag({num:'4',val:'₩'+basketObjTotal[0].total}))))
							 .append($(createDiv({id:'',clazz:'grid-item'}))
								 .append($(createButton({id:'',clazz:'btn btn-default',val:'주문하기'}))
									 .attr('total',basketObjTotal[0].total)	 
									 .on('click',()=>{
										 	var returnJsonData = [];
										 	$(".basketInput").each(function (){
										 		objData = {
										 				"seq" : $(this).attr("seq"),
										 				"count" : $(this).attr("count")
										 		}
										 		returnJsonData.push(objData);
										 	});
										 	console.log("returnJsonData :" ,returnJsonData);
											 $.ajax({
												 url:context+'/basket/update',
												 method:'POST',
												 data: JSON.stringify(returnJsonData),
												 dataType:'json',
												 contentType: 'application/json',
											 }).done(function (data){
												 console.log(data);
												 
											 });
											 app.orders.onCreate();
											})
									 .attr('data-dismiss','modal')							
									 .attr('style','background: black; color: white; width: 100px; height: 40px; font-weight: bold; border: solid 1px;')))
							 .append($(createDiv({id:'',clazz:'grid-item'}))
									 .append($(createButton({id:'',clazz:'btn btn-default',val:'취소하기'}))
										 .attr('data-dismiss','modal')
										 .attr('style','background: black; color: white; width: 100px; height: 40px; font-weight: bold; border: solid 1px;')))).appendTo('#second_delete');
			 });
			 
		});
		
	};
	
	 
	return{onCreate:onCreate}
})();
app.orders=(()=>{
	var $wrapper,context,view,image;
	var onCreate=()=>{
		 hview = $.javascript()+'/h_app.js';
		 $wrapper = $('#wrapper');
		 $content = $('#content');
		 context = $.context();
		 image = $.image();
	     view = $.javascript()+'/j_app.js';
	     setContentView();
	 };
	 var setContentView=()=>{		
		 $.getScript(view,()=>{
			 	$('#a-basket').remove();
			 	$('#btn-login-default').remove();
			 	$('#btn-admin').remove();
			 	$('#btn-main-go').on('click',()=>{app.loginAfter.onCreate();})
				$('#content').empty();
				$('#content').html($(createDiv({id:'div-orders',clazz:''}))
					.attr('style','height:1200px;'));
				$('#div-orders').append($(createDiv({id:'',clazz:''}))
					.append($(createDiv({id:'',clazz:''})))
						.append($(createATag({id:'',clazz:'',val:'쇼핑 계속하기'}))
							.attr('style','font-size:15px;margin-top:15px;')))
					.append($(createDiv({id:'',clazz:''}))
							.append($(createHTag({num:'3',id:'',val:'장바구니'}))
								.attr('style','text-align:center;')))			
					.append($(createDiv({id:'',clazz:''}))
							.attr('style','text-align: center;')
							.append($(createButton({id:'',clazz:'',val:'지금 구매하기'}))
								.attr('style','font-size: 20px; font-weight: bold;text-align: center; width:250px; height: 65px; background: black; color:white;')))
							.append($(createDiv({id:'',clazz:''}))
								.attr('style','text-align: center;')
								.append($(createHTag({num:'',val:'장바구니 제품을 확인해주세요. 지난 방문 시 장바구니에 담아 두었던 제품도 함계 확인하실수 있습니다.'}))		
								.attr('style','color:red; margin:0 auto;')));
				 
					$('#div-orders').append($(createDiv({id:'',clazz:''}))
								.append($(createDiv({id:'div-order-float',clazz:''}))
									.attr('style','float: left; margin-left: 100px;')
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block;     padding: 10px;')
										.append($(createHTag({num:'2',val:'제품'}))))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block;  margin-left: 400px;    padding: 10px;')
										.append($(createHTag({num:'2',val:'가격'}))))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block;  margin-left: 100px;    padding: 10px;')
										.append($(createHTag({num:'2',val:'수량'}))))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block; margin-left: 80px;    padding: 10px;')
										.append($(createHTag({num:'2',val:'총합계'}))))));
					
					 $.getJSON(context+'/order/search',e=>{
						 var orderObj = e.orderSearch;
						 console.log(e.basketOrder);
						 for(var i =0 ;  i <= orderObj.length ; i++){
							if(i > orderObj.length){
								return false;
							}
							console.log(orderObj[i]);
							$("#div-order-float").append("<div class='row'></div>")
									.append($(createDiv({id:'',clazz:''}))
									.attr('style','float: left;    width: 1000px; margin-left: 30px;border-top: 1px solid #c7c7c7;')
									.append($(createDiv({id:'',clazz:''}))
											.attr('style','display: inline-block; float: left;')
											.append($(createBasketImg({img:orderObj[i].picName+".jpg"}))))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','display: inline-block; margin-left: 30px;width: 170px;')
											.append($(createDiv({id:'',clazz:''}))
												.append($(createHTag({num:'3',val:orderObj[i].itemName}))))
											.append($(createDiv({id:'',clazz:''}))
												.append($(createHTag({num:'5',val:''}))))
											.append($(createDiv({id:'',clazz:''}))
												.append($(createHTag({num:'5',val:orderObj[i].textureExp}))))
											.append($(createDiv({id:'',clazz:''}))
												.append($(createHTag({num:'5',val:orderObj[i].itemName})))))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','display: inline-block;    margin-left: 115;')
												.append($(createHTag({num:'5',val:'₩'+orderObj[i].price})))
												.append($(createHTag({num:'5',val:'₩'+orderObj[i].discountPrice}))))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','display: inline-block;')
												.append($(createDiv({id:'',clazz:''}))
													.attr('style','margin-left: 150px;')
													.append($(createHTag({num:'3',val:orderObj[i].itemCount})))))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','display: inline-block;margin-left: 40px;')
												.append($(createDiv({id:'',clazz:''}))
													.attr('style','margin-left: 80px;')
													.append($(createHTag({num:'3',val:'₩'+orderObj[i].total}))))));
				
						 }
					 });
					
				$('#div-orders').append($(createDiv({id:'',clazz:''}))
						.attr('style','float: right; margin-left: 100px;')
						.append($(createDiv({id:'',clazz:''}))
								.attr('style','height: 50px; background: #f0f0f0;')
								.append($(createHTag({num:'3',val:'위시 리스트'}))))
							.append($(createDiv({id:'',clazz:''}))
								.attr('style','height: 50px; background: #f0f0f0;')
								.append($(createHTag({num:'3',val:'지난 구매내역'}))))
							.append($(createDiv({id:'',clazz:''}))
								.attr('style','background: #f0f0f0;')
								.append($(createDiv({id:'',clazz:''}))
									.attr('style','height: 50px; background: #f0f0f0;')
									.append($(createHTag({num:'3',val:'쿠폰 코드 입력'}))))
								.append($(createDiv({id:'',clazz:''}))
									.attr('style','height: 50px; background: #f0f0f0;')
									.append($(createInput({id:'',val:'*주문당 하나의 쿠폰코드만 사용 가능합니다',type:'text'}))
										.attr('style','width: 300px; height: 50px; background: #f0f0f0;')))
								.append($(createDiv({id:'',clazz:''}))
									.append(' <p style="color:red">*주문 코드는 1인 1회 적용되며 적용 주문건 </br>취소 후 쿠폰 코드 재적용이 불가 합니다</p>'))
								.append($(createDiv({id:'',clazz:''}))
									.append($(createInput({id:'',val:'',type:'sumbit'}))
										.attr('style','text-align: center; background: black; color: white; height: 50px;')
										.attr('value','적용하기')))
								.append($(createDiv({id:'',clazz:''}))
									.attr('style','margin-top:20px;')
									.append($(createDiv({id:'',clazz:''}))
										.append('<h3>도움이 필요 하세요?</h3>')
										.append('p>고객 관리 지원팀(02-3440-2707)</p>')
										.append($(createATag({id:'',clazz:'',val:'이메일 문의하기'}))))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','margin-top:30px;')
										.append($(createHTag({num:'3',val:'추가정보'})))
										.append($(createDiv({id:'',clazz:''}))
											.append($(createATag({id:'',clazz:'',val:'배송정보'}))))
										.append($(createDiv({id:'',clazz:''}))
											.append($(createATag({id:'',clazz:'',val:'교환및 환불 정책'}))))
										.append($(createDiv({id:'',clazz:''}))
											.append($(createATag({id:'',clazz:'',val:'최대 구매수량 정책'}))))))));
					
				 $.getJSON(context+'/basket/totalPrice',e=>{
					 var basketObjTotal = e.basketTotalPrice;
					 console.log(basketObjTotal);
					$('#div-orders').append($(createDiv({id:'',clazz:''}))
						.attr('style','float: left; margin-left: 100px;')
						.append($(createDiv({id:'',clazz:''}))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','margin-left: 30px;    border-top: 1px solid #c7c7c7;width: 1000px;')
											.append($(createHTag({num:'3',val:'내주문요약'}))))
										.append($(createDiv({id:'',clazz:''}))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','float: left; margin-left: 250px;')
												.append($(createHTag({num:'3',val:'합 계:'}))))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','margin-left: 350px; display: inline-block;')
												.append($(createHTag({num:'3',val:'₩'+basketObjTotal[0].price})))))
										.append($(createDiv({id:'',clazz:''}))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','float: left; margin-left: 245px;')
												.append($(createHTag({num:'3',val:'배송비'}))))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','margin-left: 342px; display: inline-block;')
												.append($(createHTag({num:'3',val:'₩ 0'})))))
										.append($(createDiv({id:'',clazz:''}))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','float: left; margin-left: 240px;')
												.append($(createHTag({num:'3',val:'할인금액'}))))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','margin-left: 323px; display: inline-block;')
												.append($(createHTag({num:'3',val:'₩'+basketObjTotal[0].discount})))))
										.append($(createDiv({id:'',clazz:''}))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','float: left; margin-left: 230px;')
												.append($(createHTag({num:'2',val:'총 합 계'}))))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','margin-left: 300px; display: inline-block;')
												.append($(createHTag({num:'2',val:'₩'+basketObjTotal[0].total})))))
										.append($(createDiv({id:'',clazz:''}))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','text-align:  center; width: 150px;  background: black; height: 50px; margin: 0 auto; padding: 14px;')
												.append($(createATag({id:'',clazz:'',val:'지금 구매하기'}))
														.on('click',e=>{
															$.getJSON(context+'/addr/search',e=>{
																var addr = e.success;
																console.log(e.success);
																if(addr==1){
																	alert('기본배송지가 있습니다');
																}else{
																    alert('배송지를 입력해주세요');
																	app.cash.onCreate();	
																}
															});
														})
													.attr('style','color: white;font-size: 15px;'))))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','background: #f0f0f0; height: 120px; padding: 15px; margin-top: 20px;')
											.append($(createDiv({id:'',clazz:''}))
												.append($(createHTag({num:'2',val:'품질 보증'}))))
											.append($(createDiv({id:'',clazz:''}))
												.append('<p>공식 온라인 몰을 통해 구매한 MAC 제품에 만족하지 않으셨다면, 사용하지 않은 제품에 한해 반품 혹은 환불을 도와드리도록 하겠습니다</p>'))))
										);
				
				 });
								 
			});
		 };
		 return{onCreate:onCreate}
})();
app.chart=(()=>{
	var $wrapper,context,view,image;
	var onCreate=()=>{
		 $wrapper = $('#wrapper');
		 $content = $('#content');
		 context = $.context();
		 image = $.image();
	     view = $.javascript()+'/j_app.js';
	     setContentView();
	 };
	 var setContentView=()=>{		
			 $.getScript(view,()=>{ 
				 alert('작동함');
				 $('#content').empty();
				 $('#footer').attr('style','margin-top:100px;')
				 $('#content').html($(createDiv({id:'chart_div',clazz:''}))
					 .attr('style','width: 900px; height: 500px;'))
		
			 });
		 };
		 return{onCreate:onCreate}
	 })();
app.items=(()=>{
	var $wrapper,context,view,image;
	var onCreate=()=>{
		 $wrapper = $('#wrapper');
		 $content = $('#content');
		 context = $.context();
		 image = $.image();
	     view = $.javascript()+'/j_app.js';
	     setContentView();
	 };
	 var setContentView=()=>{		
			 $.getScript(view,()=>{ 
				 alert('작동함');
				 $('#content').empty();
				 $('#footer').attr('style','margin-top:100px;')
				 $('#content').html($(createDiv({id:'',clazz:''}))
					 .append($(createHTag({num:4,val:'아이 > 섀도우'}))
						 .attr('style','margin-top: 30px; border-bottom: 1px solid #c7c7c7; margin-bottom: 20px; text-align: center')))
				$('#content').html($(itemsCatallog()))
		
			 });
		 };
		 return{onCreate:onCreate}
	 })();
app.loginAfter=(()=>{
	var $wrapper,context,view,image;
	var onCreate=()=>{
		 $wrapper = $('#wrapper');
		 $content = $('#content');
		 context = $.context();
		 image = $.image();
	     view = $.javascript()+'/j_app.js';
	     hview = $.javascript()+'/h_app.js';
	     setContentView();
	 };
	 var setContentView=()=>{	
		 $.getScript(view,()=>{	
			 alert('로그인 에프터 페이지 들어옴')
			 $('#btn-join-default').remove();
			 $('#btn-login-default').remove();
			$('#container').append($(createDiv({id:'div-btn-main-page',clazz:''}))
				 .attr('style','    display: inline;'));
			$('#div-btn-main-page').html($(createButton({id:'btn-mypage',clazz:'btn btn-default dropdown-toggle',val:'마이페이지'}))
				 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;')
				 .on('click',()=>{
					 app.mypage.onCreate();
				 }));
			$('#div-btn-main-page').append($(createButton({id:'btn-logout',clazz:'btn btn-default dropdown-toggle',val:'로그아웃'}))
					 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;')
					 .on('click',()=>{
						 
					 }));
		
		 
		 });
	 };
	 return{onCreate:onCreate}
})()
app.mypage=(()=>{
	var $wrapper,context,view,image;
	var onCreate=()=>{
		 $wrapper = $('#wrapper');
		 $content = $('#content');
		 context = $.context();
		 image = $.image();
	     view = $.javascript()+'/j_app.js';
	     hview = $.javascript()+'/h_app.js';
	     setContentView();
	 };
	 var setContentView=()=>{		
			 $.getScript(view,()=>{ 
				 $('#div-btn-main-page').remove();
				 $('#btn-login-default').remove();
				 $('#btn-admin-default').remove();
				 $('#btn-join-default').remove();
				 $('#btn-main-go').on('click',()=>{app.loginAfter.onCreate();})
				 $('#content').empty();
				 $('#content').html($(createDiv({
						id : 'div-my-page',
						clazz : 'field-container field-container--grid'
					})).attr('style','height:500px;'));
				 $('#container').append($(createDiv({id:'div-btn-mypage',clazz:''}))
						 .attr('style','    display: inline;'));
				 $('#div-btn-mypage').html($(createButton({id:'btn-mypage',clazz:'btn btn-default dropdown-toggle',val:'마이페이지'}))
						 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;'));
				 
				 $('#container').append($(createDiv({id:'div-btn-basket',clazz:''}))
						 .attr('style','    display: inline;'))
				 $('#div-btn-basket').html($(createButton({id:'btn-basket',clazz:'btn btn-default dropdown-toggle',val:'장바구니'}))
						 .attr('data-toggle','modal')
						 .attr('data-target','#myModal')
						 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;'));
				 $('#container').append($(createDiv({id:'div-btn-logout',clazz:''}))
						 .attr('style','    display: inline;'));
				 $('#div-btn-logout').html($(createButton({id:'btn-logout',clazz:'btn btn-default dropdown-toggle',val:'로그아웃'}))
						 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;'));
				 $('#container').append($(createDiv({id:'div-modal',clazz:''})));
				 $('#div-modal').html($(createDiv({id:'myModal',clazz:'modal fade'}))
					 .attr('role','dialog')
					 .append($(createDiv({id:'',clazz:'modal-dialog'}))
						 .append($(createDiv({id:'modal-content',clazz:'modal-content'}))
							 .attr('style','width: 500px;')
							 .append($(createDiv({id:'',clazz:'modal-header'}))
								 .append($(createDiv({id:'',clazz:'grid-container'}))
									 .append($(createDiv({id:'grid-item',clazz:''}))
										 .append('장바구니'))
									 .append($(createDiv({id:'',clazz:'grid-item'}))
										 .append($(createATag({id:'',clazz:'',val:'수정'}))))))
								 .append($(createDiv({id:'div-modal-body',clazz:'modal-body'}))))));
				 $content = $('#content');
				 $.getJSON(context+'/mypage/',e=>{
					 var mypageObj = e.mypage;
					 $content.html(createDiv({id : 'mypage-div' , clazz : ''}));
			    $('#mypage-div').append($(createDiv({id : '', clazz : 'navbar navbar-inverse'}))
			    		.attr('style', 'background-color: #1a1a1a; max-height: 250px; margin-bottom: 0px;')
			    		.append($(createDiv({id : '', clazz : ''}))
			    		.attr('style', 'width: 100%; min-height: 250px;')
			    		
		                .append($(createSection({id : '', clazz : 'navbar-header'}))
		                    .attr('style', 'float: left; width: 25%; border-right: 1px solid #ffffff; min-height: 250px; padding: 15px; color: white;')
		                    .append($(createDiv({id : '', clazz : ''}))
		                            .append($(createHTag({ num : '5', val :mypageObj[0].name+'님 환영합니다'}))
		                                    .attr('style','font-family: Sans-Serif; font-weight: bold;')
		                                    )
		                            ).append($(createDiv({ id : 'profile-wrapper-div', clazz : 'account-nav'}))
		                                    .attr('style', 'float: none;   margin-left: 40%;')
		                                    .append($(createDiv({id : 'mypage-image-div', clazz : ''}))
		                                            .append($(createImg1({id : '', alt : '' ,src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAQlBMVEX09PSzs7Pe3t6fn5/Ixsf39/fd3d2cnJzh4eGwsLC0tLTz8/Pw8PDW1tba2trp6em8vLzR0dHLy8vBwcGlpaWkpKR2EtH+AAAJqElEQVR4nO2d6ZqjKhCGg7EU3DXm/m912NwxcQEpM/39OdPznFHerqI2THw8/vSnP/3pT3/605/+9Kf/UADgewlOBSFpguyXIbNnzMWa8tcgOxyo4qdQHL/DH4IEKGv9p1oBKkiWP36CESBIYqr+SAdACdnW97cjpHUbx7XkgGgKKBjfwb0RIWue8TNm6od6ASgYq+y+jJCGTwElTQhZYgIUrkrvigj1UzPxqDn8YGAsbokIJeuQ3g/prOvS+/RegiYemFj8iU8g5rdDTCeb7guf+D/KeyFC1n6Hmuqd+l70LmXvvYA8adzKiLstKBBvlPq76nonIbsNIRRHADlidBvE9hDgMyY3IYT8mAk54k0KVGAHAXk4vUVPDOVRE8qeuEDfE0P6Ok4oIFvkVTjkR1LhlJEg3o6QrrSA+xDxNlNQnjagZgxxIgLd0ENsRERZpM7naHvVjgsFjIhnAePX7Ed0iOX7FOCznQ3i8A022EkT5s3sAsi6fjiX57lT0sUVWlSEZzdhRZeEcYMI8Xi1LVG4BQNqaJtL31y9jjdMT3UERQMTIaJ4mm7qeWOD+G6rBJ+RkDeMvsm0vpmQk7xbRqrXK2yaeqI8opJvhRBL9QafMgV3wqrJi4BKBataRhohJITrPa84sI8+cY0IQ8NVkEwYV3Nh/KyKbXhC84wvr4CjPIU1A5J8Mx6X8fj07RtOypzt42ezhy8IcuNVMByegsm9xLxlH2AQmVIOiroGiGkDkZ18PNSY6qI4QUBoSvdxshswoMYZT4vg0K00ALL9gOZ08Xz6L2sgWNaTRwDxhhrDQzJtcQQwoKYpAYIDflg4V1wfMqGxMsUQTBfHoUeijJIp5yPooGAeAuPoIGBATV7qv26bE8bVUROaGygEhLOEHx8LM1KGPhNByp+PaI5lCm3EZVmDwobTFe2st6daxhoMhLN9eMJJTUbER3jGSU1GxJAtJgEwDs8R0nmjgmAYNZth1KcAg6CY29D/Ac2sLj0JuOgwEJx4T5/xOrkNg4Wf6o8xeNV4THOioOkVTVqMGMHZxbgDPpcNtSaVzdt/BzyZYsT5ecCAjkdbrW+8x3SmH1sw4aQCR1CWTtPF2wrhKO8jSPjTk6fzoVRqCDYIhhiP8cHM8fZ+KtpvbQSDqMf43MJGspCEw9ZGEErHtbc4j7dC2F8Rx/MYw8GFlXQYjIIpgt5JaHjeKz5bdy8I/dfdQlk/I7OS8CeEuW84oSwIus78zBTKTEgRFN6PMhoWZJuwpZH/YJoG0VCDWCYU2ce/EbNo1JgfHnfPCHW2ELE58g3InXSoQd62CHUXLLzev5vSaPCq1hahDl0t/3PkvQWWOb5xQiiLQCSEeiPaJmwCDIRqSW3vVRYJZWjGQqg2omVC2W1G3tOFWlPjgFB1KkhsGAQuCHMchKpfUhvRLqEa+qAhlOMoZpNQDwz8E5YqQ8jS1NIgSlVtutn0X9NowuhpbxClPEJPJv0TZopQDI9sjWnk1LubakXeH93rCMPY2hBD1kjdvMB7OuT9oVIuvg3JFiFvLvSe9p/wVXMhFtXaMyE3Yndc7j+U9qEmaCyNoTSivqr/QNNvRFfyHmgefd3mRBicdHBTJ4QInNSxm/qGkwJrSWIhHE7q0k39FzRazgBRnI8KOTMiFhP2dY1lYdmFQuLwwj4ggpJ0UEoju4z8eogsKJVlqc2swa/nm8ggi4RoguhU9kIqOg/V+n1CewUqjoJ7qfT70rfKN8qarCV+VJlwLFsbEes2tLcRsW7Dh72MiKfinglKK3y4CtKp7Lgp3m34sOWmaJ30YSeaojahlaSPOJIKWTAi4jgjdN6IyE1owYjITXjeiOhNeNaIuAOp1rmciDkXdjpT2NzChGf8FHNFOtFxP72DjwplRwHxx9FOBz+VUN+I8NCDJ3l4H8JDj54U4Z0Ii3C3o3LAOxEG9U5Emoc3IwyacI+jKsB7EUbhHsQ6vBchiEVzq2yNqFET3osQVNnG7dJs2ox52AnXV+mvCnI2uN53M0Z1Dxgm/r+N5rsgq1j3zL50vi+7ccTHCdkL8Wt0lIAyRvpPJaj9la/2GtGEjxMSliA94O4ENSNkIOxCSF0Ehn4jn/EJQv6PcXxCfUUQCkAy+mRJFyXDWn4vu/pL/p8ib+Z4mpAwDN9nsiK+BcmMcLrP9Lfqm+AGQsKwvgMZOsAJYbBwxQ9K9L9PcKaNHnBKKEvqfYRcGBGzpAOcEQ4lyw5ChIiDBReE46plMyE6xHQEuCQMim1mHBMmuIpUeI0ADYQbGceEpMI0eNN58BMhd9XvjBNCVvnGGqQqmZGMhBsYJ4SE+f9mTy2IZoDrn5Yt1rP9khBNAQflDPAD4RfIZH4hHGV4Ol8XYZ8bX2qgbETdWsx/VTxn+KZ7zMOo3kAbTi6iosiViiKSRTl9LQCZ74AK8Cib5S+ekCNjfWq6EmtSb29BFnT5izATIEn2H7DReUDWiKyqS7iektMVa3QKce+LdIwW7CCThmYXQgKktK4+0CntfMvFcjfPIF/FNW/t5jehYcK+8olWfbsZaV5tuCCR/uoYL6XhFjq9pM1foxhuvCQ3ZV26ezc5t16TbMaTC6q2vJdskwFHkJUbSIByw95brucVfWGk0VYDjiFz24EHHsUBPLma5HPEoXVy5LqMvCJ7hhTmO4anFlOtRxxa7HHQ2XVZY8db+e57neCTatYAm1OXZXwPpGcZ4bErDKwtpTJWcdHnHLiJMalPzVYhrcl5PinDbiwO7cC5GDt+JgeZNT5DbqS5rUvzgE2PbEirfGTRUVkEJJJxNyLkVnxovIoJYrFom09evdrHCNQ2n1jEaC9GlgHF5avt+xHK00HOrD6iUgsBeqnNMQdyqxtwpKrPg25uwEi9IeRA6eT3q1agn1soXN1gyyE55GcLmE9KlAmXEyd7EoOdT3zp7kJ/5+0FYe72Hp+iKmTuPFQpMQ8N7Wp9VL4cXtu/ec4zhfu7vMyeCtT5rUXxETgKpJPbGHMjUOc3JiLW0OqK+xiOkKG85MYkNxxOONECcXm+4kSsNo+2HWiGaDhfcSL2cpuPRpo+CABX+Q6pXOeKXmzykpqLfJSruibQCI3zIrgtM8ZKLvtdcsThfBWuu+2lhMNTju6LGT/qjXihk16r/nkVCH0vxZVYZ8Pr4tvF6tz0wkBzsZh+f2LmeyHO1G3EXw2lXNXPExK1Dy9ofb0p+3VCFUyvGF/40n9ASH+fEH59HyrCH84W/wOhqtp+mVAVNb7X4U66ufjd3qIn/Nn+sKva4ILDEl/68TkNIQn8enMh5on/AKUM2n3CN8g2AAAAAElFTkSuQmCC'}))
		                                                    .attr('style', 'max-width: 125px;')
		                                                    
		                                                    )
		                                            )
		                                    .append($(createDiv({id : '', clazz : ''}))
		                                            .append($(createATag({id : '', href : '', val : '사진 올리기'}))
		                                                    .attr('style', 'color:#ffffff')
		                                                    )
		                                            )   
		                                    )
		                    )
		                .append($(createSection({ id : 'navbar-header', clazz : ''}))
		                        .attr('style', 'float: left; width: 50%; border-right: 1px solid #ffffff; min-height: 250px; padding: 15px;')
		                        .append($(createUL({id : '', clazz : '' }))
		                                .attr('style', 'list-style: none; width: 48%; padding-left: 0; padding-right: 2%; color: #ffffff; float: left;')
		                                .append($(createLI({ id : '', clazz : '',val:''}))
		                                        .attr('style', 'margin: 0 0 15px 0;')
		                                        .append($(createHTag({num : '6', val : 'My M·A·C &nbsp;' + createATag({id : 'a-mypage-logout', href : '', val : '로그아웃'})}))
		                                                .attr('style', 'font-weight: bold; margin: 0 0 15px 0; font-size: 14px;')
		                                                )
		                                        )
		                                .append($(createLI({ id : '', clazz : '',val:''}))
		                                        .attr('style', 'margin: 0 0 15px 0;')
		                                        .append($(createATag({id : '', href : '', val : '마이페이지'}))
		                                                .attr('style','color: #ffffff;')
		                                                )
		                                        )
		                                .append($(createLI({ id : '', clazz : '',val:''}))
		                                        .attr('style', 'margin: 0 0 15px 0;')
		                                        .append($(createATag({id : '', href : '', val : '나의 맥 셀렉트'}))
		                                                .attr('style','color: #ffffff;')
		                                                )
		                                        )
		                                .append($(createLI({ id : '', clazz : '',val:''}))
		                                        .attr('style', 'margin: 0 0 15px 0;')
		                                        .append($(createATag({id : '', href : '', val : '내 정보 확인 및 수정'}))
		                                                .attr('style','color: #ffffff;')
		                                                )
		                                        )
		                                .append($(createLI({ id : '', clazz : '',val:''}))
		                                        .attr('style', 'margin: 0 0 15px 0;')
		                                        .append($(createATag({id : '', href : '', val : '주문 배송 조회'}))
		                                                .attr('style','color: #ffffff;')
		                                                )
		                                        )
		                                .append($(createLI({ id : '', clazz : '',val:''}))
		                                        .attr('style', 'margin: 0 0 15px 0;')
		                                        .append($(createATag({id : '', href : '', val : '배송지 리스트'}))
		                                                .attr('style','color: #ffffff;')
		                                                )
		                                        )
		                                )
		                        .append($(createUL({id : '', clazz : '' }))
		                                .attr('style', 'list-style: none; width: 48%; padding-left: 0; padding-right: 2%; color: #ffffff; float: left;')
		                                .append($(createLI({ id : '', clazz : '',val:''}))
		                                        .attr('style', 'margin: 0 0 15px 0;')
		                                        .append($(createATag({id : '', href : '', val : '지난 구매 제품'}))
		                                                .attr('style','color: #ffffff;')
		                                                )
		                                        )
		                                .append($(createLI({ id : '', clazz : '',val:''}))
		                                        .attr('style', 'margin: 0 0 15px 0;')
		                                        .append($(createATag({id : '', href : '', val : '위시 리스트'}))
		                                                .attr('style','color: #ffffff;')
		                                                )
		                                        )
                                        .append($(createLI({ id : '', clazz : '',val:''}))
		                                        .attr('style', 'margin: 0 0 15px 0;')
		                                        .append($(createATag({id : '', href : '', val : '판매 통계량'}))
		                                        		.on('click',()=>{	                                        	
		                                        			$.getJSON(context+'/chart/search',e=>{
		                                        			      google.charts.load('current', {'packages':['bar']});
		                                        			      google.charts.setOnLoadCallback(drawChart);
		                                        			    	  var chartObj = e.chart;
		                                        			    	  console.log(chartObj);
		                                        			    	  
		                                        			      function drawChart() {
		   		                                        			  var data = google.visualization.arrayToDataTable([
		                                        			          ['Year', '립스틱', '아이섀도우', '마스카라'],
		                                        			          [chartObj[0].sellDate, chartObj[0].count, chartObj[1].count, chartObj[2].count],
		                                        			          [chartObj[3].sellDate, chartObj[3].count, chartObj[4].count, chartObj[5].count],
		                                        			          [chartObj[6].sellDate, chartObj[6].count, chartObj[7].count, chartObj[8].count],
		                                        			          [chartObj[9].sellDate, chartObj[9].count, chartObj[10].count, chartObj[11].count],
		                                        			        ]);
		                                        			   
		                                        			        var options = {
		                                        			          chart: {
		                                        			            title: 'Company Performance',
		                                        			            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
		                                        			          },
		                                        			          bars: 'horizontal' // Required for Material Bar Charts.
		                                        			        };

		                                        			        var chart = new google.charts.Bar(document.getElementById('chart_div'));

		                                        			        chart.draw(data, google.charts.Bar.convertOptions(options));
		                                        			      }
		                                        			      });
		                                        			      
		                                        			      app.chart.onCreate();
		                                        		})
		                                                .attr('style','color: #ffffff;')
		                                                )
		                                        )
		                                )
		                        )
		                .append($(createSection({ id : 'navbar-header', clazz : ''}))
		                        .attr('style', 'float: left; width: 25%; border-right: 1px solid #ffffff; min-height: 250px; padding: 15px;')
		                        .append($(createDiv({ id : '', clazz : ''}))
		                                .append($(createDiv({ id : '', clazz : ''}))
		                                        .append($(createDiv({id : '', clazz : ''}))
		                                                .append($(createHTag({ num : '4', val : createATag({ id : '', href : '#', val : createSpan({ id : 'customer-grade-span', clazz : '', val : '베이직(SEDUCED)'})})}))
		                                                        )
		                                                )
		                                        )
		                                )
		                        )
			                    )
			            )
		                $('#customer-grade-span').attr('style', 'color: #e95383; font-weight : bold;')
		                $('#a-mypage-logout').attr('style', 'color: #ffffff;');
				        $('#mypage-div').append($(createDiv({id : '', clazz : ''}))
				                .append($(createDiv({id : '', clazz : ''}))
				                        .append($(createDiv({id : '', clazz : ''}))
				                                .attr('style', 'width:  100%; min-height: 200px;')
				                                .append($(createDiv({id : '', clazz : ''}))
				                                        .append($(createHTag({num : '3', val : '최근 주문 내역과 위시 리스트 '}))
				                                                .attr('style', 'font-weight: bold; padding : 20px;')
				                                                )
				                                        )
				                                .append($(createDiv({id : '', clazz : ''}))
				                                        .attr('style', 'text-align : center; width : 100%; height : 30%;')
				                                        .append('<p style="margin-top : 60px;" >최근 주문내역이나 위시 리스트가 없습니다.<p>')
				                                        )
				                                .append($(createDiv({id : '', clazz : 'text-center'}))
				                                        .append(createButton({id : '', clazz : 'primary', val : '쇼핑하러 가기'}))
				                                        )
				                                )
				                        )
				                ) 
				 });
				
				 console.log("test!");
				 $.getJSON(context+'/basket/search',e=>{
					 var basketObj = e.basketOrder;
					 console.log(e.basketOrder);
					 for(var i =0 ;  i < basketObj.length ; i++){
							if(i > basketObj.length){
								return false;
							}
							console.log(basketObj[i]);
							$(createDiv({id:'',clazz:'grid-container'}))
							 .append($(createDiv({id:'grid-item',clazz:'grid-item'}))
									 .append($(createBasketImg({img:e.basketOrder[i].picName+'.jpg'}))))
								 .append($(createDiv({id:'',clazz:'grid-item'}))
									 .append($(createDiv({id:'',clazz:''}))
								 .append($(createHTag({num:'4',val:basketObj[i].itemName}))))										 
								 .append($(createDiv({id:'',clazz:''}))
									 .append($(createHTag({num:'4',val:basketObj[i].textureExp}))))
								 .append($(createDiv({id:'',clazz:''}))
									 .append($(createButton({id:'',clazz:'',val:(createImg({img:'minus.jpg'}))}))
											 .attr('style','background:white;')
											 .attr('readonly','readonly')
											 .on('click',function(){
												 console.log($(this).parent().find("input").attr("count"));
												 var countNumber = parseInt($(this).parent().find("input").attr("count")) - 1 ;
												 countNumber = countNumber < 0 ? 0 : countNumber; 
												 $(this).parent().find("input").attr("count", countNumber);
												 $(this).parent().find("input").attr("placeholder", countNumber);
											 }))
									 .append($(createInput({id:'',val:basketObj[i].itemCount,type:'text'}))
											 .attr('style','    width: 30px; text-align:center;')
											 .attr('readonly','readonly')
											 .addClass("basketInput")
											 .attr('count',basketObj[i].itemCount)
											 .attr('seq',basketObj[i].itemSeq))
									 .append($(createButton({id:'',clazz:'',val:(createImg({img:'plus.jpg'}))}))
											 .attr('style','background:white;')
											 .attr('readonly','readonly')
											 .on('click',function(){
												 var countNumber = parseInt($(this).parent().find("input").attr("count")) + 1;
												 $(this).parent().find("input").attr("count", countNumber);
												 $(this).parent().find("input").attr("placeholder", countNumber);
											})))
								  .append($(createDiv({id:'',clazz:''}))
									 .append($(createHTag({num:'5',val:'₩'+basketObj[i].total}))))
								 .append($(createDiv({id:'',clazz:''}))
									 .append($(createButton({id:'',clazz:'',val:'삭제'}))
											 .attr('basketSeq',basketObj[i].basketSeq)
										 .on('click',function(){
											 var jason = {
													 basketSeq : $(this).attr("basketSeq")
											 }
											$.ajax({
												 url:context+'/basket/delete',
												 method:'POST',
												 data: JSON.stringify(jason),
												 dataType:'json',
												 contentType: 'application/json',
											})
											app.basketUpdate.onCreate();
										 })
										 .attr('style','background:black;color:white;')))).appendTo('#div-modal-body');
					 };
					 	
					 
				 });
				 $.getJSON(context+'/basket/totalPrice',e=>{
					 var basketObjTotal = e.basketTotalPrice;
					 console.log(basketObjTotal);
					$('#modal-content').append($(createDiv({id:'modal-footer',clazz:'modal-footer'}))
							 .append($(createDiv({id:'',clazz:'grid-container'}))
								 .append($(createDiv({id:'',clazz:'grid-item'}))
									 .append($(createHTag({num:'4',val:'총금액'}))))
								 .append($(createDiv({id:'',clazz:'grid-item'}))
									 .append($(createHTag({num:'4',val:'₩'+basketObjTotal[0].total}))))
								 .append($(createDiv({id:'',clazz:'grid-item'}))
									 .append($(createButton({id:'',clazz:'btn btn-default',val:'주문하기'}))
										 .attr('total',basketObjTotal[0].total)	 
										 .on('click',()=>{
											 	var returnJsonData = [];
											 	$(".basketInput").each(function (){
											 		objData = {
											 				"seq" : $(this).attr("seq"),
											 				"count" : $(this).attr("count")
											 		}
											 		returnJsonData.push(objData);
											 	});
											 	console.log("returnJsonData :" ,returnJsonData);
												 $.ajax({
													 url:context+'/basket/update',
													 method:'POST',
													 data: JSON.stringify(returnJsonData),
													 dataType:'json',
													 contentType: 'application/json',
												 }).done(function (data){
													 console.log(data);
													 
												 });
												 app.orders.onCreate();
												})
										 .attr('data-dismiss','modal')							
										 .attr('style','background: black; color: white; width: 100px; height: 40px; font-weight: bold; border: solid 1px;')))
								 .append($(createDiv({id:'',clazz:'grid-item'}))
										 .append($(createButton({id:'',clazz:'btn btn-default',val:'취소하기'}))
											 .attr('data-dismiss','modal')
											 .attr('style','background: black; color: white; width: 100px; height: 40px; font-weight: bold; border: solid 1px;')))));
				 });
				 
			 });
	 };
	 return{onCreate:onCreate}
})();
app.cash=(()=>{
	var $wrapper,context,view,image;
	var onCreate=()=>{
		 $wrapper = $('#wrapper');
		 $content = $('#content');
		 context = $.context();
		 image = $.image();
	     view = $.javascript()+'/j_app.js';
	     hview = $.javascript()+'/h_app.js';
	     setContentView();
	 };
	 var setContentView=()=>{		
			 $.getScript(view,()=>{ 
				 alert('작동함');
				 $('#btn-main-go').on('click',()=>{app.loginAfter.onCreate();})
				 $('#content').empty();
				 $('#content').html($(createDiv({id:'div_add',clazz:''}))
					 .attr('style','height:1200px;')
					 .append($(createDiv({id:'',clazz:''}))
						 .append($(createDiv({id:'',clazz:''}))
							 .attr('style','text-align: center;')
						 	 .append($(createHTag({num:'1',val:'배송정보 입력'})))))
				 	 .append($(createDiv({id:'',clazz:''}))
			 			 .attr('style','float: left; margin-left: 50px;')
			 			.append($(createDiv({id:'',clazz:''}))
		 					.attr('style','margin-left: 545px; background: black; color: white;   height: 50px; padding: 4px;     text-align: center;     width: 250px;')
		 					.append($(createHTag({num:'4',val:'결제 계속 하기'}))))
	 					.append($(createDiv({id:'',clazz:''}))
 							.attr('style','margin-left: 130px; margin-top: 50px;')
 							.append($(createHTag({num:'3',val:'배송지 주소'}))))
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','margin-left: 130px; color: #b84947;')
							.append($(createHTag({num:'4',val:'배송지 리스트에 고객님 주소가 없습니다. 주소를 입력해 주세요'}))))
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','margin-top: 50px; margin-left: 130px;')
							.append('<p>* 표시는 필수 입력 항목입니다</p>'))
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','margin-top: 10px; margin-left: 130px;')
							.append($(createInput({id:'input_addr_name',val:'*이름',type:'text'}))
								.attr('style','width: 700px; height: 50px;')))
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','margin-top: 15px; margin-left: 130px;')
							.append($(createInput({id:'input_addr_1',val:'동(읍/면)을 입력하세요',type:'text'}))
								.attr('style','width: 300px; height: 50px;'))
							.append($(createDiv({id:'',clazz:''}))
								.attr('style','display: inline-block;'))
								.append($(createButton({id:'',clazz:'',val:'주소찾기'}))
									.on('click' ,function(){
										new daum.Postcode({
								            oncomplete: function(data) {

								                var fullRoadAddr = data.roadAddress; 
								                var extraRoadAddr = ''; 

								                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
								                    extraRoadAddr += data.bname;
								                }
								
								                if(data.buildingName !== '' && data.apartment === 'Y'){
								                   extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
								                }
								     
								                if(extraRoadAddr !== ''){
								                    extraRoadAddr = ' (' + extraRoadAddr + ')';
								                }
								              
								                if(fullRoadAddr !== ''){
								                    fullRoadAddr += extraRoadAddr;
								                }

								             
								                document.getElementById('input_addr_1').value = data.zonecode; //5자리 새우편번호 사용
								                document.getElementById('input_addr_2').value = fullRoadAddr;
								                document.getElementById('input_addr_3').value = data.jibunAddress;

								              
								                if(data.autoRoadAddress) {
								                   
								                    var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
								                    document.getElementById('guide').innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';

								                } else if(data.autoJibunAddress) {
								                    var expJibunAddr = data.autoJibunAddress;
								                    document.getElementById('guide').innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';

								                } else {
								                    document.getElementById('guide').innerHTML = '';
								                }
								            }
								        }).open();
									})
									.attr('style','background: black;color: white;width: 100px;height: 50px; margin-left: 20px;')))
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','margin-top: 15px; margin-left: 130px;')
							.append($(createInput({id:'input_addr_2',val:'주소입력1',type:'text'}))
								.attr('style','width: 350px; height: 50px;'))
							.append($(createInput({id:'input_addr_3',val:'주소입력2',type:'text'}))
								.attr('style','width: 350px; height: 50px; margin-left:10px;'))
							.append($(createDiv({id:'',clazz:''}))
								.attr('style','margin-top: 15px;')
								.append($(createInput({id:'input_addr_4',val:'상세주소',type:'text'}))
									.attr('style','width: 350px; height: 50px;'))))
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','margin-left: 130px; height: 50px; margin-top: 10px;')
							.append($(createDiv({id:'',clazz:''}))
								.append($(createSpan({id:'',clazz:'',val:''}))
									.append($(createDiv({id:'',clazz:''}))
										.append($(createSelect({}))
											.append($(createOption({val:'선택'})))
											.append($(createOption({val:'010'})))
											.append($(createOption({val:'011'})))
											.append($(createOption({val:'016'})))
											.append($(createOption({val:'017'})))
											.append($(createOption({val:'019'}))))
									.append($(createDiv({id:'',clazz:''}))
									.attr('style','margin-top: 15px; display: inline-block;')
										.append($(createInput({id:'input_addr_phone1',val:'핸드폰번호',type:'text'}))
											.attr('style','width: 350px; height: 50px; margin-left:10px;'))))))
							.append($(createDiv({id:'',clazz:''}))
								.attr('style','margin-top: 10px;'))
								.append($(createInput({id:'input_addr_phone2',val:'핸드폰번호',type:'text'}))
									.attr('style','width: 350px; height: 50px;')))
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','margin-top: 100px; margin-left: 130px;')
							.append($(createDiv({id:'',clazz:''}))
								.append($(createHTag({num:'3',val:'배송시 요청 사항'}))))
							.append($(createDiv({id:'',clazz:''}))
								.append($(createInput({id:'input_addr_text',val:'배송시 요청사항',type:'text'}))
									.attr('style','width: 700px; height: 70px;')))
							.append($(createDiv({id:'',clazz:''}))
								.append('<p>배송정보</p>')))
						.append($(createDiv({id:'',clazz:''}))
							.append($(createDiv({id:'',clazz:''}))
								.attr('style','margin-left: 600px;')
								.append($(createInput({id:'',text:'',type:'summit'}))
									.on('click',function(){
										var jason={
											customName:$('#input_addr_name').val(),
											customAddr1:$('#input_addr_1').val(),
											customAddr2:$('#input_addr_2').val(),
											customAddr3:$('#input_addr_3').val(),
											customAddr4:$('#input_addr_4').val(),
											customPhone:$('#option-join').val(),
											customPhone1:$('#input_addr_phone1').val(),
											customPhone2:$('#input_addr_phone2').val(),
											customText:$('#input_addr_text').val(),	
										}
										$.ajax({
											url:context+'/order/addr',
											method:'POST',
											 data: JSON.stringify(jason),
											 dataType:'json',
											 contentType: 'application/json'
										});
										app.mypage.onCreate();
									})	
									.attr('value','결제하기')
									.attr('style','background: black; color: white; text-align: center; width: 200px;  height:60px;'))))));
				 $.getJSON(context+'/basket/totalPrice',e=>{
					 var basketObjTotal = e.basketTotalPrice;
					 console.log(basketObjTotal);			
						$('#div_add').append($(createDiv({id:'',clazz:''}))
							.attr('style','float: right; margin-right: 100px; ')
							.append($(createDiv({id:'',clazz:''}))
								.append($(createHTag({num:'3',val:'고객 관리 지원팀'})))
								.append('<p>맥 웹사이트 이용 중 문의 사항이 있으시면 고객관리 지원팀</br>(02-3440-2702)으로 연락 주시기 바랍니다</p>'))
							.append($(createDiv({id:'',clazz:''}))
								.attr('style','background: #f0f0f0; padding: 5px; margin-top: 15px;')
								.append($(createDiv({id:'',clazz:''}))
									.append($(createHTag({num:'3',val:'내 주문 요약'}))))
								.append($(createDiv({id:'',clazz:''}))
									.append('<p>장바구니에 담겨진 수량</p>'))
								.append($(createDiv({id:'',clazz:''}))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block;')
										.append($(createHTag({num:'4',val:'합계'}))))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block; margin-left: 82px;')
										.append($(createHTag({num:'4',val:'₩'+basketObjTotal[0].price})))))
							.append($(createDiv({id:'',clazz:''}))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block;')
										.append($(createHTag({num:'4',val:'선물포장'}))))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block; margin-left: 45px;')
										.append($(createHTag({num:'4',val:'₩ 0'})))))
								.append($(createDiv({id:'',clazz:''}))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block;')
										.append($(createHTag({num:'4',val:'배송비'}))))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block; margin-left: 65px;')
										.append($(createHTag({num:'4',val:'₩ 0'})))))
							.append($(createDiv({id:'',clazz:''}))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block;')
										.append($(createHTag({num:'4',val:'할인금액'}))))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block; margin-left: 47px;')
										.append($(createHTag({num:'4',val:'₩'+basketObjTotal[0].discount})))))
								.append($(createDiv({id:'',clazz:''}))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block;')
										.append($(createHTag({num:'4',val:'총 합계'}))))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block; margin-left: 60px;')
										.append($(createHTag({num:'4',val:'₩'+basketObjTotal[0].total}))))))
						.append($(createDiv({id:'',clazz:''}))
								.attr('style','margin-top: 10px; background: #f0f0f0; padding: 5px;')
								.append($(createDiv({id:'',clazz:''}))
									.append($(createHTag({num:'3',val:'쿠폰 코드 입력'}))))
								.append($(createDiv({id:'',clazz:''}))
									.append($(createInput({id:'',val:'*주문당 하나의 쿠폰 코드만 사용 가능합니다',type:'text'}))
										.attr('style','width: 300px; height: 50px;')))
								.append($(createDiv({id:'',clazz:''}))
									.append('<p>*쿠폰 코드는 1인 1회 적용되며, 적용 주문건 </br>취소 후 쿠폰 코드 재적용 불가합니다.</p>'))
								.append($(createDiv({id:'',clazz:''}))
									.attr('style','text-align: center; padding: 10px;')
									.append($(createInput({id:'',val:'',type:'submit'}))
										.attr('value','적용하기')
										.attr('style','background: black; color: white; width: 150px; height: 50px;'))))
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','background: black; padding: 10px;')
							.append($(createDiv({id:'',clazz:''}))
								.attr('style','color:white;')
								.append($(createHTag({num:'3',val:'추가정보'}))))
							.append($(createDiv({id:'',clazz:''}))
								.append($(createATag({id:'',clazz:'',val:'배송정보'}))
									.attr('style','color:white;')))
							.append($(createDiv({id:'',clazz:''}))
								.append($(createATag({id:'',clazz:'',val:'반품 및 교환정핵'}))
									.attr('style','color:white;')))
							.append($(createDiv({id:'',clazz:''}))
								.append($(createATag({id:'',clazz:'',val:'최대 구매수량 정책'}))
									.attr('style','color:white;')))))
				 });
		
			 });
		 };
		 return{onCreate:onCreate}
	 })();

app.main=(()=>{
	var $wrapper,context,view,image;
	var onCreate=()=>{
		 $wrapper = $('#wrapper');
		 $content = $('#content');
		 context = $.context();
		 image = $.image();
		 hview = $.javascript()+'/h_app.js';
	     view = $.javascript()+'/j_app.js';
	     setContentView();
	 };
	 var setContentView=()=>{		 
			 $.getScript(view,()=>{
				 
				 $('#wrapper').html($(createDiv({
	    			 id : 'container',
	    			 clazz : ''
	    		 }))
	    		 .attr('style','background: black; width:100%; height:60px; padding: 15px;')
	    		 .append($(createDiv({id:'',clazz:'dropdown'}))
	    				 .attr('style','display: inline-block;')	    			
		 .append($(createButton({id:'btn-main-go',clazz:'btn btn-default dropdown-toggle',val:'M·A·C'}))
	     .attr('style','margin-left: 100px;font-size:20px; width: 120px;background: black; border: black; color: white;'))		 
		 .append($(createButton({id:'',clazz:'btn btn-default dropdown-toggle',val:'신 제 품'}))
		 .attr('style','font-size:20px;width: 120px;background: black; border: black; color: white;')
		 .attr('data-toggle','dropdown'))
				 .append($(createUL({id:'',clazz:'dropdown-menu'}))
	 	.append($(createDiv({id:'',clazz:''}))
			 			.attr('style','width: 1580px; padding:0; display: inline-block;')
 			.append($(createLI({id:'',clazz:'dropdown-submenu',val:''}))
			.append($(createImg({img:'crush.jpg'})))
			.append($(createImg({img:'crush2.jpg'})))
			.append($(createImg({img:'crush3.jpg'})))
			.append($(createImg({img:'crush4.jpg'})))
			.append($(createImg({img:'crush5.jpg'})))
					 			))
			 		)
	    		 		)
	 		.append($(createDiv({id:'',clazz:'dropdown'}))
				 .attr('style','display: inline-block;')
				 .append($(createButton({id:'',clazz:'btn btn-default dropdown-toggle',val:'제 품'}))
				 .attr('style','font-size:20px; width: 120px; background: black; border: black; color: white;')
				 .attr('data-toggle','dropdown'))
				 .append($(createUL({id:'',clazz:'dropdown-menu'}))
				 .attr('style','height: 70px; width: 800px;')
				 .append($(createDiv({id:'',clazz:''}))			
				 .attr('style','width:800px; height: 50px; text-align: center; padding: 5px;')
				 
				 
			 .append($(createDiv({id:'',clazz:''})).
					attr('style','display: inline-block; padding: 5px;')
					.append($(createLI({id:'',clazz:'dropdown-submenu',val:''}))
			.append($(createDiv({id:'',clazz:''}))
				.attr('style','display: inline-block;')
				.attr('style','font-size: 15px; padding:5px;  margin-left: 30px;')
			
				.append($(createATag({id:'test',clazz:'',val:'트 랜 딩 나 우'}))
					.hover(e=>{$('#j-ul-toggle').toggle('show')}, e=>{$('#j-ul-toggle').toggle('hide')})
					.attr('tabindex','-1')
					.attr('style','color:black; font-size:15px; font-weight: bold;'))
				.append($(createUL({id:'j-ul-toggle',clazz:'dropdown-menu'}))
					.attr('style','top:53px;')
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'프레그런스 키트'}))
								.on('click',e=>{
									e.preventDefault();
									$.getScript(hview,()=>{
										app.mainitem.onCreate();
									});
								})
						.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>'))
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'레드의 정석'}))
						.attr('style','color:black; font-size:15px; font-weight: bold;')		
						.append('</br>')))
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'엔티크 로즈'}))
						.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>')))
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'맥프로 아이팔레트'}))
						.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>')))
					)))
					
					))
					 
			.append($(createDiv({id:'',clazz:''})).
					attr('style','display: inline-block; padding: 5px;')
					.append($(createLI({id:'',clazz:'dropdown-submenu',val:''}))
			.append($(createDiv({id:'',clazz:''}))
				.attr('style','display: inline-block;')
				.attr('style','font-size: 15px; padding:5px;  margin-left: 30px;')
			
				.append($(createATag({id:'test',clazz:'',val:'메이크업'}))
					.hover(e=>{$('#j-ul-toggle1').toggle('show')}, e=>{$('#j-ul-toggle1').toggle('hide')})
					.attr('tabindex','-1')
					.attr('style','color:black; font-size:15px; font-weight: bold;'))
				.append($(createUL({id:'j-ul-toggle1',clazz:'dropdown-menu'}))
					.attr('style','top:53px;')
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'립스틱'}))
								.on('click',e=>{
									e.preventDefault();
									$.getScript(hview,()=>{
										app.mainitem.onCreate();
									});
								})
								.attr('style','color:black; font-size:15px; font-weight: bold;')
							.append('</br>'))
						.append($(createATag({id:'',clazz:'',val:'아이섀도우'}))
								.on('click',e=>{
									e.preventDefault();
									$.getScript(hview,()=>{
										app.mainitem.onCreate();
									});
								})
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>'))
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'아이 팔레트+ 키트'}))
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>')))
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'라이너'}))
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>')))
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'마스카라'}))
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>')))
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'브로우'}))
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>')))
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'아이프라이머'}))
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>')))
					)))
					
					))
					
				.append($(createDiv({id:'',clazz:''})).
					attr('style','display: inline-block; padding: 5px;')
					.append($(createLI({id:'',clazz:'dropdown-submenu',val:''}))
			.append($(createDiv({id:'',clazz:''}))
				.attr('style','display: inline-block;')
				.attr('style','font-size: 15px; padding:5px; margin-left: 30px;')
				.append($(createATag({id:'test',clazz:'',val:'프라미어+스킨케어'}))
					.hover(e=>{$('#j-ul-toggle2').toggle('show')}, e=>{$('#j-ul-toggle2').toggle('hide')})
					.attr('tabindex','-1')
					.attr('style','color:black; font-size:15px; font-weight: bold;'))
				.append($(createUL({id:'j-ul-toggle2',clazz:'dropdown-menu'}))
					.attr('style','top:53px;')
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'프라이머'}))
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>'))
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'리무버'}))
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>')))
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'모이스처 라이저'}))
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>')))
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'BB+CC'}))
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>')))
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'여행용사이즈'}))
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>')))
					)))
					))
				.append($(createDiv({id:'',clazz:''})).
					attr('style','display: inline-block; padding: 5px;')
					.append($(createLI({id:'',clazz:'dropdown-submenu',val:''}))
			.append($(createDiv({id:'',clazz:''}))
				.attr('style','display: inline-block;')
				.attr('style','font-size: 15px; padding:5px; margin-left: 30px;')
				.append($(createATag({id:'test',clazz:'',val:'브러쉬+툴'}))
					.hover(e=>{$('#j-ul-toggle3').toggle('show')}, e=>{$('#j-ul-toggle3').toggle('hide')})
					.attr('tabindex','-1')
					.attr('style','color:black; font-size:15px; font-weight: bold;'))
				.append($(createUL({id:'j-ul-toggle3',clazz:'dropdown-menu'}))
					.attr('style','top:53px;')
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'브러쉬'}))
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>'))
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'아이 브러쉬'}))
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>')))
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'립 브러쉬'}))
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>')))
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'페이스 브러수;'}))
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>')))
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'모든 브러쉬'}))
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>')))
					)))
					))
				.append($(createDiv({id:'',clazz:''})).
					attr('style','display: inline-block; padding: 5px;')
					.append($(createLI({id:'',clazz:'dropdown-submenu',val:''}))
			.append($(createDiv({id:'',clazz:''}))
				.attr('style','display: inline-block;')
				.attr('style','font-size: 15px; padding:5px; margin-left: 30px;')
				.append($(createATag({id:'test',clazz:'',val:'향수'}))
					.hover(e=>{$('#j-ul-toggle4').toggle('show')}, e=>{$('#j-ul-toggle4').toggle('hide')})
					.attr('tabindex','-1')
					.attr('style','color:black; font-size:15px; font-weight: bold;'))
				.append($(createUL({id:'j-ul-toggle4',clazz:'dropdown-menu'}))
					.attr('style','top:53px;')
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'쉐이드센츠'}))
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>'))
					)))
					))
					
					.append($(createDiv({id:'',clazz:''})).
					attr('style','display: inline-block; padding: 5px;')
					.append($(createLI({id:'',clazz:'dropdown-submenu',val:''}))
			.append($(createDiv({id:'',clazz:''}))
				.attr('style','display: inline-block;')
				.attr('style','font-size: 15px; padding:5px; margin-left: 30px;')
				.append($(createATag({id:'test',clazz:'',val:'주요 라인업'}))
					.hover(e=>{$('#j-ul-toggle4').toggle('show')}, e=>{$('#j-ul-toggle4').toggle('hide')})
					.attr('tabindex','-1')
					.attr('style','color:black; font-size:15px; font-weight: bold;'))
				.append($(createUL({id:'j-ul-toggle4',clazz:'dropdown-menu'}))
					.attr('style','top:53px;')
					.append($(createLI({id:'',clazz:'',val:''}))
						.append($(createATag({id:'',clazz:'',val:'쉐이드센츠'}))
								.attr('style','color:black; font-size:15px; font-weight: bold;')
						.append('</br>'))
					)))
					))		
			 )))
			 	 	 
			 	 .append($(createButton({id:'',clazz:'btn btn-default dropdown-toggle',val:'굿 바 이 즈'}))
			 			 .attr('style','font-size:20px; width: 120px;background: black; border: black; color: white;'))	
			 	 	 
				 .append($(createButton({id:'',clazz:'btn btn-default dropdown-toggle',val:'맥 셀 렉 트'}))
						 .attr('style',' margin-left: 20px;font-size:20px; width: 120px;background: black; border: black; color: white;'))
			 	 	 
				 .append($(createButton({id:'',clazz:'btn btn-default dropdown-toggle',val:'매 장 안 내'}))
						 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;'))
				 	 
				 .append($(createButton({id:'',clazz:'btn btn-default dropdown-toggle',val:'게 시 판'}))
						 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;'))
				 	 
	 			 .append($(createButton({id:'btn-join-default',clazz:'btn btn-default dropdown-toggle',val:'회원가입'}))
	 					 .on('click',()=>{
	 						 alert('회원가입');
	 						 app.join.onCreate();
	 					 })
	 					 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;'))
				 	 
				 .append($(createButton({id:'btn-login-default',clazz:'btn btn-default dropdown-toggle',val:'로 그 인'}))
				 			.click(()=>{
					 			alert('로그인');
					 			app.login.onCreate();	
					 			$('#content').empty();
					 			
					 			 })	 
				 .attr('style','font-size:20px; width: 120px;background: black; border: black; color: white;')))
				 ;
				 
				 $('#btn-main-go').on('click',()=>{
					 alert('작동함');
						app.main.onCreate();
					});
				 
				$('#content').html($(createDiv({
					id:'div-container',
					clazz:'container-fluid'
				})).attr('style','padding:0;'));
				$('#div-container').append($(createDiv({id:'div-carousel',clazz:''})));
				$('#div-container').append($(createDiv({id:'div-main-items-home',clazz:''})));
				$('#div-container').append($(createDiv({id:'div-main-items-middle',clazz:''})));
				$(createDiv({
					id:'myCarousel',
					clazz:'carousel slide'
				})).attr('style','')
				.attr('data-ride','carousel')
				.appendTo('#div-carousel');
				$(createDiv({
					id:'div-inner',
					clazz:'carousel-inner'
				})).attr('style','max-height:500px;')
				.appendTo('#myCarousel');
				$(createDiv({
					id:'div-item-active',
					clazz:'item active'
				})).appendTo('#div-inner');
				$(createImg({
					img:'m-item3.jpg'
				})).attr('style','width:100%; height:100%;')
				.appendTo('#div-item-active');
				$(createDiv({
					id:'div-item-active1',
					clazz:'item'
				})).appendTo('#div-inner');
				$(createImg({
					img:'m-item4.jpg'
				})).attr('style','width:100%; height:100%;')
				.appendTo('#div-item-active1');
				$(createDiv({
					id:'div-item-active2',
					clazz:'item'
				})).appendTo('#div-inner');
				$(createImg({
					img:'m-item5.jpg'
				})).attr('style','width:100%; height:100%;')
				.appendTo('#div-item-active2');
				$('#div-inner')
				.append($(createMainImg()));
				var temp = ['Matte Lipstick','Retro Matte Lipstick','EYE SHADOW','Mineralize Blush']
				$.getJSON(context+'/search/', d=>{
					var mainObj = d.main;
					for(var i =0 ;  i <= mainObj.length ; i++){
						if(i > 3){
							return false;
						}
						console.log(mainObj[i]);
						$(createDiv({id:'',clazz:''}))
						.attr('style','margin-top:30px;display: inline-block;margin-left: 50px;')
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','display: inline-block;')
							.append($(createDiv({id:'',clazz:''}))
								.append($(createHTag({num:'5',val:d.main[i].itemName}))
									.attr('id','HTag-main-korName-'+i)))
							.append($(createDiv({id:'',clazz:''}))
									.append($(createHTag({num:'5',val:temp[i]}))
											.attr('id','HTag-main-engName-'+i)))
							.append($(createDiv({id:'',clazz:''}))
									.append($(createHTag({num:'5',val:d.main[i].colorExp}))
										.attr('id','HTag-main-color-'+i)))
							.append($(createDiv({id:'',clazz:''}))
									.append($(createHTag({num:'5',val:''}))
										.attr('id','HTag-main-colorEng-'+i))))
					 	.append($(createDiv({id:'',clazz:''}))
				 			.attr('style','display: inline-block; margin-left: 100px;')
				 			.append($(createDiv({id:'',clazz:''}))
			 						.append($(createHTag({num:'5',val:'★★★★★'}))))
							.append($(createDiv({id:'',clazz:''}))
									.append($(createHTag({num:'5',val:'♡'})))))
				 		.append($(createDiv({id:'',clazz:''}))
			 				.append($(createDiv({id:'',clazz:''}))
			 						.append($(createImg({img:d.main[i].picName+'.jpg'})))))
				 		.append($(createDiv({id:'',clazz:''}))
			 				.attr('style','border-top: 1px solid #c7c7c7;')
			 				.append($(createDiv({id:'',clazz:''}))
			 						.attr('style','display: inline-block;margin-left: 10px; margin-top:10px;')
		 							.append($(createHTag({num:'5',val:'₩ 30,000'}))
	 									.attr('id','HTag-basket-'+i+'')))
							.append($(createDiv({id:'',clazz:''}))
									.attr('style','display: inline-block;margin-left: 90px;')
									.append($(createButton({id:'btn-basket-'+i+'',clazz:'',val:'장바구니 담기'}))
											.attr('colorexp',mainObj[i].colorExp)
											.attr('itemname',mainObj[i].itemName)
											.attr('picname',mainObj[i].picName)
											.attr('itemseq',mainObj[i].itemSeq)
											.attr('itemcode',mainObj[i].itemCode)
											.on('click',function (){
												
												var jason = {
														colorexp : $(this).attr("colorexp"),
														itemname : $(this).attr("itemname"),
														picname  : $(this).attr("picname"),
														itemseq  : $(this).attr("itemseq"),
														itemcode : $(this).attr("itemcode"),
												
												}
												
												$.ajax({
													url:context+'/basket/order',
													method:'POST',
													 data: JSON.stringify(jason),
													 dataType:'json',
													 contentType: 'application/json'
													
												})
												console.log($(this));
												console.log("colorExp: ",$(this).attr("colorexp"));
												console.log("itemName: ",$(this).attr("itemname"));
												console.log("picName: ",$(this).attr("picname"));
												console.log("itemseq: ",$(this).attr("itemseq"));
												console.log("itemcode: ",$(this).attr("itemcode"));
												
											})
										.attr('style','color:white; background:black;'))))
										.appendTo('#div-main-items-home');						
					}
				});
		
				
				$(createATag({
					id:'a-tabs-item1',
					clazz:'order-grid-container2',
					val:'<span style="margin-top:15px; padding:10px; height:35px; font-size:15px; background: black; color:white;" id="" class="glyphicon" aria-hidden="true">BEST SELLER</span>'
				})).attr('style','padding:5px;')
				.attr('style','margin-left:600px;')
				.appendTo('#div-main-item-manu1')
				.click(()=>{
	 			alert('베스트셀러');
	 			 });
				$(createATag({
					id:'a-tabs-item2',
					clazz:'order-grid-container2',
					val:'<span style="margin-top:15px; margin-left:5px; padding:10px; height:35px; font-size:15px; background: black; color:white;" id="" class="glyphicon" aria-hidden="true">PALET TES</span>'
				})).attr('style','padding:5px;')
				.appendTo('#div-main-item-manu1')
				.click(()=>{
	 			alert('PALETTES');
	 			 });
				$(createATag({
					id:'a-tabs-item3',
					clazz:'order-grid-container2',
					val:'<span style="margin-top:15px; padding:10px; height:35px; font-size:15px; background: black; color:white;" id="" class="glyphicon" aria-hidden="true">HIT ITEM</span>'
				})).attr('style','padding:5px;')
				.appendTo('#div-main-item-manu1')
				.click(()=>{
		 			alert('HIT ITEM');
		 			 });
				$('#div-main-items-middle')
				.append($(createDiv({
					id:'div-main-itme-manu2',
					clazz:''
				})));
				$(createHTag({
					num:'2',
					val:'한정 컬렉션'
				}))
				.attr('style','font-weight: bold; text-align: center;')
				.appendTo('#div-main-itme-manu2');
				$(createHTag({
					num:'2',
					val:'리미티드 아이템을 만나는 한정된 기회를 절대 놓치지 마세요!'
				}))
				.attr('style','font-size: 15px; text-align: center;')
				.appendTo('#div-main-itme-manu2');
				$('#div-main-items-middle').append($(createDiv({
					id:'j-div-main-itme-manu3',
					clazz:''
				})));
				$(createImg({
					img:'mainitem4.jpg'
				})).attr('style','margin-left:80px;')
				.appendTo('#j-div-main-itme-manu3')
				 .click(()=>{
		 				alert('화면 작동함');
				 });
				$('#div-main-items-middle').append($(createDiv({
					id:'j-div-main-itme-manu4',
					clazz:''
				})));
				$(createHTag({
					num:'2',
					val:'공식몰 혜택'
				}))
				.attr('style','font-weight: bold; text-align: center;')
				.appendTo('#j-div-main-itme-manu4');
				$('#div-main-items-middle').append($(createDiv({
					id:'j-div-main-itme-manu5',
					clazz:''
				})));
				$(createImg({
					img:'mainitem5.jpg'
				})).attr('style','margin-left:80px;')
				.appendTo('#j-div-main-itme-manu5')
				 .click(()=>{
		 				alert('화면 작동함');
				 });
				$('#div-main-items-middle').append($(createDiv({
					id:'j-div-main-itme-manu6',
					clazz:''
				})));
				$(createHTag({
					num:'2',
					val:'머스트 해브 아이템'
				}))
				.attr('style','font-weight: bold; text-align: center;')
				.appendTo('#j-div-main-itme-manu6');
				$('#div-main-items-middle').append($(createDiv({
					id:'j-div-main-itme-manu7',
					clazz:''
				})));
				$(createDiv({
					id:'j-div-main-itme-manu8',
					clazz:''
				})).attr('style','margin-left:140px;').appendTo('#j-div-main-itme-manu7');
				
				$(createATag({
					id:'j-a-mainitem6',
					val:'<img style="height:48%;width: 22%;" src="'+$.image()+'/mainitem6.jpg">'
				}))
				.appendTo('#j-div-main-itme-manu8')
				 .click(()=>{
		 				alert('화면 작동함1');
				 });
				$(createATag({
					id:'j-a-mainitem7',
					val:'<img style="height:48%;width: 22%; " src="'+$.image()+'/mainitem7.jpg">'
				}))
				.appendTo('#j-div-main-itme-manu8')
				 .click(()=>{
		 				alert('화면 작동함2');
				 });
				 $(createATag({
						id:'j-a-mainitem8',
						val:'<img style="height:48%;width: 22%;" src="'+$.image()+'/mainitem8.jpg">'
					}))
					.appendTo('#j-div-main-itme-manu8')
					 .click(()=>{
			 				alert('화면 작동함3');
					 });
				$(createATag({
					id:'j-a-mainitem9',
					val:'<img style="height:48%;width: 22%;" src="'+$.image()+'/mainitem9.jpg">'
				}))
				.appendTo('#j-div-main-itme-manu8')
				 .click(()=>{
		 				alert('화면 작동함4');
				 });
				$('#footer').html($(createDiv({
					id:'j-div-footer1',
					clazz:''
				})).attr('style','background: #292929; height:35%; margin-top:20px;'));
				$(createDiv({
					id:'j-div-footer2',
					clazz:''
				})).attr('style','background:black; height:15%;')
				.appendTo('#footer');
				$(createImg({
					img:'mainitem10.jpg'
				})).attr('style','width: 1400px;').appendTo('#j-div-footer2');
				
				$(createGridDiv4()).attr('style','margin: 0 auto;').appendTo('#j-div-footer1');
				$(createGridDivContent({
					val:'맥 스토어'
				})).attr('style','color:white; margin-top: 8px;')
				.attr('id','j-div-grid-1')
				.appendTo('#div-order-grid4');
				$(createGridDivRow2({
					val1:(createATag({
						id:'j-a-1-1',
						val:'매장안내'				
					})),
					val2:(createATag({
						id:'j-a-1-2',
						val:'메이크업 서비스'				
					})),
					val3:'',
					val4:'',
					val5:'',
					val6:'',
					val7:'',
				})).attr('style','margin-top:10px;')
				.appendTo('#j-div-grid-1');
				$('#j-a-1-1').attr('style','color:white');
				$('#j-a-1-2').attr('style','color:white');
				
				$(createGridDivContent({
					val:'고객관리지원팀'
				})).attr('style','color:white; margin-top: 8px;')
				.attr('id','j-div-grid-2')
				.appendTo('#div-order-grid4');
				$(createGridDivRow2({
					val1:(createATag({
						id:'j-a-2-1',
						val:'Contact Us'				
					})),
					val2:(createATag({
						id:'j-a-2-2',
						val:'02-3440-2707'				
					})),
					val3:(createATag({
						id:'j-a-2-3',
						val:'FAQS'				
					})),
					val4:(createATag({
						id:'j-a-2-4',
						val:'배송정보'				
					})),
					val5:(createATag({
						id:'j-a-2-5',
						val:'반품 및 교환'				
					})),
					val6:'',
					val7:'',
				})).attr('style','margin-top:10px;')
				.appendTo('#j-div-grid-2');
				$('#j-a-2-1').attr('style','color:white');
				$('#j-a-2-2').attr('style','color:white');
				$('#j-a-2-3').attr('style','color:white');
				$('#j-a-2-4').attr('style','color:white');
				$('#j-a-2-5').attr('style','color:white');
				
				$(createGridDivContent({
					val:'ABOUT US'
				})).attr('style','color:white; margin-top: 8px;')
				.attr('id','j-div-grid-3')
				.appendTo('#div-order-grid4');
				$(createGridDivRow2({
					val1:(createATag({
						id:'j-a-3-1',
						val:'QUR STORY'				
					})),
					val2:(createATag({
						id:'j-a-3-2',
						val:'맥 에이즈 펀드'				
					})),
					val3:(createATag({
						id:'j-a-3-3',
						val:'맥 프로 맴버쉽'				
					})),
					val4:(createATag({
						id:'j-a-3-4',
						val:'나의 맥 셀렉트'				
					})),
					val5:(createATag({
						id:'j-a-3-5',
						val:'백 투 맥'				
					})),
					val6:(createATag({
						id:'j-a-3-6',
						val:'채용 정보'				
					})),
					val7:(createATag({
						id:'j-a-3-7',
						val:'ANIMAL TESTING'				
					})),
				})).attr('style','margin-top:10px;')
				.appendTo('#j-div-grid-3');
				$('#j-a-3-1').attr('style','color:white;');
				$('#j-a-3-2').attr('style','color:white;');
				$('#j-a-3-3').attr('style','color:white;');
				$('#j-a-3-4').attr('style','color:white;');
				$('#j-a-3-5').attr('style','color:white;');
				$('#j-a-3-6').attr('style','color:white;');
				$('#j-a-3-7').attr('style','color:white;');
				
				$(createGridDivContent({
					val:'내 정보및 주문관리'
				})).attr('style','color:white; margin-top: 8px;')
				.attr('id','j-div-grid-4')
				.appendTo('#div-order-grid4');
				$(createGridDivRow2({
					val1:(createATag({
						id:'j-a-4-1',
						val:'QUR STORY'				
					})),
					val2:(createATag({
						id:'j-a-4-2',
						val:'맥 에이즈 펀드'				
					})),
					val3:(createATag({
						id:'j-a-4-3',
						val:'맥 프로 맴버쉽'				
					})),
					val4:(createATag({
						id:'j-a-4-4',
						val:''				
					})),
					val5:(createATag({
						id:'j-a-4-5',
						val:''				
					})),
					val6:(createATag({
						id:'j-a-4-6',
						val:''				
					})),
					val7:(createATag({
						id:'j-a-4-7',
						val:''				
					})),
				})).attr('style','margin-top:10px;')
				.appendTo('#j-div-grid-4');
				$('#j-a-4-1').attr('style','color:white;');
				$('#j-a-4-2').attr('style','color:white;');
				$('#j-a-4-3').attr('style','color:white;');
				
				$(createGridDivContent({
					val:''
				})).attr('style','color:white')
				.attr('id','j-div-grid-5')
				.appendTo('#div-order-grid4');
				
			 });
		
			
		 };
		
		 return{onCreate:onCreate}
	 })();
app.join=(()=>{
	var $wrapper,context,view,image;
	var onCreate=()=>{
		 $wrapper = $('#wrapper');
		 $content = $('#content');
		 context = $.context();
		 image = $.image();
	     view = $.javascript()+'/j_app.js';
	     setContentView();
	 };
	 var setContentView=()=>{
		$.getScript(view,()=>{
			$('#content').empty();
			$('#btn-join-default').remove();
			$('#footer').attr('style','    margin-top: 100px;');
			$('#content').html($(createDiv({id:'content-container',clazz:''})));
			$('#content-container').append($(createDiv({id:'container-second',clazz:''}))
				.append($(createHTag({num:'1',val:'회원가입'}))
					.attr('style','text-align:center;')));
			
			$('#content-container').append($(createDiv({id:'',clazz:''}))
				.append($(createHTag({num:'5',val:'이미 맥 공식 온라인몰 회원이신가요?'
							+((createATag({id:'a-login',clazz:'',val:'로그인'})))}))
								.attr('style','text-align:center; ')));
			$('#content-container').append($(createDiv({id:'',clazz:''}))
					.attr('style','margin-left: 418px; padding: 10px; margit-top:60px;')
						.append($(createDiv({id:'',clazz:''}))
						    .attr('style','display: inline-block;')
								.append($(createInput({id:'input_join_id',val:'*아이디 입력하세요',type:'text'}))
										.attr('style','width: 355px;height: 50px; ')))
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','display: inline-block;')
								.append($(createButton({id:'',clazz:'',val:'중복확인'}))
									.on('click',x=>{
										var jason = {
											inputJoinId:$('#input_join_id').val()
										}
										console.log(jason);
										$.ajax({
											url:context+'/joinid/search',
											method:'POST',
											data:JSON.stringify(jason),
											dataType:'json',
											contentType:'application/json',
											success:x=>{
												console.log(x);
												if(x.success==1){
													alert('이미 중복된 아이디입니다 새로운 아이디를 입력하세요.')
												}else{
													alert('사용가능한 아이디 입니다.')
												}	
												
											}
										});
									})
									.attr('style','background:black;color:white ;margin-left:15px;'))));
			$('#content-container').append($(createDiv({id:'',clazz:''}))
					.attr('style','margin-left: 418px; padding: 10px;')
						.append($(createInput({id:'input_join_pass',val:'*비밀번호를 입력하세요',type:'text'}))
								.attr('style','width: 355px;height: 50px; ')));
			$('#content-container').append($(createDiv({id:'',clazz:''}))
					.attr('style','text-align:center;')
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','text-align:center;     padding: 10px;   display: inline-block;')
							.append($(createInput({id:'input_join_name',val:'*이름',type:'text'}))
								.attr('style','width: 355px;height: 50px;'))
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','text-align:center;     padding: 10px;   display: inline-block;')
							.append($(createInput({id:'input_join_email',val:'*이메일',type:'text'}))
								.attr('style','width: 355px;height: 50px;')))));
			$('#content-container').append($(createDiv({id:'',clazz:''}))
					.attr('style','text-align:center;')
						.append($(createHTag({num:'5',val:'*비밀번호는 영문 대문자, 소문자, 숫자, 특수문자를 모두 조합하여 8자~12자로 구성해주세요.(ex. Mac1234@)'}))
								.attr('style','color:red;')));
			$('#content-container').append($(createDiv({id:'',clazz:''}))
					.attr('style','margin-left: 415px;')
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','text-align:center;     padding: 10px;   display: inline-block;')
							.append($(createSelect({}))
								.attr('style','width: 140px; height:50px; ')
								.append($(createOption({val:'선택'})))
								.append($(createOption({val:'010'})))
								.append($(createOption({val:'011'})))
								.append($(createOption({val:'016'})))
								.append($(createOption({val:'019'})))))
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','text-align:center;     padding: 10px;   display: inline-block;')
							.append($(createInput({id:'input_join_phoneNum1',val:'핸드폰번호',type:'text'}))
								.attr('style','width: 140px; height:50px; ')))
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','text-align:center;     padding: 10px;   display: inline-block;')
							.append($(createInput({id:'input_join_phoneNum2',val:'핸드폰번호',type:'text'}))
								.attr('style','width: 140px; height:50px; '))));
			$('#content-container').append($(createDiv({id:'',clazz:''}))
					.attr('style','margin-left: 416px;')
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','text-align:center;     padding: 10px;   display: inline-block;')
							.append($(createInput({id:'input_join_email_check',val:'이메일 인증번호',tpye:'text'}))
								.attr('style','width: 350px;height: 50px;')))
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','text-align:center;padding: 10px;   display: inline-block;')
							.append($(createButton({id:'',clazz:'',val:'인증번호'}))
									.attr('style','background:black;color:white;'))));
			$('#content-container').append($(createDiv({id:'',clazz:''}))
					.attr('style','margin-left: 425px;')
						.append($(createDiv({id:'',clazz:''}))
							.append($(createHTag({num:'3',val:'프로필 사진 업로드'}))))
						.append($(createDiv({id:'',clazz:''}))
							.append($(createInput({id:'input_join_myFile',val:'프로필 사진을 선택해주세요',type:'file'}))
										.attr('style','    background: white;color: black; margin-top:10px;')))
						.append($(createDiv({id:'',clazz:''}))
							.append($(createPtag({val:'프로필 사진 선택시 마이페이지 화면에 사진이 업로드 됩니다.'}))
										.attr('style','margin-top:10px;')))
						.append($(createDiv({id:'',clazz:''}))));
			$('#content-container').append($(createDiv({id:'',clazz:''}))
					.attr('style','text-align:center; margin-top:50px;')
						.append($(createButton({id:'',clazz:'',val:'회원가입'}))
							.on('click',()=>{
								var jason={
										inputJoinId:$('#input_join_id').val(),
										inputJoinPass:$('#input_join_pass').val(),
										inputJoinName:$('#input_join_name').val(),
										inputJoinEmail:$('#input_join_email').val(),
										inputJoinPhoneNum1:$('#input_join_phoneNum1').val(),
										inputJoinPhoneNum2:$('#input_join_phoneNum2').val(),
										inputJoinEmailCheck:$('#input_join_email_check').val(),
										inputJoinMypageProfile:$('#input_join_myFile').val(),
										optionjoin:$('#option-join').val()
								}
								$.ajax({
									url:context+'/customer/join/',
									method:'POST',
									data:JSON.stringify(jason),
									dataType:'json',
									contentType:'application/json'
									
								});
								alert('다시 로그인 해주시기 바랍니다')
								app.main.onCreate();
							})
							.attr('style','background:black;color:white; width:150px; height:50px;')))
			

					

			
			
			
		});
	 };
	 return{onCreate:onCreate}
})();
app.login=(()=>{
	var $wrapper,context,view,image;
	var onCreate=()=>{
		 $wrapper = $('#wrapper');
		 $content = $('#content');
		 context = $.context();
		 image = $.image();
	     view = $.javascript()+'/j_app.js';
	     setContentView();
	     content();
	 };
	 var setContentView=()=>{
		 $.getScript(view,()=>{
			 $('#btn-login-default').remove();
			 $('#footer').attr('style','    margin-top: 0px;')
			 $('#container').append($(createButton({id:'btn-admin-default',clazz:'btn btn-default dropdown-toggle',val:'관리자'}))
					 .attr('data-toggle','modal')
					 .attr('data-target','#myModal')
					 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;'));
         });	 
	 };
	 var content=()=>{
		 $.getScript(view,()=>{
			 $('#btn-login-default').html();
			 $('#content').html($(createDiv({
					id : 'mac-store',
					clazz : 'field-container field-container--grid'
				})));
			 $(createTab({
				 id:'tab-login',
				 clazz:'table-condensed'
			 })).attr('style','width:90%; margin: 0auto; margin-top:70px; height:70%')
			 .appendTo('#mac-store');
			 $(createHTag({
				 num : '2',
				 val : '회원 로그인'
			 })).attr('style','margin-left: 200px; font-size: 4rem; font-weight: normal; line-height:0.875; ')
			 .appendTo('#tab-login');
			 $(createHTag({
				 num : '',
				 val : '아직 맥 공식 온라인몰 회원이 아니신가요?'
			 })).attr('style','margin-left: 200px; font-size: 15px;')
			 .appendTo('#tab-login');
			 $(createUL({
				 id:'ul-login',
				 clazz:''
			 })).appendTo('#tab-login');
			 $(createLI({
				 id:'li-login',
				 clazz:'',
				 val:'이메일 주소를 입력해 주세요.'
			 })).attr('style','margin-left: 160px; font-size: 15px;')
			 .appendTo('#ul-login');
			 $('#li-login').append('</br>');
			 $(createLI({
				 id:'li-pass',
				 clazz:'',
				 val:'비밀번호를 입력해 주세요.'
			 })).attr('style','font-size: 15px;')
			 .appendTo('#li-login');
			 $(createDiv({
					id : 'div-input-bar',
					clazz : 'div-input-bar'
				})).appendTo('#tab-login');
			 $(createInput({
				 id : 'input-login',
				 val : '*예시:username@network.co.kr',
				 type :'text'
			 })).attr('style','height:60px; width:300px; margin-left:200px; border: 1px solid red;    font-size: 12px;')
			 .appendTo('#div-input-bar');
			 $(createInput({
					id : 'input-pass',
					 val : '*비밀번호(영문 대소문자, 숫자, 특수문자 혼합 8자 이상 조합)',
					 type :'text'
				})).attr('style','height:60px; width:300px; margin-left: 20px; border: 1px solid red;    font-size: 12px;')
				.appendTo('#div-input-bar');
			 $('#div-input-bar')
			 .append($(createDiv({
					id : 'div-pass-question',
					clazz : 'div-input-bar'
				})));
			 $(createATag({
				 id:'a-pass',
				 val:'비밀번호를 잊어버리셨나요?'			
			 })).attr('style','margin-left:550px;')
			 .appendTo('#div-pass-question');
			 $('#div-pass-question')
			 .append($(createDiv({
					id : 'div-login-box',
					clazz : 'div-login-box'
				})));
	
			 
			 $(createButton({
					id : 'input-login-box',
					 clazz : 'btn-login',
					 val :'로그인'
				})).attr('style','border-radius: 0; height:60px; width:300px; margin-left:200px; background: black; color: white;')
				.appendTo('#div-login-box')
				.on('click',e=>{
					customerLogin(e);
				});
			 
		 });
		
	 }


 var customerLogin=x=>{
	 x.preventDefault();
	 console.log($('#input-login'));
	 var jason={
		 'customId':$('#input-login').val(),
		 'customPass':$('#input-pass').val(),	 		
	 }
	 console.log(jason);
	 $.ajax({
		 url:context+'/customer/login',
		 method:'POST',
		 data: JSON.stringify(jason),
		 dataType:'json',
		 contentType: 'application/json',
			success: x=>{
				console.log(x);
				alert('로그인 성공 x='+x.success);
				if(x.success==1){
					app.mypage.onCreate();
				}else{
					alert('로그인 실패');
				}
			},
			error: (x,h,m)=>{
				console.log(x);
				console.log(h);
				console.log(m);
				//alert('로그인에서 에러발생 x= '+x+' ,h= '+h+' ,m= '+m);
			}
	 });
	 
 };
		 return{onCreate:onCreate}
	 })();
		 
app.router = (()=>{
	  var onCreate=x=>{
	  $.getScript(x+'resources/js/router.js',()=>{ 
	      $.extend(new Router(x));
	      });        
	  };
	  return {onCreate:onCreate};
})();