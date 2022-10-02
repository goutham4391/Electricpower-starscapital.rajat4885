
$(document).ready(initFunctions);

function initFunctions(){

	cookieNotice();

}



// --- COOKIES ---
function cookieNotice() {
	var currDate = new Date();
	currDate = new Date(currDate.getTime() + 1000 * 60 * 60 * 24 * 365);


	function setCookie(name, wert, domain, expires, path, secure){
		var cook = name+"="+ unescape(wert)
		cook += (domain) ? "; domain="+ domain : "";
		cook += (expires) ? "; expires="+expires : ""
		cook += (path) ? "; path="+path : ""
		cook += (secure) ? "; secure":""
		document.cookie = cook
	};


	function get_cookie( cookie_name ){
		var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
		if ( results )
			return ( unescape ( results[2] ) );
		else
			return null;
	}


	var cookie = get_cookie('cookieconsent');
	if (cookie == null) {
		$('.cookie-consent').slideDown('200').addClass('show');
		$('body').addClass('cookie-show');
	}

	$('.cookie-consent').on('click', '.btn', function () {
		setCookie('cookieconsent', "true", null, currDate, '/')
		$('.cookie-consent').slideUp('200').removeClass('show');
		$('body').removeClass('cookie-show');
	});


}





