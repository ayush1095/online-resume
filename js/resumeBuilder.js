var bio = {
    "name": "Ayush Kumar Sinha",
    "role": "Web Developer",
    "contacts": {
        "email": "ayush.ayush.kr@gmail.com",
        "github": "Ayush1095",
        "twitter": "@AyushKumar1095",
        "location": "Dehradun, Uttarakhand, India"
    },
    "picture": "images/me.jpg",
    "welcomeMessage": "I'm currently persuing B.Tech from University of petroleum and energy studies, Dehradun. I am looking for Internship. "+
              "I love web",
    "skills": ["JavaScript", "HTML", "python", "Software Development", "C and C++"]
};

var work = {
    "jobs": [
        {
            "employer": "Udacity",
            "title": "Code Reviewer",
            "location": "Dehradun, Uttarakhand",
            "datesWorked": "December 2017 - Present",
            "description":"Review projects submitted by students enrolled in Self-Driving Car NanoDegree. It requires knowledge of Python, Machine Learning Algorithms and OpenCV."

        }
    ]
};

var education = {
    "schools": [
        { "name": "University of Petroleum and energy studies",
            "datesAttended": "2014 - 2018",
            "location": "Dehradun, uttarakhand, India",
            "degree": "B.Tech in Computer Science with specialization in Open source and Open standards",
            "major": "Decaf Compiler",
            "minor": "Traveling salesman problem using Ant colony Optimization",
            "url": "www.upes.ac.in"
        }
    ],
   "onlineCourses": [
        { "school": "Udacity",
            "title": "Front-End Web Developer NanoDegree",
            "completed": "Ongoing",
            "url": "https://www.udacity.com/course/ud015"
        },
        { "school": "Udacity",
            "title": "HTML5 Canvas",
            "completed": "Ongoing",
            "url": "https://www.udacity.com/course/ud292"
        },
        { "school": "Udacity",
            "title": "Javascript Basics",
            "completed": "March 2017",
            "url": "https://www.udacity.com/course/ud804"
        },
        { "school": "Udacity",
            "title": "Intro to HTML and CSS",
            "completed": "November 2016",
            "url": "https://www.udacity.com/course/ud304"
        },
        { "school": "Udacity",
            "title": "Web Development",
            "completed": "September 2016",
            "url": "https://www.udacity.com/course/cs253"
        }
    ]
};


var projects = {
    "projects": [
        {
            "title": "HTML5 Canvas Game",
            "datesWorked": "April 2017 - Ongoing",
            "description": "Creating an online game using HTML5 Canvas as part of Udacity's Front-End Web Developer " +
            "Nanodegree.",
            "images": ["images/frogger.jpg"],
            "url": "http://Ayush1095.github.io/frogger-game"
        },
        {
            "title": "Online Portfolio",
            "datesWorked": "October-december 2016",
            "description": "Created an online portfolio as part of Udacity's Front-End Web Developer " +
            "Nanodegree.",
            "images": ["images/portfolio.png"],
            "url": "https://github.com/ayush1095/portfolio_site"
        },
        {
            "title": "Online Resume",
            "datesWorked": "March - April 2017",
            "description": "Created an online resume for Udacity's Web Development Course.",
            "images": ["images/resume.png"],
            "url": "https://github.com/ayush1095/online-resume"
        }
    ]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for(i in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

for(i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}


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


projects.display = function() {
    if(projects.projects.length > 0) {
        for(i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for(img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
}

projects.display();

education.display = function() {
    if(education.schools.length > 0 || education.onlineCourses.length > 0) {
        for(i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
            var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
            $(".education-entry:last").append(formattedSchoolMinor);
        }

        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}

education.display();

/**
 * Skills Chart
 */

//$("#mapDiv").append(googleMap);


