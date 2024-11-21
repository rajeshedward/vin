
var domainName = window.location.hostname;
    var sites_config ={
      	  'URL':"https://app."+domainName,
		  'domain': "app."+domainName,
          'PROCESSING_PAGE':"disabled",
      	   'pricing':{
            'plan1':25,
            'plan2':500,
            'plan5':900,
            'plan10':1500,
            'plan25':500,
            'plan50':900,
          }
      };

	jQuery(document).ready(function($){
	 //console.log(sites_config.domain);
		$.ajax({
			type: "POST",
			url: sites_config.URL+"/landing/site_settings",
			data: {
				domain: sites_config.domain, 
			},
			dataType: 'json',
			success : function(result){
				console.log(result.data);
				var memberarea= result.data.member_area;
				var memberpreview= result.data.member_area_preview;
				if(memberarea == "cwa_mvp" && memberpreview == 'cwampv_subdomain'){
				   var logindomain= result.data.protocol+'://members.'+domainName+'/members/login';
				}else if(memberarea == "cwa_mvp" && memberpreview == 'cwampv_proxy'){
					var logindomain= result.data.protocol+'://'+domainName+'/members/login';
				}else{
					var logindomain= sites_config.URL+"/login";
				}
// 				var logindomain= (memberarea == 'cwa_mvp')? result.data.protocol+'://members.'+domainName+'/members': sites_config.URL+"/login";
				console.log(logindomain);
	  $("#ast-custom-button-link").attr("href", logindomain); //.ast-custom-button-link
	  $("#login_url").attr("href", logindomain);
      $("#footer_login_url").attr("href", logindomain);
      $("#topbar_login_url").attr("href", logindomain);			
			}
		});
	});
    
if (window.location.pathname !== "/new-home") {
    window.__lc = window.__lc || {};
    window.__lc.license = 10186117;
    var email = getCookie('cart_email');
    var vin = getCookie('cart_vin');
    var plan = getCookie('cart_plan');
    if (email != null || vin != null) {
        window.__lc.params = [
            { name: "email", value: email },
            { name: "vin", value: vin },
            { name: "selected_plan", value: plan }
        ];
    }
    window.onload = function() {
        var lc = document.createElement('script');
        lc.type = 'text/javascript';
        lc.async = true;
        lc.src = 'https://cdn.livechatinc.com/tracking.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(lc, s);
        console.log('its working');
    };

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
}