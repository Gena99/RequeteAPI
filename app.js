$(document).ready(function(){

	$('#recupererTemps').click(function(){
		// faire la demande au serveur de temps
		$.get( "http://api.openweathermap.org/data/2.5/forecast/city?id=2972315&APPID=b726b2e9f4f5440fc9c82f8d5ca6fecc", function(data){
			console.log('YEAH il m a repondu', data);
			$('#resultat').html('<h1>' + data.city.name + ' (' + data.city.country + ') (' + data.city.coord.lon + ', ' + data.city.coord.lat + ')</h1>' );
			data.list.forEach(function(currentValue, index, tableau){
				$('#resultat').append("<div>" + currentValue.dt_txt + " : " + Math.round((currentValue.main.temp  - 273.15)*10)/10 + "°C : " + currentValue.weather[0].description + "</div>");
			});
		} );
	});
});