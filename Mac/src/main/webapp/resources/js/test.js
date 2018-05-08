var app = app || {};
app = (()=>{
	var init = x =>{
	        $.extend(new Router(x));
	      app.mainitem.onCreate();
	};
	return {init:init};
})();
var createImg1=x=>{
    return '<img id = "'+x.id+'" src = "'+x.src+'" alt="'+x.alt+'"></img>';
};
var createImg=x=>{
	return '<img src="'+$.image()+'/'+x.img+'" id="'+x.id+'" class="'+x.clazz+'" alt="'+x.alt+'" title="'+x.title+'">';
}
var createOL=x=>{
	return '<ol id="'+x.id+'" class="'+x.clazz+'"></ol>'
}
var createLI=(x)=>{
    return '<li id="'+x.id+'" class="'+x.clazz+'">'+x.val+'</li>';
}
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
    return '<button type="button" id="'+x.id+'" class="btn'+x.clazz+'" >'+x.val+'</button>';
}
var createUL=(x)=>{
    return '<ul id="'+x.id+'" class="'+x.clazz+'"></ul>';
}
var createInput=x=>{
    return '<input id="'+x.id+'" name="'+x.name+'" placeholder="'+x.val+'" type="'+x.type+'"/>'
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
var createPtag1=x=>{
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
app.mainitem=(()=>{
	var $content, context, jview;
	var onCreate =x=>{
		$content = $('#content');
		 context = $.context();
		setContentView(x);
		jview = context+'resources/js/j_app.js';
	};
	var setContentView=x=>{
		
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
		var classCode = 'AA';
		$.getJSON(context+'/subMainItems/'+classCode, d=>{
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
															//app.item.onCreate({'itemSeq': $(this).attr("itemSeq"), 'itemCode': $(this).attr("itemCode")});
														}))
										).append($(createDiv({id:'', clazz: ''}))
												.append($(createPtag({val: subObject[i].commonNameE})))
										)
											//.append($(createInput({id:'',val:'*주문당 하나의 쿠폰코드만 사용 가능합니다',type:'text'}))
										
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
										.append($(createImg({id:'', src:subObject[i].itemCode+'.JPG', alt:'EYE SHADOW', title:'EYE SHADOW', clazz:'pnt'}))
												.attr('itemSeq', subObject[i].itemSeq)
												.attr('itemCode', subObject[i].itemCode)
												.on('click', function(){
													alert('그림누름!');
													//app.item.onCreate({itemSeq: $(this).attr("itemSeq"), itemCode: $(this).attr("itemCode")});
												}))
								).append($(createDiv({id:''}))
										.attr('style', 'border-top: 1px solid #c7c7c7; position: absolute; bottom: 5px;')
										.append($(createDiv({id:''}))
												.attr('style','display: inline-block;  width: 292.750px;')
												.append($(createHTag({num:'4', val:'₩'+subObject[i].discountPrice}))
														.attr('style', 'margin-bottom: 0; margin-top: 16px;'))
										).append($(createDiv({id:''})).attr('style', 'margin-top: 8.5px; display: inline-block; float: right;')
												.append($(createButton({val:'장바구니 담기'}))
														.attr('style','border: 0; margin: 0; padding-top: 0; padding-bottom:0; width:130px; height:30px; background-color: black; color: white; font-size: 15px;'))
										)
								)
						)		
				);
			}
		});

};
	return {onCreate: onCreate};
})();