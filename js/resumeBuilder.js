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


var work = {
	
"jobs": [{
	"title":"Code Reviewer",
	"employer": "Udacity",
	"datesWorked": "Dec 2016-Present",
	"location": "Home-Based(Remote)",
	"description":"Review projects submitted by students enrolled in Self-Driving Car NanoDegree. It requires knowledge of Python, Machine Learning Algorithms and OpenCV."
},

 {  "title":"Code Reviewer",
	"employer": "Udacity",
	"datesWorked": "Dec 2016-Present",
	"location": "Home-Based(Remote)",
	"description":"Review projects submitted by students enrolled in Self-Driving Car NanoDegree. It requires knowledge of Python, Machine Learning Algorithms and OpenCV."
}]
};



var education={
    
    schoolName:"DAV Public School, Hehal",
    degree:"10th and 12th",
    location:"Ranchi, Jharkhand"
};


 $("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
 $("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
 $("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
$("#topContacts").append(HTMLtwitter.replace("%data%",bio.contact.twitter));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.contact.location));
$("#topContacts").append(HTMLmobile.replace("%data%",bio.contact.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contact.email));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contact.github));
  

  if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}
/*$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%",work.employer));
$("#workExperience").append(HTMLworkTitle.replace("%data%",work.title));
$("#workExperience").append(HTMLworkDates.replace("%data%",work.datesWorked));
$("#workExperience").append(HTMLworkLocation.replace("%data%",work.location));
$("#workExperience").append(HTMLworkDescription.replace("%data%",work.description));
*/

function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();























