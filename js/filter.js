table_app.filter("checkWifi",function(){
	return function(wifi){
		if(wifi==1){
			return "有wifi";
		}
		else{
			return "没wifi你坑我呢！";
		}
	}
})