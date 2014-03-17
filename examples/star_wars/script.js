var images = [		
		"images/ceremony.jpg",
		"images/choke.jpg",
		"images/duel.jpg",
		"images/game.jpg",
		"images/nose_man.jpg",
];

var quotes = [
	'"I\'m Luke Skywalker, I\'m here to rescue you."',
	'"Aren\'t you a little short for a stormtrooper?"',
	'"The Force is strong with this one."',
	'"Use the Force, Luke."',
	'"Help me Obi-Wan Kenobi. You\'re my only hope."',
	'"Mos Eisley spaceport. You will never find a more wretched hive of scum and villainy."',
	'"I\'m Luke Skywalker, I\'m here to rescue you."',
	'"Don\'t call me a mindless philosopher, you overweight glob of grease."',
]

$(document).ready(function(){
	
	$("#image").attr("src", getRandomElement(images));
	$("#quote").text(getRandomElement(quotes));
	
	$("#image-button").click(function(){
		$("#image").attr("src", getRandomElement(images));
	});

	$("#quote-button").click(function(){
		$("#quote").text(getRandomElement(quotes));
	});

	$("#opacity-slider").change(function(){
		$("#image").css({
			opacity: $("#opacity-slider").val() / 100
		});
	});
});

function getRandomElement(array) {
	var randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}