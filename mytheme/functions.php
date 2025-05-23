<?php

function register_gutendberg_block() {
    register_block_type( __DIR__ . '/blocks/gutendberg-block' );
}
add_action( 'init', 'register_gutendberg_block' );