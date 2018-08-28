$(document).ready(function(){
	$("#burger").click(function(){
		var rowheader = $(".head");
		rowheader.removeClass("head");
		var rowheader = $(".wrapper-menu");
		rowheader.removeClass("hidden");
	});

	$("#exit").click(function(){
		var rowheader = $(".head");
		rowheader.addClass("head");
		var rowheader = $(".wrapper-menu");
		rowheader.addClass("hidden");
	});
});

