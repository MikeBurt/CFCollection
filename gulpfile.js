var elixir = require( "coldbox-elixir" );

elixir( function( mix ) {
    mix.browserSync( {
        proxy: "localhost:9877"
    } );
} );