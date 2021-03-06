<?php
get_header(); ?>

<section class="section">
	<div class="inner_container narrow">
		
		<h1><?php esc_html_e('Page not found'); ?></h1>
	
		<p><?php esc_html_e('Sorry, this page does not exist. Click '); ?><a href="<?php echo home_url(); ?>">here</a><?php esc_html_e(' to go to the home page'); ?></p>
		
	</div>
</section>

<?php get_footer();