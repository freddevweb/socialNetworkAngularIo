<?


Class User extends Model implements JsonSerializable {

    private $prenom;
    private $nom;
    private $pseudo;
    private $email;
    private $pass;
    private $photo_path;
    private $inscription;
    private $connection;
    private $publicationLike;
    
    	// @ prenom
	function getPrenom(){
        return $this->prenom;
    }
    function setPrenom( $prenom ){
        $this->prenom = $prenom;
	}

	// @ nom
	function getNom(){
        return $this->nom;
    }
    function setNom( $nom ){
        $this->nom = $nom;
	}
	
	// @ pseudo
	function getPseudo(){
        return $this->pseudo;
    }
    function setPseudo( $pseudo ){
        $this->pseudo = $pseudo;
    }

    // @ email
	function getEmail(){
        return $this->email;
    }
    function setEmail( $email ){
        $this->email = $email;
	}

	// @ pass
	function getPass(){
        return $this->pass;
    }
    function setPass( $pass ){
        $this->pass = $pass;
	}
	
	// @ inscription
	function getInscription(){
        return $this->inscription;
    }
    function setInscription( $inscription ){
        $this->inscription = $inscription;
    }

    // @ connection
	function getConnection(){
        return $this->connection;
    }
    function setPublication( $connection ){
        $this->connection = $connection;
    }

    // @ connection
	function getPublicationLike(){
        return $this->publicationLike;
    }
    function setPublicationLike( $publicationLike ){
        $this->publicationLike = $publicationLike;
    }

    function jsonSerialize(){
        return [
            "id" => $this->id,
            "prenom" => $this->prenom,
            "nom" => $this->nom,
            "pseudo" => $this->pseudo,
            "email" => $this->email,
            "photo_path" => $this->photo_path,
            "inscription" => $this->inscription,
            "publicationLike" => $this->publicationLike
        ];
	}

}