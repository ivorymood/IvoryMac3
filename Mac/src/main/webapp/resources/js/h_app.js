var app = app || {};
app = (()=>{
	var init =x=>{
		$.getScript(x+'/resources/js/router.js', ()=>{
			$.extend(new Router(x));
			//app.route.init(x);//
			app.mainitem.onCreate();
		});
	};
	return {init: init};
})();
/*app.route=(()=>{
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
})();*/
var createTabList=x=>{
    var tab = '<table id="'+x.id+'" class="'+x.clazz+'">'
    +'<thead><tr>'
    +'<th colspan="5">'+x.txt+'</th>'
    +'</tr></thead>';
    $.each(JSON.parse(x.jason), (i,j)=>{	//forloop같은것. 이때 jason은 리스트
        tab +=
        '<tr>'
        +'<td id="td'+i+'">'+j.a+'</td>'
        +'<td id="td'+i+'">'+j.b+'</td>'
        +'<td id="td'+i+'">'+j.c+'</td>'
        +'<td id="td'+i+'">'+j.d+'</td>'
        +'<td id="td'+i+'">'+j.e+'</td>'
        +'</tr>'
    });
    tab += '</table>';
    return tab;
}
var createTab =x=>{
	return '<table id="'+x.id+'" class="'+x.clazz+'"></table>';
}
var createTh =x=>{
	var temp='<tr>';
	$.each(x.list, (k,val)=>{
	 temp+='<th id="th_'+k+'" class="'+x.thClazz+'">&nbsp;'+val+'</th>';
	});
	temp+='</tr>';
	return temp;
}
var createTr=x=>{
    var temp = '';
    var i=0;
    $.each(x.list, (k,val)=>{
    	i++;
    	temp +='<tr id="tr_'+i+'" class="'+x.clazz+'">'
        			+createTd({
        				list: val, 
        				idx: i, 
        				clazz: x.jason.clazz
        				})+'</tr>';
    });
    return temp;
}
var createTd=x=>{
    var temp = '';
    var j=0;
	$.each(x.list,(k,val)=>{
		j++;
		temp +='<td id="td_'+x.idx+'_'+j+'" class="'+x.clazz+j+'">'
										+'&nbsp;'+val+'</td>';
	});
    return temp;
}
var createSelectOpiton=x=>{
	var temp='<select id="'+x.id+'" name="'+x.name+'">'
	var i=0;
	$.each(x.list, (k,val)=>{
		i++;
		if(i==='1'){
			temp 	+='<option value="'+k+'" selected>'
			+val
			+'</option>';
		}else{
			temp 	+='<option value="'+k+'" >'
			+val
			+'</option>';
		}
	});
	temp+='</select>';
	return temp;
}
var setCountArray=x=>{
	var a = new Array();
	for(var i=1; i<=x; i++){
		a.push(i);
	}
	return a;
}
var createQuestionTab=x=>{
    var tab = '<table id="'+x.id+'" class="'+x.clazz+'">';
    $.each(x.jason, (i,j)=>{	//forloop같은것. 이때 jason은 리스트
        tab +=
        '<tr>'
        +'<td id="tr'+i+'">'+j+'</td>'
        +'</tr>'
    });
    tab += '</table>';
    return tab;
}
var createHr=x=>{
	return '<hr id="'+x.id+'" class="'+x.clazz+'">';
}
var createPTag=x=>{
	return '<p id="'+x.id+'" class="'+x.clazz+'" >'+x.val+'</p>';
}
var createHTag=x=>{
	return '<h'+x.num+' id="'+x.id+'" class="'+x.clazz+'">'+x.val+'</h'+x.num+'>';
}
var createDiv=x=>{
	return '<div id="'+x.id+'" class="'+x.clazz+'" role="'+x.role+'" ></div>';
}
var createOL=x=>{
	return '<ol id="'+x.id+'" class="'+x.clazz+'"></ol>';
}
var createUL=x=>{
	return '<ul id="'+x.id+'" class="'+x.clazz+'"></ul>';
}
var createLIC=x=>{
	return '<li id="'+x.id+'" class="'+x.clazz+'" data-target="'+x.dtarget+'" data-slide-to="'+x.dslide+'" ></li>';
}
var createLIB=x=>{
	return '<li id="'+x.id+'" class="'+x.clazz+'" aria-current="'+x.acurrent+'">'+x.val+'</li>';
}
var createLI=x=>{
	return '<li id="'+x.id+'" class="'+x.clazz+'"></li>';
}
var createNav=x=>{
	return '<nav id="'+x.id+'" class="'+x.clazz+'" aria-label="'+x.alabel+'" role="'+x.role+'"></nav>';
}
var createLabel=x=>{
	return '<label id="'+x.id+'" class="'+x.clazz+'">'+x.val+'</label>';
}
var createATag=x=>{
	return '<a id="'+x.id+'" href="#">'+x.val+'</a>';
}
var createATagh=x=>{
	return '<a id="'+x.id+'" href="'+x.href+'">'+x.val+'</a>';
}
var createText=x=>{
	return '<span id="'+x.id+'"></span>';
}
var createSpan=x=>{
	return '<span id="'+x.id+'" class="'+x.clazz+'" >'+x.val+'</span>';
}
var createSpanCon=x=>{
	return '<span class="glyphicon '+x+'" aria-hidden="true"></span>';
}
var createInput=x=>{
	return $('<input type="'+x.type+'" id="'+x.id+'" class="'+x.clazz+'"' 
			+' placeholder="'+x.holder+'" role="'+x.role+'" aria-describedby="basic-addon1"/>');
}
var createButton=x=>{
	return '<button type="'+x.type+'" id="'+x.id+'" class="btn-'+x.clazz+'">'+x.val+'</button>';
}
var createForm =x=>{
	return '<form id="'+x.id+'" class="'+x.clazz+'" action="'+x.action+'" method="'+x.method+'" role="'+x.role+'"></form>';
}
var createImg=x=>{
	return '<img src="'+x.src+'" alt="'+x.alt+'" id="'+x.id+'" class="'+x.clazz+'" align="'+x.align+'" title="'+x.title+'">';
}
app.mainitem=(()=>{
	var $content, context, image;
	var onCreate =()=>{
		$content = $('#content');
		context = $.context();
		setContentView();
	};
	var setContentView=()=>{
		$content.empty();
		$content.html($(createDiv({id:'mainitem-container'})));
		$('#mainitem-container')
		.append($(createDiv({id:'item-div0'})))
		.append($(createDiv({id:'item-div1'})))
		;
		
		$('#item-div0').attr('style','border-bottom: 1px solid lightgray; width:100%; height:61px; ')
		.append($(createDiv({id:'',clazz:''})).attr('style','padding-left: 150px; padding-top: 20px;')
				.append($(createHTag({num:'4', id:'bread-main1', val:'아이(변동)'})).attr('style', 'display:inline; '))
				.append('&nbsp;')
				.append($(createSpanCon('glyphicon-menu-right')))
				.append('&nbsp;')
				.append($(createHTag({num:'4', id:'bread-main1', val:'섀도우'})).attr('style', 'display:inline; font-size:18px; font-weight:500; font-height:1.1;'))
		);
		
		$('#item-div1')
		.append($(createDiv({id:'grid-container-catalog', clazz:'grid-container-catalog'})).attr('style', 'width: 1281px; padding-top:40px; padding-right:15px; padding-left: 15px; margin-left: 151px; margin-right: 151px;')	
				.append($(createDiv({id:'grid-row-catalog1', clazz:'grid-row-catalog'})).attr('style', 'position: relative; height: 540px; margin-bottom: 20px;'))
				.append($(createDiv({id:'grid-row-catalog2', clazz:'grid-row-catalog'})).attr('style', 'position: relative; height: 540px; margin-bottom: 20px;'))
				.append($(createDiv({id:'grid-row-catalog3', clazz:'grid-row-catalog'})).attr('style', 'position: relative; height: 540px; margin-bottom: 20px;'))
		);
		for(var i=1; i<4; i++){
				
				for(var j=0; j<4; j++){
						if(j==i){
								$('#grid-row-catalog'+i)
								.append($(createDiv({id:'test', clazz:''})).attr('style', 'position: absolute; top: 0px; left: '+(312.75*i)+'px; width: 312.75px; padding-left: 10px; padding-right: 10px; margin-bottom: 45px; display: inline-block; ')	
										.append($(createDiv({clazz:'grid-item-catalog'})).attr('style', 'padding-top: 15px; height: 479px; border-top:1px solid black; background-color: black;')
												.append($(createDiv({id:''})).attr('style','margin-top:100px;')
														.append($(createDiv({id:''})).attr('style','margin-bottom: 12px;')
																.append($(createHTag({num:'3', val:'쉐이드별 섀도우 구매하기'})).attr('style','color: white; text-align: center;'))
														).append($(createDiv({id:''})).attr('style','margin-bottom: 18px;')
																.append($(createHTag({num:'4', val:'베이지+브라운'})).attr('style','color: white; text-align: center;'))
														).append($(createDiv({id:''})).attr('style','margin-bottom: 18px;')
																.append($(createHTag({num:'4', val:'블루+그린'})).attr('style','color: white; text-align: center;'))
														).append($(createDiv({id:''})).attr('style','margin-bottom: 18px;')
																.append($(createHTag({num:'4', val:'그레이+블랙'})).attr('style','color: white; text-align: center;'))
														).append($(createDiv({id:''})).attr('style','margin-bottom: 18px;')
																.append($(createHTag({num:'4', val:'오렌지+퍼플'})).attr('style','color: white; text-align: center;'))
														)
												)
										)		
								);
								
						}else{
								$('#grid-row-catalog'+i)
								.append($(createDiv({clazz:''})).attr('style', 'position: absolute; top: 0px; left:'+(312.75*j)+'px; width: 312.75px; padding-left: 10px; padding-right: 10px; margin-bottom: 45px; display: inline-block; vertical-align: super;')	
										.append($(createDiv({clazz:'grid-item-catalog'})).attr('style', 'padding-top: 15px; height: 479px; border-top:1px solid #c7c7c7;')
												.append($(createDiv({id:''}))
														.append($(createDiv({id:''}))
																.append($(createHTag({num:'4', val:'아이섀도우', clazz:'pnt'})).attr('style', 'margin:0;')
																		.on('click', ()=>{
																			app.item.onCreate({itemSeq:'2', itemCode:'3000'});
																		}))
														).append($(createDiv({id:''}))
																.append($(createPTag({val:'EYE SHADOW'})))
														)
												).append($(createDiv({id:''})).attr('style','margin-left: 50px; float: right;')
														.append($(createDiv({id:''}))
																.append($(createHTag({num:'4', val:'★★★★★'})))
														).append($(createDiv({id:''})).attr('style','float: right;')
																.append($(createHTag({num:'4', val:'♡'})))
														)
												).append($(createDiv({id:''}))
														.append($(createImg({src:$.image()+'/mainitem3.jpg', alt:'EYE SHADOW', title:'EYE SHADOW', clazz:'pnt'}))
																.on('click', ()=>{
																	app.item.onCreate({itemSeq:'2', itemCode:'3000'});
																}))
												).append($(createDiv({id:''})).attr('style', 'border-top: 1px solid #c7c7c7;')
														.append($(createDiv({id:''})).attr('style','display: inline-block;')
																.append($(createHTag({num:'4', val:'₩nn,nnn'})).attr('style', 'margin-bottom: 0; margin-top: 16px;'))
														).append($(createDiv({id:''})).attr('style', 'margin-top: 8.5px; display: inline-block; float: right;')
																.append($(createButton({val:'장바구니 담기'})).attr('style','border: 0; margin: 0; paddig: 0; width:130px; height:25px; background-color: black; color: white; font-size: 15px;'))
														)
												)
										)		
								);
						};
				};		
		};		
};
	return {onCreate: onCreate};
})();

