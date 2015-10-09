﻿
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
    }
	],
	"subjects":[
		{
			"name":"Advanced Microeconomic Analysis",
			"university":"HU",
      "address" : "Spandauer Str. 1",
			"taken": true,
      "lecturer": "Pollrich, Strauz",
      "sp": "6",
      "category" : "Mandatory Courses",
      "subcategory" : "Microeconomics",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 8,
          "duration": 2,
          "room": "Room 220",
          "type": "VL"
				}
			]
		}
	]
}
