//Document

$(window).on('load', function (){
// 		$('#loading').delay(1000).fadeOut();
// //	$('#title').fadeIn();
// 		$('.title').addClass('title-active')
// 		$('header').delay(800).fadeIn(2000);

		$( '#loading' ).delay(1000).fadeOut( 10, function() {
    		$('.title').addClass('title-active')
			$('header').delay(800).fadeIn(2000);
		});
		
		// $('.top-btn').click(function(){
  //   		$('html,body').animate({ 
  //     			'scrollTop': 0 },700);
 	// 		});
		
		$('header a,footer a').click(function(){
    		var id = $(this).attr('href');
    		var position = $(id).offset().top;
    		$('html,body').animate({'scrollTop':position},500);
  		});
		
		$(window).on('scroll',function(){
    		// スクロール毎の処理
    		// スクロール量を取得
    		var scroll_top = $(window).scrollTop();

    		// eachを利用して「effect」クラスの要素それぞれに処理を行なう
    		$('.effect-1').each(function(){
				// 要素のドキュメント上の位置を取得
      			var offset_top = $(this).offset().top,
          		top_margin = 300 ; // 画面上端からのマージン
      			// スクロール量と要素の位置からマージンを引いた値を比較
      			if( scroll_top > offset_top - top_margin ){
        			// スクロール量が所定の位置を越えた時にfadeinクラスを付与
          			$('#profile-js').addClass('fadein-left');
					$('#profile-js').removeClass('opacity');
					$('#left-js,#left-js-2,#right-js').delay(800).queue(function(){
    					$(this).addClass('fadein-bottom');
						$(this).removeClass('opacity');
					})
      			}
    		});
			
			$('.effect-2').each(function(){
				// 要素のドキュメント上の位置を取得
      			var offset_top = $(this).offset().top,
          		top_margin = 400 ; // 画面上端からのマージン
      			// スクロール量と要素の位置からマージンを引いた値を比較
      			if( scroll_top > offset_top - top_margin ){
        			// スクロール量が所定の位置を越えた時にfadeinクラスを付与
   					$('#works-js').addClass('fadein-left');
					$('#works-js').removeClass('opacity');
					$('.right-content,.left-content').delay(800).queue(function(){
    					$(this).addClass('fadein-bottom');
						$(this).removeClass('opacity');
					})
      			}
    		});
			
  		});
		$('#name-1').hover(
			function(){
					$('#white-filter-1').fadeTo(300, 0);
			},function(){
					$('#white-filter-1').fadeTo(300, 1.0);
		});
		
		$('#name-2').hover(
			function(){
					$('#white-filter-2').fadeTo(300, 0);
			},function(){
					$('#white-filter-2').fadeTo(300, 1.0);
		});
		
		$('#name-3').hover(
			function(){
					$('#white-filter-3').fadeTo(300, 0);
			},function(){
					$('#white-filter-3').fadeTo(300, 1.0);
		});
		
		$('#name-4').hover(
			function(){
					$('#white-filter-4').fadeTo(300, 0);
			},function(){
					$('#white-filter-4').fadeTo(300, 1.0);
		});
		
		$('#name-5').hover(
			function(){
					$('#white-filter-5').fadeTo(300, 0);
			},function(){
					$('#white-filter-5').fadeTo(300, 1.0);
		});

		$('#white-filter-1').hover(
			function(){
				$('#name-1').addClass('leftAdd');
				$(this).fadeTo(300, 0);
		},function(){
				$('#name-1').removeClass('leftAdd');
				$(this).fadeTo(300, 1.0);
		});

		$('#white-filter-2').hover(
			function(){
				$('#name-2').addClass('leftAdd');
				$(this).fadeTo(300, 0);
		},function(){
				$('#name-2').removeClass('leftAdd');
				$(this).fadeTo(300, 1.0);
		});

		$('#white-filter-3').hover(
			function(){
				$('#name-3').addClass('leftAdd');
				$(this).fadeTo(300, 0);
		},function(){
				$('#name-3').removeClass('leftAdd');
				$(this).fadeTo(300, 1.0);
		});

		$('#white-filter-4').hover(
			function(){
				$('#name-4').addClass('leftAdd');
				$(this).fadeTo(300, 0);
		},function(){
				$('#name-4').removeClass('leftAdd');
				$(this).fadeTo(300, 1.0);
		});

		$('#white-filter-5').hover(
			function(){
				$('#name-5').addClass('leftAdd');
				$(this).fadeTo(300, 0);
		},function(){
				$('#name-5').removeClass('leftAdd');
				$(this).fadeTo(300, 1.0);
		});

		

		function toggleNav() {
			var body = document.body;
			var hamburger = document.getElementById('js-hamburger');
			var blackBg = document.getElementById('js-black-bg');

			hamburger.addEventListener('click', function() {
				body.classList.toggle('nav-open');
			});
			blackBg.addEventListener('click', function() {
				body.classList.remove('nav-open');
			});
		}
		toggleNav();
	
});
