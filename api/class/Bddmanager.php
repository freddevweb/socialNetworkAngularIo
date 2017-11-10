<?php
class BddManager{

    private $UserRepo;
    private $CommentRepo;
    private $PostRepo;

    public function __construct()
    {
        $this->connexion = Connexion::getConnexion();
        $this->setUserRepo(new UserRepo($this->connexion));
        $this->setCommentRepo(new CommentRepo($this->connexion));
        $this->setPostRepo(new PostRepo($this->connexion));
    }

    // @ user
    public function setUserRepo($UserRepo){
        $this->UserRepo=$UserRepo;
    }
    
    public function getUserRepo(){
        return $this->UserRepo;
    }

    // @ Comment
    public function setCommentRepo($Comment){
        $this->Comment=$Comment;
    }
    
    public function getCommentRepo(){
        return $this->Comment;
    }

    // @ Post
    public function setPostRepo($PostRepo){
        $this->PostRepo=$PostRepo;
    }
    
    public function getPostRepo(){
        return $this->PostRepo;
    }

}
