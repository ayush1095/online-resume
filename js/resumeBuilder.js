var bio = {
    "name": "Ayush Kumar Sinha",
    "role": "Web Developer",
    "contacts": {
        "email": "ayush.ayush.kr@gmail.com",
        "github": "Ayush1095",
        "twitter": "@AyushKumar1095",
        "location": "Ranchi, jharkhand",
        "mobile":"7060753767"
    },
    "bioPic": "images/me.jpg",
    "welcomeMessage": "I'm currently persuing B.Tech from University of petroleum and energy studies, Dehradun. "+
              "I love web",
    "skills": ["JavaScript", "HTML", "python", "Software Development", "C and C++"],

    "display":function(){
                var formattedName = HTMLheaderName.replace("%data%", bio.name);
                var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
                var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
                var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

                var formattedContactInfo = [];
                formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
                formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
                formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
                formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
                formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));


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

                for(var i=0;i<formattedContactInfo.length;i++) {
                    $("#topContacts").append(formattedContactInfo[i]);
                    $("#footerContacts").append(formattedContactInfo[i]);
                }
}
};
bio.display();

var work = {
    "jobs": [
        {
            "employer": "Udacity",
            "title": "Code Reviewer",
            "location": "Dehradun, Uttarakhand",
            "datesWorked": "December 2017 - Present",
            "description":"Review projects submitted by students enrolled in Self-Driving Car NanoDegree. It requires knowledge of Python, Machine Learning Algorithms and OpenCV."

        }
    ],

    "display": function() {
        // body..
        if(work.jobs.length>0){
          $("#workExperience").append(HTMLworkStart);

        for(var i=0;i<work.jobs.length;i++){
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
};
work.display();


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
    ],


    "display" : function() {
    if(projects.projects.length > 0) {
        for(var i=0;i<projects.projects.length;i++) {
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
}};

projects.display();


 var education = {
    "schools": [
        { "name": "University of Petroleum and energy studies",
            "dates": "2014 - 2018",
            "location": "Dehradun, uttarakhand, India",
            "degree": "B.Tech in Computer Science with specialization in Open source and Open standards",
            "majors": "Decaf Compiler",
            "minors": "Traveling salesman problem using Ant colony Optimization",
            "url": "www.upes.ac.in"
        }
    ],
   "onlineCourses": [
        { "school": "Udacity",
            "title": "Front-End Web Developer NanoDegree",
            "dates": "Ongoing",
            "url": "https://www.udacity.com/course/ud015",
            "location": "Dehradun,uttarakhand, India"
        },
        { "school": "Udacity",
            "title": "HTML5 Canvas",
            "dates": "Ongoing",
            "url": "https://www.udacity.com/course/ud292",
            "location": "Dehradun,uttarakhand, India"
        },
        { "school": "Udacity",
            "title": "Javascript Basics",
            "dates": "March 2017",
            "url": "https://www.udacity.com/course/ud804",
            "location": "Dehradun,uttarakhand, India"
        },
        { "school": "Udacity",
            "title": "Intro to HTML and CSS",
            "dates": "November 2016",
            "url": "https://www.udacity.com/course/ud304",
            "location": "Dehradun,uttarakhand, India"
        }],

    "display": function() {

        // SCHOOL EDUCATION

        $.each(education.schools, function(edu) {

            $('#education').append(HTMLschoolStart); // this appends SCHOOL EDUCATION to #education header

            var educations = education.schools;

            var myName = HTMLschoolName.replace('%data%', educations[edu].name).replace("#", educations[edu].url);
            var myDegree = HTMLschoolDegree.replace('%data%', educations[edu].degree);
            $('.education-entry:last').append(myName + myDegree);

            var myDates = HTMLschoolDates.replace('%data%', educations[edu].dates);
            $('.education-entry:last').append(myDates);

            var myLocation = HTMLschoolLocation.replace('%data%', educations[edu].location);
            $('.education-entry:last').append(myLocation);

            var myMajors = HTMLschoolMajor.replace('%data%', educations[edu].majors);
            $('.education-entry:last').append(myMajors);


            var myMinors = HTMLschoolMinor.replace('%data%', educations[edu].minors);
            $('.education-entry:last').append(myMinors);
        });

        // ONLINE COURSES

        $('#education').append(HTMLonlineClasses); // this appends ONLINE EDUCATION to #education header

        $.each(education.onlineCourses, function(edu) {
            $('#education').append(HTMLschoolStart);

            var onlineEd = education.onlineCourses;

            var myTitle = HTMLonlineTitle.replace('%data%', onlineEd[edu].title);
            var mySchool = HTMLonlineSchool.replace('%data%', onlineEd[edu].school);
            $('.education-entry:last').append(myTitle + mySchool);

            var myDates = HTMLonlineDates.replace('%data%', onlineEd[edu].dates);
            $('.education-entry:last').append(myDates);

            var myUrl = HTMLonlineURL.replace("#", onlineEd[edu].url).replace('%data%', onlineEd[edu].url);
            $('.education-entry:last').append(myUrl);


        });
    }
};
education.display(); // DISPLAYING EDUCATION ON PAGE

function displayMap() {
    $('#mapDiv').append(googleMap);
}

displayMap();

