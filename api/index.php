<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT");
session_start();
require 'flight/Flight.php';
require 'autoloader.php';

// ######################################################
// ########################################### post


Flight::route('GET /user/@value/@pass', function( $value, $pass ){

    $value = htmlspecialchars( $value );
    $pass = htmlspecialchars( $pass );
	
    $status = [
        "success" =>false,
        "user" => []
    ];

    if( !empty( $value ) && !empty( $pass ) ){
        
        $newUser = new User ();
        $newUser->setPass( $pass );

        if( filter_var($value, FILTER_VALIDATE_EMAIL) ){
            $newUser->setEmail( $value );
        }
        else {
            $newUser->setPseudo( $value );
        }

        $bdd = new BddManager();
		$UserRepo = $bdd->getUserRepo();
        $user = $UserRepo->getLogin( $newUser );

        
        if( $user != false ){
            $status["success"] = true;
            $status["user"] = $user;
        }

    }

    echo json_encode( $status );
    
});

Flight::route('GET /users/@array', function( $array ){

    
    
    $status = [
        "success" =>false,
        "user" => []
    ];
        

    $bdd = new BddManager();
    $UserRepo = $bdd->getUserRepo();
    $user = $UserRepo->getUsers( $array );

        
    if( $user != false ){
        $status["success"] = true;
        $status["user"] = $user;
    }
    var_dump($user); die();
    echo json_encode( $status );
    
});

Flight::route('OPTIONS /user', function( ){
    echo json_encode(["success" => true]);
});

Flight::route('POST /user', function(){

    $status = [
        "success" => false
    ];
    
    // var_dump(FLIGHT::request()->data);die();
    $datas = FLIGHT::request()->data;
    

    $prenom = htmlspecialchars( FLIGHT::request()->data["prenom"] );
    $nom = htmlspecialchars( FLIGHT::request()->data["nom"] );
    $pseudo = htmlspecialchars( FLIGHT::request()->data["pseudo"] );
    $email = htmlspecialchars( FLIGHT::request()->data["email"] );
    $pass = htmlspecialchars( FLIGHT::request()->data["pass"] );



    $user = new User();
    $user->setPrenom( $connectservice->getDatas()["prenom"] );
    $user->setNom( $connectservice->getDatas()["nom"] );
    $user->setPseudo( $connectservice->getDatas()["pseudo"] );
    $user->setEmail( $connectservice->getDatas()["email"] );
    $user->setPass( $connectservice->getDatas()["pass"] );
    
    $bdd = new BddManager();
    $UserRepository = $bdd->getUserRepo();
    $user = $UserRepository ->signin($user);

    // if($user){
        
    //     $photoupdated

    // }
    
    echo json_encode( $status );
    
});



Flight::route('OPTIONS /like/@userId/@postId/@aimType', function( $userId , $postId , $aimType ){
    echo json_encode(["success" => true]);
});

Flight::route('PUT /like/@userId/@postId/@aimType', function( $userId , $postId , $aimType ){

    $status = [
        "success" => false,
        "action" => ""
    ];

    $array = [
        "userId" => $userId,
        "postId" => $postId,
        "aimType" => $aimType
    ];

    $bdd = new BddManager();
    $UserRepository = $bdd->getUserRepo();
    $exist = $UserRepository->checkLike( $array );

    if( $exist == true ){
        $result = $UserRepository ->deleteLike($array);
        $action = "delete";
    }
    else {
        $result = $UserRepository ->like($array);
        $action = "create";
    }
    

    if( $result != false ){
        $status["success"] = true;
        $status["action"] = $action;
    }

    echo json_encode( $status );

});
// ######################################################
// ########################################### post

Flight::route('GET /actuals', function(){
    
    
	$bdd = new BddManager();
    $PostRepo = $bdd->getPostRepo();
	$posts = $PostRepo->getPosts();
	
	echo json_encode( $posts ) ;
});

Flight::route('POST /actual', function(){
    
    $userId = htmlspecialchars( FLIGHT::request()->data["userId"] );
    $texte = htmlspecialchars( FLIGHT::request()->data["texte"] );
	
    $status = [
        "success" =>false,
        "id" => 0
    ];

    if( !empty( $userId ) && !empty( $texte ) ){

        
        $newPost = new Post ();
        $newPost->setUserId( $userId );
        $newPost->setTexte( $texte );
        
        $bdd = new BddManager();
		$PostRepo = $bdd->getPostRepo();
        $id = $PostRepo->createPost( $newPost );

        if( $id != 0 ){
            $status["success"] = true;
            $status["id"] = $id;
        }
    }

    echo json_encode( $status );

});

Flight::route('DELETE /actual/@id', function( $id ){
    
    // securiser en demandant l'id du demandeur pour verrifier si c'est son post 

    $status = [
        "success" =>false
    ];

    $newPost = new Post();
    $newPost->setId( intval( $id ) );

	$bdd = new BddManager();
    $PostRepo = $bdd->getPostRepo();
    $post = $PostRepo->deletePost( $newPost );

    
    if( $post > 0 ){
        $status["success"] = true;
    }
	
	echo json_encode( $status ) ;
});

Flight::route('GET /actual/@id', function( $id ){
    
    $newPost = new Post();
    $newPost->setId( intval( $id ) );

	$bdd = new BddManager();
    $PostRepo = $bdd->getPostRepo();
    $post = $PostRepo->getPost( $newPost );
	
	echo json_encode( $post ) ;
});



// ######################################################
// ########################################### comment

Flight::route('OPTIONS /comment', function( ){
    echo json_encode(["success" => true]);
});

Flight::route('POST /comment', function(){

    $status = [
        "success" => true,
        "comment" => null
    ];

    $postId = htmlspecialchars( FLIGHT::request()->data["postId"] );
    $userId = htmlspecialchars( FLIGHT::request()->data["userId"] );
    $comment = htmlspecialchars( FLIGHT::request()->data["comment"] );

    $bdd = new BddManager();


    $newComment = new Comment();
    $newComment->setUserId( $userId );
    $newComment->setPostId( $postId );
    $newComment->setComment( $comment );
	
    $CommentRepo = $bdd->getCommentRepo();
    $comment = $CommentRepo->createComment( $newComment );
    
    if( $comment != false ){
        
        $status["comment"] = $comment;
        $status["success"] = true;
    }
    
	echo json_encode( $status );
});


Flight::route('GET /comments', function( ){

    $bdd = new BddManager();
    $CommentRepo = $bdd->getCommentRepo();
    $comment = $CommentRepo->getComments( );

});

Flight::route('DELETE /comment/@id/@userId', function( $id, $userId ){

	$bdd = new BddManager();
    $CommentRepo = $bdd->getCommentRepo();
	$event = $CommentRepo->deleteComment( intval( $id ) );

	echo json_encode( $event );
});

Flight::route('GET /comment/@id', function( $id ){

	$bdd = new BddManager();
    $CommentRepo = $bdd->getCommentRepo();
	$event = $CommentRepo->deleteComment( intval( $id ) );

	echo json_encode( $event );
});

Flight::start();

?>
