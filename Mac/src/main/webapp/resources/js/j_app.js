
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
var createNavImg=x=>{
	return '<img id="'+x.id+'" src="'+$.image()+'/'+x.img+'" alt="Matte Lipstick" title="Matte Lipstick">';
}
var createOl=x=>{
	return '<ol id="'+x.id+'" class="'+x.clazz+'"></ol>'
}
var createLI=(x)=>{
    return '<ll id="'+x.id+'" class="'+x.clazz+'">'+x.val+'</ll>';
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
app.cash=(()=>{
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
		
			 });
		 };
		 return{onCreate:onCreate}
	 })();
app.mainItems=(()=>{
	var $wrapper,context,view,image;
	var onCreate=()=>{
		 $wrapper = $('#wrapper');
		 $content = $('#content');
		 context = $.context();
		 image = $.image();
	     view = $.javascript()+'/j_app.js';
	     setContentView();
	 };
	 var setCotentView=()=>{
		 mainNavItems();
	 };
	 var mainNavItems=()=>{
		 $.getScript(view,()=>{
			 $('#content').empty();
			 $('#content').append($(createDiv({id:'',clazz:''})))
		 });
	 }
	 return{mainNavItems:mainNavItems}
});


app.main=(()=>{
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
				 $(createDiv({
	    			 id : 'container',
	    			 clazz : ''
	    		 }))
	    		 .attr('style','background: black; width:100%; height:60px; padding: 15px;')
	    		 .append($(createDiv({id:'',clazz:'dropdown'}))
	    				 .attr('style','display: inline-block;')	    			
		 .append($(createButton({id:'',clazz:'btn btn-default dropdown-toggle',val:'M A C'}))
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
						.append($(createATag({id:'',clazz:'',val:'아이섀도우'}))
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
				 	 .append($(createButton({id:'',clazz:'btn btn-default dropdown-toggle',val:'로 그 인'}))
				 			.click(()=>{
					 			alert('로그인');
					 			app.login.onCreate();
					 			$('#content').empty();
					 			 })	 
				 .attr('style','font-size:20px; width: 120px;background: black; border: black; color: white;'))	
	    		 .appendTo($wrapper);

				
	 			$(createATag({
	 				id:'a-basket-update',
	 				val:'수정'
	 			})).appendTo('#div-modal');
				$(createDiv({
					id:'div-item1',
					clazz:''
				})).appendTo('#div-basket');
				$(createImg({
					img:'item0.jpg'
				})).attr('style','margin-left:50px;')
				.appendTo('#div-item1');
				$(createATag({
					id:'a-item-name2',
					val:'매트립스틱'
				})).attr('style','margin-left:100px;')
				.appendTo('#div-item1');
				$(createATag({
					id:'a-item-name2',
					val:'MATTELIPSTICK'
				})).attr('style','margin-left:20px;')
				.appendTo('#div-item1');
				$(createDiv({
					id:'div-item2',
					clazz:''
				})).appendTo('#div-item1');
				$(createHTag({
					num:'',
					val:'수량:1'
				})).attr('style','margin-left:60px; font-size: 15px;')
				.appendTo('#div-item2');
				$(createHTag({
					num:'',
					val:'가격:30000'
				})).attr('style','margin-left:30px; font-size: 15px;')
				.appendTo('#div-item2');
				$('#div-item1').append($(createDiv({
					id:'div-checkout',
					clazz:''
				})));
				$(createSpan({
					id:'',
					clazz:'',
					val:'총금액:'
				})).attr('style','margin-left:20px; font-size: 25px;')
				.appendTo('#div-checkout');
				$(createSpan({
					id:'',
					clazz:'',
					val:'81600'		
				})).attr('style','font-size: 25px;')
				.appendTo('#div-checkout');
				$(createDiv({
					id:'div-container',
					clazz:'container-fluid'
				})).attr('style','padding:0;')
				.appendTo($content);
				$(createDiv({
					id:'myCarousel',
					clazz:'carousel slide'
				})).attr('style','')
				.attr('data-ride','carousel')
				.appendTo('#div-container');
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
					img:'item3.jpg'
				})).attr('style','width:100%; height:100%;')
				.appendTo('#div-item-active');
				$(createDiv({
					id:'div-item-active1',
					clazz:'item'
				})).appendTo('#div-inner');
				$(createImg({
					img:'item4.jpg'
				})).attr('style','width:100%; height:100%;')
				.appendTo('#div-item-active1');
				$(createDiv({
					id:'div-item-active2',
					clazz:'item'
				})).appendTo('#div-inner');
				$(createImg({
					img:'item5.jpg'
				})).attr('style','width:100%; height:100%;')
				.appendTo('#div-item-active2');
				$('#div-inner')
				.append($(createMainImg()));
				$('#div-container')
				.append($(createDiv({
					id:'div-main-item-manu1',
					clazz:'tabbed-block js-tabbed-block--v1 tabbed-with-carousel'
				})));
				
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
				$('#div-main-item-manu1')
				.append($(createGridDiv2())
						.attr('style','margin: 0 auto; width: 80%;'));
				$(createGridDivRow1({
					val:'<h3>매트 립스틱</h>',
					eval:'MATTE LIPSTICK',
					weight:'색상:칠리',
					color:'[매트]'
				})).appendTo('#div-order-grid2');
				
				$(createGridDivRow1({
					val:'<h3>레트로 매트 립스틱</h>',
					eval:'RETRO MATTE LIPSTICK',
					weight:'색상:루비 우',
					color:'[레트로 매트]'
				})).appendTo('#div-order-grid2');
				
				$(createGridDivRow1({
					val:'<h3>아이섀도우</h>',
					eval:'EYE SHADOW',
					weight:'색상:소바',
					color:'[새틴]'
				})).appendTo('#div-order-grid2');
				
				$(createGridDivRow1({
					val:'<h3>미네랄라이즈 블러쉬</h>',
					eval:'MINERALIZE BLUSH',
					weight:'색상: 헤이, 코랄, 헤이…',
					color:'[매트]'
				})).appendTo('#div-order-grid2');
				$('#div-main-item-manu1')
				.append($(createDiv({
					id:'div-main-item-image1',
					clazz:''
				})).attr('style','width:80%; margin:0 auto;'));
				$(createImg({
					img:'mainitem2.jpg'
				})).attr('style','width: 280px;')
				.appendTo('#div-main-item-image1');
				$(createImg({
					img:'mainitem2.jpg'
				})).attr('style','width: 270px; margin-left:35px;')
				.appendTo('#div-main-item-image1');
				$(createImg({
					img:'mainitem3.jpg'
				})).attr('style','width: 300px; margin-left:35px;')
				.appendTo('#div-main-item-image1');
				$(createImg({
					img:'mainitem3.jpg'
				})).attr('style','width: 300px; margin-left:18px;')
				.appendTo('#div-main-item-image1');
				$('#div-main-item-manu1')
				.append($(createGridDiv3())
						.attr('style','margin: 0 auto; width: 80%;'));
				$(createGridDivContent({
					val:'￦30,000'
				})).attr('style','font-size:18px; margin-top: 5px;')
				.appendTo('#div-order-grid3');
				$(createGridDivContent({
					val:'<button style=" font-weight: bold; height: 40px; border: solid; color:white; background: black;" type:button>장바구니담기</button>'
				})).attr('style','width: 62%;')
				.appendTo('#div-order-grid3');
				$(createGridDivContent({
					val:'￦30,000'
				})).attr('style','font-size:18px;  margin-top: 5px;')
				.appendTo('#div-order-grid3');
				$(createGridDivContent({
					val:'<button style=" font-weight: bold; height: 40px; border: solid;  color:white; background: black;" type:button>장바구니담기</button>'
				})).attr('style','width: 62%;').
				appendTo('#div-order-grid3');
				$(createGridDivContent({
					val:'￦27,000'
				})).attr('style','font-size:18px;  margin-top: 5px;')
				.appendTo('#div-order-grid3');
				$(createGridDivContent({
					val:'<button style=" font-weight: bold; height: 40px; border: solid; color:white; background: black;" type:button>장바구니담기</button>'
				})).attr('style','width: 62%;')
				.appendTo('#div-order-grid3');
				$(createGridDivContent({
					val:'￦35,000'
				})).attr('style','font-size:18px;  margin-top: 5px;')
				.appendTo('#div-order-grid3');
				$(createGridDivContent({
					val:'<button style=" font-weight: bold; height: 40px; border: solid;background: black; color:white;" type:button>장바구니담기</button>'
				})).attr('style','width: 62%;')
				.appendTo('#div-order-grid3');
				$('#div-main-item-manu1')
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
				$('#div-main-item-manu1').append($(createDiv({
					id:'j-div-main-itme-manu3',
					clazz:''
				})));
				$(createImg({
					img:'mainitem4.jpg'
				})).attr('style','margin-left:140px;')
				.appendTo('#j-div-main-itme-manu3')
				 .click(()=>{
		 				alert('화면 작동함');
				 });
				$('#div-main-item-manu1').append($(createDiv({
					id:'j-div-main-itme-manu4',
					clazz:''
				})));
				$(createHTag({
					num:'2',
					val:'공식몰 혜택'
				}))
				.attr('style','font-weight: bold; text-align: center;')
				.appendTo('#j-div-main-itme-manu4');
				$('#div-main-item-manu1').append($(createDiv({
					id:'j-div-main-itme-manu5',
					clazz:''
				})));
				$(createImg({
					img:'mainitem5.jpg'
				})).attr('style','margin-left:140px;')
				.appendTo('#j-div-main-itme-manu5')
				 .click(()=>{
		 				alert('화면 작동함');
				 });
				$('#div-main-item-manu1').append($(createDiv({
					id:'j-div-main-itme-manu6',
					clazz:''
				})));
				$(createHTag({
					num:'2',
					val:'머스트 해브 아이템'
				}))
				.attr('style','font-weight: bold; text-align: center;')
				.appendTo('#j-div-main-itme-manu6');
				$('#div-main-item-manu1').append($(createDiv({
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
				$(createDiv({
					id:'j-div-footer1',
					clazz:''
				})).attr('style','background: #292929; height:35%; margin-top:20px;').appendTo('#footer');
				$(createDiv({
					id:'j-div-footer2',
					clazz:''
				})).attr('style','background:black; height:15%;')
				.appendTo('#footer');
				$(createImg({
					img:'mainitem10.jpg'
				})).appendTo('#j-div-footer2');
				
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
			 $(createButton({id:'',clazz:'btn btn-default dropdown-toggle',val:'관리자'}))
			 .attr('style','font-size:20px; width: 150px;background: black; border: black; color: white;')
			 .appendTo('#container');
			 
		$('#container').append('<!-- Trigger the modal with a button -->'
  				  +'<a style="height:30px; background:black; color:white; font-size:20px;"  data-toggle="modal" data-target="#myModal">장바구니</a>'
  				+''
  				  +'<!-- Modal -->'
  				  +'<div class="modal fade" id="myModal" role="dialog">'
  				    +'<div class="modal-dialog">'
  				+'    '
  				      +'<!-- Modal content-->'
  				      +'<div class="modal-content">'
  				        +'<div class="modal-header" id="div-modal">'
  				          +'<button type="button" class="close" data-dismiss="modal">&times;</button>'
  				          +'<h4 class="modal-title">장바구니</h4>'
  				        +'</div>'
  				        +'<div class="modal-body" id="div-basket">'	         
  				        +'</div>'
  				        +'<div id="div-modal-footer" class="modal-footer">'  				         
  				        +'</div>'
  				      +'</div>'
  				+'      '
  				    +'</div>'
  				  +'</div>'
  				+'  '
  				);
			$(createATag({
				id:'a-basket-update',
				val:'수정'
			})).appendTo('#div-modal');
			$(createDiv({
				id:'div-item1',
				clazz:''
			})).appendTo('#div-basket');
			$(createImg({
				img:'item0.jpg'
			})).attr('style','margin-left:50px;')
			.appendTo('#div-item1');
			$(createATag({
				id:'a-item-name2',
				val:'매트립스틱'
			})).attr('style','margin-left:100px;')
			.appendTo('#div-item1');
			$(createATag({
				id:'a-item-name2',
				val:'MATTELIPSTICK'
			})).attr('style','margin-left:20px;')
			.appendTo('#div-item1');
			$(createDiv({
				id:'div-item2',
				clazz:''
			})).appendTo('#div-item1');
			$(createHTag({
				num:'',
				val:'수량:1'
			})).attr('style','margin-left:60px; font-size: 15px;')
			.appendTo('#div-item2');
			$(createHTag({
				num:'',
				val:'가격:30000'
			})).attr('style','margin-left:30px; font-size: 15px;')
			.appendTo('#div-item2');
			$('#div-item1')
			.append($(createDiv({
				id:'div-checkout',
				clazz:''
			})));
			$(createSpan({
				id:'',
				clazz:'',
				val:'총금액:'
			})).attr('style','margin-left:20px; font-size: 25px;')
			.appendTo('#div-checkout');
			$(createSpan({
				id:'',
				clazz:'',
				val:'81600'		
			})).attr('style','font-size: 25px;')
			.appendTo('#div-checkout');
			$(createButton({
				id:'btn-close',
				clazz:'btn btn-default',
				val:'close'
			})).attr('data-dismiss','modal')
			.appendTo('#div-modal-footer');
			$(createButton({
				id:'btn-order',
				clazz:'btn btn-default',
				val:'주문하기'
			})).attr('data-dismiss','modal')
			.appendTo('#div-modal-footer')
			.on('click',e=>{
				order(e);
			});
			$(createATag({
   			 id:'a-find-store',
   			 val:'관리자'
   		 })).attr('style','color:white;font-size: 20px; padding:10px;')
   		 .appendTo('#div-second')
   		 .on('click',e=>{
				e.preventDefault();
				$.ajax({
				url: context+"admin/login",
				dataType: 'text',
				contentType: 'application/json',
				method: 'POST',
				});
				alert('작동함');
			});
         });
		 //*** 관리자 클릭시 admin폴더의 b_home으로 이동하게!
		 
	 };
	 var mainItems=x=>{
		 alert('알러트 작동');
	 }
	 var order=x=>{
		 x.preventDefault();
		alert('알러트 작동');
		$.getScript(view,()=>{
			$('#content').empty();
			$('#footer').attr('style','margin-top:1200px;');
			$('#content').append($(createDiv({id:'',clazz:''}))
				.append($(createDiv({id:'',clazz:''})
							))
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
							.attr('style','color:red; margin:0 auto;'))
						.append($(createDiv({id:'',clazz:''}))
							.append($(createDiv({id:'',clazz:''}))
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
									.append($(createHTag({num:'2',val:'총합계'}))))
								.append($(createDiv({id:'',clazz:''}))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block; float: left;')
										.append($(createImg({img:'item0.jpg'}))))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block; margin-left: 30px;')
										.append($(createDiv({id:'',clazz:''}))
											.append($(createHTag({num:'2',val:'롤러휠 리퀴드 라이너'}))))
										.append($(createDiv({id:'',clazz:''}))
											.append('<p>ROLLERWHEEL LIQUID LINER</p>'))
										.append($(createDiv({id:'',clazz:''}))
											.append('<p>1 ml / 0.03 US oz</p>'))
										.append($(createDiv({id:'',clazz:''}))
											.append('<p>롤링 블랙 샤인</p>')))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','display: inline-block;  margin-left: 100px; ')
											.append('<p>정상가:₩ 35,500</p>')
											.append('<p>할인:₩ 25,500</p>'))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','display: inline-block;')
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','margin-left: 70px;')
												.append($(createHTag({num:'2',val:'1pcs'})))))
						.append($(createDiv({id:'',clazz:''}))
							.attr('style','display: inline-block;')
							.append($(createDiv({id:'',clazz:''}))
								.attr('style','margin-left: 80px;')
								.append($(createHTag({num:'2',val:'₩ 25,500'}))))))//
								.append($(createDiv({id:'',clazz:''}))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','display: inline-block; float: left;')
											.append($(createImg({img:'item0.jpg'}))))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','display: inline-block; margin-left: 30px;')
											.append($(createDiv({id:'',clazz:''}))
												.append($(createHTag({num:'2',val:'롤러휠 리퀴드 라이너'}))))
											.append($(createDiv({id:'',clazz:''}))
												.append('<p>ROLLERWHEEL LIQUID LINER</p>'))
											.append($(createDiv({id:'',clazz:''}))
												.append('<p>1 ml / 0.03 US oz</p>'))
											.append($(createDiv({id:'',clazz:''}))
												.append('<p>롤링 블랙 샤인</p>')))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','display: inline-block;  margin-left: 100px; ')
												.append('<p>정상가:₩ 35,500</p>')
												.append('<p>할인:₩ 25,500</p>'))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','display: inline-block;')
												.append($(createDiv({id:'',clazz:''}))
													.attr('style','margin-left: 70px;')
													.append($(createHTag({num:'2',val:'1pcs'})))))
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','display: inline-block;')
												.append($(createDiv({id:'',clazz:''}))
													.attr('style','margin-left: 80px;')
													.append($(createHTag({num:'2',val:'₩ 25,500'}))))))
						.append($(createDiv({id:'',clazz:''}))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block; float: left;')
										.append($(createImg({img:'item0.jpg'}))))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block; margin-left: 30px;')
										.append($(createDiv({id:'',clazz:''}))
											.append($(createHTag({num:'2',val:'롤러휠 리퀴드 라이너'}))))
										.append($(createDiv({id:'',clazz:''}))
											.append('<p>ROLLERWHEEL LIQUID LINER</p>'))
										.append($(createDiv({id:'',clazz:''}))
											.append('<p>1 ml / 0.03 US oz</p>'))
										.append($(createDiv({id:'',clazz:''}))
											.append('<p>롤링 블랙 샤인</p>')))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','display: inline-block;  margin-left: 100px; ')
											.append('<p>정상가:₩ 35,500</p>')
											.append('<p>할인:₩ 25,500</p>'))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','display: inline-block;')
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','margin-left: 70px;')
												.append($(createHTag({num:'2',val:'1pcs'})))))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','display: inline-block;')
											.append($(createDiv({id:'',clazz:''}))
												.attr('style','margin-left: 80px;')
												.append($(createHTag({num:'2',val:'₩ 25,500'}))))))
								.append($(createDiv({id:'',clazz:''}))
									.append($(createDiv({id:'',clazz:''}))
										.append($(createHTag({num:'1',val:'내주문요약'}))))
									.append($(createDiv({id:'',clazz:''}))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','float: left; margin-left: 250px;')
											.append($(createHTag({num:'2',val:'합 계:'}))))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','margin-left: 350px; display: inline-block;')
											.append($(createHTag({num:'2',val:'₩ 126,000'})))))
									.append($(createDiv({id:'',clazz:''}))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','float: left; margin-left: 250px;')
											.append($(createHTag({num:'2',val:'배송비'}))))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','margin-left: 350px; display: inline-block;')
											.append($(createHTag({num:'2',val:'₩ 0'})))))
									.append($(createDiv({id:'',clazz:''}))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','float: left; margin-left: 250px;')
											.append($(createHTag({num:'2',val:'할인금액'}))))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','margin-left: 300px; display: inline-block;')
											.append($(createHTag({num:'2',val:'₩ 18,900'})))))
									.append($(createDiv({id:'',clazz:''}))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','float: left; margin-left: 250px;')
											.append($(createHTag({num:'2',val:'총 합 계'}))))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','margin-left: 320px; display: inline-block;')
											.append($(createHTag({num:'2',val:'₩ 107,100	'})))))
									.append($(createDiv({id:'',clazz:''}))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','text-align:  center; width: 150px;  background: black; height: 50px; margin: 0 auto; padding: 14px;')
											.append($(createATag({id:'',clazz:'',val:'지금 구매하기'}))
													.on('click',e=>{
														e.preventDefault();
														alert('작동함');
														app.cash.onCreate();
													})
												.attr('style','color: white;font-size: 15px;'))))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','background: #f0f0f0; height: 120px; padding: 15px; margin-top: 20px;')
										.append($(createDiv({id:'',clazz:''}))
											.append($(createHTag({num:'2',val:'품질 보증'}))))
										.append($(createDiv({id:'',clazz:''}))
											.append('<p>공식 온라인 몰을 통해 구매한 MAC 제품에 만족하지 않으셨다면, 사용하지 않은 제품에 한해 반품 혹은 환불을 도와드리도록 하겠습니다</p>'))))
									))
							
									
									.append($(createDiv({id:'',clazz:''}))
								.attr('style','display: inline-block;  float: right; margin-right: 100px;')
								.append($(createDiv({id:'',clazz:''}))
									.attr('style','height: 50px; background: #f0f0f0;')
									.append($(createHTag({num:'2',val:'위시 리스트'}))))
								.append($(createDiv({id:'',clazz:''}))
									.attr('style','height: 50px; background: #f0f0f0;')
									.append($(createHTag({num:'2',val:'지난 구매내역'}))))
								.append($(createDiv({id:'',clazz:''}))
									.attr('style','background: #f0f0f0;')
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','height: 50px; background: #f0f0f0;')
										.append($(createHTag({num:'2',val:'쿠폰 코드 입력'}))))
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
											.append('<h2>도움이 필요 하세요?</h2>')
											.append('p>고객 관리 지원팀(02-3440-2707)</p>')
											.append($(createATag({id:'',clazz:'',val:'이메일 문의하기'}))))
										.append($(createDiv({id:'',clazz:''}))
											.attr('style','margin-top:30px;')
											.append($(createHTag({num:'2',val:'추가정보'})))
											.append($(createDiv({id:'',clazz:''}))
												.append($(createATag({id:'',clazz:'',val:'배송정보'}))))
											.append($(createDiv({id:'',clazz:''}))
												.append($(createATag({id:'',clazz:'',val:'교환및 환불 정책'}))))
											.append($(createDiv({id:'',clazz:''}))
												.append($(createATag({id:'',clazz:'',val:'최대 구매수량 정책'}))))))))
						
						)
							
							
					
			/*$(createTab({
				id:'tab-order',
				clazz:''
			})).appendTo('#content');
			$(createDiv({
				id:'div-order-main',
				clazz:''
			})).appendTo('#tab-order');
			//
			$(createDiv({
				id:'div-order-continue-shopping',
				clazz:''
			})).appendTo('#div-order-main');
			$(createATag({
				id:'a-order-continue-shopping',
				val:'쇼핑계속하기'
			})).attr('style','margin-top:40px;')
			.appendTo('#div-order-continue-shopping');
			$('#div-order-continue-shopping')
			.append($(createDiv({
				id:'div-order-basket',
				clazz:''
			})));
			$(createHTag({
				num:'2',
				val:'장바구니'
			})).attr('style','margin-left:650px;')
			.appendTo('#div-order-basket')
			$('#div-order-basket')
			.append($(createDiv({
				id:'div-order-buy-now',
				clazz:''
			})));
			 $(createButton({
					id : 'btn-order-buy-now',
					 clazz : 'btn-order',
					 val :'지금 구매하기'
				})).attr('style','border-radius: 0; height:60px; width:300px; margin-left:550px; background: black; color: white;')
				.appendTo('#div-order-buy-now')
				.on('click',e=>{
				});	*/
 
			/* $('#div-order-buy-now')
			 .append($(createDiv({
				 id:'div-order-item-title',
				 clazz:''
			 })));
			 $(createGridDiv())
			 .attr('style','margin-left:150px;')
			 .appendTo('#div-order-item-title');
			 $(createGridDivContent({
				 val:'제품'
			 })).attr('style','width: 200px; margin-right: 300px;')
			 .appendTo('#div-order-grid');
			 $(createGridDivContent({
				 val:'가격'
			 })).attr('style','width:150px; margin-left: 20;')
			 .appendTo('#div-order-grid');
			 $(createGridDivContent({
				 val:'수량'
			 })).attr('style','width:150px; margin-left: 20;')
			 .appendTo('#div-order-grid');
			 $(createGridDivContent({
				 val:'총합계'
			 })).attr('style','width:150px;')
			 .appendTo('#div-order-grid');
			 $('#div-order-item-title')
			 .append($(createDiv({
				 id:'div-order-item-basket'
			 })));
			 $(createGridDiv1())
			 .appendTo('#div-order-item-basket');
			 $(createGridDivContent({
				 val:(createImg({img:'item0.jpg'}))
			 })).attr('style','margin-left:130px;')
			 .appendTo('#div-order-grid1');
			 $(createGridDivRow({
				 val:'대즐섀도우',
				 eval:'DAZZLESHADOW',
				 weight:'1g',
				 color:'겟피지컬'
			 })).attr('style','width:100px; font-size:15px; margin-top:40px;')
			 .appendTo('#div-order-grid1');
			 $(createGridDivRowPrice({
				 prcie:'￦32,000',
				 sprcie:'￦27,200',
				 sale:'(15%)'
			 })).attr('style','font-size: 15px;width: 50px;margin-left:230px; margin-top:50px;')
			 .appendTo('#div-order-grid1');
			 $(createGridDivContent({
				 val:'1'
			 })).attr('style','font-size: 15px;width: 100px;margin-top:50px; margin-left:60px;')
			 .appendTo('#div-order-grid1');
			 $(createGridDivContent({
				 val:'1'
			 })).attr('style','font-size: 15px;width: 100px;margin-top:50px;')
			 .appendTo('#div-order-grid1');*/

		});
		} 
	 var content=()=>{
		 $.getScript(view,()=>{
			 $(createDiv({
					id : 'mac-store',
					clazz : 'field-container field-container--grid'
				})).appendTo($content);
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
			 })).attr('style','margin-left: 160px; font-size: 15px;')
			 .appendTo('#li-login');
			 $(createDiv({
					id : 'div-input-bar',
					clazz : 'div-input-bar'
				})).appendTo('#tab-login');
			 $(createInput({
				 id : 'input-login',
				 val : '*예시:username@network.co.kr',
				 type :'text'
			 })).attr('style','height:60px; width:300px; margin-left:200px; border: 1px solid red;')
			 .appendTo('#div-input-bar');
			 $(createInput({
					id : 'input-pass',
					 val : '*비밀번호(영문 대소문자, 숫자, 특수문자 혼합 8자 이상 조합)',
					 type :'text'
				})).attr('style','height:60px; width:300px; margin-left: 20px; border: 1px solid red;')
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
					
				});
			 
		 });
		
	 }
		 return{onCreate:onCreate,content:content}
	 })();
		 
app.router = (()=>{
	  var onCreate=x=>{
	  $.getScript(x+'resources/js/router.js',()=>{ 
	      $.extend(new Router(x));
	      });        
	  };
	  return {onCreate:onCreate};
})();
