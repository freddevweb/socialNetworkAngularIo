<?php

function gamadaAutoload( $className ){

    $folders = [
        "class/",
        "class/models/",
        "class/repos/",
        "class/services/"
    ];

    foreach( $folders as $folder ){

        $file = $folder . $className . ".php";
        if( file_exists( $file ) ){
            require $file;
            return;
        }
    }
}

spl_autoload_register('gamadaAutoload');