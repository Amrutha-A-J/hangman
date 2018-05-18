
var list = [
				"Afghanistan",
				"Albania",
				"Algeria",
				"Andorra",
				"Angola",
				"Argentina",
				"Armenia",
				"Australia",
				"Austria",
				"Azerbaijan",
				"Bahamas",
				"Bahrain",
				"Bangladesh",
				"Barbados",
				"Belarus",
				"Belgium",
				"Belize",
				"Benin",
				"Bhutan",
				"Bolivia",
				"Bosnia Herzegovina",
				"Botswana",
				"Brazil",
				"Brunei",
				"Bulgaria",
				"Burkina",
				"Burundi",
				"Cambodia",
				"Cameroon",
				"Canada",
				"Cape Verde",
				"Chad",
				"Chile",
				"China",
				"Colombia",
				"Comoros",
				"Congo",
				"Costa Rica",
				"Croatia",
				"Cuba",
				"Cyprus",
				"Czech Republic",
				"Denmark",
				"Djibouti",
				"Dominica",
				"Dominican Republic",
				"East Timor",
				"Ecuador",
				"Egypt",
				"El Salvador",
				"Equatorial Guinea",
				"Eritrea",
				"Estonia",
				"Ethiopia",
				"Fiji",
				"Finland",
				"France",
				"Gabon",
				"Gambia",
				"Georgia",
				"Germany",
				"Ghana",
				"Greece",
				"Grenada",
				"Guatemala",
				"Guinea",
				"Guyana",
				"Haiti",
				"Honduras",
				"Hungary",
				"Iceland",
				"India",
				"Indonesia",
				"Iran",
				"Iraq",
				"Ireland",
				"Israel",
				"Italy",
				"Ivory Coast",
				"Jamaica",
				"Japan",
				"Jordan",
				"Kazakhstan",
				"Kenya",
				"Kiribati",
				"Korea North",
				"Korea South",
				"Kosovo",
				"Kuwait",
				"Kyrgyzstan",
				"Laos",
				"Latvia",
				"Lebanon",
				"Lesotho",
				"Liberia",
				"Libya",
				"Liechtenstein",
				"Lithuania",
				"Luxembourg",
				"Macedonia",
				"Madagascar",
				"Malawi",
				"Malaysia",
				"Maldives",
				"Mali",
				"Malta",
				"Marshall Islands",
				"Mauritania",
				"Mauritius",
				"Mexico",
				"Micronesia",
				"Moldova",
				"Monaco",
				"Mongolia",
				"Montenegro",
				"Morocco",
				"Mozambique",
				"Myanmar",
				"Namibia",
				"Nauru",
				"Nepal",
				"Netherlands",
				"New Zealand",
				"Nicaragua",
				"Niger",
				"Nigeria",
				"Norway",
				"Oman",
				"Pakistan",
				"Palau",
				"Panama",
				"Papua New Guinea",
				"Paraguay",
				"Peru",
				"Philippines",
				"Poland",
				"Portugal",
				"Qatar",
				"Romania",
				"Russian Federation",
				"Rwanda",
				"St Lucia",
				"Samoa",
				"San Marino",
				"Saudi Arabia",
				"Senegal",
				"Serbia",
				"Seychelles",
				"Sierra Leone",
				"Singapore",
				"Slovakia",
				"Slovenia",
				"Solomon Islands",
				"Somalia",
				"South Africa",
				"South Sudan",
				"Spain",
				"Sri Lanka",
				"Sudan",
				"Suriname",
				"Swaziland",
				"Sweden",
				"Switzerland",
				"Syria",
				"Taiwan",
				"Tajikistan",
				"Tanzania",
				"Thailand",
				"Togo",
				"Tonga",
				"Trinidad & Tobago",
				"Tunisia",
				"Turkey",
				"Turkmenistan",
				"Tuvalu",
				"Uganda",
				"Ukraine",
				"United Arab Emirates",
				"United Kingdom",
				"United States",
				"Uruguay",
				"Uzbekistan",
				"Vanuatu",
				"Vatican City",
				"Venezuela",
				"Vietnam",
				"Yemen",
				"Zambia",
				"Zimbabwe"
					]
var item = list[Math.floor(Math.random()*52)].toUpperCase();
var errorArray = [];
var idArray=["head","hbody","lhand","rhand","lleg","rleg"];
var classArray=["head","hbody","lhand","rhand","lleg","rleg"];
var alphanumeric = /[ A-Za-z0-9]/;
function createslots(){
		var i=0;
		do{
			var contentvar=document.createTextNode("\u00A0");
			if(item[i]!=" "){
						contentholder = document.createTextNode("__\u00A0");
						i++;
			}
			else {
					contentholder = document.createTextNode("\u00A0");
					contentvar = document.createTextNode("\u00A0\u00A0\u00A0");
					i++;
			}
			var box1 = document.createElement("div");
			box1.style.float="left";
			var box1a = document.createElement("div");
			var box1b = document.createElement("div");
			box1a.appendChild(contentvar);
			box1b.appendChild(contentholder);
			box1.appendChild(box1a);
			box1.appendChild(box1b);
			var gameArea= document.getElementsByClassName("game_area")[0];
			gameArea.appendChild(box1);
			
		} while(i<item.length);
}
function keycheck(event){
	var ov=document.getElementById("overlay");
	if(ov.style.display=="none"){
		var keyChar = String.fromCharCode(event.which || event.keyCode);
		if(alphanumeric.test(keyChar)){
	 			var pressed= event.key.toUpperCase();
				var gameArea= document.getElementsByClassName("game_area")[0].children;
				var flag=0;
				for(var i=0;i<item.length;i++){
					if(pressed===item[i]){
						gameArea[i].children[0].innerHTML=pressed;
						flag=1;
					}
				}
				if(flag==0){
					triggerError(pressed);
				}
	 	}
	 }
}
function triggerError(pressed){
	if(errorArray.indexOf(pressed)<0){
		errorArray.push(pressed);
		strikedArea();
		animationTrigger(errorArray.length-1);
	}
}

function strikedArea(){
	var errorArea= document.getElementsByClassName("error_Area")[0];
	var contentholder = document.createElement("div");
	contentholder.innerHTML= errorArray[errorArray.length-1];
	contentholder.style.float="left";
	errorArea.appendChild(contentholder);
}
function animationTrigger(i){
	if(errorArray.length<=6){
		var element= document.getElementById(idArray[i]);
		element.classList.add(classArray[i]);
	}
	if(errorArray.length>=6){
		var gameOver= document.getElementsByClassName("section1")[0];
		gameOver.innerHTML="";
		gameOver.style.background="url('game_over.png') no-repeat";
	}
}
function showfn(){
	var ov=document.getElementById("overlay");
	ov.style.display="none";
	var mn=document.getElementById("maindiv");
	mn.style.display="block";
	document.getElementById("hidden-text").focus();
}
//if i==classarray.length , gameover
