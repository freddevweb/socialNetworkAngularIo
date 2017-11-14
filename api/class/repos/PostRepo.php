<?php

class PostRepo extends Repository {

	public function getPosts(){

		$query = "SELECT * FROM post ";
		$res = $this->connection->query( $query );
		$result = $res->fetchAll(PDO::FETCH_ASSOC);
		
		
		$arrayResult = [];
		
		foreach( $result as $value ){

			$newPost = new Post ();
			$newPost->setId( $value["id"] );
			$newPost->setUserId( $value["userId"] );
			$newPost->setTexte( $value["texte"] );
			$newPost->setPublication( $value["publication"] );
			
			$array = [];

			$prepLik = $this->connection->prepare( "SELECT count(userId) AS count from aim where postId = :postId" );
			$prepLik->execute( array(
				"postId" => $value["id"]
			) );
			$resultLik = $prepLik->fetch(PDO::FETCH_COLUMN);

			$prepCom = $this->connection->prepare( "SELECT count(id) from comment where postId = :postId" );
			$prepCom->execute( array(
				"postId" => $value["id"]
			) );
			$resultCom = $prepCom->fetch(PDO::FETCH_COLUMN);

			$prepUser = $this->connection->prepare( "SELECT pseudo FROM user where id = :id");
			$prepUser->execute([
				"id" => $value["userId"]
			]);
			$user = $prepUser->fetch(PDO::FETCH_COLUMN);
			$array["user"] = $user;
			$array["like"] = $resultLik;
			$array["comment"] = $resultCom;

			$newPost->setArray( $array );

			array_push( $arrayResult, $newPost );

		}
		
		return $arrayResult;
	}

	public function getPost( Post $post){


		
		$query = "SELECT * FROM post where id = :id";
		$res = $this->connection->prepare( $query );
		$res->execute( array (
			"id" => $post->getId()
		));
		$result = $res->fetchAll(PDO::FETCH_ASSOC);

		$arrayResult = [];
		$newPost = new Post ();
		$newPost->setId( $result[0]["id"] );
		$newPost->setUserId( $result[0]["userId"] );
		$newPost->setTexte( $result[0]["texte"] );
		$newPost->setPublication( $result[0]["publication"] );
		

		$array = [];

		$prepLik = $this->connection->prepare( "SELECT userId  from aim where postId = :postId" );
		$prepLik->execute( array(
			"postId" => $post->getId()
		) );
		$resultLik = $prepLik->fetchAll(PDO::FETCH_COLUMN);
		$arrayLik = [];
		
		foreach( $resultLik as $like ){
			
			array_push( $arrayLik , $like );
		}
		$array["like"] = $resultLik;

		$prepCom = $this->connection->prepare( "SELECT comment.*, user.pseudo  from comment inner join user on user.id = comment.userId where postId = :postId " );
		$prepCom->execute( array(
			"postId" => $post->getId()
		) );
		$resultCom = $prepCom->fetchAll(PDO::FETCH_ASSOC);
		
		$arrayComment = [];
			
		if( !empty( $resultCom ) ){

			foreach( $resultCom as $valueCom ){

				$newComment = new Comment();
				$newComment->setId( $valueCom["id"] );
				$newComment->setUserId( $valueCom["userId"] );
				$newComment->setComment( $valueCom["comment"] );
				$newComment->setCdate( $valueCom["cdate"] );
				array_push( $arrayComment , $newComment );
				
			}

			$array["comment"] = $resultCom;
			
		}
		
		$prepUser = $this->connection->prepare( "SELECT pseudo FROM user where id = :id");
		$prepUser->execute([
			"id" => $result[0]["userId"]
		]);
		$user = $prepUser->fetch(PDO::FETCH_COLUMN);

		$array["user"] = $user;
		
		$newPost->setArray( $array );

		array_push( $arrayResult, $newPost );	


		return $arrayResult;
	}

	

	public function createPost( Post $post){

		// var_dump($post);
		// die();
		$query = "INSERT INTO post SET userId = :userId , texte = :texte , publication = NOW() ";
		$prep = $this->connection->prepare( $query );
		$prep->execute( array(
			"userId" => $post->getUserId(),
			"texte" => $post->getTexte()
		));
		
				
		return $this->connection->lastInsertId();
	}

	public function deletePost( Post $post ){

		$query = "DELETE FROM post WHERE id = :id ";
		$prep = $this->connection->prepare( $query );
		$prep->execute( array(
				"id" => $post->getId()
			) );
		
				
		return $prep->rowCount();


	}



}