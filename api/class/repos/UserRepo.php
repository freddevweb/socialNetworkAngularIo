<?php

class UserRepo extends Repository {

    public function getLogin(User $user){

        

        if( !empty( $user->getEmail() ) ){
            $value = $user->getEmail();
        }
        if( !empty( $user->getPseudo() ) ){
            $value = $user->getPseudo();
        }

        // var_dump($value);
        // die();

        $query="SELECT * FROM user WHERE pass=:pass AND pseudo = :pseudo or email = :email";
        $values= array(
            "pass" => $user->getPass(),
            "pseudo"=> $value,
            "email"=> $value
        );
        
        
        $pdo=$this->connection->prepare($query);
        $pdo->execute ( $values );
        $data=$pdo->fetch(PDO::FETCH_ASSOC);


        // var_dump($data);die();


        if( empty($data) ){
            $user = false;
        }
        else {
            $user = new User( $data );
        }
        // var_dump($user);die();
        return $user;
    }

    public function signin(User $user){
        
        $query="INSERT INTO user SET prenom=:prenom, nom=:nom, pseudo=:pseudo, email=:email, pass=:pass, inscription = NOW()";

        $pdo=$this->connection->prepare($query);
        $pdo->execute (array(
            'prenom' => $user->getPrenom(),
            'nom' => $user->getNom(),
            'pseudo'=> $user->getPseudo(),
            'email'=>$user->getEmail(),
            'pass'=>$user->getPass(),
        ));
        


        return $pdo->rowCount();
    }

    public function like( $array ){

        /*  require
        $array =[
            "userid"=> 0,
            "postId"=> 0,
            "aimType"=> 0
        ]; */
        // var_dump( $array); die();
        $query = "INSERT INTO aim set userId = :userId, postId = :postId, aimType = :aimType";
        $values = $array;

        $prep = $this->connection->prepare( $query );
		$prep->execute( $values );
		
        return $prep->rowCount();
    }

    public function checkLike( $array ){

        /*  require
        $array =[
            "userid"=> 0,
            "postId"=> 0,
            "aimType"=> 0
        ]; */

        $query = "SELECT * FROM aim WHERE userId = :userId AND postId = :postId AND aimType = :aimType";
        $values = $array;

        $prep = $this->connection->prepare( $query );
        $prep->execute( $values );
        $data=$prep->fetch(PDO::FETCH_ASSOC);
        
        if( $data ){
            return true;
        }
        else{
            return false;
        }
    }

    public function deleteLike( $array ){

        /*  require
        $array =[
            "userid"=> 0,
            "postId"=> 0,
            "aimType"=> 0
        ]; */

        $query = "DELETE FROM aim WHERE userId = :userId AND postId = :postId AND aimType = :aimType";
        $values = $array;

        $prep = $this->connection->prepare( $query );
		$prep->execute( $values );
		
        return $prep->rowCount();
    }


    // public function userPhotoPath ( $photopath , $id ){
        


    //     $query="UPDATE user SET photo_path=:photo_path where id = :id";

    //     $pdo=$this->connection->prepare($query);
    //     $pdo->execute (array(
    //         'photo_path' => $photopath,
    //         'id' => $id
    //     ));
        
    //     return $pdo->rowCount();

    // }

   



}
      