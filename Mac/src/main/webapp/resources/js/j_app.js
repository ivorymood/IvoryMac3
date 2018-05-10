var app = app || {};
app = (()=>{
	var init = x =>{
	  $.getScript(x+'/resources/js/router.js',()=>{
	        $.extend(new Router(x));
	        app.navout.onCreate($.context());
	        app.main.onCreate($.context());
	        app.footer.onCreate($.context());
	  })
	};
	return {init:init};
})();
var createImg1=x=>{
    return '<img id = "'+x.id+'" src = "'+x.img+'" alt="'+x.alt+'"></img>';
};
var createSection=x=>{
    return '<section id="'+x.id+'" class = "'+x.clazz+'"></section>';
};
var createATag=x=>{
    return '<a id="'+x.id+'" class="'+x.clazz+'" href="#">'+x.val+'</a>';
}
var createHr=x=>{
	return '<hr id="'+x.id+'" class="'+x.clazz+'">';
}
var createLIC=x=>{
	return '<li id="'+x.id+'" class="'+x.clazz+'" data-target="'+x.dtarget+'" data-slide-to="'+x.dslide+'" ></li>';
}
var createSpanCon=x=>{
	return '<span class="glyphicon '+x+'" aria-hidden="true"></span>';
}
var createNavATag=x=>{
    return '<a id="'+x.id+'" class="'+x.clazz+'" href="#">'+x.val+'</a>';
}
var createATagGrid=x=>{
    return '<a id="'+x.id+'" href="#">'+x.val+'</a>';
}
var createSpan=x=>{
    return '<span id="'+x.id+'" class="glyphicon '+x.clazz+'" aria-hidden="true">'+x.val+'</span>'
}
var createLabel=x=>{
	return '<label id="'+x.id+'" class="'+x.clazz+'">'+x.val+'</label>';
}
var createHTag=x=>{
	return '<h'+x.num+' id="'+x.id+'" class="'+x.clazz+'">'+x.val+'</h'+x.num+'>';
}
var createSelect=()=>{
	return '<select style="width: 350px; height: 50px;">  </select>';
}
var createOption=x=>{
	return '<option>'+x.val+'</option>'
}
var createDiv=x=>{
    return '<div id="'+x.id+'" class="'+x.clazz+'" role="'+x.role+'"></div>';
}
var createTab=x=>{
    return '<table id="'+x.id+'" class="'+x.clazz+'"></table>';
}
var createButton=x=>{
    return '<button type="button" id="'+x.id+'" class="btn '+x.clazz+'" >'+x.val+'</button>';
}
var createUL=(x)=>{
    return '<ul id="'+x.id+'" class="'+x.clazz+'"></ul>';
}
var createInput=x=>{
    return '<input id="'+x.id+'" name="'+x.name+'" placeholder="'+x.placeholder+'"  type="'+x.type+'">'
}
var createText=x=>{
    return '<h1 style="text-align: center;" id="'+x+'"></h1>';
}
var createForm=x=>{
    return '<form id="'+x.id+'" action="'+x.action+'" class="'+x.clazz+'" method="post"></form>';
}
var createPtag=x=>{
	return '<p>'+x.val+'</p>';
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
	return '<img src="'+x.src+'" id="'+x.id+'" class="'+x.clazz+'" alt="'+x.alt+'" title="'+x.title+'">';
}
var createBasketImg=x=>{
	return '<img style="width: 150px;" src="'+x.src+'" alt="Matte Lipstick" title="Matte Lipstick">';
}
var createNavImg=x=>{
	return '<img id="'+x.id+'" src="'+x.src+'" alt="Matte Lipstick" title="Matte Lipstick">';
}
var createOL=x=>{
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

app.map=(()=>{
	var $header,$content, context,image;
	var onCreate=x=>{
		 $header = $('#header');
		 $content = $('#content');
		 context = x;
		 image = x+'/resources/img';
	     setContentView();
    };
    var setContentView=()=>{
    	alert('map 들어옴!');
        $('#content').empty();
        $('#content')
        .attr('style', 'min-height: 700px;')
        .append($(createDiv({id:'map',clazz:''}))
        		.attr('style','margin-top:50px;')
        );
        
        $(document)
        .ready(function(){
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
        });

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        	infoWindow.setPosition(pos);
        	infoWindow.setContent(browserHasGeolocation ?
                         'Error: The Geolocation service failed.' :
                         'Error: Your browser doesn\'t support geolocation.');
        }
    };
    return{onCreate:onCreate}
})();

app.orders=(()=>{
	var $header,context,image;
	var onCreate=x=>{
		 $header = $('#header');
		 $content = $('#content');
		 context = x;
		 image = x+'/resources/img';
	     setContentView();
	};
	var setContentView=()=>{		
			$('#btn-main-go').on('click',()=>{app.navin.onCreate(context);});
			$('#btn-logout').on('click', ()=>{app.main.onCreate(context);});
				/*$('#a-basket').remove();
			 	$('#btn-login-default').remove();
			 	$('#btn-admin').remove();*/
			 	$('#content').empty();
				$('#content')
				.html($(createDiv({id:'div-orders',clazz:''}))
						.attr('style','min-height: 1000px;'));
				
				$('#div-orders')
				.append($(createDiv({id:'div-grid-order1', clazz:''}))
						)
				.append($(createDiv({id:'div-grid-order2', clazz:''}))
						.append($(createDiv({id:'div-grid-order2-1', clazz:'col-md-9'})))
						.append($(createDiv({id:'div-grid-order2-2', clazz:'col-md-3'}))))
				.append($(createDiv({id:'div-grid-order3', clazz:''})));
				
				$('#div-grid-order1')
				.append($(createDiv({id:'',clazz:''}))
						.append($(createHTag({id:'', num:'3',id:'',val:'장바구니'}))
						.attr('style','text-align:center;'))
				).append($(createDiv({id:'',clazz:''}))
						.attr('style','text-align: center;')
						.append($(createButton({id:'',clazz:'', type: 'button', val:'지금 구매하기'}))
								.attr('style','font-size: 20px; font-weight: bold;text-align: center; width:250px; height: 65px; background: black; color:white;'))
				).append($(createDiv({id:'',clazz:''}))
						.attr('style','text-align: center;')
						.append($(createHTag({id:'', num:'',val:'장바구니 제품을 확인해주세요. 지난 방문 시 장바구니에 담아 두었던 제품도 함계 확인하실수 있습니다.'}))		
								.attr('style','color:red; margin:0 auto;'))
				);
				
				
				$('#div-grid-order2-1')
				.append($(createDiv({id:'header-ready-order', clazz:''}))
						.attr('style','float: left; width: 930px; margin-left: 100px;')
						.append($(createDiv({id:'', clazz:''}))
								.append($(createDiv({id: '', clazz:'col-md-6'}))
										.attr('style', 'display: inline-block;')
										.append($(createHTag({id:'', num:'2',val:'제품'})))
								).append($(createDiv({id: '', clazz:'col-md-2'}))
										.attr('style', 'display: inline-block;')
										.append($(createHTag({id:'', num:'2',val:'가격'})))
								).append($(createDiv({id: '', clazz:'col-md-2'}))
										.attr('style', 'display: inline-block;')
										.append($(createHTag({id:'', num:'2',val:'수량'})))	
								).append($(createDiv({id: '', clazz:'col-md-2'}))
										.attr('style', 'display: inline-block;')
										.append($(createHTag({id:'', num:'2',val:'총합계'})))
								)
						)
				);
				
				$.getJSON(context+'/basket/search/'+sessionStorage.getItem('customer'), d=>{
					var basketObj = d.basket;
					for(var i=0; i<basketObj.length; i++){
						if(i> basketObj.length){
							return false;
						}
						$('#div-grid-order2-1')//플래그
						.append($(createDiv({id:'div-ready-order'+i, clazz:''}))
								.attr('style','float: left; width: 930px; height: 170px; margin-top: 10px; margin-left: 100px;')
								.append($(createDiv({id: '', clazz:'col-md-2'}))
										.attr('style', 'display: inline-block;')
										.append($(createImg({id:'', src:image+'/'+basketObj[i].picName+'.jpg'}))
												.attr('style', 'width: 80%;'))
								).append($(createDiv({id: '', clazz:'col-md-4'}))
										.attr('style', 'display: inline-block;')
										.append($(createHTag({id:'', num:'3',val:basketObj[i].commonName}))
												.attr('style', 'margin-top: 10px;'))
										.append($(createHTag({id:'', num:'5',val:basketObj[i].commonNameE})))
										.append($(createHTag({id:'#item_seq_'+i, num:'5',val:basketObj[i].itemName})))
								).append($(createDiv({id: '', clazz:'col-md-2'}))
										.attr('style', 'display: inline-block;')
										.append($(createHTag({id:'', num:'4',val:'정상가: ₩'+basketObj[i].price}))
												.attr('style', 'margin-top: 10px;'))
										.append($(createHTag({id:'', num:'4',val:'할인가: ₩'+basketObj[i].discountPrice})))
								).append($(createDiv({id: '', clazz:'col-md-2'}))
										.attr('style', 'display: inline-block;')
										.append($(createHTag({id: '#item_count_'+i, num:'4',val: basketObj[i].itemCount+'pcs'}))
												.attr('style', 'margin-top: 10px;'))
								).append($(createDiv({id: '', clazz:'col-md-2'}))
										.attr('style', 'display: inline-block;')
										.append($(createHTag({num:'4',val:'₩'+basketObj[i].eachTotal}))
												.attr('style', 'margin-top: 10px;'))
								)
						);
					}
				
				
					$('#div-grid-order2-2')
					.append($(createDiv({id:'',clazz:''}))
							.attr('style','float: right; margin-left: 100px;')
							.append($(createDiv({id:'',clazz:''}))
									.attr('style','height: 50px; background: #f0f0f0;')
									.append($(createHTag({id:'', num:'3',val:'위시 리스트'}))))
							.append($(createDiv({id:'',clazz:''}))
									.attr('style','height: 50px; background: #f0f0f0;')
									.append($(createHTag({id:'', num:'3',val:'지난 구매내역'}))))
							.append($(createDiv({id:'',clazz:''}))
									.attr('style','background: #f0f0f0;')
									.append($(createDiv({id:'',clazz:''}))
											.attr('style','height: 50px; background: #f0f0f0;')
											.append($(createHTag({id:'', num:'3',val:'쿠폰 코드 입력'}))))
									.append($(createDiv({id:'',clazz:''}))
										.attr('style','height: 50px; background: #f0f0f0;')
										.append($(createInput({id:'',placeholder:'*주문당 하나의 쿠폰코드만 사용 가능합니다',type:'text'}))
												.attr('style','width: 300px; height: 50px; background: #f0f0f0;')))
									.append($(createDiv({id:'',clazz:''}))
											.append(' <p style="color:red">*주문 코드는 1인 1회 적용되며 적용 주문건 </br>취소 후 쿠폰 코드 재적용이 불가 합니다</p>'))
									.append($(createDiv({id:'',clazz:''}))
											.append($(createInput({id:'',placeholder:'',type:'sumbit'}))
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
													.append($(createHTag({id:'', num:'3',val:'추가정보'})))
													.append($(createDiv({id:'',clazz:''}))
															.append($(createATag({id:'',clazz:'',val:'배송정보'}))))
													.append($(createDiv({id:'',clazz:''}))
															.append($(createATag({id:'',clazz:'',val:'교환및 환불 정책'}))))
													.append($(createDiv({id:'',clazz:''}))
															.append($(createATag({id:'',clazz:'',val:'최대 구매수량 정책'}))))))));
					
					$.getJSON(context+'/basket/totalPrice/'+sessionStorage.getItem('customer'), d=>{
						var price = d.basketTotalPrice;
						
						$('#div-grid-order2-1')
						.append($(createDiv({id:'div-ready-bill', clazz:''})).attr('style','float: left; margin-left: 100px;')
								.append($(createDiv({id:'', clazz:''}))
										.append($(createHTag({id:'', num:'2',val:'내주문요약'}))
										)
								).append($(createDiv({id:'div-ready-bill-content', clazz:''}))
										.append($(createDiv({id:'',clazz:''}))
												.append($(createDiv({id:'',clazz:'col-md-6'}))
														.append($(createHTag({id:'', num:'3',val:'합 계:'}))
																.attr('style','float: right;'))
												).append($(createDiv({id:'',clazz:'col-md-6'}))
														.append($(createHTag({id:'', num:'3',val: '₩'+price.total}))
																.attr('style','float: right;')))
										).append($(createDiv({id:'',clazz:''}))
												.append($(createDiv({id:'',clazz:'col-md-6'}))
														.append($(createHTag({id:'', num:'3',val:'배송비'}))
																.attr('style','float: right;  ')))
												.append($(createDiv({id:'',clazz:'col-md-6'}))
														.append($(createHTag({id:'', num:'3',val:'₩ 0'}))
																.attr('style',' float: right; ')))
										).append($(createDiv({id:'',clazz:''}))
												.append($(createDiv({id:'',clazz:'col-md-6'}))
														.append($(createHTag({id:'', num:'3',val:'할인금액'}))
																.attr('style','float: right; ')))
												.append($(createDiv({id:'',clazz:'col-md-6'}))
														.append($(createHTag({id:'', num:'3',val:'₩'+price.discountAmount}))
																.attr('style','float: right; ')))
										).append($(createDiv({id:'',clazz:''}))
												.append($(createDiv({id:'',clazz:'col-md-6'}))
														.append($(createHTag({id:'', num:'3',val:'총 합 계'}))
																.attr('style','float: right; ')))
												.append($(createDiv({id:'',clazz:'col-md-6'}))
														.append($(createHTag({id:'', num:'3',val:'₩'+price.discountedTotal}))
																.attr('style','float: right; '))))
								).append($(createDiv({id:'', clazz:''}))
										.append($(createButton({id:'btn-order', clazz:'btn-dark', val:'지금 구매하기'}))
												.attr('style','background: black; color: white;font-size: 15px; width: 200px; height: 65px;')
												.on('click',e=>{
													e.preventDefault();
													app.cash.onCreate(context);
												})
										)
								).append($(createDiv({id:'',clazz:''}))
										.attr('style','background: #f0f0f0; height: 120px; padding: 15px; margin-top: 20px;')
										.append($(createDiv({id:'',clazz:''}))
												.append($(createHTag({id:'', num:'2',val:'품질 보증'}))))
										.append($(createDiv({id:'',clazz:''}))
												.append('<p>공식 온라인 몰을 통해 구매한 MAC 제품에 만족하지 않으셨다면, 사용하지 않은 제품에 한해 반품 혹은 환불을 도와드리도록 하겠습니다</p>')
										)
								)
						);
					});//getJson
				});//getJson
		 };
		 return{onCreate:onCreate}
})();
app.navin=(()=>{
	var $header,context,image;
	var onCreate=x=>{
		 $header = $('#header');
		 $content = $('#content');
		 context = x;
		 image = x+'/resources/img';
	     setContentView();
	 };
	 var setContentView=()=>{	
			$('#div-nav-rear').empty;
			
			$('#div-nav-rear')
			.html($(createButton({id:'btn-mypage',type:'button', clazz:'default dropdown-toggle',val:'마이페이지'}))
					.attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;')
					.on('click',()=>{
						app.mypage.onCreate(context);
					}));
			$('#div-nav-rear')
			.append($(createButton({id:'btn-basket',type:'button', clazz:'default dropdown-toggle',val:'장바구니'}))
					 .attr('data-toggle','modal')
					 .attr('data-target','#myModal')
					 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;')
					 .on('click', ()=>{
						 openBasket();
					 })
			);
			
			$('#div-nav-rear')
			.append($(createButton({id:'btn-logout',type:'button', clazz:'default dropdown-toggle',val:'로그아웃'}))
					 .attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;')
					 .on('click',()=>{
						 sessionStorage.removeItem('customer');
						 app.navout.onCreate(context);
					 }));
			
	 };
	 var openBasket=()=>{	
			
			//장바구니
			 $('#header-container').append($(createDiv({id:'div-modal',clazz:''})));
			 $('#div-modal')
			 .html($(createDiv({id:'myModal',clazz:'modal fade', role:'dialog'}))
					 .append($(createDiv({id:'',clazz:'modal-dialog'}))
					 .append($(createDiv({id:'modal-content',clazz:'modal-content'}))
							 .attr('style','width: 500px;')
							 .append($(createDiv({id:'',clazz:'modal-header'}))
									 .append($(createDiv({id:'',clazz:'grid-container'}))
											 .append($(createDiv({id:'grid-item',clazz:''}))
													 .append('장바구니'))
													 .append($(createDiv({id:'',clazz:'grid-item'}))
															 .append($(createATag({id:'',clazz:'',val:'삭제'}))
																	 .on('click', ()=>{
																		 $.getJSON(context+'/basket/delete/'+sessionStorage.getItem('customer'),d=>{
																			updateBasket(); 
																		 });
																	 })
															 ))))
															 .append($(createDiv({id:'div-modal-body',clazz:'modal-body'}))))));
	 
		 $.getJSON(context+'/basket/search/'+sessionStorage.getItem('customer'),e=>{
			 var basketObj = e.basket;
			 console.log(e.basket);
			 
			 for(var i =0 ;  i < basketObj.length ; i++){
					if(i > basketObj.length){
						return false;
					}
					console.log(basketObj[i]);
					$('#div-modal-body')
					.append($(createDiv({id:'',clazz:'grid-container'}))
							.append($(createDiv({id:'grid-item',clazz:'grid-item'}))
									.append($(createBasketImg({src:image+'/'+basketObj[i].picName+'.jpg'}))))
							.append($(createDiv({id:'',clazz:'grid-item'}))
									.append($(createDiv({id:'',clazz:''}))
											.append($(createHTag({id:'', num:'4',val:basketObj[i].commonName}))))								 
									.append($(createDiv({id:'',clazz:''}))
											.append($(createHTag({id:'', num:'4',val:basketObj[i].itemName}))))
									.append($(createDiv({id:'',clazz:''}))
											.append($(createButton({id:'',clazz:'',type:'button',val:(createSpan({id: '', clazz: 'glyphicon-minus', val:''}))}))
													.attr('style','background:white;')
													.attr('readonly','readonly')
													.on('click',function(){
														var itemCount = parseInt($(this).parent().find("input").attr("item_count")) - 1 ;
														console.log($(this).parent().find("input").attr("item_count"));
														itemCount = itemCount < 0 ? 0 : itemCount; 
														$(this).parent().find("input").attr("item_count", itemCount);
														$(this).parent().find("input").attr("placeholder", itemCount);
													})
											).append($(createInput({id:'',placeholder:basketObj[i].itemCount, type:'text'}))
													.attr('style','width: 30px; text-align:center;')
													.attr('readonly','readonly')
													.addClass("basketInput")
													.attr('item_count',basketObj[i].itemCount)
													.attr('item_seq',basketObj[i].itemSeq)
											).append($(createButton({id:'',clazz:'',type:'button',val:(createSpan({id:'', clazz: 'glyphicon-plus', val:''}))}))//위험
													.attr('style','background:white;')
													.attr('readonly','readonly')
													 .on('click',function(){
														 var itemCount = parseInt($(this).parent().find("input").attr("item_count")) + 1;
														 $(this).parent().find("input").attr("item_count", itemCount);
														 $(this).parent().find("input").attr("placeholder", itemCount);
													}))
									).append($(createDiv({id:'',clazz:''}))
											.append($(createHTag({id:'', num:'5',val:'₩'+ basketObj[i].discountPrice}))))//모름 플래그
									.append($(createDiv({id:'',clazz:''}))
											.append($(createButton({id:'',clazz:'',type:'button',val:'삭제'}))			//itemCount = itemCount < 0 ? 0 : itemCount; 
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
															 success: x=>{
																 alert('basket/delete 성공');
																 updateBasket();
															 },
															 error: function(x,s,m){alert(m);}
														});
													})
													.attr('style','background:black;color:white;')
											)
									)
							)
					);
			 	};
		 });
		 
		 $.getJSON(context+'/basket/totalPrice/'+sessionStorage.getItem('customer'),e=>{
			 var basketObjTotal = e.basketTotalPrice;
			 console.log(basketObjTotal);
			 $('#modal-content')
			 .append($(createDiv({id:'modal-footer',clazz:'modal-footer'}))
					 .append($(createDiv({id:'',clazz:'grid-container'}))
							.append($(createDiv({id:'',clazz:'grid-item'}))
									 .append($(createHTag({id:'', num:'4',val:'총금액'}))))
							.append($(createDiv({id:'',clazz:'grid-item'}))
									.append($(createHTag({id:'', num:'4',val:'₩'+(basketObjTotal.discountedTotal==undefined ? 0 : basketObjTotal.discountedTotal)}))))
							.append($(createDiv({id:'',clazz:'grid-item'}))
							.append($(createButton({id:'',type:'button',clazz:'default',val:'주문하기'}))
									.attr('total',basketObjTotal.total)	 
									.on('click',()=>{
										 	var returnJsonData = [];
										 	var objData;
										 	$(".basketInput").each(function (){
										 		objData = {
										 				"itemSeq" : $(this).attr("item_seq"),
										 				"itemCount" : $(this).attr("item_count")
										 		};
										 		returnJsonData.push(objData);
										 	});
										 	console.log("returnJsonData :" ,returnJsonData);
											$.ajax({
												 url:context+'/basket/update/asOrder',
												 method:'POST',
												 data: JSON.stringify(returnJsonData),
												 dataType:'json',
												 contentType: 'application/json',
												 success: x=>{
														alert('basket/update/asOrder 성공');
														var outOfStockObj = x.outOfStock
														if(outOfStockObj.length > 0){
															alert('재고가 없는 물품이 있다!'+outOfStockObj[0]);
															updateBasket();
														}else{
															app.orders.onCreate(context);
														}
												},//플플래그
												error: function(x,s,m){alert(m);}
												 
											}).done(function (data){
												console.log(data);
											});
									})
									.attr('data-dismiss','modal')							
									.attr('style','background: black; color: white; width: 100px; height: 40px; font-weight: bold; border: solid 1px;')))
							.append($(createDiv({id:'',clazz:'grid-item'}))
									.append($(createButton({id:'',clazz:'default',type:'button',val:'취소하기'}))
									.attr('data-dismiss','modal')
									.attr('style','background: black; color: white; width: 100px; height: 40px; font-weight: bold; border: solid 1px;')))));
		 }); 
	 };
	 var updateBasket=x=>{
				$('#div-modal-body').empty();
				$('#div-modal-body').html($(createDiv({id:'first_delete',clazz:''})));
				$('#modal-footer').html($(createDiv({id:'second_delete',clazz:''})));
				
				$.getJSON(context+'/basket/search/'+sessionStorage.getItem('customer'),e=>{
					 var basketObj = e.basket;
					 console.log(e.basket);
					 for(var i =0 ;  i < basketObj.length ; i++){
							if(i > basketObj.length){
								return false;
							}
							console.log(basketObj[i]);
							$('#first_delete')
							.append($(createDiv({id:'',clazz:'grid-container'}))
									.append($(createDiv({id:'grid-item',clazz:'grid-item'}))
											.append($(createBasketImg({src:image+'/'+basketObj[i].picName+'.jpg'}))))
									.append($(createDiv({id:'',clazz:'grid-item'}))
											.append($(createDiv({id:'',clazz:''}))
													.append($(createHTag({id:'', num:'4',val:basketObj[i].commonName}))))								 
											.append($(createDiv({id:'',clazz:''}))
													.append($(createHTag({id:'', num:'4',val:basketObj[i].itemName}))))
											.append($(createDiv({id:'',clazz:''}))
													.append($(createButton({id:'',clazz:'',type:'button',val:(createSpan({id: '', clazz: 'glyphicon-minus', val:''}))}))
															.attr('style','background:white;')
															.attr('readonly','readonly')
															.on('click',function(){
																var itemCount = parseInt($(this).parent().find("input").attr("item_count")) - 1 ;
																console.log($(this).parent().find("input").attr("item_count"));
																itemCount = itemCount < 0 ? 0 : itemCount; 
																$(this).parent().find("input").attr("item_count", itemCount);
																$(this).parent().find("input").attr("placeholder", itemCount);
															})
													).append($(createInput({id:'',placeholder:basketObj[i].itemCount,type:'text'}))
															.attr('style','    width: 30px; text-align:center;')
															.attr('readonly','readonly')
															.addClass("basketInput")
															.attr('item_count',basketObj[i].itemCount)
															.attr('item_seq',basketObj[i].itemSeq)
													).append($(createButton({id:'',clazz:'',type:'button',val:(createSpan({id:'', clazz: 'glyphicon-plus', val:''}))}))
															.attr('style','background:white;')
															.attr('readonly','readonly')
															 .on('click',function(){
																 var itemCount = parseInt($(this).parent().find("input").attr("item_count")) + 1;
																 $(this).parent().find("input").attr("item_count", itemCount);
																 $(this).parent().find("input").attr("placeholder", itemCount);
															}))
											).append($(createDiv({id:'',clazz:''}))
													.append($(createHTag({id:'', num:'5',val:'₩'+basketObj[i].discountPrice}))))
											.append($(createDiv({id:'',clazz:''}))
													.append($(createButton({id:'',type:'button',clazz:'',val:'삭제'}))
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
																	 success: x=>{
																			alert('basket/delete: 성공');
																			updateBasket();
																	},
																	error: function(x,s,m){alert(m);}
																})
															})
															.attr('style','background:black;color:white;')
													)
											)
									)
							);
					 };
					 
				});
				$.getJSON(context+'/basket/totalPrice/'+sessionStorage.getItem('customer'),e=>{
					var basketObjTotal = e.basketTotalPrice;
					console.log(basketObjTotal);
					$('#second_delete')
					.append($(createDiv({id:'modal-footer',clazz:'modal-footer'}))
							 .append($(createDiv({id:'',clazz:'grid-container'}))
									.append($(createDiv({id:'',clazz:'grid-item'}))
											 .append($(createHTag({id:'', num:'4',val:'총금액'}))))
									.append($(createDiv({id:'',clazz:'grid-item'}))
											.append($(createHTag({id:'', num:'4',val:'₩'+basketObjTotal.discountedTotal}))))
									.append($(createDiv({id:'',clazz:'grid-item'}))
									.append($(createButton({id:'',type:'button',clazz:'btn btn-default',val:'주문하기'}))
											.attr('total',basketObjTotal.total)	 
											.on('click',()=>{
												 	var returnJsonData = [];
												 	var objData;
												 	$(".basketInput").each(function (){
												 		objData = {
												 				"itemSeq" : $(this).attr("item_seq"),
												 				"itemCount" : $(this).attr("item_count")
												 		};
												 		returnJsonData.push(objData);
												 	});
												 	console.log("returnJsonData :" ,returnJsonData);
													$.ajax({
														 url:context+'/basket/update/asOrder',
														 method:'POST',
														 data: JSON.stringify(returnJsonData),
														 dataType:'json',
														 contentType: 'application/json',
														 success: x=>{
															alert('basket/update/asOrder 성공');	
															app.orders.onCreate(context);
														},
														error: function(x,s,m){alert(m);}
													}).done(function (data){
														console.log(data);
													});
											})
											.attr('data-dismiss','modal')							
											.attr('style','background: black; color: white; width: 100px; height: 40px; font-weight: bold; border: solid 1px;')))
									.append($(createDiv({id:'',clazz:'grid-item'}))
											.append($(createButton({id:'',type:'button',clazz:'default',val:'취소하기'}))
											.attr('data-dismiss','modal')
											.attr('style','background: black; color: white; width: 100px; height: 40px; font-weight: bold; border: solid 1px;')))));
				 });
				 
			
		};
	 return{onCreate:onCreate}
})();

