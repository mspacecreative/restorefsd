<?php
function socialMedia() {
	ob_start();
	echo '
	<ul class="footer_links social_media">
		<li><a href="https://www.facebook.com/RestoreFSD2021" target="_blank"><i class="fa fa-facebook"></i></a></li>
		<li><a href="http://twitter.com/restorefsd" target="_blank"><i class="fa fa-twitter"></i></a></li>
	</ul>';
	return ob_get_clean();
}
add_shortcode( 'social_media', 'socialMedia' );