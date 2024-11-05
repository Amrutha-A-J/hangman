import React, { useState, useEffect } from 'react';
import GameArea from './components/GameArea';
import ErrorArea from './components/ErrorArea';
import HangmanSVG from './components/HangmanSVG';
import Overlay from './components/Overlay';
import './App.css';

const countries = [
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
];

function App() {
	const [selectedCountry, setSelectedCountry] = useState("");
	const [guessedLetters, setGuessedLetters] = useState([]);
	const [errors, setErrors] = useState([]);
	const [gameOver, setGameOver] = useState(false);
	const [gameWon, setGameWon] = useState(false);

	const startNewGame = () => {
		const country = countries[Math.floor(Math.random() * countries.length)].toUpperCase();
		setSelectedCountry(country);
		setGuessedLetters([]);
		setErrors([]);
		setGameOver(false);
		setGameWon(false);
	};

	useEffect(() => {
		startNewGame(); // Start a new game on initial load
	}, []);

	useEffect(() => {
		// Only check for win if selectedCountry is not empty
		if (selectedCountry) {
			const hasWon = selectedCountry.split("").every(letter =>
				guessedLetters.includes(letter) || letter === " "
			);

			if (hasWon) {
				setGameWon(true);
				setGameOver(true); // End the game if won
			}
		}
	}, [guessedLetters, selectedCountry]);

	const handleKeyPress = (event) => {
		if (gameOver) return;

		const keyChar = event.key.toUpperCase();
		if (/[A-Z]/.test(keyChar) && !guessedLetters.includes(keyChar) && !errors.includes(keyChar)) {
			if (selectedCountry.includes(keyChar)) {
				setGuessedLetters(prevGuessedLetters => [...prevGuessedLetters, keyChar]);
			} else {
				setErrors(prevErrors => {
					const updatedErrors = [...prevErrors, keyChar];
					if (updatedErrors.length >= 6) {
						setGameOver(true);
					}
					return updatedErrors;
				});
			}
		}
	};

	useEffect(() => {
		document.addEventListener('keyup', handleKeyPress);
		return () => {
			document.removeEventListener('keyup', handleKeyPress);
		};
	}, [guessedLetters, errors, gameOver]);

	const shouldShowOverlay = gameOver || gameWon;

	return (
		<div className="app">
			{shouldShowOverlay && <Overlay restartGame={startNewGame} gameOver={gameOver} gameWon={gameWon} />}
			<div className="game-container">
				<h1>Guess this country!</h1>
				<GameArea selectedCountry={selectedCountry} guessedLetters={guessedLetters} />
				<ErrorArea errors={errors} />
				<HangmanSVG errors={errors} />
			</div>
		</div>
	);
}

export default App;