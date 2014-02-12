/*
	http://blog.benjaminb.fr/tutoriels/comment-creer-un-plugin-jquery/
 */
(function($) {
	
	/**/
	$.revealElements = function(options) {
		var defaults = {
			revealClass: '.reveal',
			wrapperEl: 'body',
			state: false
		};

		var plugin = this;

		plugin.init = function() {
			// merge between defaults & options
			plugin.settings = $.extend({}, defaults, options);
			plugin.start();
		};

		plugin.start = function() {
			// array of el or only one
			// get size position of wrapperEl
			var wel = $(plugin.settings.wrapperEl),
				el = wel.find(plugin.settings.revealClass),
				welP = wel.position(),
				welW = wel.width(),
				welH = wel.height();
			if(plugin.settings.state === false) {
				if(el.length > 1) {
					for (var i = 0; i < el.length; i++) {
						revealElement( $(el[i]) );
					};
				}
				else 
				{
					revealElement(el)
				}

				$(wel).append('<div class="revealOverlay" style="top:'+ welP.top +'px; left:'+ welP.left +'px; width:'+ welW +'px; height:'+ welH +'px; "></div>');
				canRemoveOverlay();
			}
			else 
			{
				removeReveal();
			}
		};

		var revealElement = function(el) {
			var	p = el.position(),
				w = el.width(),
				h = el.height();

			el.addClass('revealElement');
			$(plugin.settings.wrapperEl).append('<div class="revealOn" style="top:'+ p.top +'px; left:'+ p.left +'px; width:'+ w +'px; height:'+ h +'px; "></div>');
		}

		var canRemoveOverlay = function() {
			$('.revealOverlay').click(function() { 
				removeReveal();
			});
		};

		var removeReveal = function() {
			var el = $(plugin.settings.revealClass);
			el.removeClass('revealElement');
			$('.revealOverlay').remove();
			$('.revealOn').remove();
		}

		plugin.init();
	};

	$.fn.revealElements = function(options) {
		return this.each(function() {
			if (undefined == $(this).data('revealElements')) {
				var plugin = new $.revealElements(this, options);
				$(this).data('revealElements', plugin);
			}
		});
	}
})(jQuery);