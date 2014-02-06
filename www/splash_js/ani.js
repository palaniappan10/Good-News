$(".area").ready(function()
{

	var top= $(".rainbow").offset().top;

	var bottom=$(".alien").offset().top;

	var div_height=findoffset(top , bottom);
	var window_height = $(window).height();
	var window_width = $(window).width();

	var three_percent= window_height*0.08;

	var document_height=$(document).height();

	if(window_width>window_height)
	{

		var empty_space= ((window_height-div_height)/2);
		var area = document.getElementById('area');
		area.style.position="relative";
		area.style.top = empty_space+"px";

		var elem = $('.app-icon');
		$('html, body').animate({
		scrollTop: $(elem).offset().top - 100
		});
	}

	else
	{
		var empty_space= (-45 + (-three_percent) +(window_height-div_height)/2);
		var area = document.getElementById('area');
		area.style.position="relative";
		// area.style.top = empty_space+"px";

	}

});



function findoffset(top, bottom)
{
	var div_height= bottom-top;
	return div_height;
}
