<?php
class Post extends Model implements JsonSerializable{
	
	private $userId;
	private $texte;
    private $publication;
    private $array;

	// @ userId
	function getUserId(){
        return $this->userId;
    }
    function setUserId( $userId ){
        $this->userId = $userId;
	}

	// @ texte
	function getTexte(){
        return $this->texte;
    }
    function setTexte( $texte ){
        $this->texte = $texte;
	}
	
	// @ publication
	function getPublication(){
        return $this->publication;
    }
    function setPublication( $publication ){
        $this->publication = $publication;
    }

    // @ likes
	function getArray(){
        return $this->array;
    }
    function setArray( $array ){
        $this->array = $array;
    }

    function jsonSerialize(){
        return [
            "id" => $this->id,
            "userId" => $this->userId,
            "texte" => $this->texte,
            "publication" => $this->publication,
            "array"=>$this->array
        ];
	}

}