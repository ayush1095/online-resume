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
	"HTML","CSS","JavaScript", "Node.js", "Python"],
	"bioPic":"images/me.jpg"
};

 $("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
 $("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
 $("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));




$("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contact.twitter));
$("#footerContacts").append(HTMLlocation.replace("%data%",bio.contact.location));
$("#topContacts").append(HTMLmobile.replace("%data%",bio.contact.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contact.email));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contact.github));
  

  if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}
var work = {
	

	"title":"code reviewer",
	"employer": "udacity",
	"datesWorked": "4 months",
	"location": "remote",
	"description":"Review projects submitted by students enrolled in Self-Driving Car NanoDegree."
};



var education={
    
    schoolName:"DAV Public School, Hehal",
    degree:"10th and 12th",
    location:"Ranchi, Jharkhand"
};


$("#workExperience").append(HTMLworkEmployer.replace("%data%",work.employer));
$("#workExperience").append(HTMLworkTitle.replace("%data%",work.position));
$("#workExperience").append(HTMLworkDates.replace("%data%",work.experience));
























