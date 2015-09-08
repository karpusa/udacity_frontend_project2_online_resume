var appendObjectProperties = function(object, selector, formatter, placeholder) {
  var html =' ';
  for (var property in object) {
    var value = object[property];
    var data = formatter.replace(placeholder.property, property)
                        .replace(placeholder.value, value);
    html+=data;
  }
  if (html) {
    $(selector).append(html);
  }
};

var appendArrays = function(list, location, formatter, valuePlaceholder) {
  for (var key in list) {
    $(location).append(formatter.replace(valuePlaceholder, list[key]));
  }
};

var placeholderData = function(data, formatter, dataPlaceholder) {
  dataPlaceholder = dataPlaceholder || '%data%';
  return formatter.replace(dataPlaceholder, data);
};

var bio = {
    'name': 'Vitalij Karpusha',
    'role': 'Frontend Developer',
    'contacts': {
            'mobile': '+371 26723160',
            'email': 'vkarpusha@gmail.com',
            'github': 'karpusa',
            'twitter': '@VitalijKarpusha',
            'location': 'Brivibas gatve 432, Riga, Latvia',
            'blog': 'http://www.karpusa.lv'
        },
    'welcomeMessage': 'Hello',
    'skills': [
        'html', 'css3', 'JavaScript', 'JQuery', 'AJAX', 'XML', 'JSON', 'SCSS', 'LESS', 'Gulp', 'Grunt'
    ],
    'biopic': 'images/vitalijkarpusa.jpg',
    'display': function() {
        $('#header').prepend(placeholderData(bio.role, HTMLheaderRole));
        $('#header').prepend(placeholderData(bio.name, HTMLheaderName));

        appendObjectProperties(bio.contacts, '#topContacts', HTMLcontactGeneric, {'property': '%contact%', 'value': '%data%'});
        appendObjectProperties(bio.contacts, '#footerContacts', HTMLcontactGeneric, {'property': '%contact%', 'value': '%data%'});

        $('#header').append(placeholderData(bio.biopic, HTMLbioPic));
        $('#header').append(HTMLskillsStart);
        appendArrays(bio.skills, '#skills', HTMLskills, '%data%')
    }

};

var education = {
  'schools': [
    {
      'name': 'TRANSPORT AND TELECOMMUNICATION INSTITUTE',
      'location': '1 Lomonosova Street, Riga, Latvia',
      'degree': 'Bachelor of Science',
      'majors': ['Computer Science'],
      'dates': 2012,
      'url': 'http://tsi.lv'
    }
  ],
  'onlineCourses': [
    {
      'title': 'Front-End Nanodegree',
      'school': 'Udacity',
      'date': 2015,
      'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }
  ],
  'display': function() {

    for (var i in this.schools) {
      var school = this.schools[i];
      $('#education').append(HTMLschoolStart);
      $(".education-entry:last").append(
          placeholderData(school.name, HTMLschoolName) +
          placeholderData(school.degree, HTMLschoolDegree) +
          placeholderData(school.dates, HTMLschoolDates) +
          placeholderData(school.location, HTMLschoolLocation) +
          placeholderData(school.majors, HTMLschoolMajor)
      );
    }

    $('#education').append(HTMLonlineClasses);
    for (var i in this.onlineCourses) {
      var onlineCourses = this.onlineCourses[i];
      $('#education').append(HTMLonlineStart);
      $(".education-entry:last").append(
          placeholderData(onlineCourses.title, HTMLonlineTitle) +
          placeholderData(onlineCourses.school, HTMLonlineSchool) +
          placeholderData(onlineCourses.date, HTMLonlineDates) +
          placeholderData(onlineCourses.url, HTMLonlineURL)
      );
    }
  }
};

var work = {
  "jobs": [
    {
      "employer": "Axioma",
      "title": "Frontend Developer",
      "location": "Gunara Astras 2, Riga, Latvia",
      "dates": "07/2014 - Current",
      "description": "Responsive web development"
    },
    {
      "employer": "Baltic Design Colors",
      "title": "Frontend & Backend Developer",
      "location": "Brīvības iela 137, Riga, Latvia",
      "dates": "07/2007 – 06/2014",
      "description": "100 projects in web development"
    },
    {
      "employer": "Bizness & Baltija",
      "title": "Developer Bitrix CMS",
      "location": "Krišjāņa Valdemāra 149, Riga, Latvia",
      "dates": "10/2006 – 01/2007",
      "description": "Site on Bitrix"
    }
  ],
  'display': function() {
    for (var i in this.jobs) {
      var job = this.jobs[i];
      $('#workExperience').append(HTMLworkStart);
      $(".work-entry:last").append(
          placeholderData(job.employer, HTMLworkEmployer) +
          placeholderData(job.title, HTMLworkTitle) +
          placeholderData(job.dates, HTMLworkDates) +
          placeholderData(job.location, HTMLworkLocation) +
          placeholderData(job.description, HTMLworkDescription)
        );
    }
  }

};

var projects = {
  'projects': [
    {
      'title': 'wargamingnetwork.ru',
      'dates': '2015',
      'description': 'Responsive site with fullpage scroll and video slider',
      'images': [
        'images/project1.jpg'
      ]
    },
    {
      'title': 'www.laika-apstakli.lv',
      'dates': '2014-2015',
      'description': 'Website weather Latvia',
      'images': [
        'images/project2.jpg'
      ]
    }
  ],
  'display': function() {
    for (var i in this.projects) {
      var project = this.projects[i];
      $('#projects').append(HTMLprojectStart);
      $(".project-entry:last").append(
          placeholderData(project.title, HTMLprojectTitle) +
          placeholderData(project.dates, HTMLprojectDates) +
          placeholderData(project.description, HTMLprojectDescription) +
          placeholderData(project.images, HTMLprojectImage)
        );
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);