<?php get_header();

if ( have_posts() ): ?>

<section class="section">
	<div class="inner_container">
	
	<h1><?php the_title(); ?></h1>
	
	<?php while ( have_posts() ): the_post();
	
	the_content();
	
	endwhile;
	
	else : ?>
	<p>no posts found.</p>
		
	</div>
</section>

<?php endif;

get_footer();