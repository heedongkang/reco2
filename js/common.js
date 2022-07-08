
$(document).ready(function(){
	if(navigator.userAgent.indexOf("Trident") > 0){
        alert('레코는 Microsoft Edge, Chrome 브라우저에 최적화 되어있습니다. ' +
            '익스플로러는 22년 6월15일부로 종료됨에따라 확인버튼을 누르면 Edge브라우저로 자동으로 이동됩니다.\nEdge 브라우저가 없는 경우에는 Edge 또는 크롬 브라우저를 설치하세요.');
        window.location = 'microsoft-edge:' + 'https://heedongkang.github.io/reco/reco/index.html';
		$('.contents').hide(); 
    }else if(/MSIE \d |Trident.*rv:/.test(navigator.userAgent)){
   		alert('레코는 Microsoft Edge, Chrome 브라우저에 최적화 되어있습니다. ' +
            '익스플로러는 22년 6월15일부로 종료됨에따라 확인버튼을 누르면 Edge브라우저로 자동으로 이동됩니다.\nEdge 브라우저가 없는 경우에는 Edge 또는 크롬 브라우저를 설치하세요.');
        window.location = 'microsoft-edge:' + 'https://heedongkang.github.io/reco/reco/index.html';
		$('.contents').hide(); 
    }else{

	    const user = navigator.userAgent;
		let isCheck = false;
		if($(window).width() <=1180){
		   isCheck = true;
	        $('#topVideo source').attr('src','./images/mainVisualMobile.mp4');
			$('#topVideo')[0].load();
		}
	
		setTimeout(function(){
	            $('#animation_box').removeAttr('class').attr('class', '');
	            $('#animation_box').addClass('animated');
	            $('#animation_box').addClass('bounceOut');
	            setTimeout(function(){
	            	$('#animation_box').hide();
			    	$('.contents').show();
					
					$('#fullpage').fullpage({
						licenseKey:'P7KCJ-NNI36-K0ZK9-JZ5J9-KRLAL',
						scrollOverflow: true,
						navigation: true,
						navigationPosition: 'right',
						keyboardScrolling: true,
						autoScrolling: true,
						lockAnchors: false,
						fitToSection: true,
						dragAndMove:true,
						scrollBar: false,
						scrollHorizontally: false,
						scrollOverflowReset:true,
						anchors: ['1', '2', '3', '4', '5'],
						afterResize: function(width, height){
							videoResize();
						},
						afterLoad: function(origin, destination, direction, trigger){
							//Contract US 색상변경  
							if(destination.anchor == '1' ){
								$('#header .menuArea .contact a').css('color','#fff');
							}else{
								$('#header .menuArea .contact a').css('color','#222');
							}
							if(isCheck){
								//압도적인 처리량 스크롤처리 및 타이틀 이벤트
								//모바일의 가로스크롤 터치를 위해 overflow 변경  
								if(destination.anchor == '3'){
									$('.wrapper').stop().animate({scrollLeft:'15000'},19000);
									$('.wrapper').css('overflow-x','')
								}else{
									$('.wrapper').stop();
									$('.wrapper').scrollLeft(0);
								}
								
								if($(window).width() <=767){
								}else{
									//빠른견적, 빠른수거 타이틀 이벤트
									if(destination.anchor == '4'){
										$('#quick_ani').addClass('animated');
							            $('#quick_ani').addClass('bounce');
									}else{
										$('#quick_ani').removeAttr('class').attr('class', '');
										$('#quick_ani').addClass('quickList');
									}
								}
								
								//레코와 상담하세요 화면에서 상담 아이콘 위치 보정 
								if(destination.anchor == '5'){
									$('.Launcherstyled__Wrapper-oef45p-0').css('top','80%');
								}else{
									$('.Launcherstyled__Wrapper-oef45p-0').css('top','auto');
								}
								
							}else{
								//레코를 선택해야하는 이유 타이틀 이벤트
								if(destination.anchor == '2'){
									$('#titleA_ani').show();
						            $('#titleA_ani').addClass('animated');
						            $('#titleA_ani').addClass('bounceInLeft');
								}else{
									$('#titleA_ani').removeAttr('class').attr('class', '');
									$('#titleA_ani').addClass('inner');
						            $('#titleA_ani').hide();
								}
								//압도적인 처리량 스크롤처리 및 타이틀 이벤트 
								if(destination.anchor == '3'){
									$('.wrapper').stop().animate({scrollLeft:'12000'},17000);
									//$('#portfolio_ani').addClass('animated');
						            //$('#portfolio_ani').addClass('shake');
								}else{
									$('.wrapper').stop();
									$('.wrapper').scrollLeft(0);
									//$('#portfolio_ani').removeAttr('class').attr('class', '');
									//$('#portfolio_ani').addClass('inner');
								}
								//빠른견적, 빠른수거 타이틀 이벤트
								if(destination.anchor == '4'){
									$('#quick_ani').addClass('animated');
						            $('#quick_ani').addClass('bounce');
								}else{
									$('#quick_ani').removeAttr('class').attr('class', '');
									$('#quick_ani').addClass('quickList');
								}
								//레코와 상담하세요 버튼 이벤트 
								if(destination.anchor == '5'){
									$('#btn_ani').addClass('animated');
						            $('#btn_ani').addClass('flash');
									$('.Launcherstyled__Wrapper-oef45p-0').css('top','80%');
								}else{
									$('#btn_ani').removeAttr('class').attr('class', '');
									$('#btn_ani').addClass('btnList');
									$('.Launcherstyled__Wrapper-oef45p-0').css('top','auto');
								}
							}
						}
					});
				fullpage_api.reBuild();
				videoResize();	    
            },800);
		},1800);
	}

	//압도적인 처리량 가로스크롤 터치 이벤트 처리 
	var x,left,down;	
	$('.wrapper').click(function(){
		$('.wrapper').stop();
	});

	$(".wrapper").on("touchmove", function(e){
		$('.wrapper').stop();
	});
	
	$(".wrapper").mousedown(function(e){
	  $('.wrapper').stop();
	  $(this).css("cursor", "pointer");
	  e.preventDefault();
	  down = true;
	  x = e.pageX;
	  left = $(this).scrollLeft();
	});
	
	$("body").mousemove(function(e){
	  if(down){
		$(this).css("cursor", "default");
	    var newX = e.pageX;
	    $(".wrapper").scrollLeft(left - newX + x);
	  }
	});
	
	$("body").mouseup(function(e){down = false;});

});

function videoResize(){
	if($(window).width() >1180){
	    if($('#topVideo').height() < $(window).innerHeight()) {
			$('#topVideo').removeAttr('style').attr('style', '');
	      	$('#topVideo').css("height",$(window).innerHeight());
			if($('#topVideo').width() < $(window).width()) {
				$('#topVideo').removeAttr('style').attr('style', '');
				$('#topVideo').css("width",$(window).width());	
			}	
	    }else{
			$('#topVideo').removeAttr('style').attr('style', '');
			$('#topVideo').css("width",$(window).width());
			if($('#topVideo').height() < $(window).innerHeight()) {
				$('#topVideo').removeAttr('style').attr('style', '');
	      		$('#topVideo').css("height",$(window).innerHeight());
			}
		}
	}
}

