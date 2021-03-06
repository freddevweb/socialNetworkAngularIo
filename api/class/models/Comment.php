<?php
class Comment extends Model implements JsonSerializable{
	
	private $postId;
	private $userId;
    private $comment;
    private $cdate;
    private $pseudo;

	// @ postId
    function getPostId(){
        return $this->postId;
    }
    function setPostId( $postId ){
        $this->postId = $postId;
    }

    // @userId
    function getUserId(){
        return $this->userId;
    }
    function setUserId( $userId ){
        $this->userId = $userId;
    }

    // @comment
    function getComment(){
        return $this->comment;
    }
    function setComment( $comment ){
        $this->comment = $comment;
    }

    // @cdate
    function getCdate(){
        return $this->cdate;
    }
    function setCdate( $cdate ){
        $this->cdate = $cdate;
    }

    // @userPseudo
    function getPseudo(){
        return $this->pseudo;
    }
    function setPseudo( $pseudo ){
        $this->pseudo = $pseudo;
    }


    function jsonSerialize(){
        return [
            "id" => $this->id,
            "postId" => $this->postId,
            "userId" => $this->userId,
            "comment" => $this->comment,
            "cdate" => $this->cdate,
            "pseudo" => $this->pseudo
        ];
    }


}