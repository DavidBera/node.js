$(function(){$(".input").focusin(function(){$(this).find("span").animate({opacity:"0"},200)}),$(".input").focusout(function(){$(this).find("span").animate({opacity:"1"},300)}),$(".login").submit(function(){$(this).find(".submit i").removeAttr("class").addClass("fa fa-check").css({color:"#fff"}),$(".submit").css({background:"#2ecc71","border-color":"#2ecc71"}),$(".feedback").html("Please wait..."),$(".feedback").show().animate({opacity:"1",bottom:"-65px"},400),$("input").css({"border-color":"#2ecc71"});var o=$("#loginForm"),c=JSON.stringify(o.serializeArray());return console.log(c),console.log(window.location),$.ajax({url:window.location.pathname+window.location.search,method:"POST",contentType:"application/json",data:JSON.stringify({login:$("input[name=login]").val(),password:$("input[name=password]").val()})}).done(function(o){console.log($("#loginForm").serialize()),console.log(o),$(this).find(".submit i").removeAttr("class").addClass("fa fa-check").css({color:"#fff"}),$(".submit").css({background:"#2ecc71","border-color":"#2ecc71"}),$(".feedback").html("Login successful"),$(".feedback").removeClass("error"),$(".feedback").show().animate({opacity:"1",bottom:"-65px"},400),$("input").css({"border-color":"#2ecc71"});var c=0;setInterval(function(){$(".load").css({width:++c+"%"})},5),setTimeout(function(){window.location.replace(o.redirectUrl)},500)}).fail(function(o){console.log($("#loginForm").serialize()),console.log(o),$(this).find(".submit i").removeAttr("class").addClass("fa fa-sign-in").css({color:"#fff"}),$(".submit").css({background:"#dc4f48","border-color":"#dc4f48"}),$(".feedback").html("Login failed..."),$(".feedback").addClass("error"),$(".feedback").show().animate({opacity:"1",bottom:"-65px"},400),$("input").css({"border-color":"#dc4f48"}),console.log(o.status),console.log(o.responseJSON)}).always(function(){console.log("finish")}),!1})});