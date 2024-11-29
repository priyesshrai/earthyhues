(function($){"use strict";if($(".boxed-switcher").length){$(".boxed-switcher").on("click",function(){$("body").toggleClass("boxed-wrapper")})}
if($("#styleOptions").length){$("#styleOptions").styleSwitcher({hasPreview:!1,fullPath:"assets/css/colors/",cookie:{expires:999,isManagingLoad:!0}})}
if($("#colorMode").length){$("#colorMode").styleSwitcher({hasPreview:!1,fullPath:"assets/css/modes/",defaultThemeId:'jssMode',cookie:{expires:999,isManagingLoad:!0}})}
if($("#langMode").length){$("#langMode").styleSwitcher({hasPreview:!1,fullPath:"assets/css/",defaultThemeId:'langLtr',cookie:{expires:999,isManagingLoad:!0}})}
if($(".style-switcher").length){$("#switcher-toggler").on("click",function(e){e.preventDefault();$(".style-switcher").toggleClass("active")})}})(jQuery)