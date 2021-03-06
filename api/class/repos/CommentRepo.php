<?php

class CommentRepo extends Repository {

	public function createComment( Comment $comment){

		// var_dump($post);
		// die();
		$query = "INSERT INTO comment SET postId = :postId , userId = :userId , comment = :comment , cdate = NOW() ";
		$prep = $this->connection->prepare( $query );
		$prep->execute( array(
			"postId" => $comment->getPostId(),
			"userId" => $comment->getUserId(),
			"comment" => $comment->getComment()
		));
		
		if( $prep->rowCount() == 1 ){
			$comment = $this->getCommentById( $this->connection->lastInsertId() );
		}
		else {
			$comment = false;
		}
		return $comment;

	}

	public function deleteComment( Comment $comment ){

		$query = "DELETE FROM comment WHERE id = :id ";
		$prep = $this->connection->prepare( $query );
		$prep->execute( array(
				"id" => $post->getId()
			) );
		
		return $prep->rowCount();
	}

	public function getCommentById( $id ){
		$prep = $this->connection->prepare("SELECT * from comment where id = :id ");
		$prep->execute([ "id" => $id ]);
		$result = $prep->fetchAll(PDO::FETCH_ASSOC);

		return new Comment( $result[0] );
	}

	public function getCommentsByPostId( $postId ){
		$prep = $this->connection->prepare("SELECT comment.*, user.pseudo  from comment inner join user as user.id = comment.userId where postId = :postId ");
		$prep->execute([ "postId" => $postId ]);
		$result = $prep->fetchAll(PDO::FETCH_ASSOC);

		$arrayComment = [];
		foreach( $result as $value ){
			$newComment = new Comment( $value );

			array_push( $arrayComment, $newComment );
		}

		return $arrayComment;

	}



}