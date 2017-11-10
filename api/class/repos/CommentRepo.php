<?php

class CommentRepo extends Repository {

	public function createComment( Comment $comment){

		// var_dump($post);
		// die();
		$query = "INSERT INTO comment SET postId = :postId , userId = :userId , comment = :comment , cdate = NOW() ";
		$prep = $this->connection->prepare( $query );
		$prep->execute( array(
			"postId" => $post->getPostId(),
			"userId" => $post->getUserId(),
			"comment" => $post->getComment()
		));
		
				
		return $this->connection->lastInsertId();
	}

	public function deleteComment( Comment $comment ){

		$query = "DELETE FROM comment WHERE id = :id ";
		$prep = $this->connection->prepare( $query );
		$prep->execute( array(
				"id" => $post->getId()
			) );
		
		return $prep->rowCount();


	}



}