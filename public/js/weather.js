// af147f11a0bdb42f9a8efd152f7bbbf2
// api.openweathermap.org/data/2.5/weather?id=2172797
//api.openweathermap.org/data/2.5/forecast?id=524901
var log = console.log;
var urlBase = "https://api.openweathermap.org/data/2.5/";
$(".tabs > li").click(function(){
	var n = $(this).index();
	$(".tabs > li").css({
		"background-color":"#f8f8f8",
		"border-bottom":"none",
		"color":"#333",
		"font-weight":"normal"
	});
	$(this).css({
		"background-color":"#f60",
		"border-bottom":"3px solid #390",
		"color":"#fff",
		"font-weight":"bold"
	});
	$(".conts").hide();
	$(".conts").eq(n).show(function(){
		if(n == 0) url = urlBase + "weather";
		else url = urlBase + "forecast";
		$.ajax({
			url: url,
			type: "get",
			dataType: "json",
			data: {
				id: "1835848",
				appid: "02efdd64bdc14b279bc91d9247db4722",
				units: "metric"
			},
			success: function(data){
				if(n == 0) dailyFn(data);
				else weeklyFn(data);
			},
			error: function(xhr){
				log(xhr);
			}
		});
	});
});
$(".tabs > li").eq(0).trigger("click");

function dailyFn(data) {
	console.log(data);
	$("#wt_icon").attr("src", "../imges/icon/"+data.weather[0].icon+".png");
	$("#wt_main").html(data.weather[0].main+" / "+data.weather[0].description);
	$("#wt_temp").html(data.main.temp+"("+data.main.temp_max+"/"+data.main.temp_min+")");
	$("#wt_wind").html(data.wind.speed+"/ms ("+data.wind.deg+"deg)");
	$("#wt_coord").html("위도: "+data.coord.lat+" / 경도: "+data.coord.lon);
}

function weeklyFn(data) {
	log("weekly"+data);
}