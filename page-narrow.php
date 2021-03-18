<?php
/* Template Name: Narrow Content */
get_header();

get_template_part('templates/hero'); ?>

<section class="section">
	<div class="inner_container narrow">
	<?php if ( have_posts() ): ?>
	
	<?php 
	$pagetitle = get_field('hide_page_title');
	$title = get_the_title();
	if ( !$pagetitle ) {
		echo '<h1>' . $title . '</h1>';
	} ?>
	
	<?php while ( have_posts() ): the_post();
	
	the_content();
	
	endwhile;
	
	else : ?>
	<p>no posts found.</p>
	
	<?php endif; ?>
		
	</div>
</section>

<?php get_footer();