	var religion = parseInt(sessionStorage.getItem("religion")); // religion = Vie
	var armee = parseInt(sessionStorage.getItem("armee")); // armee = Nourriture
	var peuple = parseInt(sessionStorage.getItem("peuple")); // peuple =  Repos
	var finances = parseInt(sessionStorage.getItem("finances")); // finances = Mental
	var Jour = parseInt(sessionStorage.getItem("Jour")); //Nombre de jour
	var perdu = 0 ;
	var Score = parseInt(localStorage.getItem("Score")); //Meilleur nb de jours
	var Joueur = localStorage.getItem("Joueur"); //Meilleur joueur
	var nbpiece = parseInt(localStorage.getItem("nbpiece")); //pieces machine
	
function recharge () 
{
	//location.reload();			
}
			
			
		function perdureligion () 
	{
	if ( religion > 10 ) {
		sessionStorage.setItem("religion", 10 );
		location.reload();
		
	}
	};
	function perduarmee () 
	{
	if ( armee > 10 ) {
		sessionStorage.setItem("armee", 10 );
		location.reload();
	}
	};
	function perdupeuple () 
	{
	if ( peuple > 10 ) {
		sessionStorage.setItem("peuple", 10 );
		location.reload();
	}
	};
	function perdufinances () 
	{
	if ( finances > 10 ) {
		sessionStorage.setItem("finances", 10 );
		location.reload();
	}
	};

	//ijeifjeifjefo
		function perdureligion2 () 
	{
	if ( religion <= 0 ) {
		window.location = "perdureligion2.html" ;
	}
	};
	function perduarmee2 () 
	{
	if ( armee <= 0 ) {
		window.location = "perduarmee2.html" ;
	}
	};
	function perdupeuple2 () 
	{
	if ( peuple <= 0 ) {
		window.location = "perdupeuple2.html" ;
	}
	};
	function perdufinances2 () 
	{
	if ( finances <= 0 ) {
		window.location = "perdufinances2.html" ;
	}
	};
	
	function redirect () {
		sessionStorage.setItem("Jour", Jour + 1 );
		window.location = urls[Math.floor(urls.length*Math.random())];
	}
	
	
	function oui1 (r,a,p,f)
	 {
	sessionStorage.setItem("religion", religion + r );
	sessionStorage.setItem("armee", armee + a );
	sessionStorage.setItem("peuple", peuple + p );
	sessionStorage.setItem("finances", finances + f );
	};
	
	function sauvegarde () {
		localStorage.setItem("Joueur", document.getElementById("text").value);
		localStorage.setItem("Score",sessionStorage.getItem("Jour"));
		window.location = "../reigns.html" ;
	}
		
	function suppr () {
		localStorage.removeItem("Score")
		localStorage.removeItem("Joueur")
		localStorage.removeItem("nbpiece")
		localStorage.removeItem("nbjour")
		}
	
	function afficher_cacher(id)
	{
		if(document.getElementById(id).style.visibility=="hidden")
		{
			document.getElementById(id).style.visibility="visible";
		}
		else
		{
			document.getElementById(id).style.visibility="hidden";
		}
		return true;
	}
	
	function test (id) {
		if(Jour > Score) {
			document.getElementById(id).style.visibility="visible";
		}
	}
	
	function zero () {
		if (Score > 0) {
			
		}
		else {
			localStorage.setItem("Score", 0);
			location.reload;
		}
	}
	
	function zeropiece () {
		if (nbpiece > 0) {	
		
		}
		else { 
			localStorage.setItem("nbpiece", 0);
		}
	}
	
	function etat1 () {
		window.location = urls[Math.floor(urls.length*Math.random())];
	}
	
	function etat2 () {
		window.location = urls2[Math.floor(urls2.length*Math.random())];
	}
	
	function pieceplus1 () 
	{
		if (nbpiece<1 && Jour>50) {
		 window.location = "#b" ;
		localStorage.setItem("nbpiece", 1);
		}
	 }
	
	function pieceplus2 () 
	{
		if (nbpiece<2 && Jour>75) {	
		 window.location = "#s" ;
		localStorage.setItem("nbpiece", 2);
		 };
	}
	
	function pieceplus3 () 
	{
		if (nbpiece<3 && Jour>100) {	
		 window.location = "#y" ;
		localStorage.setItem("nbpiece", 3);
		 };
	}
	
	
