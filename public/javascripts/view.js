$(document).ready(function(){
	tinyMCE.init({
			mode : "exact",
			elements: "blog_editor",
			theme : "advanced",
			plugins : "emotions,spellchecker,advhr,insertdatetime,preview",	

			// Theme options - button# indicated the row# only
		theme_advanced_buttons1 : "newdocument,|,bold,italic,underline,|,justifyleft,justifycenter,justifyright,fontsizeselect,formatselect",
		theme_advanced_buttons2 : "cut,copy,paste|,bullist,numlist,|,outdent,indent|,undo,redo,|,link,unlink,anchor,image,|,preview,|,forecolor,backcolor",
		theme_advanced_buttons3 : "insertdate,inserttime,|,spellchecker,|,sub,sup,|,charmap,emotions",	
		theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		//theme_advanced_resizing : true //leave this out as there is an intermittent bug.
	});

	
	$('.comment_set').each(function(index) {
	    if($(this).children().length > 1) {
			$(this).parent().show();
			var show_comments_toggle = $(this).parent().prev().children(".show_post_comments");
			show_comments_toggle.html("hide comments ("+ ($(this).children().length - 1) + ")");
		};
	  });

	$('a').hover(function(){
    if( $(this).children("img").length < 1 )
      $(this).fadeTo(60, 0.5);
	}, function(){
    if( $(this).children("img").length < 1 )
      $(this).fadeTo(80, 1);
	});

	$('#debug_info').click(function() {
		$('#debug_more').toggle('fast', function() {
			
		});
	});
	
  

  $("label").inFieldLabels();
	
  $('#flash_notice, #flash_error, #flash_alert').delay(1500).slideUp(130);
  

  $("#stream li").live('mouseover',function() {
    $(this).children(".destroy_link").fadeIn(0);
  });

  $("#stream li").live('mouseout',function() {
    $(this).children(".destroy_link").fadeOut(0);
  });

  $(".show_post_comments").live('click', function(event) {
    event.preventDefault();
    if( $(this).hasClass( "visible")) {
      $(this).html($(this).html().replace("hide", "show"));
      $(this).parents("li").children(".comments").fadeOut(100);
    } else {
      $(this).html($(this).html().replace("show", "hide"));
      $(this).parents("li").children(".comments").fadeIn(100);
    }
    $(this).toggleClass( "visible" );
  });

//Called with $(selector).clearForm()
	$.fn.clearForm = function() {
		return this.each(function() {
		var type = this.type, tag = this.tagName.toLowerCase();
		if (tag == 'form')
			return $(':input',this).clearForm();
		if (type == 'text' || type == 'password' || tag == 'textarea')
			this.value = '';
		else if (type == 'checkbox' || type == 'radio')
			this.checked = false;
		else if (tag == 'select')
			this.selectedIndex = -1;
		$(this).blur();
    });

	};

  $("div.image_cycle").cycle({
    fx: 'fade',
    random: 1,
    timeout: 2000,
    speed: 3000
  });

  //buttons//////
  $("#add_photos_button").toggle(
    function(){
      $("#add_photo_box").fadeIn(300);
    },function(){
      $("#add_photo_box").fadeOut(200);
    }
  );

  $("#add_album_button").toggle(
    function(){
      $("#add_album_box").fadeIn(300);
    },function(){
      $("#add_album_box").fadeOut(200);
    }
  );

  $("input[type='submit']").addClass("button");

});//end document ready