app.cash=(()=>{
	var $header,$content, context,image;
	var onCreate=x=>{
		 $header = $('#header');
		 $content = $('#content');
		 context = x;
		 image = x+'/resources/img';
	     setContentView(x);
	 };
	 var setContentView=x=>{		
				$('#btn-main-go').on('click',()=>{app.navin.onCreate(context);});
				$('#btn-logout').on('click', ()=>{app.main.onCreate(context);});
				
				$('#content').empty();
				
				$('#content')
				.html($(createDiv({id:'div_add',clazz:''}))
						.attr('style','height:1200px;')
						.append($(createDiv({id:'',clazz:''}))
								.append($(createDiv({id:'',clazz:''}))
										.attr('style','text-align: center;')
										.append($(createHTag({id:'', num:'1',val:'배송정보 입력'})))))
						.append($(createDiv({id:'div-input-addr',clazz:''}))
								.attr('style','float: left; margin-left: 50px;')
					 			.append($(createDiv({id:'',clazz:''}))
					 					.attr('style','margin-left: 545px; background: black; color: white; height: 50px; padding: 4px; text-align: center; width: 250px;')
					 					.append($(createHTag({id:'', num:'4',val:'결제 계속 하기'}))))
			 					.append($(createDiv({id:'',clazz:''}))
			 							.attr('style','margin-left: 130px; margin-top: 50px;')
			 							.append($(createHTag({id:'', num:'3',val:'배송지 주소'}))))
								.append($(createDiv({id:'div-addr-check',clazz:''}))
										.attr('style','margin-left: 130px; color: #b84947;')
										)));
				
				var tmpAddr = 0;
				$.getJSON(context+'/addr/search/'+sessionStorage.getItem('customer'), d=>{
					var baseAddr = d.baseAddr;
					if(baseAddr==0){
						$('#div-addr-check')
						.append($(createHTag({id:'', num:'4',val:'회원정보에 등록된 기본 주소가 없습니다. 배송 주소를 입력해 주세요'})))
						.append($(createDiv({id:'', clazz:'btn-group btn-group-toggle'}))
								.attr('data-toggle', 'buttons')
								.append($(createLabel({id:'', clazz:'btn btn-secondary active', val:'이 주소를 기본 배송지로'}))
										.append($(createInput({id:'addr_radio1', type:'radio',  name:'options'}))
												.attr('value',0)
												.attr('autocomplete', 'off')
												.prop('checked', true)
										)
								)
								.append($(createLabel({id:'', clazz:'btn btn-secondary active', val:'다른 배송지'}))
										.append($(createInput({id:'addr_radio2', type:'radio', name:'options'}))
												.attr('value',1)
												.attr('autocomplete', 'off')
										)
								)
						);
					}else{
						$('#div-addr-check')
						.append($(createDiv({id:'', clazz:'btn-group btn-group-toggle'}))
								.attr('data-toggle', 'buttons')
								.append($(createLabel({id:'', clazz:'btn btn-secondary active', val:'기본 배송지'}))
										.append($(createInput({id:'addr_radio1', type:'radio',  name:'options'}))
												.attr('value',0)
												.attr('autocomplete', 'off')
												.prop('checked', true)
										)
								)
								.append($(createLabel({id:'', clazz:'btn btn-secondary', val:'다른 배송지'}))
										.append($(createInput({id:'addr_radio2', type:'radio',  name:'options'}))
												.attr('value',1)
												.attr('autocomplete', 'off')
										)
								)
						);
					}
					
					
				});
				
				
				$('#div-input-addr')
				.append($(createDiv({id:'',clazz:''}))
						.attr('style','margin-top: 50px; margin-left: 130px;')
						.append('<p>* 표시는 필수 입력 항목입니다</p>'))
				.append($(createDiv({id:'',clazz:''}))
						.attr('style','margin-top: 10px; margin-left: 130px;')
						.append($(createInput({id:'input_addr_name',placeholder:'*이름',type:'text'}))
								.attr('style','width: 700px; height: 50px;')))
				.append($(createDiv({id:'',clazz:''}))
						.attr('style','margin-top: 15px; margin-left: 130px;')
						.append($(createInput({id:'input_addr_1',placeholder:'동(읍/면)을 입력하세요',type:'text'}))
								.attr('style','width: 300px; height: 50px;'))
								.append($(createDiv({id:'',clazz:''}))
										.attr('style','display: inline-block;'))
										.append($(createButton({id:'',type:'button',clazz:'',val:'주소찾기'}))
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
						.append($(createInput({id:'input_addr_2',placeholder:'주소입력1',type:'text'}))
								.attr('style','width: 350px; height: 50px;'))
								.append($(createInput({id:'input_addr_3',placeholder:'주소입력2',type:'text'}))
										.attr('style','width: 350px; height: 50px; margin-left:10px;'))
								.append($(createDiv({id:'',clazz:''}))
												.attr('style','margin-top: 15px;')
												.append($(createInput({id:'input_addr_4',placeholder:'상세주소',type:'text'}))
														.attr('style','width: 350px; height: 50px;'))))
				.append($(createDiv({id:'',clazz:''}))
						.attr('style','margin-left: 130px; height: 50px; margin-top: 10px;')
						.append($(createDiv({id:'',clazz:''}))
						.append($(createSpan({id:'',clazz:'',val:''}))
								.append($(createDiv({id:'',clazz:''}))
								.append($(createSelect({id:''}))
										.append($(createOption({val:'선택'})))
										.append($(createOption({val:'010'})))
										.append($(createOption({val:'011'})))
										.append($(createOption({val:'016'})))
										.append($(createOption({val:'017'})))
										.append($(createOption({val:'019'}))))
								.append($(createDiv({id:'',clazz:''}))
										.attr('style','margin-top: 15px; display: inline-block;')
										.append($(createInput({id:'input_addr_phone1',placeholder:'핸드폰번호',type:'text'}))
												.attr('style','width: 350px; height: 50px; margin-left:10px;'))))))
						.append($(createDiv({id:'',clazz:''}))
								.attr('style','margin-top: 10px;'))
						.append($(createInput({id:'input_addr_phone2',placeholderplaceholder:'핸드폰번호',type:'text'}))
								.attr('style','width: 350px; height: 50px;')))
				.append($(createDiv({id:'',clazz:''}))
						.attr('style','margin-top: 100px; margin-left: 130px;')
						.append($(createDiv({id:'',clazz:''}))
								.append($(createHTag({id:'', num:'3',val:'배송시 요청 사항'}))))
						.append($(createDiv({id:'',clazz:''}))
								.append($(createInput({id:'input_addr_text',placeholder:'배송시 요청사항',type:'text'}))
										.attr('style','width: 700px; height: 70px;')))
						.append($(createDiv({id:'',clazz:''}))
								.append('<p>배송정보</p>')))
				.append($(createDiv({id:'',clazz:''}))
						.append($(createDiv({id:'div-make-order',clazz:''}))
								.attr('style','margin-left: 600px;'))
				);
				
				
				$('#div-make-order')
				.append($(createButton({id:'',type:'button', val: '결제하기'}))
						.attr('style','background: black; color: white; text-align: center; width: 200px;  height:60px;')
						.on('click',function(){
							alert('작동함');
							var jason={
									baseAddr: baseAddr,
									tmpAddr:  $('#div-addr-check div label input:checked').val(),
									customId: sessionStorage.getItem('customer'),
									name:$('#input_addr_name').val(),
									zipCode:$('#input_addr_1').val(),
									addr: $('#input_addr_2').val()+'-'+$('#input_addr_3').val()+'-'+$('#input_addr_4').val(),
									phoneNum: $('#phone_option').val()+'-'+$('#input_addr_phone1').val()+'-'+$('#input_addr_phone2').val(),
									board:$('#input_addr_text').val()
							}
							$.ajax({
								url: context+'/make/order',
								method: 'POST',
								data: JSON.stringify(jason),
								dataType: 'json',
								contentType: 'application/json',
								success: x=>{
									alert('/make/order 성공');
									app.mypage.onCreate(context);
								},
								error: function(x,s,m){alert(m);}
							});
							
						})
				);
				
				
				$.getJSON(context+'/basket/totalPrice/'+sessionStorage.getItem('customer'),e=>{
					var basketObjTotal = e.basketTotalPrice;
					console.log(basketObjTotal);			
					
					$('#div_add')
					.append($(createDiv({id:'',clazz:''}))
							.attr('style','float: right; margin-right: 100px; ')
							.append($(createDiv({id:'',clazz:''}))
									.append($(createHTag({id:'', num:'3',val:'고객 관리 지원팀'})))
									.append('<p>맥 웹사이트 이용 중 문의 사항이 있으시면 고객관리 지원팀</br>(02-3440-2702)으로 연락 주시기 바랍니다</p>'))
							.append($(createDiv({id:'',clazz:''}))
									.attr('style','background: #f0f0f0; padding: 5px; margin-top: 15px;')
									.append($(createDiv({id:'',clazz:''}))
											.append($(createHTag({id:'', num:'3',val:'내 주문 요약'}))))
									.append($(createDiv({id:'',clazz:''}))
											.append('<p>장바구니에 담겨진 수량</p>'))
									.append($(createDiv({id:'',clazz:''}))
											.append($(createDiv({id:'',clazz:''}))
													.attr('style','display: inline-block;')
													.append($(createHTag({id:'', num:'4',val:'합계'}))))
											.append($(createDiv({id:'',clazz:''}))
													.attr('style','display: inline-block; margin-left: 82px;')
													.append($(createHTag({id:'', num:'4',val:'₩'+basketObjTotal.total})))))
									.append($(createDiv({id:'',clazz:''}))
											.append($(createDiv({id:'',clazz:''}))
													.attr('style','display: inline-block;')
													.append($(createHTag({id:'', num:'4',val:'선물포장'}))))
											.append($(createDiv({id:'',clazz:''}))
													.attr('style','display: inline-block; margin-left: 45px;')
													.append($(createHTag({id:'', num:'4',val:'₩ 0'})))))
									.append($(createDiv({id:'',clazz:''}))
											.append($(createDiv({id:'',clazz:''}))
													.attr('style','display: inline-block;')
													.append($(createHTag({id:'', num:'4',val:'배송비'}))))
											.append($(createDiv({id:'',clazz:''}))
													.attr('style','display: inline-block; margin-left: 65px;')
													.append($(createHTag({id:'', num:'4',val:'₩ 0'})))))
									.append($(createDiv({id:'',clazz:''}))
											.append($(createDiv({id:'',clazz:''}))
													.attr('style','display: inline-block;')
													.append($(createHTag({id:'', num:'4',val:'할인금액'}))))
											.append($(createDiv({id:'',clazz:''}))
													.attr('style','display: inline-block; margin-left: 47px;')
													.append($(createHTag({id:'', num:'4',val:'₩'+basketObjTotal.discountAmount})))))
									.append($(createDiv({id:'',clazz:''}))
									.append($(createDiv({id:'',clazz:''}))
											.attr('style','display: inline-block;')
											.append($(createHTag({id:'', num:'4',val:'총 합계'}))))
									.append($(createDiv({id:'',clazz:''}))
											.attr('style','display: inline-block; margin-left: 60px;')
											.append($(createHTag({id:'', num:'4',val:'₩'+basketObjTotal.discountedTotal}))))))
							.append($(createDiv({id:'',clazz:''}))
									.attr('style','margin-top: 10px; background: #f0f0f0; padding: 5px;')
									.append($(createDiv({id:'',clazz:''}))
											.append($(createHTag({id:'', num:'3',val:'쿠폰 코드 입력'}))))
									.append($(createDiv({id:'',clazz:''}))
											.append($(createInput({id:'',placeholder:'*주문당 하나의 쿠폰 코드만 사용 가능합니다',type:'text'}))
													.attr('style','width: 300px; height: 50px;')))
									.append($(createDiv({id:'',clazz:''}))
											.append('<p>*쿠폰 코드는 1인 1회 적용되며, 적용 주문건 </br>취소 후 쿠폰 코드 재적용 불가합니다.</p>'))
											.append($(createDiv({id:'',clazz:''}))
													.attr('style','text-align: center; padding: 10px;')
													.append($(createInput({id:'',placeholder:'',type:'submit'}))
															.attr('value','적용하기')
															.attr('style','background: black; color: white; width: 150px; height: 50px;'))))
							.append($(createDiv({id:'',clazz:''}))
									.attr('style','background: black; padding: 10px;')
									.append($(createDiv({id:'',clazz:''}))
											.attr('style','color:white;')
											.append($(createHTag({id:'', num:'3',val:'추가정보'}))))
									.append($(createDiv({id:'',clazz:''}))
											.append($(createATag({id:'',clazz:'',val:'배송정보'}))
													.attr('style','color:white;')))
									.append($(createDiv({id:'',clazz:''}))
											.append($(createATag({id:'',clazz:'',val:'반품 및 교환정핵'}))
													.attr('style','color:white;')))
									.append($(createDiv({id:'',clazz:''}))
											.append($(createATag({id:'',clazz:'',val:'최대 구매수량 정책'}))
													.attr('style','color:white;')))));
				 });
		
		 };
		 return{onCreate:onCreate}
	 })();
app.navout=(()=>{
	var $header, context, image;
	var onCreate=x=>{
		context = x;
		image = x+'/resources/img';
		$header = $('#header');
		setContentView();
	};
	var setContentView=()=>{
		$header
		.html($(createDiv({id : 'header-container', clazz : ''}))
				.attr('style','background: black; width:100%; height:60px; padding: 15px;')
	    		.append($(createDiv({id:'',clazz:'dropdown'})).attr('style','display: inline-block;')	    			
	    				.append($(createButton({id:'btn-main-go',type:'button',clazz:'default dropdown-toggle',val:'M·A·C'}))
	    						.attr('style','margin-left: 100px;font-size:20px; width: 120px;background: black; border: black; color: white;')
	    				).append($(createButton({id:'',type:'button',clazz:'default dropdown-toggle',val:'신 제 품'}))
	    						.attr('style','font-size:20px;width: 120px;background: black; border: black; color: white;')
	    						.attr('data-toggle','dropdown')
	    				).append($(createUL({id:'',clazz:'dropdown-menu'}))
								.append($(createDiv({id:'',clazz:''}))
							 			.attr('style','width: 1580px; padding:0; display: inline-block;')
							 			.append($(createLI({id:'',clazz:'dropdown-submenu',val:''}))
							 					.append($(createImg({id:'', clazz:'', src:image+'/'+'crush.jpg'})))
							 					.append($(createImg({id:'', clazz:'', src:image+'/'+'crush2.jpg'})))
							 					.append($(createImg({id:'', clazz:'', src:image+'/'+'crush3.jpg'})))
							 					.append($(createImg({id:'', clazz:'', src:image+'/'+'crush4.jpg'})))
							 					.append($(createImg({id:'', clazz:'', src:image+'/'+'crush5.jpg'})))
									 	)
							 	)
					 	)
	    		).append($(createDiv({id:'',clazz:'dropdown'}))
	    				.attr('style','display: inline-block;')
	    				.append($(createButton({id:'',type:'button',clazz:'default dropdown-toggle',val:'제 품'}))
	    						.attr('style','font-size:20px; width: 120px; background: black; border: black; color: white;')
	    						.attr('data-toggle','dropdown'))
	    				.append($(createUL({id:'',clazz:'dropdown-menu'}))
	    						.attr('style','height: 70px; width: 800px;')
	    						.append($(createDiv({id:'',clazz:''}))			
	    								.attr('style','width:800px; height: 50px; text-align: center; padding: 5px;')
	    								.append($(createDiv({id:'',clazz:''}))
	    										.attr('style','display: inline-block; padding: 5px;')
	    										.append($(createLI({id:'',clazz:'dropdown-submenu',val:''}))
	    												.append($(createDiv({id:'',clazz:''}))
	    														.attr('style','display: inline-block;')
	    														.attr('style','font-size: 15px; padding:5px;  margin-left: 30px;')
	    														.append($(createATag({id:'',clazz:'',val:'트 랜 딩 나 우'}))
	    																.hover(e=>{$('#j-ul-toggle').toggle('show')}, e=>{$('#j-ul-toggle').toggle('hide')})
	    																.attr('tabindex','-1')
	    																.attr('style','color:black; font-size:15px; font-weight: bold;'))
	    																.append($(createUL({id:'j-ul-toggle',clazz:'dropdown-menu'}))
	    																		.attr('style','top:53px;')
	    																		.append($(createLI({id:'',clazz:'',val:''}))
	    																				.append($(createATag({id:'',clazz:'',val:'프레그런스 키트'}))
																								.attr('style','color:black; font-size:15px; font-weight: bold;')
																								
																						).append($(createLI({id:'',clazz:'',val:''}))
																								.append($(createATag({id:'',clazz:'',val:'레드의 정석'}))
																										.attr('style','color:black; font-size:15px; font-weight: bold;')		
																									
																								)
																						).append($(createLI({id:'',clazz:'',val:''}))
																								.append($(createATag({id:'',clazz:'',val:'엔티크 로즈'}))
																										.attr('style','color:black; font-size:15px; font-weight: bold;')
																									
																								)
																						).append($(createLI({id:'',clazz:'',val:''}))
																								.append($(createATag({id:'',clazz:'',val:'맥프로 아이팔레트'}))
																										.attr('style','color:black; font-size:15px; font-weight: bold;')
																										
																								)
																						)
	    																		)
	    																)
	    												)
					
	    										)
	    								).append($(createDiv({id:'',clazz:''}))
	    										.attr('style','display: inline-block; padding: 5px;')
	    										.append($(createLI({id:'',clazz:'dropdown-submenu',val:''}))
	    												.append($(createDiv({id:'',clazz:''}))
	    														.attr('style','display: inline-block;')
	    														.attr('style','font-size: 15px; padding:5px;  margin-left: 30px;')
	    														.append($(createATag({id:'',clazz:'',val:'메이크업'}))
	    																.hover(e=>{$('#j-ul-toggle1').toggle('show')}, e=>{$('#j-ul-toggle1').toggle('hide')})
	    																.attr('tabindex','-1')
	    																.attr('style','color:black; font-size:15px; font-weight: bold;'))
																.append($(createUL({id:'j-ul-toggle1',clazz:'dropdown-menu'}))
																		.attr('style','top:53px;')
																		.append($(createLI({id:'',clazz:'',val:''}))
																				.append($(createATag({id:'',clazz:'',val:'립스틱'}))
																						.on('click',function(){
																	 							app.mainitem.onCreate({context:context, classCode: 'BA'});
																	 					})
																						.attr('style','color:black; font-size:15px; font-weight: bold;')
																					
																				).append($(createATag({id:'',clazz:'',val:'아이섀도우'}))
																						.on('click',function(){
																	 							app.mainitem.onCreate({context:context, classCode: 'AA'});
																	 					})
																						.attr('style','color:black; font-size:15px; font-weight: bold;')
																						
																				).append($(createLI({id:'',clazz:'',val:''}))
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
																		)
																)
	    												)
					
	    										)
	    								).append($(createDiv({id:'',clazz:''}))
	    										.attr('style','display: inline-block; padding: 5px;')
	    										.append($(createLI({id:'',clazz:'dropdown-submenu',val:''}))
	    												.append($(createDiv({id:'',clazz:''}))
	    														.attr('style','display: inline-block;')
	    														.attr('style','font-size: 15px; padding:5px; margin-left: 30px;')
	    														.append($(createATag({id:'',clazz:'',val:'프라미어+스킨케어'}))
	    																.hover(e=>{$('#j-ul-toggle2').toggle('show')}, e=>{$('#j-ul-toggle2').toggle('hide')})
	    																.attr('tabindex','-1')
	    																.attr('style','color:black; font-size:15px; font-weight: bold;'))
	    																.append($(createUL({id:'j-ul-toggle2',clazz:'dropdown-menu'}))
	    																		.attr('style','top:53px;')
	    																		.append($(createLI({id:'',clazz:'',val:''}))
	    																				.append($(createATag({id:'',clazz:'',val:'프라이머'}))
	    																						.attr('style','color:black; font-size:15px; font-weight: bold;')
	    																						
	    																				).append($(createLI({id:'',clazz:'',val:''}))
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
	    																		)
	    																)
	    												)
	    										)
	    								).append($(createDiv({id:'',clazz:''}))
	    										.attr('style','display: inline-block; padding: 5px;')
	    										.append($(createLI({id:'',clazz:'dropdown-submenu',val:''}))
	    												.append($(createDiv({id:'',clazz:''}))
	    														.attr('style','display: inline-block;')
	    														.attr('style','font-size: 15px; padding:5px; margin-left: 30px;')
	    														.append($(createATag({id:'',clazz:'',val:'브러쉬+툴'}))
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
	    																								)
	    																								.on('click', function(){
	    																			 							app.mainitem.onCreate({context:context, classCode: 'CA'});
	    																								}))
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
	    																		)
	    																)
	    												)
	    										)
	    								).append($(createDiv({id:'',clazz:''})).
	    										attr('style','display: inline-block; padding: 5px;')
	    										.append($(createLI({id:'',clazz:'dropdown-submenu',val:''}))
	    												.append($(createDiv({id:'',clazz:''}))
	    														.attr('style','display: inline-block;')
	    														.attr('style','font-size: 15px; padding:5px; margin-left: 30px;')
	    														.append($(createATag({id:'',clazz:'',val:'향수'}))
	    																.hover(e=>{$('#j-ul-toggle4').toggle('show')}, e=>{$('#j-ul-toggle4').toggle('hide')})
	    																.attr('tabindex','-1')
	    																.attr('style','color:black; font-size:15px; font-weight: bold;'))
	    																.append($(createUL({id:'j-ul-toggle4',clazz:'dropdown-menu'}))
	    																		.attr('style','top:53px;')
	    																		.append($(createLI({id:'',clazz:'',val:''}))
	    																				.append($(createATag({id:'',clazz:'',val:'쉐이드센츠'}))
	    																						.attr('style','color:black; font-size:15px; font-weight: bold;')
	    																						)
	    																		)
	    																)
	    												)
	    										)
	    								).append($(createDiv({id:'',clazz:''}))
	    										.attr('style','display: inline-block; padding: 5px;')
	    										.append($(createLI({id:'',clazz:'dropdown-submenu',val:''}))
	    												.append($(createDiv({id:'',clazz:''}))
	    														.attr('style','display: inline-block;')
	    														.attr('style','font-size: 15px; padding:5px; margin-left: 30px;')
	    														.append($(createATag({id:'',clazz:'',val:'주요 라인업'}))
	    																.hover(e=>{$('#j-ul-toggle4').toggle('show')}, e=>{$('#j-ul-toggle4').toggle('hide')})
	    																.attr('tabindex','-1')
	    																.attr('style','color:black; font-size:15px; font-weight: bold;'))
	    																.append($(createUL({id:'j-ul-toggle4',clazz:'dropdown-menu'}))
	    																		.attr('style','top:53px;')
	    																		.append($(createLI({id:'',clazz:'',val:''}))
	    																				.append($(createATag({id:'',clazz:'',val:'쉐이드센츠'}))
	    																						.attr('style','color:black; font-size:15px; font-weight: bold;')
	    																						)
	    																		)
	    																)
	    												)
	    										)
	    								)		
	    						)
	    				)
	    		).append($(createButton({id:'',type:'button',clazz:'default dropdown-toggle',val:'굿 바 이 즈'}))
			 			.attr('style','font-size:20px; width: 120px;background: black; border: black; color: white;'))	
	 			.append($(createButton({id:'',type:'button',clazz:'default dropdown-toggle',val:'맥 셀 렉 트'}))
	 					.attr('style',' margin-left: 20px;font-size:20px; width: 120px;background: black; border: black; color: white;'))
				.append($(createButton({id:'',type:'button',clazz:'default dropdown-toggle',val:'매 장 안 내'}))
						.attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;')
						.on('click', ()=>{
							app.map.onCreate(context);
						})
				)
				.append($(createButton({id:'',type:'button',clazz:'default dropdown-toggle',val:'게 시 판'}))
						.attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;'))
				.append($(createDiv({id:'div-nav-rear'})).attr('style', 'display: inline-block;')
						.append($(createButton({id:'btn-login-default',type:'button',clazz:'',val:'로 그 인'}))
								.click(()=>{
									alert('로그인');
									app.login.onCreate(context);	
								})	 
								.attr('style','font-size:20px; width: 120px;background: black; border: black; color: white;'))
						.append($(createButton({id:'btn-join-default',type:'button',clazz:'default dropdown-toggle',val:'회원가입'}))
			 					.on('click',()=>{
			 						alert('회원가입');
			 						app.join.onCreate(context);
			 					})
			 					.attr('style','margin-left: 10px; font-size:20px; width: 120px;background: black; border: black; color: white;'))
	 					
				)
		);
		
		$('#btn-main-go')
		.on('click',()=>{
			alert('다시 app.main.onCreate로');
			app.navout.onCreate(context);
			app.main.onCreate(context);
		});
	};
	return {onCreate: onCreate};
})();
app.footer=(()=>{
	var $footer, context, image;
	var onCreate=x=>{
		context = x;
		image = x + '/resources/img';
		$footer = $('#footer');
		setContentView();
	};
	var setContentView=()=>{
		$footer
		.append($(createDiv({id:'j-div-footer1', clazz:''	}))
				.attr('style','background: #292929; height:35%; margin-top:20px;')
				.append($(createGridDiv4())
						.attr('style','margin: 0 auto;')))
		.append($(createDiv({id:'j-div-footer2', clazz:''}))
				.attr('style','background:black; height:15%;')
				.append($(createImg({id:'', clazz:'',  src: image+'/'+'mainitem10.jpg'}))
						.attr('style','width: 1400px;'))
		);
		
		
		$(createGridDivContent({val:'맥 스토어'}))
		.attr('style','color:white; margin-top: 8px;')
		.attr('id','j-div-grid-1')
		.appendTo('#div-order-grid4');
		$(createGridDivRow2({
			val1:(createATag({id:'j-a-1-1',	val:'매장안내'	})),
			val2:(createATag({id:'j-a-1-2',	val:'메이크업 서비스'	})),
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
			val1:(createATag({id:'j-a-2-1',	val:'Contact Us'})),
			val2:(createATag({id:'j-a-2-2',	val:'02-3440-2707'})),
			val3:(createATag({id:'j-a-2-3',	val:'FAQS'})),
			val4:(createATag({id:'j-a-2-4',	val:'배송정보'	})),
			val5:(createATag({id:'j-a-2-5',	val:'반품 및 교환' })),
			val6:'',
			val7:'',
		})).attr('style','margin-top:10px;')
		.appendTo('#j-div-grid-2');
		$('#j-a-2-1').attr('style','color:white');
		$('#j-a-2-2').attr('style','color:white');
		$('#j-a-2-3').attr('style','color:white');
		$('#j-a-2-4').attr('style','color:white');
		$('#j-a-2-5').attr('style','color:white');
		
		$(createGridDivContent({val:'ABOUT US'}))
		.attr('style','color:white; margin-top: 8px;')
		.attr('id','j-div-grid-3')
		.appendTo('#div-order-grid4');
		
		$(createGridDivRow2({
			val1:(createATag({id:'j-a-3-1', val:'OUR STORY'	})),
			val2:(createATag({id:'j-a-3-2',	val:'맥 에이즈 펀드'})),
			val3:(createATag({id:'j-a-3-3', val:'맥 프로 맴버쉽'})),
			val4:(createATag({id:'j-a-3-4',	val:'나의 맥 셀렉트'})),
			val5:(createATag({id:'j-a-3-5',	val:'백 투 맥'	})),
			val6:(createATag({id:'j-a-3-6',	val:'채용 정보'})),
			val7:(createATag({id:'j-a-3-7',	val:'ANIMAL TESTING'})),
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
			val1:(createATag({id:'j-a-4-1',	val:'QUR STORY'	})),
			val2:(createATag({id:'j-a-4-2',	val:'맥 에이즈 펀드'})),
			val3:(createATag({id:'j-a-4-3',	val:'맥 프로 맴버쉽'})),
			val4:(createATag({id:'j-a-4-4',	val:''})),
			val5:(createATag({id:'j-a-4-5',	val:''})),
			val6:(createATag({id:'j-a-4-6',	val:''})),
			val7:(createATag({id:'j-a-4-7', val:''})),
		})).attr('style','margin-top:10px;')
		.appendTo('#j-div-grid-4');
		$('#j-a-4-1').attr('style','color:white;');
		$('#j-a-4-2').attr('style','color:white;');
		$('#j-a-4-3').attr('style','color:white;');
		
		$(createGridDivContent({val:''}))
		.attr('style','color:white')
		.attr('id','j-div-grid-5')
		.appendTo('#div-order-grid4');
	};
	return {onCreate: onCreate};
})();

app.main=(()=>{
	var $header, $content, context, image;
	var onCreate=x=>{
		 $header = $('#header');
		 $content = $('#content');
		 context = x;
		 image = x+'/resources/img';
	     setContentView();
	 };
	 var setContentView=()=>{		 
			var customId = sessionStorage.getItem('customer');
			if(customId == undefined){
				app.navout.onCreate(context);
			}else{
				app.navin.onCreate(context);
			} 
				$('#content')
				.html($(createDiv({id:'div-container', clazz:'container-fluid'})).attr('style','padding:0;'));
				
				$('#div-container')
				.append($(createDiv({id:'div-carousel',clazz:''})))
				.append($(createDiv({id:'div-main-item-manu', clazz:''})))
				.append($(createDiv({id:'div-main-items-home',clazz:''})))
				.append($(createDiv({id:'div-main-items-middle',clazz:''})));
				
				$(createDiv({id:'myCarousel', clazz:'carousel slide'}))
				.attr('data-ride','carousel')
				.appendTo('#div-carousel');
				$(createDiv({id:'div-inner', clazz:'carousel-inner'}))
				.attr('style','max-height:500px;')
				.appendTo('#myCarousel');
				$(createDiv({id:'div-item-active', clazz:'item active'}))
				.appendTo('#div-inner');
				$(createImg({id:'', src:image+'/'+'m-item3.jpg'}))
				.attr('style','width:100%; height:100%;')
				.appendTo('#div-item-active');
				$(createDiv({id:'div-item-active1', clazz:'item'}))
				.appendTo('#div-inner');
				$(createImg({id:'', src:image+'/'+'m-item4.jpg'}))
				.attr('style','width:100%; height:100%;')
				.appendTo('#div-item-active1');
				$(createDiv({id:'div-item-active2',	clazz:'item'}))
				.appendTo('#div-inner');
				$(createImg({id:'', src:image+'/'+'m-item5.jpg'}))
				.attr('style','width:100%; height:100%;')
				.appendTo('#div-item-active2');
				$('#div-inner')
				.append($(createMainImg()));
				var customId = sessionStorage.getItem("customer");
				//내용
				//var temp = ['Matte Lipstick','Retro Matte Lipstick','EYE SHADOW','Mineralize Blush']
				
				
				$('#div-main-items-home')
				.attr('style', 'position: relative; height: 540px; margin-top: 20px; margin-bottom: 20px; width: 1281px; margin-right: 151px; margin-left: 151px; ');
				
				$.getJSON(context+'/mainItems/', d=>{
					var mainObj = d.mainItems;
					for(var i =0; i <= mainObj.length ; i++){
						if(i > 3){
							return false;
						}
						console.log(mainObj[i]);
						
						$('#div-main-items-home')
						.append($(createDiv({id: '', clazz:''}))
								.attr('style', 'position: absolute; top: 0px; left:'+(312.75*i)+'px; width: 312.75px; height: 495px; padding-left: 12px; padding-right: 12px; margin-bottom: 45px; display: inline-block; vertical-align: super;')	
								.append($(createDiv({id: '', clazz:'grid-item-catalog'}))
										.attr('style', 'padding-top: 15px; height: 479px; border-top:1px solid #c7c7c7; position: relative;')
										.append($(createDiv({id: '', clazz: ''}))
												.append($(createDiv({id:'', clazz: ''}))
														.append($(createHTag({num:'4', val: mainObj[i].commonName, clazz:'pnt'}))
																.attr('style', 'margin:0;')
																.attr('itemSeq', mainObj[i].itemSeq)
																.attr('itemCode', mainObj[i].itemCode)
																.on('click', function(){
																	app.item.onCreate({context: context, itemSeq: $(this).attr("itemSeq"), itemCode: $(this).attr("itemCode")});
																}))
												).append($(createDiv({id:'', clazz: ''}))
														.append($(createPtag({val: mainObj[i].commonNameE}))
																.attr('style', 'margin-bottom: 3px;'))
												).append($(createDiv({id:'', clazz: ''}))
														.append($(createPtag({val: '색상: '+mainObj[i].itemName}))
																.attr('style','margin-bottom: 1px;'))
												).append($(createDiv({id:'', clazz: ''}))
														.append($(createPtag({val: '['+mainObj[i].textureExp+']'}))
																.attr('style', 'margin-bottom: 0px;'))
												)
										).append($(createDiv({id:'', clazz: ''}))
												.attr('style','margin-left: 50px; float: right;')
												.append($(createDiv({id:'', clazz: ''}))
														.append($(createHTag({num:'4', val:'★★★★★'}))
																.attr('style', 'margin-bottom: 0px; margin-top: 0px;'))
												).append($(createDiv({id:'', clazz: ''}))
														.attr('style','float: right;')
														.append($(createHTag({num:'4', val:'♡'})))
												)
										).append($(createDiv({id:''}))
												.attr('style', 'height: 40%; width: 80%; position: absolute; top: 180px; left: 30px;')
												.append($(createImg({id:'', src:image+'/'+ mainObj[i].picName+'.jpg', alt:'EYE SHADOW', title:'EYE SHADOW', clazz:'pnt'}))
														.attr('style', 'height: 100%; width: 100%; ')
														.attr('itemSeq', mainObj[i].itemSeq)
														.attr('itemCode', mainObj[i].itemCode)
														.on('click', function(){
															app.item.onCreate({context: context, itemSeq: $(this).attr("itemSeq"), itemCode: $(this).attr("itemCode")});
														}))
										).append($(createDiv({id:''}))
												.attr('style', 'border-top: 1px solid #c7c7c7; position: absolute; bottom: 5px; width: 292.750px;')
												.append($(createDiv({id:''}))
														.attr('style','display: inline-block;  ')
														.append($(createHTag({num:'4', val:'₩'+mainObj[i].discountPrice}))
																.attr('style', 'margin-bottom: 0; margin-top: 16px;'))
												).append($(createDiv({id:''})).attr('style', 'margin-top: 8.5px; display: inline-block; float: right;')
														.append($(createButton({val:'장바구니 담기'}))
																.attr('style','border: 0; margin: 0; padding-top: 0; padding-bottom:0; width:130px; height:30px; background-color: black; color: white; font-size: 15px;'))
																.attr('common_name',mainObj[i].commonName)
																.attr('item_name',mainObj[i].itemName)
																.attr('item_seq',mainObj[i].itemSeq)
																.attr('item_code',mainObj[i].itemCode)
																.on('click',function (){
																	if(customId){
																		var jason = {
																				customId : customId,
																				commonName : $(this).attr("common_name"),
																				itemName : $(this).attr("item_name"),
																				itemSeq  : $(this).attr("item_seq"),
																				itemCode : $(this).attr("item_code")
																		}
																		$.ajax({
																			url:context+'/putBasket',
																			method:'POST',
																			data: JSON.stringify(jason),
																			dataType:'json',
																			contentType: 'application/json',
																			success: x=>{
																				if(x.success==1){
																					//할일: 장바구니 팝업하는것
																					console.log($(this));
																				}else if(x.success==0){
																					alert('해당 상품 재고가 없습니다');
																				}else{
																					alert('장바구니 담기에 실패했습니다. 다시 시도해 주세요');
																				}
																			},
																			error: function(x,s,m){alert(m);}
																		})
																	}else{
																		alert("로그인 후 다시 주문");	//할일: 팝업으로 만들기
																	}
																})
												)
												
												
										)
								)		
						);
					}
				});
				
				//버튼 
				$('#div-main-item-manu')
				.append($(createDiv({id:'', clazz:''}))
						.attr('style','text-align: center; margin-top: 15px;')
						.append($(createATag({id:'a-tabs-item1', clazz:'', 
									val:'<span id="main-item-span1" style="margin-top:15px; padding:10px; width: 139px; height:35px; font-size:15px; background: black; color:white;" class="glyphicon" aria-hidden="true">BEST SELLER</span>'
								})).attr('style','padding:5px;')
								.click(()=>{
									alert('베스트셀러');
								})
						)
						.append($(createATag({id:'a-tabs-item2', clazz:'',
									val:'<span id="" style="margin-top:15px; margin-left:5px; padding:10px; width: 139px;  height:35px; font-size:15px; background: black; color:white;" class="glyphicon" aria-hidden="true">PALET TES</span>'
								})).attr('style','padding:5px;')
								.click(()=>{
									alert('PALETTES');
								})
						)
						.append($(createATag({id:'a-tabs-item3', clazz:'',
									val:'<span id="" style="margin-top:15px; padding:10px; width: 139px; height:35px; font-size:15px; background: black; color:white;" class="glyphicon" aria-hidden="true">HIT ITEM</span>'
								})).attr('style','padding:5px;')
								.click(()=>{
									alert('HIT ITEM');
								})
						)
				);
				
				$('#div-main-items-middle')
				.append($(createDiv({id:'div-main-itme-manu2', clazz:''})));
				$(createHTag({id:'', num:'2', val:'한정 컬렉션'}))
				.attr('style','font-weight: bold; text-align: center;')
				.appendTo('#div-main-itme-manu2');
				$(createHTag({id:'', num:'2', val:'리미티드 아이템을 만나는 한정된 기회를 절대 놓치지 마세요!'}))
				.attr('style','font-size: 15px; text-align: center;')
				.appendTo('#div-main-itme-manu2');
				$('#div-main-items-middle')
				.append($(createDiv({id:'j-div-main-itme-manu3',	clazz:''})));
				$(createImg({id:'', clazz:'', src:image+'/'+'mainitem4.jpg'}))
				.attr('style','margin-left:80px;')
				.appendTo('#j-div-main-itme-manu3')
				 .click(()=>{
		 				alert('화면 작동함');
				 });
				$('#div-main-items-middle')
				.append($(createDiv({id:'j-div-main-itme-manu4',clazz:''})));
				$(createHTag({id:'', num:'2',val:'공식몰 혜택'}))
				.attr('style','font-weight: bold; text-align: center;')
				.appendTo('#j-div-main-itme-manu4');
				$('#div-main-items-middle')
				.append($(createDiv({id:'j-div-main-itme-manu5',clazz:''})));
				$(createImg({id:'', clazz:'', src:image+'/'+'mainitem5.jpg'}))
				.attr('style','margin-left:80px;')
				.appendTo('#j-div-main-itme-manu5')
				 .click(()=>{
		 				alert('화면 작동함');
				 });
				$('#div-main-items-middle')
				.append($(createDiv({id:'j-div-main-itme-manu6',	clazz:''})));
				$(createHTag({id:'',num:'2',val:'머스트 해브 아이템'}))
				.attr('style','font-weight: bold; text-align: center;')
				.appendTo('#j-div-main-itme-manu6');
				$('#div-main-items-middle')
				.append($(createDiv({id:'j-div-main-itme-manu7',clazz:''})));
				$(createDiv({id:'j-div-main-itme-manu8',clazz:''}))
				.attr('style','margin-left:140px;')
				.appendTo('#j-div-main-itme-manu7');
			
				$(createATag({id:'j-a-mainitem6',val:'<img id="" style="height:48%;width: 22%;" src="'+image+'/mainitem6.jpg">'}))
				.appendTo('#j-div-main-itme-manu8')
				.click(()=>{
		 				alert('화면 작동함1');
				});
				$(createATag({id:'j-a-mainitem7',val:'<img id="" style="height:48%;width: 22%; " src="'+image+'/mainitem7.jpg">'}))
				.appendTo('#j-div-main-itme-manu8')
				.click(()=>{
		 				alert('화면 작동함2');
				});
				$(createATag({id:'j-a-mainitem8',val:'<img id="" style="height:48%;width: 22%;" src="'+image+'/mainitem8.jpg">'}))
				.appendTo('#j-div-main-itme-manu8')
				.click(()=>{
			 			alert('화면 작동함3');
				});
				$(createATag({id:'j-a-mainitem9',val:'<img id="" style="height:48%;width: 22%;" src="'+image+'/mainitem9.jpg">'}))
				.appendTo('#j-div-main-itme-manu8')
				.click(()=>{
		 				alert('화면 작동함4');
				});
			
		 };
		
		 return {onCreate:onCreate};
	 })();
app.join=(()=>{
	var $header,context,image;
	var onCreate=x=>{
		 $header = $('#header');
		 $content = $('#content');
		 context = x;
		 image = x+'/resources/img';
	     setContentView();
	 };
	 var setContentView=()=>{
			$('#content').empty();
			$('#btn-join-default').remove();
			$('#footer').attr('style','    margin-top: 100px;');
			$('#content')
			.html($(createDiv({id:'content-container',clazz:''})));
			$('#content-container')
			.append($(createDiv({id:'container-second',clazz:''}))
					.append($(createHTag({id:'', num:'1',val:'회원가입'}))
							.attr('style','text-align:center;')));
			
			$('#content-container')
			.append($(createDiv({id:'',clazz:''}))
					.append($(createHTag({id:'', num:'5',val:'이미 맥 공식 온라인몰 회원이신가요?'
												+((createATag({id:'a-login',clazz:'',val:'로그인'})))}))//위험
							.attr('style','text-align:center; ')));
			
			$('#content-container')
			.append($(createDiv({id:'',clazz:''}))
					.attr('style','margin-left: 418px; padding: 10px; margit-top:60px;')
					.append($(createDiv({id:'',clazz:''}))
						    .attr('style','display: inline-block;')
							.append($(createInput({id:'input_join_id',placeholder:'*아이디 입력하세요',type:'text'}))
									.attr('style','width: 355px;height: 50px; ')))
					.append($(createDiv({id:'',clazz:''}))
							.attr('style','display: inline-block;')
							.append($(createButton({id:'',type:'button',clazz:'',val:'중복확인'}))
									.on('click',x=>{
										$.getJSON(context+'/joinId/search/'+$('#input_join_id').val(), x=>{
												if(x.success==1){
													alert('이미 중복된 아이디입니다 새로운 아이디를 입력하세요.')
													//할일: 무시하고 회원가입 하려고 할때도 막아야 함.
												}else{
													alert('사용가능한 아이디 입니다.')
												}	
										});
									})
									.attr('style','background:black;color:white ;margin-left:15px;'))));
			
			$('#content-container')
			.append($(createDiv({id:'',clazz:''}))
					.attr('style','margin-left: 418px; padding: 10px;')
					.append($(createInput({id:'input_join_pass',placeholder:'*비밀번호를 입력하세요',type:'text'}))
							.attr('style','width: 355px;height: 50px; ')));
			$('#content-container')
			.append($(createDiv({id:'',clazz:''}))
					.attr('style','text-align:center;')
					.append($(createDiv({id:'',clazz:''}))
							.attr('style','text-align:center; padding: 10px;   display: inline-block;')
							.append($(createInput({id:'input_join_name',placeholder:'*이름',type:'text'}))
									.attr('style','width: 355px;height: 50px;'))
							.append($(createDiv({id:'',clazz:''}))
									.attr('style','text-align:center;     padding: 10px;   display: inline-block;')
									.append($(createInput({id:'input_join_email',placeholder:'*이메일',type:'text'}))
											.attr('style','width: 355px;height: 50px;')))));
			
			$('#content-container')
			.append($(createDiv({id:'',clazz:''}))
					.attr('style','text-align:center;')
					.append($(createHTag({id:'', num:'5',val:'*비밀번호는 영문 대문자, 소문자, 숫자, 특수문자를 모두 조합하여 8자~12자로 구성해주세요.(ex. Mac1234@)'}))
							.attr('style','color:red;')));
			$('#content-container')
			.append($(createDiv({id:'',clazz:''}))
					.attr('style','margin-left: 415px;')
					.append($(createDiv({id:'',clazz:''}))
							.attr('style','text-align:center;     padding: 10px;   display: inline-block;')
							.append($(createSelect({}))//?
									.attr('style','width: 140px; height:50px; ')
									.append($(createOption({val:'선택'})))
									.append($(createOption({val:'010'})))
									.append($(createOption({val:'011'})))
									.append($(createOption({val:'016'})))
									.append($(createOption({val:'019'})))))
					.append($(createDiv({id:'',clazz:''}))
							.attr('style','text-align:center;     padding: 10px;   display: inline-block;')
							.append($(createInput({id:'input_join_phoneNum1',placeholder:'핸드폰번호',type:'text'}))
									.attr('style','width: 140px; height:50px; ')))
									.append($(createDiv({id:'',clazz:''}))
											.attr('style','text-align:center;     padding: 10px;   display: inline-block;')
											.append($(createInput({id:'input_join_phoneNum2',placeholder:'핸드폰번호',type:'text'}))
													.attr('style','width: 140px; height:50px; '))));
			
			$('#content-container')
			.append($(createDiv({id:'',clazz:''}))
					.attr('style','margin-left: 416px;')
					.append($(createDiv({id:'',clazz:''}))
							.attr('style','text-align:center;     padding: 10px;   display: inline-block;')
							.append($(createInput({id:'input_join_email_check',placeholder:'이메일 인증번호',tpye:'text'}))
									.attr('style','width: 350px;height: 50px;')))
					.append($(createDiv({id:'',clazz:''}))
							.attr('style','text-align:center;padding: 10px;   display: inline-block;')
							.append($(createButton({id:'',type:'button',clazz:'',val:'인증번호'}))
									.attr('style','background:black;color:white;'))));
			$('#content-container')
			.append($(createDiv({id:'',clazz:''}))
					.attr('style','margin-left: 425px;')
					.append($(createDiv({id:'',clazz:''}))
							.append($(createHTag({id:'', num:'3',val:'프로필 사진 업로드'}))))
					.append($(createDiv({id:'',clazz:''}))
							.append($(createInput({id:'input_join_myFile',placeholder:'프로필 사진을 선택해주세요',type:'file'}))
									.attr('style','    background: white;color: black; margin-top:10px;')))
					.append($(createDiv({id:'',clazz:''}))
							.append($(createPtag({val:'프로필 사진 선택시 마이페이지 화면에 사진이 업로드 됩니다.'}))
									.attr('style','margin-top:10px;')))
					.append($(createDiv({id:'',clazz:''}))));
			$('#content-container')
			.append($(createDiv({id:'',clazz:''}))
					.attr('style','text-align:center; margin-top:50px;')
					.append($(createButton({id:'',type:'button',clazz:'',val:'회원가입'}))
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
										optionjoin:$('#phone_option').val()
								}
								$.ajax({
									url:context+'/customer/join',
									method:'POST',
									data:JSON.stringify(jason),
									dataType:'json',
									contentType:'application/json',
									success: x=>{
										alert('다시 로그인 해주시기 바랍니다')
										app.main.onCreate(context);
									},
									error: function(x,s,m){alert(m);}
								});
							})
							.attr('style','background:black;color:white; width:150px; height:50px;')))
			
	 };
	 return {onCreate:onCreate};
})();