app.item=(()=>{
	var $content, context, image;
	var onCreate =x=>{
		$content = $('#content');
		context = $.context();
		setContentView(x);
	};
	var setContentView=x=>{
		$.getJSON(context+'/hyunyu/item/'+x.itemSeq+'/'+x.itemCode, d=>{
			
		
		alert("000?");
		});	
		
		$content.empty();
		$content.html($(createDiv({id: 'item-container', clazz: 'h-item-container'})).attr('style', ''));
		
		$('#item-container')
		.append($(createDiv({id:'item-div0', clazz:''})).attr('style', 'border-bottom: 1px solid lightgray; width:100%; height:61px; '))
		.append($(createDiv({id:'item-div1', clazz:''})).attr('style', 'border-bottom: 1px solid lightgray; width:100%; height:804.4px; '))
		.append($(createDiv({id:'item-div2', clazz:''})).attr('style', 'border-bottom: 1px solid lightgray; width:100%; '))
		.append($(createDiv({id:'item-div3', clazz:''})).attr('style', 'border-bottom: 1px solid lightgray; width:100%; height:659px; '))
		;
		
		$('#item-div1')
		.append($(createDiv({id:'item-div1-1', clazz:'col-md-6'})).attr('style', 'height: 100%; '))
		.append($(createDiv({id:'item-div1-2', clazz:'col-md-6'})).attr('style', 'height: 100%; padding-left: 85px; padding-right: 0px;'))
		;
		
		$('#item-div2')
		.append($(createDiv({id:''})).attr('style', 'width: 1281px; height: 417.5px; margin-right: auto; margin-left: auto; margin-bottom: 25px')
				.append($(createDiv({id:'item-div2-1', clazz:''})).attr('style', 'padding-top: 40px; padding-bottom: 36px; height: 138.5px'))
				.append($(createDiv({id:'item-div2-2', clazz:''})).attr('style', 'height: 254px'))
				.append($(createDiv({id:'item-div2-3', clazz:''})).attr('style', 'height: 25px; padding-top: 7px'))		
		)
		;
		
		$('#item-div3')
		.append($(createDiv({id:'item-div3-1', clazz:''})))
		.append($(createDiv({id:'item-div3-2', clazz:''})))
		;
		
		$('#item-div1-2')
		.append($(createDiv({id:'item-div1-2-1', clazz: 'col-md-6'})).attr('style', 'border-left: 1px solid lightgray; height: 100%; ' ))
		.append($(createDiv({id:'item-div1-2-2', clazz: 'col-md-6'})).attr('style', 'height: 100%; padding: 0'))
		;
		$('#item-div1-2-1')
		.append($(createDiv({id:'item-div1-2-1-1', clazz:''})).attr('style', 'width:100%; height: 204.4px; padding-top: 5px; padding-bottom: 0px;'))
		.append($(createDiv({id:'item-div1-2-1-2', clazz:''})).attr('style', 'width:100%; height: calc(100%-204.4px); padding-bottom: 5px;'))
		;
		$('#item-div1-2-2')
		.append($(createDiv({id:'item-div1-2-2-1', clazz:''})).attr('style', 'height: 520px; padding:0px;'))
		;
		
		$('#item-div1-2-1-2')
		.append($(createDiv({id:'item-div1-2-1-2-1', clazz:''})))
		.append($(createDiv({id:'item-div1-2-1-2-2', clazz:''})))
		.append($(createDiv({id:'item-div1-2-1-2-3', clazz:''})))
		.append($(createDiv({id:'item-div1-2-1-2-4', clazz:''})))
		;
		
		
		////////////////////////////////
		/*$.ajax({
			url: context+"/board/post/article",
			data: JSON.stringify({
				id: $('#input-id').val(),
				title: $('#input-title').val(),
				content: $('#input-content').val()
			}),
			dataType: 'text',
			contentType: 'application/json',
			method: 'POST',
			beforeSubmit: function(){
				alert("로딩화면!");
			},
			success: d=>{
				alert("성공ㅇㅇㅇ");
			
			},
			error: function(x,s,m){alert(m);}
		});*/
		/*$.ajax({
			url: context+"/hyunyu/detailItem",
			data: JSON.stringify({
				itemSeq: x.itemSeq,
				itemCode: x.itemCode
			}),
			contentType:"application/json",
			method: 'post',
			success: d=>{
				
			},
			error: function(x,s,m){alert(m);}
		});*/
		
		$('#item-div0')
		.append($(createDiv({id:'',clazz:''})).attr('style','padding-left: 150px; padding-top: 20px;')
				.append($(createHTag({num:'4', id:'bread-main1', val:'아이(변동)'})).attr('style', 'display:inline; '))
				.append('&nbsp;')
				.append($(createSpanCon('glyphicon-menu-right')))
				.append('&nbsp;')
				.append($(createATagh({href:'#', id:'bread-main1', val:'섀도우'})).attr('style', 'display:inline; font-size:18px; font-weight:500; font-height:1.1;'))
				.append('&nbsp;')
				.append($(createSpanCon('glyphicon-menu-right')))
				.append('&nbsp;')
				.append($(createHTag({num:'4', id:'bread-detail', val:'아이섀도우(변동)'})).attr('style', 'display:inline; '))
		);
		
		
		$('#item-div1-1')
		.append($(createDiv({id:'carousel-example-generic', clazz: 'carousel slide'}))
				.attr('style', 'float: right; margin-right: 5px; width: 651px; hieght: 609px;'));
		$('#carousel-example-generic')
		.append($(createOL({clazz:'carousel-indicators'}))
				.append($(createLIC({clazz:'active', dtarget:'#carousel-example-generic', dslide:'0'})).attr('style', 'border: 0.5px solid lightgray'))
				.append($(createLIC({dtarget:'#carousel-example-generic', dslide:'1'})).attr('style', 'border: 0.5px solid lightgray'))
		).append($(createDiv({clazz:'carousel-inner'}))
				.append($(createDiv({clazz:'item active'}))
						.append($(createImg({src:$.image()+'/zoomitem.jpg', alt:''}))))
				.append($(createDiv({clazz:'item'}))
						.append($(createImg({src:$.image()+'/zoomitem2.jpg', alt:''}))))
		);
		$('.carousel').carousel({interval: false});
	
		
		//.append($(createImg({id:'mainitem', clazz:'', alt:'mainitem', src:$.image()+'/zoomitem.jpg'})).attr('style', 'margin:0 auto;'))
		//.attr('style', 'margin: auto; vertical-align:middle; display: inline-block;')
		
		$('#item-div1-2-1-1')
		.append($(createDiv({id:'div-item-name'})).attr('style','padding-bottom:5px')
				.append($(createHTag({num:'3', id: 'common-name', clazz: '', val:'아이섀도우'})))
				.append($(createPTag({id: 'common-name-eng', clazz:'', val:'EYE SHADOW'}))))
		.append($(createDiv({id: 'description', clazz:''})).attr('style', 'margin-bottom: 11px;')
				.append($(createDiv({id:'des-1', clazz:''}))
						.append($(createATag({id: 'commond-rec', clazz:'', val:'제품설명'}))).attr('style', 'margin-bottom: 5px;'))
				.append($(createDiv({id:'des-2'}))
						.append($(createATag({id: 'common-rec', clazz:'', val:'사용 추천'}))).attr('style', 'margin-bottom: 5px;'))
				.append($(createDiv({id:'des-3'}))
						.append($(createATag({id: 'detail-info', clazz:'', val:'상세 정보'}))).attr('style', 'margin-bottom: 5px;'))
				.append($(createDiv({id:'des-4'}))
						.append($(createATag({id: 'ingredient', clazz:'', val:'성분'}))).attr('style', 'margin-bottom: 5px;'))
		).append($(createHr({clazz:''})).attr('style','border: 0.5px solid lightgray; width: 100%; margin: 0 auto;'));
	
	
		$('#item-div1-2-1-2-1')
		.append($(createDiv({id:'', claxx:''})).attr('style', 'padding-top: 15px; margin-bottom: 15px')
				.append($(createATag({id: 'item-name1', clazz:'', val:'아이섀도우 이름(변동)'})).attr('style', 'margin-bottom: 5px;'))
				.append($(createSpanCon({con:'glyphicon-triangle-right'})).attr('style', 'display: inline; float: right;'))
		).append($(createHr({clazz:''})).attr('style','border: 0.5px solid lightgray; width: 100%; margin: 0 auto;'))
		;
		
		$('#item-div1-2-1-2-2')
		.append($(createDiv({id:'', clazz:''})).attr('style', 'margin-top: 8px; margin-bottom: 5px;')
				.append($(createHTag({num: '3', id: 'item-name2', clazz:'', val:'아이섀도우 이름(변동)'})).attr('style', 'display: inline;'))
				
		).append($(createDiv({id:'', clazz:''}))
				.append($(createPTag({id: 'color-exp', clazz:'', val:'색깔설명(변동)'})).attr('style', 'margin-bottom: 3px')))
		.append($(createDiv({id:'', clazz:''}))
				.append($(createPTag({id: 'texture-exp', clazz:'', val:'질감설명(변동)'})).attr('style', 'margin-bottom: 3px')))
		.append($(createDiv({id:'', clazz:''})).attr('style', 'margin-top: 25px;')
				.append($(createPTag({id: 'item-grade', clazz:'', val:'전체 평점'})).attr('style', 'margin-bottom: 3px')))
		.append($(createDiv({id:'', clazz:''})).attr('style', 'margin-top: 5px; margin-bottom: 25px;')
				.append($(createATag({id: 'item-grade', val:'nn개의 모든 상품평 읽기'})).attr('style', 'margin-bottom: 3px'))
				.append('&nbsp;&nbsp;&nbsp;')
				.append($(createATag({id: 'item-grade', val:'상품평 쓰기'})).attr('style', 'margin-bottom: 3px')))	
		.append($(createHr({clazz:''})).attr('style','border: 0.5px solid lightgray; width: 100%; margin: 0 auto;'))
		;
		
		$('#item-div1-2-1-2-3')
		.append($(createDiv({id:'', clazz:''}))
				.append($(createPTag({id: 'weight', clazz:'', val:'n.n g'})).attr('style', 'display:inline;'))
				.append($(createATag({id: 'share', val:'공유하기'})).attr('style', 'display:inline; float: right;')))
		.append($(createDiv({id:'', clazz:''})).attr('style', 'margin-top: 25px;')
				.append($(createHTag({num:'4', id:'price', clazz:'', val:'₩nn,nnn'})).attr('style', 'display:inline; '))
				.append($(createSpanCon({con: 'glyphicon-heart-empty'})).attr('style', 'display:inline; float: right;')))
		;
		$('#item-div1-2-1-2-4')
		.append($(createDiv({id:'', clazz:''})).attr('style', 'margin-top: 25px;')
				.append($(createButton({type:'input', id:'buy-item ', val:'장바구니 담기'}))
						.attr('style', 'color: white; text-align: center; background-color:black; width: 100%; height: 60px; line-height: 64px; border-style: solid; border-color: white; border-width: 0; display: inline-block; cursor:point;')))
		;
		
		$('#item-div1-2-2-1').attr('style', 'height: 550px; padding: 0px;')
		.append($(createDiv({id:''})).attr('style','height:30px;')
				.append($(createButton({type:'button', id:'scroll-up ', val: '∧'}))
						.attr('style', 'color: white; text-align: center; background-color:black; width: 100%; height:100%; border-style: solid; border-color: white; border-width: 0; display: inline-block; cursor:point;'))
				//.append($(createSpanCon({con:'glyphicon-chevron-up' })).attr('style', 'margin: 0 auto;'))	
		)
		.append($(createDiv({id: '', clazz: 'owl-carousel----'})).attr('style', 'height: calc(100% - 60px);')
				.append($(createDiv({id:'', clazz:'btn-group-vertical', role:'group'}))
						.append($(createButton({type:'button', val:''})).attr('style', 'border: 0; margin: 0; paddig: 0; background-color: #F7D9CB; width: 349px; height: 60px;'))
						.append($(createButton({type:'button', val:''})).attr('style', 'border: 0; margin: 0; paddig: 0; background-color: #DAA378; width: 349px; height: 60px;'))
						.append($(createButton({type:'button', val:''})).attr('style', 'border: 0; margin: 0; paddig: 0; background-color: #FF9FA7; width: 349px; height: 60px;'))
						.append($(createButton({type:'button', val:''})).attr('style', 'border: 0; margin: 0; paddig: 0; background-color: #FFDCA5; width: 349px; height: 60px;'))
						.append($(createButton({type:'button', val:''})).attr('style', 'border: 0; margin: 0; paddig: 0; background-color: #A7624E; width: 349px; height: 60px;'))
						.append($(createButton({type:'button', val:''})).attr('style', 'border: 0; margin: 0; paddig: 0; background-color: #AC766A; width: 349px; height: 60px;'))
						.append($(createButton({type:'button', val:''})).attr('style', 'border: 0; margin: 0; paddig: 0; background-color: #F9EDE8; width: 349px; height: 60px;'))
						.append($(createButton({type:'button', val:''})).attr('style', 'border: 0; margin: 0; paddig: 0; background-color: #B7AFB3; width: 349px; height: 60px;'))
				)
				
				
				
		).append($(createDiv({id:''})).attr('style','height:30px;')
				.append($(createButton({type:'button', id:'scroll-down ', val: '∨'}))
						.attr('style', 'color: white; text-align: center; background-color:black; width: 100%; height:100%; border-style: solid; border-color: white; border-width: 0; display: inline-block; cursor:point;'))
				//.append($(createSpanCon({con:'glyphicon-chevron-down' })).attr('style', 'margin: 0 auto;'))	
		);
		
		$('#item-div2-1')
		.append($(createDiv({id:''})).attr('style','display: table; margin-right: auto; margin-left: auto;')
				.append($(createHTag({num: '2', id:'title-galary', clazz:'', val:'#MACCOSMETICS'})).attr('style', 'margin: 0')))
		.append($(createDiv({id:''})).attr('style','display: table; margin-right: auto; margin-left: auto;')
				.append($(createPTag({id:'subtitle-galary', clazz:'', val: '당신의 #MACCOSMETICS를 보여주세요'})).attr('style','margin-bottom:0')))				
		;

		
		$('#item-div2-2')
		.load(context+'/galary');
		
		
		$('#item-div2-3')
		.append($(createDiv({id:'',})).attr('style','padding-right: 25px')
				.append($(createATag({id:'plus-pic', clazz:'', val:'사진 추가 '})).attr('style','display: inline; float: right;'))
				.append('&nbsp;&nbsp;').attr('style','display: inline; float: right;')
				.append($(createATag({id:'galary', clazz:'', val:'갤러리보기'})).attr('style','display: inline; float: right;'))
		);
		$('#item-div3-1')
		.append($(createDiv({id:''})).attr('style','display: table; margin-right: auto; margin-left: auto; height: 110px; margin-top: 4.5px; margin-bottom: 4.5px; padding-top: 40px; padding-top: 40px;')
				.append($(createHTag({num:'2', clazz:'', val:'함께 쓰면 좋은 제품'})).attr('style', 'margin:0'))
				
		);
		$('#item-div3-2').attr('style','width: 1281px; margin-left: 151px; margin-right: 151px; height: 480px; margin-bottom: 15px;')
		.append($(createDiv({clazz:'grid-container-catalog'})).attr('sytle', 'width:100%; margin: 0 auto;')	
				.append($(createDiv({id:'grid-row-catalog', clazz:'grid-row-catalog'})).attr('style', 'position: relative; height: 540px; margin-bottom: 20px;')));
	
	
		for(var j=0; j<4; j++){
				$('#grid-row-catalog')
				.append($(createDiv({clazz:''})).attr('style', 'position: absolute; top: 0px; left:'+(312.75*j)+'px; width: 312.75px; padding-left: 10px; padding-right: 10px; margin-bottom: 45px; display: inline-block; vertical-align: super;')	
						.append($(createDiv({clazz:'grid-item-catalog'})).attr('style', 'padding-top: 15px; height: 479px; border-top:1px solid #c7c7c7;')
								.append($(createDiv({id:''}))
										.append($(createDiv({id:''}))
												.append($(createHTag({num:'4', val:'아이섀도우', clazz:'pnt'})).attr('style', 'margin:0;')
														.on('click', ()=>{
															app.item.onCreate({itemSeq:'2', itemCode:'3000'});
														}))
										).append($(createDiv({id:''}))
												.append($(createPTag({val:'EYE SHADOW'})))
										)
								).append($(createDiv({id:''})).attr('style','margin-left: 50px; float: right;')
										.append($(createDiv({id:''}))
												.append($(createHTag({num:'4', val:'★★★★★'})))
										).append($(createDiv({id:''})).attr('style','float: right;')
												.append($(createHTag({num:'4', val:'♡'})))
										)
								).append($(createDiv({id:''}))
										.append($(createImg({src:$.image()+'/mainitem3.jpg', alt:'EYE SHADOW', title:'EYE SHADOW', clazz:'pnt'}))
												.on('click', ()=>{
													app.item.onCreate({itemSeq:'2', itemCode:'3000'});
												}))
								).append($(createDiv({id:''})).attr('style', 'border-top: 1px solid #c7c7c7;')
										.append($(createDiv({id:''})).attr('style','display: inline-block;')
												.append($(createHTag({num:'4', val:'₩nn,nnn'})).attr('style', 'margin-bottom: 0; margin-top: 16px;'))
										).append($(createDiv({id:''})).attr('style', 'margin-top: 8.5px; display: inline-block; float: right;')
												.append($(createButton({val:'장바구니 담기'})).attr('style','border: 0; margin: 0; paddig: 0; width:130px; height:25px; background-color: black; color: white; font-size: 15px;'))
										)
								)
						)		
				);
	};
		
		
		
		
		
	};
	return {onCreate: onCreate};
})();