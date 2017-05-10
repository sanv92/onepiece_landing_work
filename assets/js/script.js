$(document).ready(function() {

		avatar = document.getElementById('linkplace');
		av_offset = avatar.offsetTop;
		av_height = avatar.offsetHeight;
		function getBodyScrollTop() {
			return self.pageYOffset || 
				(document.documentElement && document.documentElement.scrollTop) || 
				(document.body && document.body.scrollTop);
		}
		window.onscroll = function () {
			avatar.className = (getBodyScrollTop() >= av_offset + av_height) ? 'linkplace linkplace_fixed': 'linkplace';
		}

});