app.admin=(()=>{
	var $header,$content, context,image;
	var onCreate=x=>{
		 $header = $('#header');
		 $content = $('#content');
		 context = x;
		 image = x+'/resources/img';
	     setContentView();
	 };
	 var setContentView=()=>{
		 alert('admin 들어옴!');
		 $content.empty();
		 $content
		.html($(createDiv({id:'div-admin', clazz:'container-fluid'})).attr('style','padding:0; min-height: 700px;'));
		 
		 $('#div-admin')
		 .append($(createButton({id:'btn-tmp-chart', clazz:'btn-primary', val:'차트'})));
		 
		 $('#btn-tmp-chart')
		 .on('click', ()=>{
			 app.chart.onCreate(context);
		 });
	 };
	 return {onCreate: onCreate};
})();
app.chart=(()=>{
    var $wrapper,$content, context,image;
    var onCreate=x=>{
         $wrapper = $('#wrapper');
         $content = $('#content');
         context = x;
         image = x+'/resources/img';
         setContentView();
     };
     var setContentView=()=>{        
        alert('chart들어옴!');
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
            
         
             $('#div-admin')
             .append($(createDiv({id:'chart_div',clazz:''}))
            		 .attr('style','width: 900px; height: 500px;'))
    
     };
     return{onCreate:onCreate}
})();
app.login=(()=>{
	var $header,$content, context,image;
	var onCreate=x=>{
		 $header = $('#header');
		 $content = $('#content');
		 context = x;
		 image = x+'/resources/img';
	     modifyNav();
	     setContentView();
	 };
	 var modifyNav=()=>{
			 $('#div-nav-rear').empty();
			 $('#div-nav-rear')
			 .html($(createButton({id:'btn-admin-default',type:'button',clazz:'default dropdown-toggle',val:'관리자'}))
					 .attr('data-toggle','modal')
					 .attr('data-target','#myModal')
					 .attr('style','margin-left: 10px; font-size:20px; width: 120px; background: black; border: black; color: white;')
			 		.on('click', ()=>{
			 			app.admin.onCreate(context);
			 		})
			 );
	 };
	 var setContentView=()=>{
		 	$content.empty();
			 $content
			 .html($(createDiv({id : 'mac-store', clazz : 'field-container field-container-grid'})));
			 
			 $(createTab({ id:'tab-login', clazz:'table-condensed'}))
			 .attr('style','width:90%; margin: 0auto; margin-top:70px; height:70%')
			 .appendTo('#mac-store');
			 $(createHTag({id:'', num : '2', val : '회원 로그인' }))
			 .attr('style','margin-left: 200px; font-size: 4rem; font-weight: normal; line-height:0.875; ')
			 .appendTo('#tab-login');
			 $(createHTag({id:'', num : '5', val : '아직 맥 공식 온라인몰 회원이 아니신가요?' }))
			 .attr('style','margin-left: 200px; font-size: 15px;')
			 .appendTo('#tab-login');
			 $(createUL({id:'ul-login', clazz:''}))
			 .appendTo('#tab-login');
			 $(createLI({id:'li-login', clazz:'', val:'이메일 주소를 입력해 주세요.' }))
			 .attr('style','margin-left: 160px; font-size: 15px;')
			 .appendTo('#ul-login');
			 $('#li-login').append('</br>');
			 $(createLI({id:'li-pass', clazz:'',val:'비밀번호를 입력해 주세요.' }))
			 .attr('style','font-size: 15px;')
			 .appendTo('#li-login');
			 $(createDiv({id : 'div-input-bar',clazz : 'div-input-bar'}))
			 .appendTo('#tab-login');
			 
			  
			 $(createInput({id : 'input-login', placeholder : '*예시:username@network.co.kr', type :'text' }))
			 .attr('style','height:60px; width:300px; margin-left:200px; border: 1px solid red;    font-size: 12px;')
			 .appendTo('#div-input-bar');
			 $(createInput({id : 'input-pass', placeholder : '*비밀번호(영문 대소문자, 숫자, 특수문자 혼합 8자 이상 조합)', type :'text'}))
			 .attr('style','height:60px; width:300px; margin-left: 20px; border: 1px solid red;    font-size: 12px;')
				.appendTo('#div-input-bar');
			 $('#div-input-bar')
			 .append($(createDiv({id : 'div-pass-question',clazz : 'div-input-bar'})));
			 $(createATag({ id:'a-pass', val:'비밀번호를 잊어버리셨나요?'}))
			 .attr('style','margin-left:550px;')
			 .appendTo('#div-pass-question');
			 $('#div-pass-question')
			 .append($(createDiv({id : 'div-login-box',	clazz : 'div-login-box'})));
	
			  $(createButton({id : 'input-login-box', type:'button',clazz : 'login', val :'로그인'	}))
			 .attr('style','border-radius: 0; height:60px; width:300px; margin-left:200px; background: black; color: white;')
				.appendTo('#div-login-box')
				.on('click',e=>{
					customerLogin(e);
				});
			 
		
	 };
	var customerLogin=x=>{
		x.preventDefault();
		console.log($('#input-login'));
		var jason={
				'customId':$('#input-login').val(),
				'customPass':$('#input-pass').val(),	 		
		}
		console.log(jason);
		$.ajax({
			url:context+'/login',
			method:'POST',
			data: JSON.stringify(jason),
			dataType:'json',
			contentType: 'application/json',
			success: x=>{
				console.log(x);
				alert('로그인 성공 x='+x.success);
				if(x.success==1){
					sessionStorage.setItem('customer', x.customId);
					app.mypage.onCreate(context);
				}else{
					alert('일치하는 아이디가 없거나 비밀번호가 잘못 되었습니다.');
					app.navout.onCreate(context);
					app.main.onCreate(context);
				}
			},
			error: (x,h,m)=>{
				console.log(x);
				console.log(h);
				console.log(m);
				alert('로그인에서 에러발생 x= '+x+' ,h= '+h+' ,m= '+m);
				}
		 });
		 
	 };

		 return {onCreate:onCreate};
})();

