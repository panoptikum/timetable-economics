
var defaultSavedSubjects = {
	"subjects" : [
		"Introduction to Advanced Macroeconomic Analysis",
		"Introduction to Advanced Microeconomic Analysis",
		"Econometric Methods",
	]
}

var data = {
  "categories" : [
    {
      "main": "Mandatory Courses",
      "sub": [
        {
          "name": "Microeconomics",
          "sp_range": [6]
        },
        {
          "name": "Macroeconomics",
          "sp_range": [6]
        },
        {
          "name": "Econometrics",
          "sp_range": [6]
        }
      ]
    },
    {
      "main": "Eligible Compulsory Courses"
    },
    {
      "main": "Electives",
      "sub": [
        {
          "name": "Research Seminars VWL",
          "sp_range": [0]
        }
			]
		},
    {
      "main": "Methodical Basics",
      "sub": [
        {
          "name": "Econometrics",
          "sp_range": [5,12]
        },
        {
          "name": "Operations Research",
          "sp_range": [6]
        },
        {
          "name": "Statistics",
          "sp_range": [5,11]
        },
        {
          "name": "Information Systems",
          "sp_range": [6]
        }
      ]
    },
		{
			"main": "Exercise Courses"
		}
	],
	"subjects":[
		{
			"name":"[E] Introduction in Advanced Microeconomic Analysis",
			"university":"exercise_courses",
			"address" : "Spandauer Straße 1",
			"taken": true,
			"lecturer": "Schacherer",
			"sp": "0",
			"category" : "Exercise Courses",
			"language"	: "english",
			"annotation" : "Morning course starts at 8:30 am",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 8,
					"duration": 2,
					"room": "Room 220",
					"type": "Exercise"
				},
				{
					"day":"Mittwoch",
					"startTime": 14,
					"duration": 2,
					"room": "Room 202",
					"type": "Excercise"
				}
			]
		},
		{
			"name":	"Advanced Microeconomic Theory (PhD-Level)",
			"university":	"mandatory_courses",
			"address" : "Spandauer Straße 1",
			"taken": true,
			"lecturer": "Friedrichsen, Huck, Kübler, Weizsäcker",
			"sp": "6",
			"category" : "Mandatory Courses",
			"subcategory" : "Microeconomics",
			"language"	: "english",
			"annotation" : "This course already starts on 12th of October"
			"lectures": [
				{
					"day":"Montag",
					"startTime": 12,
					"duration": 4,
					"room": "Room 203",
					"type": "VL"
				}
			]
		},
		{
			"name":"[E] Advanced Microeconomic Theory (PhD-Level)",
			"university":"exercise_courses",
			"address" : "Spandauer Straße 1",
			"taken": true,
			"lecturer": "Qi, Frys",
			"sp": "0",
			"category" : "Exercise Courses",
			"language"	: "english",
			"annotation" : "",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 8,
					"duration": 2,
					"room": "Room 21a",
					"type": "Exercise"
				},
				{
					"day":"Freitag",
					"startTime": 14,
					"duration": 2,
					"room": "Room 21a",
					"type": "Excercise"
				}
			]
		},
		{
			"name":	"Introduction in Advanced Macroeconomic Analaysis",
			"university":	"mandatory_courses",
			"address" : "Spandauer Straße 1",
			"taken": true,
			"lecturer": "Weinke",
			"sp": "6",
			"category" : "Mandatory Courses",
			"subcategory" : "Macroeconomics",
			"language"	: "english",
			"annotation" : ""
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 12,
					"duration": 2,
					"room": "Room 201",
					"type": "VL"
				}
			]
		},
		{
			"name":"[E] Introduction in Advanced Macroeconomic Analysis",
			"university":"exercise_courses",
			"address" : "Spandauer Straße 1",
			"taken": true,
			"lecturer": "tbc",
			"sp": "0",
			"category" : "Exercise Courses",
			"language"	: "english",
			"annotation" : "",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 12,
					"duration": 2,
					"room": "Room 202",
					"type": "Exercise"
				},
				{
					"day":"Freitag",
					"startTime": 10,
					"duration": 2,
					"room": "Room 22",
					"type": "Excercise"
				}
			]
		},
		{
			"name":	"Advanced Macroeconomic Analaysis (PhD-Level)",
			"university":	"mandatory_courses",
			"address" : "DIW, Mohrenstr. 58",
			"taken": true,
			"lecturer": "Burda",
			"sp": "6",
			"category" : "Mandatory Courses",
			"subcategory" : "Macroeconomics",
			"language"	: "english",
			"annotation" : ""
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 8,
					"duration": 4,
					"room": "Dulles-hall",
					"type": "VL"
				}
			]
		},
		{
			"name":	"Econometric Methods",
			"university":	"mandatory_courses",
			"address" : "Spandauer Straße 1",
			"taken": true,
			"lecturer": "Droge",
			"sp": "6",
			"category" : "Mandatory Courses",
			"subcategory" : "Econometrics",
			"language"	: "english",
			"annotation" : ""
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 10,
					"duration": 2,
					"room": "Room 202",
					"type": "VL"
				},
				{
					"day":"Mittwoch"
					"startTime": 10,
					"duration": 2,
					"room": "Room 202",
					"type": "VL"
				}
			]
		},
		{
			"name":	"[E] Econometric Methods",
			"university":	"mandatory_courses",
			"address" : "Spandauer Straße 1",
			"taken": true,
			"lecturer": "Furdas, Priesack",
			"sp": "6",
			"category" : "Exercise Courses",
			"subcategory" : "Econometrics",
			"language"	: "english",
			"annotation" : ""
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 14,
					"duration": 2,
					"room": "Room 202",
					"type": "Exercise"
				},
				{
					"day":"Freitag"
					"startTime": 12,
					"duration": 2,
					"room": "Room 202",
					"type": "Exercise"
				}
			]
		}
	]
}
