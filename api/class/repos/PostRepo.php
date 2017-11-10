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

			array_push( $array , $resultLik );
			array_push( $array , $resultCom );
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

			array_push( $array , $resultLik );


			$prepCom = $this->connection->prepare( "SELECT * from comment where postId = :postId" );
			$prepCom->execute( array(
				"postId" => $value["id"]
			) );
			$resultCom = $prepCom->fetchAll(PDO::FETCH_ASSOC);
			
			$arrayComment = [];

			if( !empty( $resultCom ) ){

				foreach( $resultCom as $valueCom ){
					$newComment = new Comment();
					$newComment->setUserId( $valueCom["id"] );
					$newComment->setComment( $valueCom["comment"] );
					$newComment->setCdate( $valueCom["cdate"] );
					array_push( $arrayComment , $resultLik );
				}

				array_push( $array , $arrayComment );

			}

			$newPost->setArray( $array );

			array_push( $arrayResult, $newPost );
		}
		
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