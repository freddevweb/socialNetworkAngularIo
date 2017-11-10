DROP DATABASE if exists SocialNetwork;
CREATE DATABASE SocialNetwork;
USE SocialNetwork;
SET NAMES UTF8;
SET CHARSET 'utf8';

CREATE TABLE user (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	prenom VARCHAR(255) NOT NULL,
	nom VARCHAR(255) NOT NULL,
	pseudo VARCHAR(255) UNIQUE NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
	pass VARCHAR(255) NOT NULL,
	photo_path VARCHAR(255),
	inscription DATE NOT NULL,
	connection DATETIME NOT NULL

)engine=innodb;

CREATE TABLE post (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	userId INT NOT NULL,
	texte TEXT NOT NULL,
	publication DATETIME NOT NULL

)engine=innodb;

CREATE TABLE comment (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	postId INT NOT NULL,
	userId INT NOT NULL,
	comment VARCHAR(255) NOT NULL,
	cdate DATETIME not null

)engine=innodb;

CREATE TABLE aim (
	userId INT NOT NULL,
	postId INT NOT NULL,
	aimType INT NOT NULL

)engine=innodb;

CREATE TABLE follow (
	userId INT NOT NULL,
	FollowedId INT NOT NULL

)engine=innodb;

/* ################################################## */
/* ################################################## */
/*                   primary key                      */

alter TABLE aim
	ADD CONSTRAINT PK_aim
	PRIMARY KEY ( userId , postId );

alter TABLE follow 
	ADD CONSTRAINT PK_Follow
	PRIMARY KEY ( userId , FollowedId );

/* ################################################## */
/* ################################################## */
/*                    forein key                      */

ALTER TABLE aim
	ADD CONSTRAINT FK_aim_User
	FOREIGN KEY (userId) 
	REFERENCES user( id );

ALTER TABLE aim
	ADD CONSTRAINT FK_aim_Post
	FOREIGN KEY ( postId ) 
	REFERENCES post( id );

ALTER TABLE follow
	ADD CONSTRAINT FK_Follow_User
	FOREIGN KEY (userId) 
	REFERENCES user( id );

ALTER TABLE follow
	ADD CONSTRAINT FK_Follow_Followed
	FOREIGN KEY ( FollowedId ) 
	REFERENCES user( id );

ALTER TABLE post
	ADD CONSTRAINT FK_Post_User
	FOREIGN KEY ( userId ) 
	REFERENCES user( id );

ALTER TABLE comment
	ADD CONSTRAINT FK_Comment_User
	FOREIGN KEY ( userId ) 
	REFERENCES user( id );

ALTER TABLE comment
	ADD CONSTRAINT FK_Comment_Post
	FOREIGN KEY ( postId ) 
	REFERENCES post( id );


/* ################################################## */
/* ################################################## */
/*                      insert                        */


INSERT INTO user VALUES
( 1 , "Fred" , "MAS" , "Fred" , "fred@mail.com" , "570a90bfbf8c7eab5dc5d4e26832d5b1" , "" , '2016-08-11' , '2017-11-09 09:01:22' ),
( 2 , "Pierre" , "MAR" , "Pierre" , "pierre@mail.com" , "5fa9db2e335ef69a4eeb9fe7974d61f4" , "" , '2016-08-11' , '2017-10-30 21:00:08' ),
( 3 , "Paul" , "MAUVE" , "Paul" , "paul@mail.com" , "4de5322b1dba747ee87ac14bd5374849" , "" , '2016-08-11' , '2017-11-09 09:01:22' ),
( 4 , "Clement" , "GUANTER" , "Clem" , "clement@mail.com" , "8fd95827cccaa2c64bafc371436b50ca" , "" , '2016-08-11' , '2017-11-09 08:55:22' )
;



INSERT INTO post VALUES
( 1 , 2 , "Wah vous avez vu, il y a un nouveau reseau special gamers" , '2017-10-30 21:05:08' ),
( 2 , 1 , "C'est quand qu'on monte au ski ?" , '2017-11-08 08:00:00' ),
( 3 , 4 , "Ce soir 21h battle sur unreal tournement" , '2017-11-09 09:01:22' )
;


INSERT INTO aim VALUES
( 1 , 3 , 1 ),
( 4 , 1 , 1 ),
( 2 , 1 , 1 ),
( 1 , 1 , 1 ),
( 2 , 3 , 1 ),
( 4 , 3 , 1 ),
( 1 , 2 , 1 )
;

INSERT INTO follow VALUES
( 1 , 2 ),
( 2 , 4 ),
( 3 , 2 )
;





