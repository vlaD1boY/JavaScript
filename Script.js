$(document).ready(chanm);
$(document).ready(hidall);

function hidall(){
$('#b2').fadeOut(1);
$('#b3').fadeOut(1);
$('#b4').fadeOut(1);
$('#b5').fadeOut(1);
$('#b6').fadeOut(1);
$('#b7').fadeOut(1);
};
function chanm(){
	$('#m').hover(
	function (){
		$(this).css({
			background: "linear-gradient(to top, #fefcea, #f1da36)",
			color:"black",
			border:"outset",
			borderColor:"black",
			cursor: "pointer"
			})
	}		,
	function (){
		$(this).css({
			background: "linear-gradient(to top, #fefcea, #f1da36)",
			color:"blue",
			border:"outset",
			borderColor:"yellow"
			})
	}
	);
		$('#b').hover(
	function (){
		$(this).css({
			background: "linear-gradient(to top, red, snow)",
			color:"black",
			border:"outset",
			borderColor:"black",
			cursor: "pointer"
			})
	}		,
	function (){
		$(this).css({
			background: "linear-gradient(to top, #fefcea, #f1da36)",
			color:"blue",
			border:"outset",
			borderColor:"yellow"
			})
	}
	);
	$('#g').hover(
	function (){
		$(this).css({
			background: "linear-gradient(to top, green, snow)",
			color:"black",
			border:"outset",
			borderColor:"black",
			cursor: "pointer",
			})
	}		,
	function (){
		$(this).css({
			background: "linear-gradient(to top, #fefcea, #f1da36)",
			color:"blue",
			border:"outset",
			borderColor:"yellow"
			})
	}
	);
	$('#z').hover(
	function (){
		$(this).css({
			background: "linear-gradient(to top, blue, snow)",
			color:"black",
			border:"outset",
			borderColor:"black",
			cursor: "pointer",
			})
	}		,
	function (){
		$(this).css({
			background: "linear-gradient(to top, #fefcea, #f1da36)",
			color:"blue",
			border:"outset",
			borderColor:"yellow"
			})
	}
	);
	$('#v').hover(
	function (){
		$(this).css({
			background: "linear-gradient(to top, violet, snow)",
			color:"black",
			border:"outset",
			borderColor:"black",
			cursor: "pointer",
			})
	}		,
	function (){
		$(this).css({
			background: "linear-gradient(to top, #fefcea, #f1da36)",
			color:"blue",
			border:"outset",
			borderColor:"yellow"
			})
	}
	);
	$('#cm').hover(
	function (){
		$(this).css({
			background: "linear-gradient(to top, orange, snow)",
			color:"black",
			border:"outset",
			borderColor:"black",
			cursor: "pointer",
			})
	}		,
	function (){
		$(this).css({
			background: "linear-gradient(to top, #fefcea, #f1da36)",
			color:"blue",
			border:"outset",
			borderColor:"yellow"
			})
	}
	);
	$('#cn').hover(
	function (){
		$(this).css({
			background: "linear-gradient(to top, brown, snow)",
			color:"black",
			border:"outset",
			borderColor:"black",
			cursor: "pointer",
			})
	}		,
	function (){
		$(this).css({
			background: "linear-gradient(to top, #fefcea, #f1da36)",
			color:"blue",
			border:"outset",
			borderColor:"yellow"
			})
	}
	);

	
};
function fadeInDivb(){
      $('#b2').fadeIn(100);
	  $('#header').text('Обучающие книги');
	  $('#header').css({
		  background: 'linear-gradient(to top, red, snow)'
	  })
	  
};
function fideOutDivb(){
	      $('#b1').fadeOut(1);
		  $('#b3').fadeOut(1);
		  $('#b4').fadeOut(1);
		  $('#b5').fadeOut(1);
		  $('#b6').fadeOut(1);
		  $('#b7').fadeOut(1);
		  
}
function fadeInDivm(){
      $('#b1').fadeIn(100); 
	  $('#header').text('Главная');
	  $('#header').css({
		  background: 'linear-gradient(to top, gold, snow)'
	  })
	  
};
function fideOutDivm(){
	      $('#b2').fadeOut(1);
		  $('#b3').fadeOut(1);
		  $('#b4').fadeOut(1);
		  $('#b5').fadeOut(1);
		  $('#b6').fadeOut(1);
		  $('#b7').fadeOut(1);
};
function fadeInDivg(){
      $('#b3').fadeIn(100); 
	  $('#header').text('Игры');
	  $('#header').css({
		  background: 'linear-gradient(to top, green, snow)'
	  })
	  
};
function fideOutDivg(){
	      $('#b2').fadeOut(1);
		  $('#b1').fadeOut(1);
		  $('#b4').fadeOut(1);
		  $('#b5').fadeOut(1);
		  $('#b6').fadeOut(1);
		  $('#b7').fadeOut(1);
};
function fadeInDivz(){
      $('#b4').fadeIn(100); 
	  $('#header').text('Загадки');
	  $('#header').css({
		  background: 'linear-gradient(to top, blue, snow)'
	  })
	  
};
function fideOutDivz(){
	      $('#b2').fadeOut(1);
		  $('#b3').fadeOut(1);
		  $('#b1').fadeOut(1);
		  $('#b5').fadeOut(1);
		  $('#b6').fadeOut(1);
		  $('#b7').fadeOut(1);
};
function fadeInDivv(){
      $('#b5').fadeIn(100); 
	  $('#header').text('Видео');
	  $('#header').css({
		  background: 'linear-gradient(to top, violet, snow)'
	  })
	  
};
function fideOutDivv(){
	      $('#b2').fadeOut(1);
		  $('#b3').fadeOut(1);
		  $('#b4').fadeOut(1);
		  $('#b1').fadeOut(1);
		  $('#b6').fadeOut(1);
		  $('#b7').fadeOut(1);
};
function fadeInDivcm(){
    $('#b6').fadeIn(100);
	$('#header').text('ОКоментарии');
	$('#header').css({
		  background: 'linear-gradient(to top, orange, snow)'
	  })
	  
};
function fideOutDivcm(){
	      $('#b2').fadeOut(1);
		  $('#b3').fadeOut(1);
		  $('#b4').fadeOut(1);
		  $('#b5').fadeOut(1);
		  $('#b1').fadeOut(1);
		  $('#b7').fadeOut(1);
};
function fadeInDivcn(){
      $('#b7').fadeIn(100);
	$('#header').text('Контакты');
	$('#header').css({
		  background: 'linear-gradient(to top, brown, snow)'
	  })
	  
};
function fideOutDivcn(){
	      $('#b2').fadeOut(1);
		  $('#b3').fadeOut(1);
		  $('#b4').fadeOut(1);
		  $('#b5').fadeOut(1);
		  $('#b6').fadeOut(1);
		  $('#b1').fadeOut(1);
}







