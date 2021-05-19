 var start,finish,flag=false,day;
 var scope, quality, budget, complexity;
var totalDays=6;
var points;

var ttime= totalDays*86400;

 function st()
 {
 	start= new Date();
}


 function givetime()
 {
	finish=ttime-((new Date() - start)/1000);
	var sec= Math.floor(finish % 60) ;
	var min= Math.floor((finish/60)%60);
	var hrs = Math.floor((finish/3600)%24);
	day = Math.floor(finish/(86400));
	var res1= day +" days " ;
	var res2= hrs +" : "+min + " : " + sec;
	document.getElementById("m").innerHTML=res1;
	document.getElementById("n").innerHTML=res2;
 }

	var a=setInterval(myclock,1000)
 

 function myclock()
 {
 	if(finish!=NaN && finish>1)
 	{
 		finish=finish-1;
 		followup();
 	}
 	else if(finish!=undefined && flag==false)
 	{
 		document.getElementById("m").innerHTML="Time up !!";
		document.getElementById("n").innerHTML="";
 	}
 }
 function followup()
 {
 	var sec= Math.floor(finish % 60) ;
	var min= Math.floor((finish/60)%60);
	var hrs = Math.floor((finish/3600)%24);
	day = Math.floor(finish/(24*3600));
	var res1= day +" days " ;
	var res2= hrs +" : "+min + " : " + sec;
	document.getElementById("m").innerHTML=res1;
	document.getElementById("n").innerHTML=res2;
 }

 function complete()
 {
 	flag=true;
 	clearInterval(a);
 }

 function rating()
 {
	scope=true;
	quality=true;
	budget=true;
	complexity=10;
 	points = day;
 	if(budget==true) points=points+10;
 	if(quality==true) points=points+10;
 	if(scope==true) points=points+10;
 	points = points * complexity;
 	var mpoints= 0.1* points;

	document.getElementById("m").innerHTML="Your points are "+ points+". Your manager's points are "+ mpoints;
 }

 