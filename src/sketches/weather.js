function setup() {
  createCanvas(660, 480);
  noLoop();

  var url = 'http://api.openweathermap.org/data/2.5/weather?id=2643743'+
   '&APPID=7bbbb47522848e8b9c26ba35c226c734&units=metric';
   var functionType = drawWindSpeed;

   loadJSON(url, drawHeader);
   loadJSON(url, drawWindSpeed);
   loadJSON(url, drawHumidity);
   loadJSON(url, drawTemp);
}

function draw() {
  background(200);
}

function drawHeader(weather) {
  var header = weather.name + ' Weather';

  fill('#424242');
  textSize(18);
  textAlign(CENTER);
  text(header, width/2, 50);
}

function drawHumidity(weather) {
  var humidity = weather.main.humidity;
  var humidityText = "Humidity: " + humidity;

  fill(0, humidity); // use the humidity value to set the alpha
  textAlign(CENTER);
  text(humidityText, 110, height/3);
  ellipse(110, height/2, 100, 100);
}

function drawWindSpeed(weather) {
  var windSpeed = weather.wind.speed;
  var windText = "Wind speed: " + windSpeed;

  fill(50);
  textAlign(CENTER);
  text(windText, 330, height/3);
  ellipse(330, height/2, 100, 100);
}

function drawTemp(weather) {
  var temp = weather.main.temp;
  var tempText = "Temperature: " + temp;

  if (temp < 5) {
    tempRating = '#3498db';
  } else if (temp >= 5 && temp < 15) {
    tempRating = '#f1c40f';
  } else if (temp >= 15) {
    tempRating = '#e74c3c';
  }

  fill(tempRating);
  textAlign(CENTER);
  text(tempText, 550, height/3);
  ellipse(550, height/2, 100, 100);
}

function keyPressed() {
  if (keyCode === ENTER) {
    saveCanvas('weather', 'jpg');
  }
}
