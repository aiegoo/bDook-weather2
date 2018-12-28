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
				appid: "af147f11a0bdb42f9a8efd152f7bbbf2",
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
	//log("weekly", data);
	var html = '';
	var v = '';
	for(var in data.list)

	html = `
	// 여기에 태그 조합을 삽입하고 그중 데이타를 바다야 할 부분만 수정함
	<ul class="clear">
	<li><img src="" alt=""></li>
	<li class="wk_time"></li>
	<li class="wk_main"></li>
	<li class="wk_temp"></li>
	<li class="wk_wind"></li>
</ul>
	`;
$(".weekly")
}