/*
This is empty on purpose! Your code to build the resume will go here.
 

 var formattedName = HTMLheaderName.replace("%data%", "Ayush");
 var formattedRole = HTMLheaderRole.replace("%data%", "web Developer");


 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

*/

var bio = {

	"name": "Ayush Kumar Sinha",
	"role": "Web Developer",
	"contact": {
		"mobile": "70607537670",
		"email": "ayush.ayush.kr@gmail.com",
		"github": "ayush1095",
		"twitter": "ayushkumar1095",
		"location": "india"
	},
	"welcomeMsg":"Helllllooooooo",
	"skills":[
	"HTML","CSS","javaScript"],
	"bioPic":"images/me.jpg"
}

 $("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
 $("#header").append(HTMLheaderRole.replace("%data%",bio.role));

$("#header").append(HTMLmobile.replace("%data%",bio.contact.mobile));
$("#header").append(HTMLemail.replace("%data%",bio.contact.email));
$("#header").append(HTMLgithub.replace("%data%",bio.contact.github));
$("#header").append(HTMLtwitter.replace("%data%",bio.contact.twitter));
$("#header").append(HTMLlocation.replace("%data%",bio.contact.location));
$("#header").prepend(HTMLbioPic.replace("%data%",bio.bioPic));
$("#header").append(HTMLskills.replace("%data%",bio.skills));
