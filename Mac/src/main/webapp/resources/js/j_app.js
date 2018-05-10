var app = app || {};
app = (()=>{
    var init = x =>{
        $.getScript(x+'/resources/js/router.js',()=>{
            $.extend(new Router(x));
            app.route.init(x);
            app.intro.onCreate();
        })
    };
    return {init:init};
})();
//
app.route = (()=>{
    return {
                init : x => 
                {
                    sessionStorage.setItem('x', x);
                }, 
                $ : ()=>{
                    return sessionStorage.getItem('x');
                },
                $j : ()=>{
                    return sessionStorage.getItem('x')+'/resources/js';
                },
                $c : ()=>{
                    return sessionStorage.getItem('x')+'/resources/css';
                },
                $i : ()=>{
                    return sessionStorage.getItem('x')+'/resources/img';
                }
            };
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
var createOptionJoin=x=>{
	return '<option id="createOptionJoin">'+x.val+'</option>'
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
app.intro=(()=>{
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
			 $('#content').append($(createDiv({id:'',clazz:'jumbotron text-center'}))
				 .attr('style','background: black;     color: white;')
				 .append($(createHTag({num:'1',val:'My First Team Project'})))
				 .append('<p>Start now</p>'));
			 $('#content').append($(createDiv({id:'container',clazz:'container'}))
				 .append($(createDiv({id:'',clazz:'row'}))
					 .append($(createDiv({id:'',clazz:'col-sm-4'}))
						 .append($(createHTag({num:'3',val:'TEAM NAME'})))
						 .append('<p>M A C</p>'))
					 .append($(createDiv({id:'',clazz:'col-sm-4'}))
						 .append($(createHTag({num:'3',val:'PROJEC NAME'})))
						 .append('<p>MAC SHOP</p>'))
				 	 .append($(createDiv({id:'',clazz:'col-sm-4'}))
						 .append($(createHTag({num:'3',val:'Participants'})))
						 .append('<p>JUNG YONG HO</p>')
						 .append('<p>HAN BO RAM</p>')
						 .append('<p>LIM HYUN YOU</p>'))));
			 $('#content').append($(createDiv({id:'',clazz:'jumbotron text-center'}))
					 .attr('style','background:white;')
					 .append($(createHTag({num:'1',val:'MAC SHOP OPEN'})))
					 .append($(createButton({id:'',clazz:'',val:'click'}))
						 .on('click',()=>{
							 app.main.onCreate();
						 })
						 .attr('style','background:black; color:white; width:100px; height:70px; font-size:30px;')));
			
		 });
	 
	 };
	 return{onCreate:onCreate}
	
})()
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
			$.getJSON(context+'/basket/search/'+sessionStorage.getItem('customer'),e=>{
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
											 url:context+'/basket/delete/',
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
			 $.getJSON(context+'/basket/totalPrice/'+sessionStorage.getItem('customer'),e=>{
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
					 $.getJSON(context+'/order/search/'+sessionStorage.getItem('customer'),e=>{
						 var orderObj = e.orderSearch;
						 function addComma(num) {
						        var len, point, str;
						        num = num + "";
						        point = num.length % 3;
						        len = num.length;
						        str = num.substring(0, point);
						        while(point < len) {
						            if(str != "") {
						                str += ",";
						            }
						            str += num.substring(point, point +3);
						            point += 3;
						        }
						        return str;
						    }
						 console.log(e.orderSearch);
						 for(var i =0 ;  i < orderObj.length ; i++){
							if(i > orderObj.length){
								return false;
							}

							$("#div-order-float").append("<div class='row'></div>")
									.append($(createDiv({id:'',clazz:''}))
									.attr('style','float: left;    width: 1000px; margin-left: 30px;border-top: 1px solid #c7c7c7;')
									.append($(createDiv({id:'',clazz:''}))
											.attr('style','display: inline-block; float: left;')
											.append($(createBasketImg({img:orderObj[i].picName+'.jpg'}))))
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
												.attr('style','display: inline-block;    margin-left: 100px;')
												.append($(createHTag({num:'5',val:'정상가:'+'₩'+addComma(orderObj[i].price)})))
												.append($(createHTag({num:'5',val:'할인가:'+'₩'+addComma(orderObj[i].discountPrice)}))))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','display: inline-block;')
												.append($(createDiv({id:'',clazz:''}))
													.attr('style','margin-left: 150px;')
													.append($(createHTag({num:'3',val:orderObj[i].itemCount})))))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','display: inline-block;margin-left: 40px;')
												.append($(createDiv({id:'',clazz:''}))
													.attr('style','margin-left: 80px;')
													.append($(createHTag({num:'3',val:'₩'+addComma(orderObj[i].total)}))))));
				
						 }
					 });
					
				$('#div-orders').append($(createDiv({id:'',clazz:''}))
						.attr('style','float: right; margin-left: 100px; text-align: center;')
						.append($(createDiv({id:'',clazz:''}))
								.attr('style','height: 50px; background: black; color:white;')
								.append($(createHTag({num:'3',val:'위시 리스트'}))))
							.append($(createDiv({id:'',clazz:''}))
								.attr('style','height: 50px; background: black; color:white;')
								.append($(createHTag({num:'3',val:'지난 구매내역'}))))
							.append($(createDiv({id:'',clazz:''}))
								.attr('style',' background: black; color:white;')
								.append($(createDiv({id:'',clazz:''}))
									.attr('style','height: 50px; ')
									.append($(createHTag({num:'3',val:'쿠폰 코드 입력'}))))
								.append($(createDiv({id:'',clazz:''}))
									.attr('style','height: 50px; ')
									.append($(createInput({id:'',val:'*주문당 하나의 쿠폰코드만 사용 가능합니다',type:'text'}))
										.attr('style','width: 300px; height: 50px; color:black')))
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
										.append($(createATag({id:'',clazz:'',val:'이메일 문의하기'}))
											.attr('style','color:white')))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','margin-top:30px;')
										.append($(createHTag({num:'3',val:'추가정보'})))
										.append($(createDiv({id:'',clazz:''}))
											.append($(createATag({id:'',clazz:'',val:'배송정보'}))
												.attr('style','color:white')))
										.append($(createDiv({id:'',clazz:''}))
											.append($(createATag({id:'',clazz:'',val:'교환및 환불 정책'}))
												.attr('style','color:white')))
										.append($(createDiv({id:'',clazz:''}))
											.append($(createATag({id:'',clazz:'',val:'최대 구매수량 정책'}))
												.attr('style','color:white')))))));
					
				 $.getJSON(context+'/basket/totalPrice/'+sessionStorage.getItem('customer'),e=>{
					 var basketObjTotal = e.basketTotalPrice;
					 function addComma(num) {
					        var len, point, str;
					        num = num + "";
					        point = num.length % 3;
					        len = num.length;
					        str = num.substring(0, point);
					        while(point < len) {
					            if(str != "") {
					                str += ",";
					            }
					            str += num.substring(point, point +3);
					            point += 3;
					        }
					        return str;
					    }
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
												.append($(createHTag({num:'3',val:'₩'+addComma(basketObjTotal[0].price)})))))
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
												.append($(createHTag({num:'3',val:'₩'+addComma(basketObjTotal[0].discount)})))))
										.append($(createDiv({id:'',clazz:''}))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','float: left; margin-left: 230px;')
												.append($(createHTag({num:'3',val:'총 합 계'}))))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','margin-left: 340px; display: inline-block;')
												.append($(createHTag({num:'3',val:'₩'+addComma(basketObjTotal[0].total)})))))
										.append($(createDiv({id:'',clazz:''}))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','text-align:  center; width: 150px;  background: black; height: 50px; margin: 0 auto; padding: 14px;')
												.append($(createATag({id:'',clazz:'',val:'지금 구매하기'}))
														.on('click',e=>{
															$.getJSON(context+'/addr/search',e=>{
																var addr = e.success;
																console.log(e.success);
																if(addr==1){
																	app.cash.onCreate();
																}else{
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
				 $('#footer').attr('style','margin-top:100px;')
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
		            title: '최근 4년간 통계',
		            subtitle: 'Sales, Expenses, and Profit: 2015-2018',
		          },
		          bars: 'horizontal' // Required for Material Bar Charts.
		        };

		        var chart = new google.charts.Bar(document.getElementById('chart_div'));

		        chart.draw(data, google.charts.Bar.convertOptions(options));
		      }
		      });
				 $('#btn-mypage').on('click',()=>{
					 app.mypage.onCreate();
					 $('#btn-mypage').remove();
					 $('#btn-logout').remove();
					 $('#btn-basket').remove();
				 })
				 
				 $('#content').append($(createDiv({id:'chart_div',clazz:''}))
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
				 $('#content').empty();
				 $('#footer').attr('style','margin-top:100px;')
				 $('#content').html($(createDiv({id:'',clazz:''}))
					 .append($(createHTag({num:4,val:'아이 > 섀도우'}))
						 .attr('style','margin-top: 30px; border-bottom: 1px solid #c7c7c7; margin-bottom: 20px; text-align: center')))
				$('#content').append($(itemsCatallog()))
		
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
			 $('#wrapper').html($(createDiv({id:'container',clazz:''})));
			 $('#content').html(app.mainItem.onCreate());
			 $('#container').html($(createDiv({id : '',clazz : ''}))
    		 .attr('style','background: black; width:100%; height:60px; padding: 15px;')
    		 .append($(createDiv({id:'div-nav-0',clazz:''}))
    				 .attr('style','display: inline-block;'))
    		 .append($(createDiv({id:'div-nav',clazz:'dropdown'}))
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
 		.append($(createDiv({id:'div-nav2',clazz:'dropdown'}))
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
				.attr('style','top:53px; text-align: center;')
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'프레그런스 키트'}))
							.on('click',e=>{
								e.preventDefault();
								$.getScript(hview,()=>{
									app.mainitem.onCreate();
								});
							})
					.attr('style','color:black; font-size:15px; font-weight: bold;')
					)
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'레드의 정석'}))	
					.attr('style','color:black; font-size:15px; font-weight: bold;')		
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'엔티크 로즈'}))
					.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'맥프로 아이팔레트'}))
					.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
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
						)
					.append($(createATag({id:'',clazz:'',val:'아이섀도우'}))
							.on('click',e=>{
								e.preventDefault();
								$.getScript(hview,()=>{
									app.mainitem.onCreate();
								});
							})
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					)
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'아이 팔레트+ 키트'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'라이너'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'마스카라'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'브로우'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'아이프라이머'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
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
					)
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'리무버'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'모이스처 라이저'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'BB+CC'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'여행용사이즈'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
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
					)
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'아이 브러쉬'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'립 브러쉬'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'페이스 브러수;'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'모든 브러쉬'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
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
					)
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
					)
				)))
				))		
		 )))
		 	 .append($(createDiv({id:'div-nav3',clazz:''}))
		 			.attr('style','display: inline-block; padding: 5px;')
		 			 .append($(createButton({id:'btn_goodbye',clazz:'btn btn-default dropdown-toggle',val:'굿 바 이 즈'}))
 					 .attr('data-toggle','tooltip')
		 			 .attr('title','지원하지 않는 기능입니다')
		 			 .attr('data-placement','top')
		 			 .attr('style','font-size:20px; width: 120px;background: black; border: black; color: white;'))	
		 	 	 
			 .append($(createButton({id:'btn_select',clazz:'btn btn-default dropdown-toggle',val:'맥 셀 렉 트'}))
					 .attr('data-toggle','tooltip')
		 			 .attr('title','지원하지 않는 기능입니다')
		 			 .attr('data-placement','top')
					 .attr('style',' margin-left: 20px;font-size:20px; width: 120px;background: black; border: black; color: white;'))
		 	 	 
			 .append($(createButton({id:'btn_search',clazz:'btn btn-default dropdown-toggle',val:'매 장 안 내'}))
					 .attr('data-toggle','tooltip')
		 			 .attr('title','지원하지 않는 기능입니다')
		 			 .attr('data-placement','top')
					 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;'))
			 	 
			 .append($(createButton({id:'btn_board',clazz:'btn btn-default dropdown-toggle',val:'게 시 판'}))
					 .attr('data-toggle','tooltip')
		 			 .attr('title','지원하지 않는 기능입니다')
		 			 .attr('data-placement','top')
					 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;'))
			 	 
 			 .append($(createButton({id:'btn-mypage-default',clazz:'btn btn-default dropdown-toggle',val:'마이페이지'}))
 					 .on('click',()=>{
 						app.mypage.onCreate();
 						$('#btn-mypage-default').remove();
 						$('#btn-basket').remove();
 						$('#btn-logout').remove();
 						$('#btn_select').remove();
 						$('#btn_search').remove();
 						$('#btn_board').remove();
 						$('#btn-write').remove();
 						$('#btn-write-search').remove();
 					 })
 					 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;'))));
			 $('#div-nav3').append($(createButton({id:'btn-logout',clazz:'btn btn-default dropdown-toggle',val:'로그아웃'}))
					 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;')
					 .on('click',()=>{
						 sessionStorage.removeItem('customer');
						 app.main.onCreate();
					 }));
		 });
		 
	 };
	 return{onCreate:onCreate}
})()
app.map=(()=>{
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
			$('#content').empty();
			$('#content').append($(createDiv({id:'map',clazz:''}))
				.attr('style','margin-top:50px;'))
			
			$(document).ready(function(){
				 var myLatLng = {lat: 37.4970720, lng: 127.0285780};

			        var map = new google.maps.Map(document.getElementById('map'), {
			          zoom: 15,
			          center: myLatLng
			        });

			        var marker = new google.maps.Marker({
			          position: myLatLng,
			          map: map,
			          title: 'Hello World!'
			        });
			})
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
			});
	};
	return{onCreate:onCreate}
})();
app.nav=(()=>{
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
			 $('#wrapper').html($(createDiv({id:'container',clazz:''})));
			 $('#container').html($(createDiv({id : '',clazz : ''}))
    		 .attr('style','background: black; width:100%; height:60px; padding: 15px;')
    		.append($(createDiv({id:'div-nav-0',clazz:''}))
    				.attr('style','display: inline-block;'))
    		 .append($(createDiv({id:'div-nav',clazz:'dropdown'}))
    				 .attr('style','display: inline-block;')	    			
	 .append($(createButton({id:'btn-main-go',clazz:'btn btn-default dropdown-toggle',val:'M·A·C'}))
		 .on('click',()=>{
			 app.main.onCreate();
		 })
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
 		.append($(createDiv({id:'div-nav2',clazz:'dropdown'}))
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
					)
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'레드의 정석'}))
					.attr('style','color:black; font-size:15px; font-weight: bold;')		
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'엔티크 로즈'}))
					.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'맥프로 아이팔레트'}))
					.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
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
					)
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'아이 팔레트+ 키트'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'라이너'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'마스카라'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'브로우'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'아이프라이머'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
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
					)
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'리무버'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'모이스처 라이저'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'BB+CC'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'여행용사이즈'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
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
					)
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'아이 브러쉬'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'립 브러쉬'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'페이스 브러수;'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
				.append($(createLI({id:'',clazz:'',val:''}))
					.append($(createATag({id:'',clazz:'',val:'모든 브러쉬'}))
							.attr('style','color:black; font-size:15px; font-weight: bold;')
					))
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
					)
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
					)
				)))
				))		
		 )))
		 	 .append($(createDiv({id:'div-nav3',clazz:''}))
		 			.attr('style','display: inline-block; padding: 5px;')
		 			 .append($(createButton({id:'btn_goobye',clazz:'btn btn-secondary',val:'굿 바 이 즈'}))
		 			 .attr('style','font-size:20px; width: 120px;background: black; border: black; color: white;')
		 			 .attr('data-toggle','tooltip')
		 			 .attr('title','지원하지 않는 기능입니다')
		 			 .attr('data-placement','top'))	
		 	 	 
			 .append($(createButton({id:'btn_select',clazz:'btn btn-default dropdown-toggle',val:'맥 셀 렉 트'}))
					 .attr('data-toggle','tooltip')
		 			 .attr('title','지원하지 않는 기능입니다')
		 			 .attr('data-placement','top')
					 .attr('style',' margin-left: 20px;font-size:20px; width: 120px;background: black; border: black; color: white;'))
		 	 	 
			 .append($(createButton({id:'btn_market',clazz:'btn btn-default dropdown-toggle',val:'매 장 안 내'}))
					 .on('click',()=>{
						 app.map.onCreate();
					 })
					 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;'))
			 	 
			 .append($(createButton({id:'btn_board',clazz:'btn btn-default dropdown-toggle',val:'게 시 판'}))
					 .attr('data-toggle','tooltip')
		 			 .attr('title','지원하지 않는 기능입니다')
		 			 .attr('data-placement','top')
					 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;'))
			 	 
 			 .append($(createButton({id:'btn-join-default',clazz:'btn btn-default dropdown-toggle',val:'회원가입'}))
 					 .on('click',()=>{
 						 app.join.onCreate();
 					 })
 					 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;'))
			 	 
			 .append($(createButton({id:'btn-login-default',clazz:'btn btn-default dropdown-toggle',val:'로 그 인'}))
			 			.click(()=>{				 			
				 			app.login.onCreate();	
				 			 })	 
			 .attr('style','font-size:20px; width: 120px;background: black; border: black; color: white;'))))
			 ;
		 });
	 }
	 return{onCreate:onCreate}
})();
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
				 $('#btn-main-go').remove();
				 $('#div-btn-main-page').remove();
				 $('#btn-login-default').remove();
				 $('#btn-admin-default').remove();
				 $('#btn-join-default').remove();
				 $('#btn_goobye').remove();
				 $('#btn_select').remove();
				 $('#btn_market').remove();
				 $('#btn_board').remove();
				 $('#btn_goodbye').remove();
				 $('#div-nav-0').append($(createButton({id:'btn-main-go',clazz:'btn btn-default dropdown-toggle',val:'M·A·C'}))
			     .attr('style','margin-left: 200px;font-size:20px; width: 120px;background: black; border: black; color: white;'));
				 $('#btn-main-go').on('click',()=>{
					 app.loginAfter.onCreate();
					 $('#btn-join-default').remove();
					 $('#btn-login-default').remove();
					 })
				 $('#content').empty();
				 $('#content').html($(createDiv({
						id : 'div-my-page',
						clazz : 'field-container field-container--grid'
					})).attr('style','height:500px;'));
				 $('#div-nav3').append($(createButton({id:'btn-write',clazz:'btn btn-default dropdown-toggle',val:'REVIEW 작성'}))
						 .attr('style','margin-left: 10px; font-size:20px;background: black; border: black; color: white;'));
				 $('#div-nav3').append($(createButton({id:'btn-write-search',clazz:'btn btn-default dropdown-toggle',val:'TOTAL REVIEW'}))
						 .attr('style','margin-left: 30px; font-size:20px;background: black; border: black; color: white;'));
				 $('#div-nav3').append($(createButton({id:'btn-mypage',clazz:'btn btn-default dropdown-toggle',val:'마이페이지'}))
						 .attr('style','margin-left: 20px; font-size:20px; width: 120px;background: black; border: black; color: white;'));
				
				 $('#div-nav3').append($(createButton({id:'btn-basket',clazz:'btn btn-default dropdown-toggle',val:'장바구니'}))
						 .attr('data-toggle','modal')
						 .attr('data-target','#myModal')
						 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;'));
				 $('#div-nav3').append($(createButton({id:'btn-logout',clazz:'btn btn-default dropdown-toggle',val:'로그아웃'}))
						 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;')
						 .on('click',()=>{
							 sessionStorage.removeItem('customer');
							 app.main.onCreate();
						 }));
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
				 $.getJSON(context+'/mypage/'+sessionStorage.getItem('customer'),e=>{
					 var mypageObj = e.mypage;
					 $content.html(createDiv({id : 'mypage-div' , clazz : ''}));
			    $('#mypage-div').append($(createDiv({id : '', clazz : 'navbar navbar-inverse'}))
			    		.attr('style', 'background-color: #1a1a1a; max-height: 250px; margin-bottom: 0px;')
			    		.append($(createDiv({id : '', clazz : ''}))
			    		.attr('style', 'width: 100%; min-height: 250px;')
			    		
		                .append($(createSection({id : '', clazz : 'navbar-header'}))
		                    .attr('style', 'float: left; width: 25%; border-right: 1px solid #ffffff; min-height: 250px; padding: 15px; color: white;')
		                    .append($(createDiv({id : '', clazz : ''}))
		                    		.attr('style','text-align: center;')
		                            .append($(createHTag({ num : '5', val :mypageObj[0].name+'님 환영합니다'}))
		                                    .attr('style','font-family: Sans-Serif; font-weight: bold;')
		                                    )
		                            ).append($(createDiv({ id : 'profile-wrapper-div', clazz : 'account-nav'}))
		                                    .attr('style', 'float: none;   text-align: center;')
		                                    .append($(createDiv({id : 'mypage-image-div', clazz : ''}))
		                                            .append($(createImg({img:'profile1.jpg'}))
		                                                    .attr('style', 'max-width: 125px;')
		                                                    
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
		                                        .append($(createHTag({num : '5', val : 'My M·A·C &nbsp;' + createATag({id : 'a-mypage-logout', href : '', val : '로그아웃'})}))
		                                        		.on('click',()=>{
		                                        			sessionStorage.removeItem('customer');
		                                        			app.main.onCreate();
		                                        		})
		                                                .attr('style', 'font-weight: bold; margin: 0 0 15px 0; font-size: 14px;')
		                                                )
		                                        )
                                .append($(createLI({ id : '', clazz : '',val:''}))
                                        .attr('style', 'margin: 0 0 15px 0;')
                                        .append($(createHTag({num : '6', val : '이름 : '+mypageObj[0].name}))
                                                .attr('style', 'font-weight: bold; margin: 0 0 15px 0; font-size: 18px;')
                                                )
                                                
                                )
                                .append($(createLI({ id : '', clazz : '',val:''}))
                                        .attr('style', 'margin: 0 0 15px 0;')
                                        .append($(createHTag({num : '6', val : 'ID : '+mypageObj[0].customId}))
                                                .attr('style', 'font-weight: bold; margin: 0 0 15px 0; font-size: 18px;')
                                                ) 
                                        )
                                .append($(createLI({ id : '', clazz : '',val:''}))
                                        .attr('style', 'margin: 0 0 15px 0;')
                                        .append($(createHTag({num : '6', val : 'EMAIL : '+mypageObj[0].email}))
                                                .attr('style', 'font-weight: bold; margin: 0 0 15px 0; font-size: 18px;')
                                                ) 
                                        )
                                .append($(createLI({ id : '', clazz : '',val:''}))
                                        .attr('style', 'margin: 0 0 15px 0;')
                                        .append($(createHTag({num : '6', val : 'PHONE_NUM : '+mypageObj[0].phoneNum}))
                                                .attr('style', 'font-weight: bold; margin: 0 0 15px 0; font-size: 18px;')
                                                ) 
                                        ) 
		                                )
		                        .append($(createUL({id : '', clazz : '' }))
		                                .attr('style', 'list-style: none; width: 48%; padding-left: 0; padding-right: 2%; color: #ffffff; float: left;')
                                        .append($(createLI({ id : '', clazz : '',val:''}))
		                                        .attr('style', 'margin: 0 0 15px 0;')
		                                        .append($(createATag({id : '', href : '', val : '판매 통계량'}))
		                                        		.on('click',()=>{	                                        			                                        	   
		                                        			      app.chart.onCreate();
		                                        			      $('#content').empty();
	
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
		                                                .append($(createHTag({ num : '4', val : createATag({ id : '', href : '#', val : createSpan({ id : 'customer-grade-span', clazz : '', val :'회원등급 : '+ mypageObj[0].gradeName})})}))
		                                                        )
		                                                )
		                                        )
		                                )
		                        )
			                    )
			            )
		                $('#customer-grade-span').attr('style', 'color: #e95383; font-weight : bold;')
		                $('#a-mypage-logout').attr('style', 'color: #ffffff;');
			    		
			    		$.getJSON(context+'/mypage/item/'+sessionStorage.getItem('customer'),e=>{
			    			var mypageObj = e.mypageItem;
			    			console.log(e.mypageItem);
			    
			    		    $('#mypage-div').append($(createDiv({id : '', clazz : ''}))
					                .append($(createDiv({id : '', clazz : ''}))
					                        .append($(createDiv({id : '', clazz : ''}))
					                                .attr('style', 'width:  100%;')
					                                .append($(createDiv({id : '', clazz : ''}))
					                                        .append($(createHTag({num : '3', val : '최근 장바구니 내역 '}))
					                                                .attr('style', 'font-weight: bold; padding : 20px;')
					                                                )
					                                        ))));
			    		    $('#mypage-div').append($(createDiv({id:'mypage_item_list',clazz:''}))
		    		    		.attr('style','text-align: center;'));
			    			for(i=0; i<mypageObj.length; i++){
			    				if(i>mypageObj.length){
			    					return false;
			    				}
	    						$(createDiv({id:'',clazz:''}))
    									.attr('style','    display: inline-block;')
    									.append($(createImg({img:e.mypageItem[i].picName+'.jpg'}))
									.attr('style','width: 250px;'))
    							.append($(createDiv({id:'',clazz:''}))
									.append($(createHTag({num:'5',val:e.mypageItem[i].itemName}))))
								.append($(createDiv({id:'',clazz:''}))
									.append($(createButton({id:'',clazz:'',val:'삭제'}))
									    .attr('basketSeq',e.mypageItem[i].basketSeq)
										.on('click',function(){
											var jason = {
													basketSeq : $(this).attr("basketSeq")
											}
											$.ajax({
												url:context+'/mypage/delete/'+sessionStorage.getItem('customer'),
												 method:'POST',
												 data: JSON.stringify(jason),
												 dataType:'json',
												 contentType: 'application/json',
											})
											$('#btn-basket').remove();
											$('#btn-mypage').remove();
											$('#btn-logout').remove(); 
											$('#btn_goodbye').remove(); 
											$('#btn-write').remove(); 
											$('#btn-write-search').remove(); 
											app.mypage.onCreate();
										})
										.attr('style','background:black; color:white')))
			    						.appendTo('#mypage_item_list');
			    			
			    			}
			    		
			    		
			    		});
				        $('#mypage-div').append($(createDiv({id : '', clazz : 'text-center'}))
				        		.attr('style','    margin-top: 50px;')
                                .append($(createButton({id : 'shop_go', clazz : 'primary', val : '쇼핑하러 가기'}))
                                		.attr('style','text-align : center; width : 300px; height : 50px; color:white; background:black;')
                                    	    .on('click',()=>{
	                                        	app.loginAfter.onCreate();
	                                        })))
				 });
				 console.log("test!");
				 $.getJSON(context+'/basket/search/'+sessionStorage.getItem('customer'),e=>{
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
				 $('#modal-content').append($(createDiv({id:'aaaa',clazz:''})));
				 $.getJSON(context+'/basket/totalPrice/'+sessionStorage.getItem('customer'),e=>{
					 var basketObjTotal = e.basketTotalPrice;
					 console.log(basketObjTotal);
					$('#aaaa').html($(createDiv({id:'modal-footer',clazz:'modal-footer'}))
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
													 url:context+'/basket/update/'+sessionStorage.getItem('customer'),
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
							.append($(createHTag({num:'4',val:'배송지 주소를 입력해 주세요.'})))
							/*.append($(createHTag({num:'4',val:'기존 배송지를 원하는 경우 버튼을 클릭해주세요'})))
							.append($(createATag({id:'',clazz:'',val:'클릭'}))
								.attr('style','color')
								.on('click',function(){
									
								}))*/)
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','margin-top: 50px; margin-left: 130px;')
							.append('<p>* 표시는 필수 입력 항목입니다</p>'))
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','margin-top: 10px; margin-left: 130px;')
							.append($(createInput({id:'input_addr_name',val:'*이름',type:'text'}))
								.attr('value','장보고')
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

								             
								                document.getElementById('input_addr_1').value = data.zonecode; // 5자리
																												// 새우편번호
																												// 사용
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
								.attr('value','서울특별시')
								.attr('style','width: 350px; height: 50px;'))
							.append($(createInput({id:'input_addr_3',val:'주소입력2',type:'text'}))
								.attr('value','마포구 신촌로 63')
								.attr('style','width: 350px; height: 50px; margin-left:10px;'))
							.append($(createDiv({id:'',clazz:''}))
								.attr('style','margin-top: 15px;')
								.append($(createInput({id:'input_addr_4',val:'상세주소',type:'text'}))
									.attr('value','TURTLE')
									.attr('style','width: 350px; height: 50px;'))))
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','margin-left: 130px; height: 50px; margin-top: 10px;')
							.append($(createDiv({id:'',clazz:''}))
								.append($(createSpan({id:'',clazz:'',val:''}))
									.append($(createDiv({id:'',clazz:''}))
										.append($(createSelect({}))
											.attr('id','phonNum')
											.append($(createOption({val:'선택'}))
												.attr('selected','selected'))
											.append($(createOption({val:'010'}))
												.attr('selected','selected'))
											.append($(createOption({val:'011'}))
												.attr('selected','selected'))
											.append($(createOption({val:'016'}))
												.attr('selected','selected'))
											.append($(createOption({val:'017'}))
												.attr('selected','selected'))
											.append($(createOption({val:'019'}))
												.attr('selected','selected')))
									.append($(createDiv({id:'',clazz:''}))
									.attr('style','margin-top: 15px; display: inline-block;')
										.append($(createInput({id:'input_addr_phone1',val:'핸드폰번호',type:'text'}))
											.attr('value','1234')
											.attr('style','width: 350px; height: 50px; margin-left:10px;'))))))
							.append($(createDiv({id:'',clazz:''}))
								.attr('style','margin-top: 10px;'))
								.append($(createInput({id:'input_addr_phone2',val:'핸드폰번호',type:'text'}))
									.attr('value','3456')
									.attr('style','width: 350px; height: 50px;')))
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','margin-top: 100px; margin-left: 130px;')
							.append($(createDiv({id:'',clazz:''}))
								.append($(createHTag({num:'3',val:'배송시 요청 사항'}))))
							.append($(createDiv({id:'',clazz:''}))
								.append($(createInput({id:'input_addr_text',val:'배송시 요청사항',type:'text'}))
									.attr('value','빨리보내주세요')
									.attr('style','width: 700px; height: 70px;')))
							.append($(createDiv({id:'',clazz:''}))
								.append('<p>배송정보</p>')))
						.append($(createDiv({id:'',clazz:''}))
							.append($(createDiv({id:'',clazz:''}))
								.attr('style','margin-left: 600px;')
								.append($(createInput({id:'input_cash',text:'',type:'summit'}))
									.attr('value','결제하기')
									.attr('style','background: black; color: white; text-align: center; width: 200px;  height:60px;'))))));
				
				 $.getJSON(context+'/basket/totalPrice/'+sessionStorage.getItem('customer'),e=>{
					 function addComma(num) {
					        var len, point, str;
					        num = num + "";
					        point = num.length % 3;
					        len = num.length;
					        str = num.substring(0, point);
					        while(point < len) {
					            if(str != "") {
					                str += ",";
					            }
					            str += num.substring(point, point +3);
					            point += 3;
					        }
					        return str;
					    }
					 var basketObjTotal = e.basketTotalPrice;
					 console.log(basketObjTotal);			
						$('#div_add').append($(createDiv({id:'',clazz:''}))
							.attr('style','float: right; margin-right: 100px; ')
							.append($(createDiv({id:'',clazz:''}))
								.append($(createHTag({num:'3',val:'고객 관리 지원팀'})))
								.append('<p>맥 웹사이트 이용 중 문의 사항이 있으시면 고객관리 지원팀</br>(02-3440-2702)으로 연락 주시기 바랍니다</p>'))
							.append($(createDiv({id:'',clazz:''}))
								.attr('style','background: black; color:white; padding: 5px; margin-top: 15px;')
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
										.append($(createHTag({num:'4',val:'₩'+addComma(basketObjTotal[0].price)})))))
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
										.append($(createHTag({num:'4',val:'₩'+addComma(basketObjTotal[0].discount)})))))
								.append($(createDiv({id:'',clazz:''}))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block;')
										.append($(createHTag({num:'4',val:'총 합계'}))))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block; margin-left: 60px;')
										.append($(createHTag({num:'4',val:'₩'+addComma(basketObjTotal[0].total)}))))))
						.append($(createDiv({id:'',clazz:''}))
								.attr('style','margin-top: 10px; background: black; color:white; padding: 5px;')
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
									.attr('style','color:white;')))));
						 $('#input_cash').attr('totalprice',basketObjTotal[0].total)
						 $('#input_cash').on('click',function(){
							 var jason={
									 	orderTotal:$(this).attr("totalprice"),
									    customId: sessionStorage.getItem('customer'),
										customName:$('#input_addr_name').val(),
										customAddr1:$('#input_addr_1').val(),
										customAddr2:$('#input_addr_2').val(),
										customAddr3:$('#input_addr_3').val(),
										customAddr4:$('#input_addr_4').val(),
										customPhone:$('#phonNum').val(),
										customPhone1:$('#input_addr_phone1').val(),
										customPhone2:$('#input_addr_phone2').val(),
										customText:$('#input_addr_text').val(),
										
									}
									$.ajax({
										url:context+'/order/addr/',
										method:'POST',
										 data: JSON.stringify(jason),
										 dataType:'json',
										 contentType: 'application/json'
									});
								$('#btn-logout').remove();
								$('#btn-basket').remove();
								$('#btn-mypage').remove();
									app.mypage.onCreate();
								
						 });
				 });
		
			 });
		 };
		 return{onCreate:onCreate}
	 })();
