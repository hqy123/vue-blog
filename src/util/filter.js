import Vue from 'vue'

Vue.filter("article",function(val){
	return val.replace(/<[^>]+>/g,'').substring(0,100)+"......";
})

Vue.filter("timeFormat",function(val){
	let time = new Date(val);
	//const Mon=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec");
	let y = time.getFullYear();
	let m = time.getMonth();
	let d = time.getDate();
  // let H = time.getHours();
  // let M = time.getMinutes();
  // let S = time.getSeconds();

	 return  `${y}-${m}-${d}`;
})
