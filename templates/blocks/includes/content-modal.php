<?php
$content = get_sub_field('content');
if ( $content ) {
	echo '
	<div class="modal_container">
		<div class="modal_inner">
			<button class="closeModalButton">
				<span></span>
				<span></span>
			</button>' 
			. $content . '
		</div>
	</div>';
}