app.mainItem=(()=>{
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
							.attr('style','margin-top:30px;display: inline-block;margin-left: 75px;')
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
												.attr('data-toggle','tooltip')
									 			 .attr('title','수량및 확인은 마이페이지 장바구니 이벤트 클릭시 확인 가능합니다.')
									 			 .attr('data-placement','top')
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
														url:context+'/basket/order/'+sessionStorage.getItem('customer'),
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
		 			
		 			 });
					$(createATag({
						id:'a-tabs-item2',
						clazz:'order-grid-container2',
						val:'<span style="margin-top:15px; margin-left:5px; padding:10px; height:35px; font-size:15px; background: black; color:white;" id="" class="glyphicon" aria-hidden="true">PALET TES</span>'
					})).attr('style','padding:5px;')
					.appendTo('#div-main-item-manu1')
					.click(()=>{
		 			
		 			 });
					$(createATag({
						id:'a-tabs-item3',
						clazz:'order-grid-container2',
						val:'<span style="margin-top:15px; padding:10px; height:35px; font-size:15px; background: black; color:white;" id="" class="glyphicon" aria-hidden="true">HIT ITEM</span>'
					})).attr('style','padding:5px;')
					.appendTo('#div-main-item-manu1')
					.click(()=>{
			 			
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
					.attr('style','font-weight: bold; text-align: center; margin-top:30px;')
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
					})).attr('style','margin-left:140px; margin-top:30px;')
					.appendTo('#j-div-main-itme-manu3')
					 .click(()=>{
			 				
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
					})).attr('style','margin-left:140px; margin-top:30px;')
					.appendTo('#j-div-main-itme-manu5')
					 .click(()=>{
			 				
					 });
					$('#div-main-items-middle').append($(createDiv({
						id:'j-div-main-itme-manu6',
						clazz:''
					})));
					$(createHTag({
						num:'2',
						val:'머스트 해브 아이템'
					}))
					.attr('style','font-weight: bold; text-align: center;margin-bottom:30px;')
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
			 				
					 });
					$(createATag({
						id:'j-a-mainitem7',
						val:'<img style="height:48%;width: 22%; " src="'+$.image()+'/mainitem7.jpg">'
					}))
					.appendTo('#j-div-main-itme-manu8')
					 .click(()=>{
			 				
					 });
					 $(createATag({
							id:'j-a-mainitem8',
							val:'<img style="height:48%;width: 22%;" src="'+$.image()+'/mainitem8.jpg">'
						}))
						.appendTo('#j-div-main-itme-manu8')
						 .click(()=>{
				 				
						 });
					$(createATag({
						id:'j-a-mainitem9',
						val:'<img style="height:48%;width: 22%;" src="'+$.image()+'/mainitem9.jpg">'
					}))
					.appendTo('#j-div-main-itme-manu8')
					 .click(()=>{
			 				
					 });
					$('#footer').html($(createDiv({
						id:'j-div-footer1',
						clazz:''
					})).attr('style','background: #292929; height:35%; margin-top:50px;'));
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
		
		 return{onCreate:onCreate};
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
				$('#wrapper').html(app.nav.onCreate());
				$('#content').html(app.mainItem.onCreate());
				var customId = sessionStorage.getItem("customer");
				
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
						.append($(createInput({id:'input_join_pass',val:'*비밀번호를 입력하세요',type:'password'}))
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
								.attr('style','width: 140px; height:50px;')
								.attr('id','multiple')
								.append($(createOptionJoin({val:'010'})))
								.append($(createOptionJoin({val:'011'}))
										.attr('selected','selected'))
								.append($(createOptionJoin({val:'016'}))
										.attr('selected','selected'))
								.append($(createOptionJoin({val:'019'}))
										.attr('selected','selected'))
								.append($(createOptionJoin({val:'선택'}))
										.attr('selected','selected'))))
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
										inputJoinPhoneNum : $( "#multiple" ).val(),
										
								}
								$.ajax({
									url:context+'/customer/join/',
									method:'POST',
									data:JSON.stringify(jason),
									dataType:'json',
									contentType:'application/json'
									
								});
								app.main.onCreate();
								alert('다시 로그인 해주시기 바랍니다');
								
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
			 $('#btn-main-go').on('click',e=>{
				 
				 	app.main.onCreate();
			 })
			 $(createButton({id:'btn-admin-default',clazz:'btn btn-default dropdown-toggle',val:'관리자'}))
			 		 .on('click',()=>{
			 			location.href=context+'/admin/login'; 
			 		 })
					 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;').appendTo('#div-nav3');
			 $('#footer').attr('style','margin-top: 0px;')
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
			 })).attr('value','jyk')
			 .attr('style','height:60px; width:300px; margin-left:200px; border: 1px solid red;    font-size: 12px;')
			 .appendTo('#div-input-bar');
			 $(createInput({
					id : 'input-pass',
					 val : '*비밀번호(영문 대소문자, 숫자, 특수문자 혼합 8자 이상 조합)',
					 type :'password'
				})).attr('value','6')
				.attr('style','height:60px; width:300px; margin-left: 20px; border: 1px solid red;    font-size: 12px;')
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
				if(x.success==1){
					sessionStorage.setItem('customer', x.customId);
					app.mypage.onCreate();
				}else{
					alert('존재하지 않는 아이디입니다');
				}
			},
			error: (x,h,m)=>{
				console.log(x);
				console.log(h);
				console.log(m);
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