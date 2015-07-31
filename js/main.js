
$(function() {
	
	$("#ftrSection1").click(function(e){
		e.preventDefault();

		if ( $("#ftrSection2:visible").length > 0 ) {
			$("#ftrSection2").slideUp();
		} else {
			$("#ftrSection2").slideDown();
			$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		}

	});
	/*$("#applyNow").mouseover(function(){
		$('#applyNow').css('backgroundImage', 'url(img/tab_cont_sect2_cta_bg_hover.jpg');
	});
	$("#applyNow").mouseout(function(){
		$('#applyNow').css('backgroundImage', 'url(img/tab_cont_sect2_cta_bg.jpg');
	});*/
});


