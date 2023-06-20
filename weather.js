let weather={
	 "apikey": "9a92bbc679ae85c2f4d71c77b1eb5b4a",
	 fetchWeather: function(city) {
		fetch("https://api.openweathermap.org/data/2.5/weather?q="
		 + city 
		 + "&units=metric&appid=" + 
		 this.apikey
		 )
		 .then((response)=>response.json())
		.then((data)=>this.display_weather(data));
	 },
	 
	 display_weather: function(data){
		const {name} = data;
		const {icon, description} = data.weather[0];
		const {temp, humidity} = data.main;
		const {speed} = data.wind;
		console.log(name,icon,description,temp,humidity,speed);
		document.querySelector(".city").innerText = "Weather in " + name;
		document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
		document.querySelector(".description").innerText = description;
		document.querySelector(".temp").innerText = temp + "°C";
		document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
		document.querySelector(".speed").innerText = "Wind Speed: " + speed + " km/h";

	 },
	 search: function (){
		this.fetchWeather(document.querySelector(".search_bar").value);
	 }
};

document.querySelector(".search button").addEventListener("click", function () {
	weather.search();
});

document.querySelector(".search_bar").addEventListener("keyup", function(event){
	if(event.key == "Enter"){
		weather.search();
	}
});
