$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function displayWork(){
	//Work Append
	for(j in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var employer = HTMLworkEmployer.replace("%data%",work.jobs[j].employer);
		var title = HTMLworkTitle.replace("%data%",work.jobs[j].title);
		var dates = HTMLworkDates.replace("%data%",work.jobs[j].dates);
		var loc = HTMLworkLocation.replace("%data%",work.jobs[j].city);
		var desc = HTMLworkDescription.replace("%data%",work.jobs[j].description);


		var workFinal = employer + title + dates + loc + desc;

		

		$(".work-entry:last").append(workFinal);
	}
}

function inName(text){
	//Remover tags
	var div = document.createElement("div");
	div.innerHTML = text;
	var name = div.textContent || div.innerText || "";


	//Manipular String
	name = name.split(" ");
	var fName = name[0];
	var lName = name[1];
	fName = fName[0]. toUpperCase() + fName.slice(1).toLowerCase();
	lName = lName.toUpperCase();

	return fName + " " + lName;
}

//Objeto Biografia
var bio = {
	"name" 		: "Syd Barrett",
	"role"      : "Musician",
	"contact" : {
		"mobile" 	: "1111-1111",
		"email" 	: "sydb@gmail.com",
		"github"	: "https://github.com/sydb/",
		"twitter"	: "https://twitter.com/sydbarrett11",
		"location"	: "Heaven"
	},
	"picURL"     : "https://yt3.ggpht.com/-UM2fDRM_GDM/AAAAAAAAAAI/AAAAAAAAAAA/vM4Ztgz3IUE/s100-c-k-no/photo.jpg",
	"welcomeMsg" : "I don't think I'm easy to talk about. I've got a very irregular head. And I'm not anything that you think I am anyway.",
	"skills"     : ["music", "guitar", "psychadelic", "progressive", "lyrics"]
}

//Objeto Work
var work = {
	"jobs":[
	{
		"employer": "Pink Floyd",
		"title": "Guitar and vocals",
		"city": "London",
		"dates": [1965, 1968],
		"description": "Foi vocalista, guitarrista e compositor do Pink Floyd"
	},
	{
		"employer": "Autoral",
		"title": "Guitar and vocals",
		"city" : "Cambridge",
		"dates": [1968, 1972],
		"description": "Carreira solo"
	}
	]
}

//Objeto Education
var education = {
	"schools": [
	{
		"name": "Cambridge Technical College",
		"city": "Cambridge",
		"degree": "TEC",
		"major": ["Art"],
		"date": 1962,
		"url": "http://utccambridge.co.uk/"

	},
	{
		"name": "Camberwell College",
		"city": "London",
		"degree": "BA",
		"major": ["Paint"],
		"date": 1964,
		"url": "Camberwell College of Arts " 
	}
	]
}

//Objeto Project
var project = {
	"projects": [
	{
		"title": "The Piper at the Gates of Dawn",
		"date": 1967,
		"description": "Primeiro disco do Pink Floyd",
		"image": "http://cps-static.rovicorp.com/3/JPG_400/MI0003/199/MI0003199998.jpg?partner=allrovi.com"
	},
	{
		"title": "A Saucerful of Secrets",
		"date": 1968,
		"description": "Pouca participação",
		"image": "http://eil.com/images/main/Pink-Floyd-A-Saucerful-Of-Se-248243.jpg"
	},
	{
		"title": "The Madcap Laughs",
		"date": 1970,
		"description": "Primeiro trabalho solo",
		"image": "http://intothemusic.ca/images/sized/images/covers/Barrett,_Syd-The-Madcap-Laughs-350x350.jpg"
	},
	{
		"title": "Barrett",
		"date": 1970,
		"description": "Trabalho final",
		"image": "http://4.bp.blogspot.com/-8cBeArpA1x4/UXENsMJ7hAI/AAAAAAAABA8/Rdfn4tsigmk/s1600/Syd+barrett.jpg"
	}
	]
}

//Função diplay do objeto project
project.display = function(){
	for(p in project.projects){
		$("#projects").append(HTMLprojectStart);

		var title = HTMLprojectTitle.replace("%data%", project.projects[p].title);
		var dates = HTMLprojectDates.replace("%data%", project.projects[p].date);
		var descr = HTMLprojectDescription.replace("%data%", project.projects[p].description);
		var image = HTMLprojectImage.replace("%data%", project.projects[p].image);

		$(".project-entry:last").append(title);
		$(".project-entry:last").append(dates);
		$(".project-entry:last").append(descr);
		$(".project-entry:last").append(image);
	}
}

//Bio
var name = HTMLheaderName.replace("%data%", bio.name);
var role = HTMLheaderRole.replace("%data%", bio.role);
var phone = HTMLmobile.replace("%data%", bio.contact.mobile);
var email = HTMLemail.replace("%data%", bio.contact.email);
var github = HTMLgithub.replace("%data%", bio.contact.github);
var twitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var loc = HTMLlocation.replace("%data%", bio.contact.location);
var picURL = HTMLbioPic.replace("%data%",bio.picURL);
var welcome = HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);
var skills;

//Bio Append
$("#header").append(name);
$("#header").append(role);
$("#header").append(phone);
$("#header").append(email);
$("#header").append(github);
$("#header").append(twitter);
$("#header").append(loc);
$("#header").append(picURL);
$("#header").append(welcome);
if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(s in bio.skills){
		skills = HTMLskills.replace("%data%",bio.skills[s]);
		$("#skills").append(skills);
	}
}

displayWork();
project.display();

$("#main").append(internationalizeButton);

