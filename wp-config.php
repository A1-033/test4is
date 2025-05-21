<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'test4is' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ':3X1ra5%#/s|+%Sg)/bD,?PQ?Rg<|_5C1q/x%zCL-_>(t3OJdt_Y?_QWS;?,tB`g' );
define( 'SECURE_AUTH_KEY',  'B3KWO|z[o2aRF&&1SOez.-AJ@[;^EM0^CwU!kE+~C/qrMv4IW4!Wn]|vt8Qt?#R`' );
define( 'LOGGED_IN_KEY',    ')7mgxtkztH>N$2jxFcHNFnR1xI)G)g)}O>QA6t7On3<6y*KJfmY#}z4J!<BOgqd9' );
define( 'NONCE_KEY',        's2[w4ss@HQkloFSU#_[E]OT^D4_L<#YMjE@z&sA9(2JCf)aAnw-X?hBtY1NWn_9^' );
define( 'AUTH_SALT',        'mqq4_boyznY`1Yl051v(CF_U(X:w]^Y|KOad3wK2hyw`fV/FXs-6/ylR5#l8!_-H' );
define( 'SECURE_AUTH_SALT', 'ED5}u9YbMIhtT`?C}P=%*J}z DzDfvVtooURw/`8:Y~,(i_I&Mbf<&6qjc.q%Yp/' );
define( 'LOGGED_IN_SALT',   'JV4[w;gXT0]hr*vB|UX*y0*OREtBNkI_s-Y~=`zv(lrPMzfjH7>?|@5<[xcD[z$W' );
define( 'NONCE_SALT',       '{v>(2)|#OG_E*W*~(M^*rt`0|t[1,Q67Re4`iK^u+^Cr#HV4t4oSEBdTY?_E]~5M' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