app.mypage=(()=>{
	var $header,context,image;
	var onCreate=x=>{
		 $header = $('#header');
		 $content = $('#content');
		 context =x;
		 image = x+ '/resources/img';
	     setContentView();
	 };

	 var setContentView=()=>{
		 app.navin.onCreate(context);
		 $('#btn-main-go').on('click',()=>{app.navin.onCreate(context);});
		 $('#btn-logout').on('click', ()=>{app.main.onCreate(context);});
		 
			$content.empty();
			$content
			.append($(createDiv({id : 'div-my-page', clazz : 'field-container field-container-grid'}))
					.attr('style','min-height: 800px;'));
				 
			$.getJSON(context+'/mypage/'+sessionStorage.getItem('customer'),e=>{
				var mypageObj = e.mypage;
				//$content.html(createDiv({id : 'mypage-div' , clazz : ''}));
				$('#div-my-page')
			    .append($(createDiv({id : '', clazz : 'navbar navbar-inverse'}))
			    		.attr('style', 'background-color: #1a1a1a; max-height: 250px; margin-bottom: 0px;')
			    		.append($(createDiv({id : '', clazz : ''}))
			    				.attr('style', 'width: 100%; min-height: 250px;')
				                .append($(createSection({id : 'navbar-header1', clazz : 'navbar-header'}))
					                    .attr('style', 'float: left; width: 25%; border-right: 1px solid #ffffff; min-height: 250px; padding: 15px; color: white;')
					                    .append($(createDiv({id : '', clazz : ''}))
					                            .append($(createHTag({id:'', num : '5', val :mypageObj.name+'님 환영합니다'}))
					                                    .attr('style','font-family: Sans-Serif; font-weight: bold;'))
					                    ).append($(createDiv({ id : 'profile-wrapper-div', clazz : 'account-nav'}))
					                    		.attr('style', 'float: none;   margin-left: 40%;')
					                    		.append($(createDiv({id : 'mypage-image-div', clazz : ''}))
					                    				.append($(createImg1({id : '', alt : '' ,img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAQlBMVEX09PSzs7Pe3t6fn5/Ixsf39/fd3d2cnJzh4eGwsLC0tLTz8/Pw8PDW1tba2trp6em8vLzR0dHLy8vBwcGlpaWkpKR2EtH+AAAJqElEQVR4nO2d6ZqjKhCGg7EU3DXm/m912NwxcQEpM/39OdPznFHerqI2THw8/vSnP/3pT3/605/+9Kf/UADgewlOBSFpguyXIbNnzMWa8tcgOxyo4qdQHL/DH4IEKGv9p1oBKkiWP36CESBIYqr+SAdACdnW97cjpHUbx7XkgGgKKBjfwb0RIWue8TNm6od6ASgYq+y+jJCGTwElTQhZYgIUrkrvigj1UzPxqDn8YGAsbokIJeuQ3g/prOvS+/RegiYemFj8iU8g5rdDTCeb7guf+D/KeyFC1n6Hmuqd+l70LmXvvYA8adzKiLstKBBvlPq76nonIbsNIRRHADlidBvE9hDgMyY3IYT8mAk54k0KVGAHAXk4vUVPDOVRE8qeuEDfE0P6Ok4oIFvkVTjkR1LhlJEg3o6QrrSA+xDxNlNQnjagZgxxIgLd0ENsRERZpM7naHvVjgsFjIhnAePX7Ed0iOX7FOCznQ3i8A022EkT5s3sAsi6fjiX57lT0sUVWlSEZzdhRZeEcYMI8Xi1LVG4BQNqaJtL31y9jjdMT3UERQMTIaJ4mm7qeWOD+G6rBJ+RkDeMvsm0vpmQk7xbRqrXK2yaeqI8opJvhRBL9QafMgV3wqrJi4BKBataRhohJITrPa84sI8+cY0IQ8NVkEwYV3Nh/KyKbXhC84wvr4CjPIU1A5J8Mx6X8fj07RtOypzt42ezhy8IcuNVMByegsm9xLxlH2AQmVIOiroGiGkDkZ18PNSY6qI4QUBoSvdxshswoMYZT4vg0K00ALL9gOZ08Xz6L2sgWNaTRwDxhhrDQzJtcQQwoKYpAYIDflg4V1wfMqGxMsUQTBfHoUeijJIp5yPooGAeAuPoIGBATV7qv26bE8bVUROaGygEhLOEHx8LM1KGPhNByp+PaI5lCm3EZVmDwobTFe2st6daxhoMhLN9eMJJTUbER3jGSU1GxJAtJgEwDs8R0nmjgmAYNZth1KcAg6CY29D/Ac2sLj0JuOgwEJx4T5/xOrkNg4Wf6o8xeNV4THOioOkVTVqMGMHZxbgDPpcNtSaVzdt/BzyZYsT5ecCAjkdbrW+8x3SmH1sw4aQCR1CWTtPF2wrhKO8jSPjTk6fzoVRqCDYIhhiP8cHM8fZ+KtpvbQSDqMf43MJGspCEw9ZGEErHtbc4j7dC2F8Rx/MYw8GFlXQYjIIpgt5JaHjeKz5bdy8I/dfdQlk/I7OS8CeEuW84oSwIus78zBTKTEgRFN6PMhoWZJuwpZH/YJoG0VCDWCYU2ce/EbNo1JgfHnfPCHW2ELE58g3InXSoQd62CHUXLLzev5vSaPCq1hahDl0t/3PkvQWWOb5xQiiLQCSEeiPaJmwCDIRqSW3vVRYJZWjGQqg2omVC2W1G3tOFWlPjgFB1KkhsGAQuCHMchKpfUhvRLqEa+qAhlOMoZpNQDwz8E5YqQ8jS1NIgSlVtutn0X9NowuhpbxClPEJPJv0TZopQDI9sjWnk1LubakXeH93rCMPY2hBD1kjdvMB7OuT9oVIuvg3JFiFvLvSe9p/wVXMhFtXaMyE3Yndc7j+U9qEmaCyNoTSivqr/QNNvRFfyHmgefd3mRBicdHBTJ4QInNSxm/qGkwJrSWIhHE7q0k39FzRazgBRnI8KOTMiFhP2dY1lYdmFQuLwwj4ggpJ0UEoju4z8eogsKJVlqc2swa/nm8ggi4RoguhU9kIqOg/V+n1CewUqjoJ7qfT70rfKN8qarCV+VJlwLFsbEes2tLcRsW7Dh72MiKfinglKK3y4CtKp7Lgp3m34sOWmaJ30YSeaojahlaSPOJIKWTAi4jgjdN6IyE1owYjITXjeiOhNeNaIuAOp1rmciDkXdjpT2NzChGf8FHNFOtFxP72DjwplRwHxx9FOBz+VUN+I8NCDJ3l4H8JDj54U4Z0Ii3C3o3LAOxEG9U5Emoc3IwyacI+jKsB7EUbhHsQ6vBchiEVzq2yNqFET3osQVNnG7dJs2ox52AnXV+mvCnI2uN53M0Z1Dxgm/r+N5rsgq1j3zL50vi+7ccTHCdkL8Wt0lIAyRvpPJaj9la/2GtGEjxMSliA94O4ENSNkIOxCSF0Ehn4jn/EJQv6PcXxCfUUQCkAy+mRJFyXDWn4vu/pL/p8ib+Z4mpAwDN9nsiK+BcmMcLrP9Lfqm+AGQsKwvgMZOsAJYbBwxQ9K9L9PcKaNHnBKKEvqfYRcGBGzpAOcEQ4lyw5ChIiDBReE46plMyE6xHQEuCQMim1mHBMmuIpUeI0ADYQbGceEpMI0eNN58BMhd9XvjBNCVvnGGqQqmZGMhBsYJ4SE+f9mTy2IZoDrn5Yt1rP9khBNAQflDPAD4RfIZH4hHGV4Ol8XYZ8bX2qgbETdWsx/VTxn+KZ7zMOo3kAbTi6iosiViiKSRTl9LQCZ74AK8Cib5S+ekCNjfWq6EmtSb29BFnT5izATIEn2H7DReUDWiKyqS7iektMVa3QKce+LdIwW7CCThmYXQgKktK4+0CntfMvFcjfPIF/FNW/t5jehYcK+8olWfbsZaV5tuCCR/uoYL6XhFjq9pM1foxhuvCQ3ZV26ezc5t16TbMaTC6q2vJdskwFHkJUbSIByw95brucVfWGk0VYDjiFz24EHHsUBPLma5HPEoXVy5LqMvCJ7hhTmO4anFlOtRxxa7HHQ2XVZY8db+e57neCTatYAm1OXZXwPpGcZ4bErDKwtpTJWcdHnHLiJMalPzVYhrcl5PinDbiwO7cC5GDt+JgeZNT5DbqS5rUvzgE2PbEirfGTRUVkEJJJxNyLkVnxovIoJYrFom09evdrHCNQ2n1jEaC9GlgHF5avt+xHK00HOrD6iUgsBeqnNMQdyqxtwpKrPg25uwEi9IeRA6eT3q1agn1soXN1gyyE55GcLmE9KlAmXEyd7EoOdT3zp7kJ/5+0FYe72Hp+iKmTuPFQpMQ8N7Wp9VL4cXtu/ec4zhfu7vMyeCtT5rUXxETgKpJPbGHMjUOc3JiLW0OqK+xiOkKG85MYkNxxOONECcXm+4kSsNo+2HWiGaDhfcSL2cpuPRpo+CABX+Q6pXOeKXmzykpqLfJSruibQCI3zIrgtM8ZKLvtdcsThfBWuu+2lhMNTju6LGT/qjXihk16r/nkVCH0vxZVYZ8Pr4tvF6tz0wkBzsZh+f2LmeyHO1G3EXw2lXNXPExK1Dy9ofb0p+3VCFUyvGF/40n9ASH+fEH59HyrCH84W/wOhqtp+mVAVNb7X4U66ufjd3qIn/Nn+sKva4ILDEl/68TkNIQn8enMh5on/AKUM2n3CN8g2AAAAAElFTkSuQmCC'}))
					                                    .attr('style', 'max-width: 125px;'))
					                            ).append($(createDiv({id : '', clazz : ''}))
					                            		.append($(createATag({id : '', href : '', val : '사진 올리기'}))
					                            				.attr('style', 'color:#ffffff'))
					                            )   
					                    )
				                ).append($(createSection({ id : 'navbar-header2', clazz : 'navbar-header'}))
				                        .attr('style', 'float: left; width: 50%; border-right: 1px solid #ffffff; min-height: 250px; padding: 15px;')
				                        .append($(createUL({id : '', clazz : '' }))
				                                .attr('style', 'list-style: none; width: 48%; padding-left: 0; padding-right: 2%; color: #ffffff; float: left;')
				                                .append($(createLI({ id : '', clazz : '',val:''}))
				                                        .attr('style', 'margin: 0 0 15px 0;')
				                                        .append($(createHTag({id:'', num : '6', val : 'My M·A·C &nbsp;' + createATag({id : 'a-mypage-logout', href : '', val : '로그아웃'})}))
				                                                .attr('style', 'font-weight: bold; margin: 0 0 15px 0; font-size: 14px;'))
				                                ).append($(createLI({ id : '', clazz : '',val:''}))
				                                        .attr('style', 'margin: 0 0 15px 0;')
				                                        .append($(createATag({id : '', href : '', val : '마이페이지'}))
				                                                .attr('style','color: #ffffff;'))
				                                ).append($(createLI({ id : '', clazz : '',val:''}))
				                                        .attr('style', 'margin: 0 0 15px 0;')
				                                        .append($(createATag({id : '', href : '', val : '나의 맥 셀렉트'}))
				                                                .attr('style','color: #ffffff;'))
				                                ).append($(createLI({ id : '', clazz : '',val:''}))
				                                        .attr('style', 'margin: 0 0 15px 0;')
				                                        .append($(createATag({id : '', href : '', val : '내 정보 확인 및 수정'}))
				                                                .attr('style','color: #ffffff;'))
				                                ).append($(createLI({ id : '', clazz : '',val:''}))
				                                        .attr('style', 'margin: 0 0 15px 0;')
				                                        .append($(createATag({id : '', href : '', val : '주문 배송 조회'}))
				                                                .attr('style','color: #ffffff;'))
				                                ).append($(createLI({ id : '', clazz : '',val:''}))
				                                        .attr('style', 'margin: 0 0 15px 0;')
				                                        .append($(createATag({id : '', href : '', val : '배송지 리스트'}))
				                                                .attr('style','color: #ffffff;'))
				                                )
				                        ).append($(createUL({id : '', clazz : '' }))
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
				                        )
				                ).append($(createSection({ id : 'navbar-header3', clazz : 'navbar-header'}))
				                        .attr('style', 'float: left; width: 25%; border-right: 1px solid #ffffff; min-height: 250px; padding: 15px;')
				                        .append($(createDiv({ id : '', clazz : ''}))
				                                .append($(createDiv({ id : '', clazz : ''}))
				                                        .append($(createDiv({id : '', clazz : ''}))
				                                                .append($(createHTag({id:'',  num : '4', val : createATag({ id : '', href : '#', val : createSpan({ id : 'customer-grade-span', clazz : '', val : '[ '+mypageObj.gradeName+' ]'})})}))
				                                                )
			                                            )
			                                    )
			                            )
			                    )
		                )
		        );
                $('#customer-grade-span').attr('style', 'color: #e95383; font-weight : bold;');
                $('#a-mypage-logout').attr('style', 'color: #ffffff;');
		        $('#div-my-page')
		        .append($(createDiv({id : '', clazz : ''}))
		                .append($(createDiv({id : '', clazz : ''}))
		                        .append($(createDiv({id : '', clazz : ''}))
		                                .attr('style', 'width:  100%; min-height: 200px;')
		                                .append($(createDiv({id : '', clazz : ''}))
		                                        .append($(createHTag({id:'', num : '3', val : '최근 주문 내역 '}))
		                                                .attr('style', 'font-weight: bold; padding : 20px;')
		                                        )
		                                ).append($(createDiv({id : '', clazz : ''}))
		                                        .attr('style', 'text-align : center; width : 100%; height : 30%;')
		                                        .append('<p style="margin-top : 60px;" >최근 주문내역이나 위시 리스트가 없습니다.<p>')
		                                ).append($(createDiv({id : '', clazz : 'text-center'}))
		                                )
		                        )
		                )
		        );
			 });
	};
	return {onCreate: onCreate};
	 //});
 })();
app.mainitem=(()=>{
	var $content, context, image;
	var onCreate =x=>{
		$content = $('#content');
		 context = x.context;
		 image = x.context +'/resources/img';
		setContentView(x);
	};
	var setContentView=x=>{
		var logcheck = sessionStorage.getItem('customer');
		if(logcheck == undefined){
			app.navout.onCreate(context);
		}else{
			app.navin.onCreate(context);
		}
		
		alert('세션: ' + sessionStorage.getItem('customer') );
		alert(x.classCode);
		
		$content.empty();
		$content.html($(createDiv({id:'mainitem-container'})));
		$('#mainitem-container')
		.append($(createDiv({id:'item-div0'})))
		.append($(createDiv({id:'item-div1'})))
		;
	
		$('#item-div0')
		.attr('style','border-bottom: 1px solid lightgray; width:100%; height:61px; ')
		.append($(createDiv({id:'',clazz:''}))
				.attr('style','padding-left: 150px; padding-top: 20px;')
				.append($(createHTag({num:'4', id:'bread-main1', val:'아이'}))
						.attr('style', 'display:inline; '))
				.append('&nbsp;')
				.append($(createSpanCon('glyphicon-menu-right')))
				.append('&nbsp;')
				.append($(createHTag({num:'4', id:'bread-main1', val:'섀도우'}))
						.attr('style', 'display:inline; font-size:18px; font-weight:500; font-height:1.1;'))
		);
		
		$('#item-div1')
		.append($(createDiv({id:'grid-container-catalog', clazz:'grid-container-catalog'}))
				.attr('style', 'width: 1281px; padding-top:40px; padding-right:15px; padding-left: 15px; margin-left: 151px; margin-right: 151px;')	
				.append($(createDiv({id:'grid-row-catalog1', clazz:'grid-row-catalog'}))
						.attr('style', 'position: relative; height: 540px; margin-bottom: 20px;'))
				.append($(createDiv({id:'grid-row-catalog2', clazz:'grid-row-catalog'}))
						.attr('style', 'position: relative; height: 540px; margin-bottom: 20px;'))
				.append($(createDiv({id:'grid-row-catalog3', clazz:'grid-row-catalog'}))
						.attr('style', 'position: relative; height: 540px; margin-bottom: 20px;'))
		);
		
		$.getJSON(context+'/subMainItems/'+x.classCode, d=>{
			var subObject = d.subMainItems;
			for(var i=0; i<subObject.length; i++){
				if(i>subObject.length){
					return false;
				}
				$('#grid-row-catalog1')
				.append($(createDiv({id: '', clazz:''}))
						.attr('style', 'position: absolute; top: 0px; left:'+(312.75*i)+'px; width: 312.75px; height: 495px; padding-left: 10px; padding-right: 10px; margin-bottom: 45px; display: inline-block; vertical-align: super;')	
						.append($(createDiv({id: '', clazz:'grid-item-catalog'}))
								.attr('style', 'padding-top: 15px; height: 479px; border-top:1px solid #c7c7c7; position: relative;')
								.append($(createDiv({id: '', clazz: ''}))
										.append($(createDiv({id:'', clazz: ''}))
												.append($(createHTag({num:'4', val: subObject[i].commonName, clazz:'pnt'}))
														.attr('style', 'margin:0;')
														.attr('itemSeq', subObject[i].itemSeq)
														.attr('itemCode', subObject[i].itemCode)
														.on('click', function(){
															app.item.onCreate({context: x.context, itemSeq: $(this).attr("itemSeq"), itemCode: $(this).attr("itemCode")});
														}))
										).append($(createDiv({id:'', clazz: ''}))
												.append($(createPtag({val: subObject[i].commonNameE})))
										)
								).append($(createDiv({id:'', clazz: ''}))
										.attr('style','margin-left: 50px; float: right;')
										.append($(createDiv({id:'', clazz: ''}))
												.append($(createHTag({num:'4', val:'★★★★★'}))
														.attr('style', 'margin-bottom: 0px; margin-top: 0px;'))
										).append($(createDiv({id:'', clazz: ''}))
												.attr('style','float: right;')
												.append($(createHTag({num:'4', val:'♡'})))
										)
								).append($(createDiv({id:''}))
										.attr('style', 'height: 40%; width: 80%; position: absolute; top: 180px; left: 30px;')
										.append($(createImg({id:'', src:image+'/'+subObject[i].picName+'.jpg', alt:'EYE SHADOW', title:'EYE SHADOW', clazz:'pnt'}))
												.attr('style', 'height: 100%; width: 100%; ')
												.attr('itemSeq', subObject[i].itemSeq)
												.attr('itemCode', subObject[i].itemCode)
												.on('click', function(){
													app.item.onCreate({context: x.context, itemSeq: $(this).attr("itemSeq"), itemCode: $(this).attr("itemCode")});
												}))
								).append($(createDiv({id:''}))
										.attr('style', 'border-top: 1px solid #c7c7c7; position: absolute; bottom: 5px; width: 292.750px;')
										.append($(createDiv({id:''}))
												.attr('style','display: inline-block;  ')
												.append($(createHTag({num:'4', val:'₩'+subObject[i].discountPrice}))
														.attr('style', 'margin-bottom: 0; margin-top: 16px;'))
										).append($(createDiv({id:''})).attr('style', 'margin-top: 8.5px; display: inline-block; float: right;')
												.append($(createButton({val:'장바구니 담기'}))
														.attr('style','border: 0; margin: 0; padding-top: 0; padding-bottom:0; width:130px; height:30px; background-color: black; color: white; font-size: 15px;'))
														.attr('common_name',subObject[i].commonName)
														.attr('item_name',subObject[i].itemName)
														.attr('item_seq',subObject[i].itemSeq)
														.attr('item_code',subObject[i].itemCode)
														.on('click',function (){
															if(customId){
																alert('customId 있음');
																var jason = {
																		customId : customId,
																		commonName : $(this).attr("common_name"),
																		itemName : $(this).attr("item_name"),
																		itemSeq  : $(this).attr("item_seq"),
																		itemCode : $(this).attr("item_code")
																}
																$.ajax({
																	url:context+'/putBasket',
																	method:'POST',
																	data: JSON.stringify(jason),
																	dataType:'json',
																	contentType: 'application/json',
																	success: x=>{
																		alert('성공');
																		if(x.success==1){
																			//할일: 장바구니 팝업하는것
																			console.log($(this));
																		}else if(x.success==0){
																			alert('해당 상품 재고가 없습니다');
																		}else{
																			alert('장바구니 담기에 실패했습니다. 다시 시도해 주세요');
																		}
																	},
																	error: function(x,s,m){alert(m);}
																})
															}else{
																alert("로그인 후 다시 주문");	//할일: 팝업으로 만들기
															}
														})
										)
								)		
						)
				);
			};
		});

};
	return {onCreate: onCreate};
})();

app.item=(()=>{
	var $content, context, image;
	var onCreate =x=>{
		$content = $('#content');
		 context = x.context;
		 image = x.context+'/resources/img';
		setContentView(x);
	};
	var setContentView=x=>{
		var customId = sessionStorage.getItem('customer');
		if(customId == undefined){
			app.navout.onCreate(context);
		}else{
			app.navin.onCreate(context);
		}
		
		$content.empty();
		$content.html($(createDiv({id: 'item-container', clazz: 'h-item-container'}))
				.attr('style', ''));
		
		$('#item-container')
		.append($(createDiv({id:'item-div0', clazz:''}))
				.attr('style', 'border-bottom: 1px solid lightgray; width:100%; height:61px; '))
		.append($(createDiv({id:'item-div1', clazz:''}))
				.attr('style', 'border-bottom: 1px solid lightgray; width:100%; height:804.4px; '))
		.append($(createDiv({id:'item-div2', clazz:''}))
				.attr('style', 'border-bottom: 1px solid lightgray; width:100%; '))
		.append($(createDiv({id:'item-div3', clazz:''}))
				.attr('style', 'border-bottom: 1px solid lightgray; width:100%; height:659px; '))
		;
		
		$('#item-div1')
		.append($(createDiv({id:'item-div1-1', clazz:'col-md-6'}))
				.attr('style', 'height: 100%; '))
		.append($(createDiv({id:'item-div1-2', clazz:'col-md-6'}))
				.attr('style', 'height: 100%; padding-left: 85px; padding-right: 0px;'))
		;
		
		$('#item-div2')
		.append($(createDiv({id:''}))
				.attr('style', 'width: 1281px; height: 417.5px; margin-right: auto; margin-left: auto; margin-bottom: 25px')
				.append($(createDiv({id:'item-div2-1', clazz:''}))
						.attr('style', 'padding-top: 40px; padding-bottom: 36px; height: 138.5px'))
				.append($(createDiv({id:'item-div2-2', clazz:''}))
						.attr('style', 'height: 254px'))
				.append($(createDiv({id:'item-div2-3', clazz:''}))
						.attr('style', 'height: 25px; padding-top: 7px'))		
		)
		;
		
		$('#item-div3')
		.append($(createDiv({id:'item-div3-1', clazz:''})))
		.append($(createDiv({id:'item-div3-2', clazz:''})))
		;
		
		$('#item-div1-2')
		.append($(createDiv({id:'item-div1-2-1', clazz: 'col-md-6'}))
				.attr('style', 'border-left: 1px solid lightgray; height: 100%; ' ))
		.append($(createDiv({id:'item-div1-2-2', clazz: 'col-md-6'}))
				.attr('style', 'height: 100%; padding: 0'))
		;
		$('#item-div1-2-1')
		.append($(createDiv({id:'item-div1-2-1-1', clazz:''}))
				.attr('style', 'width:100%; height: 204.4px; padding-top: 5px; padding-bottom: 0px;'))
		.append($(createDiv({id:'item-div1-2-1-2', clazz:''}))
				.attr('style', 'width:100%; height: calc(100%-204.4px); padding-bottom: 5px;'))
		;
		$('#item-div1-2-2')
		.append($(createDiv({id:'item-div1-2-2-1', clazz:''}))
				.attr('style', 'height: 520px; padding:0px;'))
		;
		
		$('#item-div1-2-1-2')
		.append($(createDiv({id:'item-div1-2-1-2-1', clazz:''})))
		.append($(createDiv({id:'item-div1-2-1-2-2', clazz:''})))
		.append($(createDiv({id:'item-div1-2-1-2-3', clazz:''})))
		.append($(createDiv({id:'item-div1-2-1-2-4', clazz:''})))
		;
		alert(x.itemCode);
		$.getJSON(context+'/item/'+x.itemSeq+'/'+x.itemCode, d=>{//플래그
			alert(d.item.itemName);
			$('#item-div0')
			.append($(createDiv({id:'',clazz:''})).attr('style','padding-left: 150px; padding-top: 20px;')
					.append($(createHTag({num:'4', id:'bread-main1', val: '아이'}))
							.attr('style', 'display:inline; '))
					.append('&nbsp;')
					.append($(createSpanCon('glyphicon-menu-right')))
					.append('&nbsp;')
					.append($(createATag({id:'bread-main1', val:'섀도우'}))
							.attr('style', 'display:inline; font-size:18px; font-weight:500; font-height:1.1;'))
					.append('&nbsp;')
					.append($(createSpanCon('glyphicon-menu-right')))
					.append('&nbsp;')
					.append($(createHTag({num:'4', id:'bread-detail', val: d.item.commonName}))
							.attr('style', 'display:inline; '))
			);
			var picString = d.item.picName;
			
			$('#item-div1-1')
			.attr('style', 'position: relative')
			.append($(createDiv({id:'carousel-example-generic', clazz: 'carousel slide'}))
					.attr('style', 'position: absolute;  left: 135px; top: 50px; margin-right: 5px; width: 651px; height: 609px;'));
			$('#carousel-example-generic')
			.append($(createOL({id:'', clazz:'carousel-indicators'}))
					.append($(createLIC({clazz:'active', dtarget:'#carousel-example-generic', dslide:'0'}))
							.attr('style', 'border: 0.5px solid lightgray'))
					.append($(createLIC({dtarget:'#carousel-example-generic', dslide:'1'}))
							.attr('style', 'border: 0.5px solid lightgray'))
			).append($(createDiv({clazz:'carousel-inner'}))
					.append($(createDiv({clazz:'item active'}))
							.append($(createImg({id:'', src:image+'/'+picString.substr(0, picString.length-1)+'1.jpg', alt:''}))
									.attr('style', 'width: 60%; margin: 0 auto;')))
					.append($(createDiv({clazz:'item'}))
							.append($(createImg({id:'', src:image+'/'+picString.substr(0, picString.length-1)+'2.jpg', alt:''}))
									.attr('style', 'width: 60%; margin: 0 auto;')))
			);
	
			$('#item-div1-2-1-1')
			.append($(createDiv({id:'div-item-name'})).attr('style','padding-bottom:5px')
					.append($(createHTag({num:'3', id: 'common-name', clazz: '', val:d.item.commonName})))
					.append($(createPtag({ val:'EYE SHADOW'}))))
			.append($(createDiv({id: 'description', clazz:''}))
					.attr('style', 'margin-bottom: 11px;')
					.append($(createDiv({id:'des-1', clazz:'dropdown'}))
							.append($(createButton({id: 'btn-common-exp', clazz:'btn-link dropdown-toggle', val:'제품 설명'}))
									.attr('style','color: black; border-bottom-color: #DBDBDB; padding: unset;')
									.attr('data-toggle','dropdown')
									.attr('aria-haspopup','true')
									.attr('aria-expanded','false'))
							.append($(createDiv({id:'', clazz:'dropdown-menu'}))
									.attr('aria-labelledby','btn-common-exp')
									.append($(createPtag({val:d.item.commonExp}))))		
							.attr('style', 'margin-bottom: 5px;'))
					.append($(createDiv({id:'des-2', clazz:'dropdown'}))
							.append($(createButton({id: 'btn-common-rec', clazz:'btn-link dropdown-toggle', val:'사용 추천'}))
									.attr('style','color: black; border-bottom-color: #DBDBDB; padding: unset;')
									.attr('data-toggle','dropdown')
									.attr('aria-haspopup','true')
									.attr('aria-expanded','false'))
							.append($(createDiv({id:'', clazz:'dropdown-menu'}))
									.attr('aria-labelledby','btn-common-rec')
									.append($(createPtag({val:'아주 좋은 제품!'}))))		
							.attr('style', 'margin-bottom: 5px;'))
					.append($(createDiv({id:'des-2', clazz:'dropdown'}))
							.append($(createButton({id: 'btn-common-info', clazz:'btn-link dropdown-toggle', val:'상세 정보'}))
									.attr('style','color: black; border-bottom-color: #DBDBDB; padding: unset;')
									.attr('data-toggle','dropdown')
									.attr('aria-haspopup','true')
									.attr('aria-expanded','false'))
							.append($(createDiv({id:'', clazz:'dropdown-menu'}))
									.attr('aria-labelledby','btn-common-info')
									.append($(createPtag({val:d.item.detailInfo}))))		
							.attr('style', 'margin-bottom: 5px;'))		
					.append($(createDiv({id:'des-2', clazz:'dropdown'}))
							.append($(createButton({id: 'btn-ingredient', clazz:'btn-link dropdown-toggle', val:'성분'}))
									.attr('style','color: black; border-bottom-color: #DBDBDB; padding: unset;')
									.attr('data-toggle','dropdown')
									.attr('aria-haspopup','true')
									.attr('aria-expanded','false'))
							.append($(createDiv({id:'', clazz:'dropdown-menu'}))
									.attr('aria-labelledby','btn-ingredient')
									.append($(createPtag({val:d.item.ingredient}))))		
							.attr('style', 'margin-bottom: 5px;'))		
			).append($(createHr({clazz:''}))
					.attr('style','border: 0.5px solid lightgray; width: 100%; margin: 0 auto;'));
		$('.btn-link:hover').attr('text-decoration','unset');
		
		
			$('#item-div1-2-1-2-1')
			.append($(createDiv({id:'', clazz:'dropdown'}))
					.attr('style', '  padding-top: 20px; margin-bottom: 10px')
					.append($(createButton({id: 'menu-drop-item-names', clazz:'dropdown-toggle', val: d.item.itemName}))
							.attr('data-toggle','dropdown')
							.attr('aria-haspopup','true')
							.attr('aria-expanded','false')
							.attr('style', 'margin-bottom: 5px; background: transparent; padding-top: 0; padding-bottom: 0;'))
					.append($(createDiv({id:'div-drop-item-names', clazz:'dropdown-menu'}))
							.attr('aria-labelledby','menu-drop-item-names'))
			).append($(createHr({clazz:''}))
					.attr('style','border: 0.5px solid lightgray; width: 100%; margin: 0 auto;'))
			;
			
			/*.append($(createSpanCon({con:'glyphicon-triangle-right'}))
							.attr('style', 'display: inline; float: right;'))*/
		
			
			
			
			$('#item-div1-2-1-2-2')
			.append($(createDiv({id:'', clazz:''}))
					.attr('style', 'margin-top: 8px; margin-bottom: 5px;')
					.append($(createHTag({num: '3', id: 'item-name2', clazz:'', val: d.item.itemName}))
							.attr('style', 'display: inline;'))
					
			).append($(createDiv({id:'', clazz:''}))
					.append($(createPtag({ val: d.item.colorExp}))
							.attr('style', 'margin-bottom: 3px')))
			.append($(createDiv({id:'', clazz:''}))
					.append($(createPtag({val: d.item.textureExp}))
							.attr('style', 'margin-bottom: 3px')))
			.append($(createDiv({id:'', clazz:''}))
					.attr('style', 'margin-top: 25px;')
					.append($(createPtag({val:'전체 평점'}))
							.attr('style', 'margin-bottom: 3px')))
			.append($(createDiv({id:'', clazz:''}))
					.attr('style', 'margin-top: 5px; margin-bottom: 25px;')
					.append($(createATag({id: 'item-grade', val:'nn개의 모든 상품평 읽기'}))
							.attr('style', 'margin-bottom: 3px'))
					.append('&nbsp;&nbsp;&nbsp;')
					.append($(createATag({id: 'item-grade', val:'상품평 쓰기'}))
							.attr('style', 'margin-bottom: 3px')))	
			.append($(createHr({clazz:''}))
					.attr('style','border: 0.5px solid lightgray; width: 100%; margin: 0 auto;'))
			;
			
			$('#item-div1-2-1-2-3')
			.append($(createDiv({id:'', clazz:''}))
					.append($(createPtag({val: d.item.weight+'g'}))
							.attr('style', 'display:inline;'))
					.append($(createATag({id: 'share', val:'공유하기'}))
							.attr('style', 'display:inline; float: right;')))
			.append($(createDiv({id:'', clazz:''}))
					.attr('style', 'margin-top: 25px;')
					.append($(createHTag({num:'4', id:'price', clazz:'', val:'₩'+d.item.discountPrice}))
							.attr('style', 'display:inline; '))
					.append($(createSpanCon({con: 'glyphicon-heart-empty'}))
							.attr('style', 'display:inline; float: right;')))
			;
			$('#item-div1-2-1-2-4')
			.append($(createDiv({id:'', clazz:''})).attr('style', 'margin-top: 25px;')
					.append($(createButton({type:'input', id:'buy-item ', val:'장바구니 담기'}))
							.attr('style', 'color: white; text-align: center; background-color:black; width: 100%; height: 60px; line-height: 64px; border-style: solid; border-color: white; border-width: 0; display: inline-block; cursor:point;')
							.on('click',function (){
								if(customId){
									var jason = {
											customId : customId,
											itemSeq  : d.item.itemSeq
									}
									$.ajax({
										url:context+'/putBasket',
										method:'POST',
										data: JSON.stringify(jason),
										dataType:'json',
										contentType: 'application/json',
										success: x=>{
											if(x.success==1){
												//할일: 장바구니 팝업하는것
												console.log($(this));
											}else if(x.success==0){
												alert('해당 상품 재고가 없습니다');
											}else{
												alert('장바구니 담기에 실패했습니다. 다시 시도해 주세요');
											}
										},
										error: function(x,s,m){alert(m);}
									})
								}else{
									alert("로그인 후 다시 주문");	//할일: 팝업으로 만들기
								}
							})
					)
			);

		});		//getjson


		$('#item-div1-2-2-1').attr('style', 'height: 550px; padding: 0px;')
		.append($(createDiv({id:''})).attr('style','height:30px;')
				.append($(createButton({type:'button', id:'scroll-up ', val:(createSpan({id: '', clazz:'glyphicon-chevron-up', val:''}))}))
						.attr('style', 'color: white; text-align: center; background-color:black; height: 100%; width:332.25px; margin-left: 15px; border-style: solid; border-color: white; border-width: 0; display: inline-block; cursor:point;'))
		)
		.append($(createDiv({id: '', clazz: 'owl-carousel----'}))
				.attr('style', 'height: calc(100% - 60px);')
				.append($(createDiv({id:'scroll-parent'}))
						.attr('style','height:100%; width:100%; overflow:hidden; position: relative;')
						.append($(createDiv({id:'scroll-child', clazz:'btn-group-vertical', role:'group'}))
								.attr('style', 'width:100%; height:100%; position: absolute; right:-15px; box-sizing: content-box; overflow-x: hidden; overflow-y: scroll; ')
						)
				)
		).append($(createDiv({id:''}))
				.attr('style','height:30px;')
				.append($(createButton({type:'button', id:'scroll-down ', val: (createSpan({id:'', clazz:'glyphicon-chevron-down', val:'' }))}))
						.attr('style', 'color: white; text-align: center; background-color:black; width: 332.25px; height:100%; margin-left: 15px; border-style: solid; border-color: white; border-width: 0; display: inline-block; cursor:point;'))
		);
	
		$.getJSON(context+'/getAllItems/'+x.itemCode, x=>{//itemListgetJSON 앞
			var itemListObj = x.itemList;
			var picNameString = "";
			//리스트 플래그
			for(var i=0; i<itemListObj.length; i++){
				$('#div-drop-item-names')
				.append($(createButton({id:'div-drop-item-names-child'+i, clazz:'dropdown-item', val:itemListObj[i].itemName}))
						.attr('item_seq',itemListObj[i].itemSeq));
			}
			
			for(var i=0; i<itemListObj.length; i++){
				picNameString = itemListObj[i].picName;
			
				$('#scroll-child')
				.append($(createDiv({id:'div-before-tran'+i, clazz:''}))
						
						.append($(createImg({id:'img-before-tran'+i, clazz:'img-before-hover', src:image+'/btn_'+picNameString.substr(0, picNameString.length-1)+'1.jpg', alt:''}))
								.attr('item_seq',itemListObj[i].itemSeq)
								.attr('item_name',itemListObj[i].itemName)
								.attr('item_stock',itemListObj[i].itemStock)
								.attr('color_exp', itemListObj[i].colorExp)
								.attr('pic_name',itemListObj[i].picName)
								.attr('texture_exp', itemListObj[i].textureExp)
								.attr('item_code', itemListObj[i].itemCode)
								.on('click', function(){
									var itemListJason =
										{
											itemSeq: $(this).attr('item_seq'),
											itemName: $(this).attr('item_name'),
											itemStock: $(this).attr('item_stock'),
											colorExp: $(this).attr('color_exp'),
											picName: $(this).attr('pic_name'),
											textureExp: $(this).attr('texture_exp'),
											itemCode: $(this).attr('item_code')
										}
									alert(itemListJason.itemSeq+' '
											+itemListJason.itemName+' '
											+itemListJason.picName+' '
											+itemListJason.itemCode);
									itemAgain(itemListJason);
								})
						)
				);
			
				$('#div-before-tran'+i)
				.attr('img_after',image+'/btn_'+picNameString.substr(0, picNameString.length-1)+'2.jpg')
				.attr('img_before',image+'/btn_'+picNameString.substr(0, picNameString.length-1)+'1.jpg');
	
				$('#img-before-tran'+i)
				.mouseenter( function(){
					$(this).attr('src',$(this).parent().attr('img_after'));
				})
				.mouseleave(function(){
					$(this).attr('src',$(this).parent().attr('img_before'));
				});
			}
		});
		
	
		$('#item-div2-1')
		.append($(createDiv({id:''}))
				.attr('style','display: table; margin-right: auto; margin-left: auto;')
				.append($(createHTag({num: '2', id:'title-galary', clazz:'', val:'#MACCOSMETICS'}))
						.attr('style', 'margin: 0')))
		.append($(createDiv({id:''}))
				.attr('style','display: table; margin-right: auto; margin-left: auto;')
				.append($(createPtag({val: '당신의 #MACCOSMETICS를 보여주세요'}))
						.attr('style','margin-bottom:0')))				
		;
		
		$('#item-div2-2')
		.load(context+'/galary');
		
		$('#item-div2-3')
		.append($(createDiv({id:'',})).attr('style','padding-right: 25px')
				.append($(createATag({id:'plus-pic', clazz:'', val:'사진 추가 '}))
						.attr('style','display: inline; float: right;'))
				.append('&nbsp;&nbsp;').attr('style','display: inline; float: right;')
				.append($(createATag({id:'galary', clazz:'', val:'갤러리보기'}))
						.attr('style','display: inline; float: right;'))
		);
		$('#item-div3-1')
		.append($(createDiv({id:''}))
				.attr('style','display: table; margin-right: auto; margin-left: auto; height: 110px; margin-top: 4.5px; margin-bottom: 4.5px; padding-top: 40px; padding-top: 40px;')
				.append($(createHTag({num:'2', clazz:'', val:'함께 쓰면 좋은 제품'}))
						.attr('style', 'margin:0'))
		);
		$('#item-div3-2')
		.attr('style','width: 1281px; margin-left: 151px; margin-right: 151px; height: 480px; margin-bottom: 15px;')
		.append($(createDiv({clazz:'grid-container-catalog'}))
				.attr('sytle', 'width:100%; margin: 0 auto;')	
				.append($(createDiv({id:'grid-row-catalog', clazz:'grid-row-catalog'}))
						.attr('style', 'position: relative; height: 540px; margin-bottom: 20px;')));
	
		
		for(var j=0; j<4; j++){
				$('#grid-row-catalog')
				.append($(createDiv({clazz:''}))
						.attr('style', 'position: absolute; top: 0px; left:'+(312.75*j)+'px; width: 312.75px; padding-left: 10px; padding-right: 10px; margin-bottom: 45px; display: inline-block; vertical-align: super;')	
						.append($(createDiv({clazz:'grid-item-catalog'}))
								.attr('style', 'padding-top: 15px; height: 479px; border-top:1px solid #c7c7c7;')
								.append($(createDiv({id:''}))
										.append($(createDiv({id:''}))
												.append($(createHTag({num:'4', val:'아이섀도우', clazz:'pnt'}))
														.attr('style', 'margin:0;')
														.on('click', ()=>{
															app.item.onCreate({context: context, itemSeq:'2', itemCode:'3000'});//할일: 고쳐야함
														}))
										).append($(createDiv({id:''}))
												.append($(createPtag({val:'EYE SHADOW'})))
										)
								).append($(createDiv({id:''})).attr('style','margin-left: 50px; float: right;')
										.append($(createDiv({id:''}))
												.append($(createHTag({num:'4', val:'★★★★★'})))
										).append($(createDiv({id:''}))
												.attr('style','float: right;')
												.append($(createHTag({num:'4', val:'♡'})))
										)
								).append($(createDiv({id:''}))
										.append($(createImg({id:'', src:image+'/mainitem3.jpg', alt:'EYE SHADOW', title:'EYE SHADOW', clazz:'pnt'}))
												.on('click', ()=>{
													app.item.onCreate({context: context, itemSeq:'2', itemCode:'3000'});
												}))
								).append($(createDiv({id:''})).attr('style', 'border-top: 1px solid #c7c7c7;')
										.append($(createDiv({id:''}))
												.attr('style','display: inline-block;')
												.append($(createHTag({num:'4', val:'₩nn,nnn'})).attr('style', 'margin-bottom: 0; margin-top: 16px;'))
										).append($(createDiv({id:''}))
												.attr('style', 'margin-top: 8.5px; display: inline-block; float: right;')
												.append($(createButton({val:'장바구니 담기'}))
														.attr('style','border: 0; margin: 0; paddig: 0; width:130px; height:25px; background-color: black; color: white; font-size: 15px;'))
										)
								)
						)		
				);
	};
		
		
		
	};
	
	var itemAgain =x=>{
		var itemList = x;
		var picString = itemList.picName;
		alert(picString);
		var customId = sessionStorage.getItem('customer');
		
		$('#item_div1-1').empty();
		$('#carousel-example-generic').empty();
		$('#item-div1-2-1-2-1').empty();
		$('#item-div1-2-1-2-2').empty();
		$('#item-div1-2-1-2-4').empty();
		
		$('#item-div1-1')
		.attr('style', 'position: relative')
		.append($(createDiv({id:'carousel-example-generic', clazz: 'carousel slide'}))
				.attr('style', 'position: absolute;  left: 135px; top: 50px; margin-right: 5px; width: 651px; height: 609px;'));
		
		$('#carousel-example-generic')
		.append($(createOL({id:'', clazz:'carousel-indicators'}))
				.append($(createLIC({clazz:'active', dtarget:'#carousel-example-generic', dslide:'0'}))
						.attr('style', 'border: 0.5px solid lightgray'))
				.append($(createLIC({dtarget:'#carousel-example-generic', dslide:'1'}))
						.attr('style', 'border: 0.5px solid lightgray'))
		).append($(createDiv({clazz:'carousel-inner'}))
				.append($(createDiv({clazz:'item active'}))
						.append($(createImg({id:'', src:image+'/'+picString.substr(0, picString.length-1)+'1.jpg', alt:''}))
								.attr('style', 'width: 60%; margin: 0 auto;')))
				.append($(createDiv({clazz:'item'}))
						.append($(createImg({id:'', src:image+'/'+picString.substr(0, picString.length-1)+'2.jpg', alt:''}))
								.attr('style', 'width: 60%; margin: 0 auto;')))
		);
		
		$('#item-div1-2-1-2-1')
		.append($(createDiv({id:'', clazz:'dropdown'}))
				.attr('style', '  padding-top: 20px; margin-bottom: 10px')
				.append($(createButton({id: 'menu-drop-item-names', clazz:'dropdown-toggle', val: itemList.itemName}))
						.attr('data-toggle','dropdown')
						.attr('aria-haspopup','true')
						.attr('aria-expanded','false')
						.attr('style', 'margin-bottom: 5px; background: transparent; padding-top: 0; padding-bottom: 0;'))
				.append($(createDiv({id:'div-drop-item-names', clazz:'dropdown-menu'}))
						.attr('aria-labelledby','menu-drop-item-names'))
		).append($(createHr({clazz:''}))
				.attr('style','border: 0.5px solid lightgray; width: 100%; margin: 0 auto;'))
		;
		//menu-drop-item-names 버튼은 구현 못함...
		$('#item-div1-2-1-2-2')
		.append($(createDiv({id:'', clazz:''}))
				.attr('style', 'margin-top: 8px; margin-bottom: 5px;')
				.append($(createHTag({num: '3', id: 'item-name2', clazz:'', val: itemList.itemName}))
						.attr('style', 'display: inline;'))
				
		).append($(createDiv({id:'', clazz:''}))
				.append($(createPtag({ val: itemList.colorExp}))
						.attr('style', 'margin-bottom: 3px')))
		.append($(createDiv({id:'', clazz:''}))
				.append($(createPtag({val: itemList.textureExp}))
						.attr('style', 'margin-bottom: 3px')))
		.append($(createDiv({id:'', clazz:''}))
				.attr('style', 'margin-top: 25px;')
				.append($(createPtag({val:'전체 평점'}))
						.attr('style', 'margin-bottom: 3px')))
		.append($(createDiv({id:'', clazz:''}))
				.attr('style', 'margin-top: 5px; margin-bottom: 25px;')
				.append($(createATag({id: 'item-grade', val:'nn개의 모든 상품평 읽기'}))
						.attr('style', 'margin-bottom: 3px'))
				.append('&nbsp;&nbsp;&nbsp;')
				.append($(createATag({id: 'item-grade', val:'상품평 쓰기'}))
						.attr('style', 'margin-bottom: 3px')))	
		.append($(createHr({clazz:''}))
				.attr('style','border: 0.5px solid lightgray; width: 100%; margin: 0 auto;'))
		;
		$('#item-div1-2-1-2-4')
		.append($(createDiv({id:'', clazz:''})).attr('style', 'margin-top: 25px;')
				.append($(createButton({type:'input', id:'buy-item ', val:'장바구니 담기'}))
						.attr('style', 'color: white; text-align: center; background-color:black; width: 100%; height: 60px; line-height: 64px; border-style: solid; border-color: white; border-width: 0; display: inline-block; cursor:point;')
							.on('click',function (){
								if(customId){
									var jason = {
											customId : customId,
											itemSeq  : itemList.itemSeq
									}
									$.ajax({
										url:context+'/putBasket',
										method:'POST',
										data: JSON.stringify(jason),
										dataType:'json',
										contentType: 'application/json',
										success: x=>{
											if(x.success==1){
												//할일: 장바구니 팝업하는것
												console.log($(this));
											}else if(x.success==0){
												alert('해당 상품 재고가 없습니다');
											}else{
												alert('장바구니 담기에 실패했습니다. 다시 시도해 주세요');
											}
										},
										error: function(x,s,m){alert(m);}
									})
								}else{
									alert("로그인 후 다시 주문");	//할일: 팝업으로 만들기
								}
							})
				)
		);
		
	};
	return {onCreate: onCreate};
})();
		 
app.router = (()=>{
	  var onCreate=x=>{
	  $.getScript(x+'resources/js/router.js',()=>{ 
	      $.extend(new Router(x));
	      });        
	  };
	  return {onCreate:onCreate};
})();