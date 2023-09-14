if(typeof g5_url==='undefined')
	var g5_url = '';

function goPage(str, val){
	var url;
	arr = str.substring(0,2);
	if(str=='0'){
		url = g5_url + '/index.php';
	}else if(str=='adm') {
		if(g5_is_admin)
			url = g5_url + '/adm';
		else
			url = g5_bbs_url + '/login.php?url=' + encodeURIComponent('/adm');
	//}else if(str=='0601') {
	//	url = g5_bbs_url + '/faq.php?fm_id=1';
	//}else if(arr=='05' || str=='0602' || str=='0401') {
	//	url = g5_bbs_url + '/board.php?bo_table=b' + str;
	}else{
		url = g5_url + '/html/sub' + str + '.php';
		//url = '/' + str;
		if(val) url += '?' + encodeURIComponent(val);
	}
	location.href = url;
}

$(function(){
	$('.btn1').click(function(){
		if($(this).closest('div').find('ul').is(':hidden')) {
			$('.btn1').each(function(){
				$(this).closest('div').find('ul').hide();
				$(this).find('img').attr('src', '../images/sub_mn_more.png');
			});
			$(this).closest('div').find('ul').slideDown('fast');
			$(this).find('img').attr('src', '../images/sub_mn_more.png');
		}else{
			$(this).find('img').attr('src', '../images/sub_mn_more.png');
			$(this).closest('div').find('ul').slideUp('fast');
		}
	});
	$('.sel1 ul li').hover(
		function(){ $(this).addClass('on'); },
		function(){ $(this).removeClass('on');
	});

	$('#togglemenu').click(function(e){
		e.preventDefault();
		$('#mn_wrap').toggle();
	})

	$('img.hover').hover(
		function() {
			//if(!$(this).hasClass('active'))
				$(this).attr('src', $(this).attr('src').replace('off', 'on'));
		},
		function() {
			//if(!$(this).hasClass('active'))
				$(this).attr('src', $(this).attr('src').replace('on', 'off'));
		}
	);
});

$(document).ready(function(){
	$('img.hover').hover(
		function() {
			if(!$(this).hasClass('active'))
				$(this).find('img').attr('src', $(this).find('img').attr('src').replace('off', 'on'));
		},
		function() {
			if(!$(this).hasClass('active'))
				$(this).find('img').attr('src', $(this).find('img').attr('src').replace('on', 'off'));
		}
	);
});

function FlashMainbody(Ftrans, wid, hei, wmode) {
	mainbody = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0' width='"+ wid +"' height='"+ hei +"'>";
	mainbody += "<param name='movie' value='"+ Ftrans +"'>";
	mainbody += "<param name='quality' value='high'>";
	mainbody += "<param name='allowScriptAccess' value='always'>";
	mainbody += "<param name='wmode' value='"+ (wmode ? "transparent":"window") +"'>";
	mainbody += "<param name='menu' value='false'>";
	mainbody += "<embed src='"+ Ftrans +"' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='"+ wid +"' height='"+ hei +"' allowScriptAccess='always' wmode='"+ (wmode ? "transparent":"window") +"'></embed>";
	mainbody += "</object>";
	//document.body.innerHTML = mainbody;
	document.write(mainbody);
	return;
}

function addBookmark(title, url) { 
	if(!url) url = g5_url;
	if(!title) title = document.title;
	if(window.external){ // Internet Explorer
		window.external.AddFavorite(url, title); 
	}else if(window.chrome){ // Google Chrome
		window.alert("Ctrl+D키를 누르시면 즐겨찾기에 추가하실 수 있습니다.");
	}else if (window.sidebar){ // Firefox
		window.sidebar.addPanel(title, url, ""); 
	}else if(window.opera && window.print){ // Opera
		var elem = document.createElement('a'); 
		elem.setAttribute('href',url); 
		elem.setAttribute('title',title); 
		elem.setAttribute('rel','sidebar'); 
		elem.click(); 
	}else{
		window.alert("죄송합니다. 브라우저가 이 기능을 지원하지 않습니다.");
	}
}

function go_top(){
	window.scrollTo(0,0);
}

function openWin(mypage, myname, w, h, scroll, center) {
	if(center == 1){
		var winl = (screen.width - w) / 2;
		var wint = (screen.height - h) / 2 - 40;
		if(winl<0) winl = 0;
		if(wint<0) wint = 0;
		winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scroll+',toolbar=no,status=no,resizable=no';
	}else{
		winprops = 'height='+h+',width='+w+',top=0,left=0,scrollbars='+scroll+',toolbar=no,status=no,resizable=no';
	}
	win = window.open(mypage, myname, winprops)
	if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}


function printMap(imgsrc){
	var img = new Image();
	img.src = imgsrc;
	var popwin = window.open(imgsrc, 'printimg', 'width='+(img.width+40)+',height='+(img.height+45)+',toolbar=no,scrollbars=no,resizable=no');
	popwin.print();
	//popwin.close();
}