function fadeToDivb(){
      $('#m').fadeTo(100, 1);
	  $('#b').fadeTo(100, 0.5);
	  $('#g').fadeTo(100, 1);
	  $('#z').fadeTo(100, 1);
	  $('#v').fadeTo(100, 1);
	  $('#cm').fadeTo(100, 1);
	  $('#cn').fadeTo(100, 1);
};
function fadeToDivg(){
      $('#m').fadeTo(100, 1);
	  $('#b').fadeTo(100, 1);
	  $('#g').fadeTo(100, 0.5);
	  $('#z').fadeTo(100, 1);
	  $('#v').fadeTo(100, 1);
	  $('#cm').fadeTo(100, 1);
	  $('#cn').fadeTo(100, 1);
};
function fadeToDivz(){
      $('#m').fadeTo(100, 1);
	  $('#b').fadeTo(100, 1);
	  $('#g').fadeTo(100, 1);
	  $('#z').fadeTo(100, 0.5);
	  $('#v').fadeTo(100, 1);
	  $('#cm').fadeTo(100, 1);
	  $('#cn').fadeTo(100, 1);
};
function fadeToDivv(){
      $('#m').fadeTo(100, 1);
	  $('#b').fadeTo(100, 1);
	  $('#g').fadeTo(100, 1);
	  $('#z').fadeTo(100, 1);
	  $('#v').fadeTo(100, 0.5);
	  $('#cm').fadeTo(100, 1);
	  $('#cn').fadeTo(100, 1);
};
function fadeToDivcm(){
      $('#m').fadeTo(100, 1);
	  $('#b').fadeTo(100, 1);
	  $('#g').fadeTo(100, 1);
	  $('#z').fadeTo(100, 1);
	  $('#v').fadeTo(100, 1);
	  $('#cm').fadeTo(100, 0.5);
	  $('#cn').fadeTo(100, 1);
};
function fadeToDivcn(){
      $('#m').fadeTo(100, 1);
	  $('#b').fadeTo(100, 1);
	  $('#g').fadeTo(100, 1);
	  $('#z').fadeTo(100, 1);
	  $('#v').fadeTo(100, 1);
	  $('#cm').fadeTo(100, 1);
	  $('#cn').fadeTo(100, 0.5);
};
function fadeToDivm(){
      $('#m').fadeTo(100, 0.5);
	  $('#b').fadeTo(100, 1);
	  $('#g').fadeTo(100, 1);
	  $('#z').fadeTo(100, 1);
	  $('#v').fadeTo(100, 1);
	  $('#cm').fadeTo(100, 1);
	  $('#cn').fadeTo(100, 1);
};




