<?
include "config.php";

class Connexion{
    static private $connexion;

    static public function getConnexion(){
        if(empty(self::$connexion)){

            self::$connexion= new PDO( "mysql:host=".HOST.";dbname=".DATABASE, USERDATABASE, PASSDATABASE);
            self::$connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$connexion->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        }
        return self::$connexion;
    }

    private function __construct(){
        
    }

}