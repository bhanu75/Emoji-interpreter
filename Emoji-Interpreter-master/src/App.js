import React, { useState } from "react";
import "./styles.css";

var company = {
	"🚘": "Tesla",
	"🛒": "Amazon",
	"🧑‍💻": "HP",
	"⛮": "L&T",
	"🖥️": "Microsoft",
  "📱": "Samsung",
  "Q": "tele",
};
var companyKeys = Object.keys(company);
export default function App() {
	const [userInputMeaning, emojiMeaning] = useState("");

	function emojiInput(e) {
		var Input = e.target.value;
		var meaning = company[Input];
		if (meaning === undefined) {
			meaning = "Not Found in Database";
		}
		emojiMeaning(meaning);
	}

	function emojiClickHandler(company) {
		var meaning = company[company];
		emojiMeaning(meaning);
	}

	return (
		<div className="App">
			<h1>The company </h1>
			<input onChange={emojiInput} />
			<h2>{userInputMeaning}</h2>
			<h2>What we know</h2>
			{companyKeys.map(function (keys) {
				return (
					<span onClick={() => emojiClickHandler(keys)}>{keys}</span>
				);
			})}
		</div>
	);
}