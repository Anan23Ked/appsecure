


$(document).ready(function() {

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    // items: 10,
    loop: true,
    margin: 10,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 1000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2 
      },
      768: {
        items: 6 
      },
      992: {
        items: 6 
      }
     
    }
  });

});




window.onscroll = (e) => {
  let timelineBlocks = $(".company-timeline-text");
	timelineBlocks.each(function (event) {
		var $this = $(this);
		var tar_off =
			$(".company-timeline-left").height() +
			parseInt($(".company-timeline-left").css("top")) -
			$(".company-timeline-box").height();
		var this_off = $(this).offset().top - tar_off;
		var win_scroll = $(window).scrollTop();
		if (
			win_scroll > this_off - $(".company-timeline-box").height() / 2 &&
			win_scroll < this_off + $(".company-timeline-box").height() / 2
		) {
			$this.addClass("active");
			var curr_index = $this.index();
			console.log($(".timeline-data"),curr_index);
			$(".timeline-data")
				.eq(curr_index)
				.addClass("animate")
				.siblings()
				.removeClass("animate");
		}
	});
};






