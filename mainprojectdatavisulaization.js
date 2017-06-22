 
var mapimg;
var clat=0;
var clon=0;

var lat=30.7333;
var lon=76.7794;
var zoom=1;
var earthquake;


function preload() {
mapimg=loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoiYWJoaXNoZWsyNiIsImEiOiJjaXplMm9weWIwMDU3MzRtZHo3cHJiYWxsIn0.WgfP92PZOZBqrM20c0A-5w');
earthquake=loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv')

}



function mercX(lon)
{
  lon=radians(lon);
var a=(256/PI)*pow(2,zoom);
var b= lon+PI;
return a*b;
 }
function mercY(lat)
{
  lat=radians(lat);
var a=(256/PI)*pow(2,zoom);
var b= tan(PI/4+lat/2);
var c=PI-log(b);
return a*c;
 }




function setup() {
  createCanvas(1024,512);
 translate(width/2,height/2);
 imageMode(CENTER);
  image(mapimg,0,0);
 var cx=mercX(clon);
 var cy=mercY(clat);
 for(var i=0;i<earthquake.length;i++)
  {
  var data=earthquake[i].split(/,/);
  console.log(data);
var lat=data[1];
var lon=data[2];
var mag=data[4];
var x=mercX(lon)-cx;
 var y=mercY(lat)-cy;
 mag=pow(mag,10);
 mag=sqrt(mag);
 var magmax=sqrt(pow(10,10));
 var d=map(mag,0,magmax,0,60);
 stroke(255,0,0);
// strokeWeight(5);
 fill(255,0,0,200);
 ellipse(x,y,d,d);
   

}
 
 
 }