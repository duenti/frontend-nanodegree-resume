//Objeto Biografia
var bio = {
	"name"       : "Syd Barrett",
	"role"       : "Musician",
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
};

var name = HTMLheaderName.replace("%data%", bio.name);
var role = HTMLheaderRole.replace("%data%", bio.role);
var phone = HTMLmobile.replace("%data%", bio.contact.mobile);
var email = HTMLemail.replace("%data%", bio.contact.email);
var github = HTMLgithub.replace("%data%", bio.contact.github);
var twitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var loc = HTMLlocation.replace("%data%", bio.contact.location);
var picURL = HTMLbioPic.replace("%data%",bio.picURL);
var welcome = HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);
var skills = HTMLskills.replace("%data%",bio.skills);

$("#header").append(name);
$("#header").append(role);
$("#header").append(phone);
$("#header").append(email);
$("#header").append(github);
$("#header").append(twitter);
$("#header").append(loc);
$("#header").append(picURL);
$("#header").append(welcome);
$("#header").append(skills);