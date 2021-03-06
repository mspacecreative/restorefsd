		<footer>
			<?php 
			$footerwidth = get_field('footer_content_width', 'options');
			switch ( $footerwidth ) {
				case 'narrow':
					$value = 'narrow';
					break;
				default:
					$value = '';
			} ?>
			<div class="inner_container <?php echo $value ?>">
				<p><?php echo __('&copy '); echo date('Y '); echo __('Carson Proxy Advisors. All rights reserved.'); ?></p>
			</div>
		</footer>
	    
	   	<?php wp_footer(); ?>
	</body>
</html>