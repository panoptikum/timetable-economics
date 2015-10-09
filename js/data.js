
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
			"name":"Multivariante Verfahren",
			"university":"FU",
      "address" : "Garystr. 21, 14195 Berlin",
			"taken": true,
      "lecturer": "R. Schlittgen",
      "sp": "5",
      "category" : "Mandatory Courses",
      "subcategory" : "Microeconomics",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 14,
          "duration": 2,
          "room": "HS 104a",
          "type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 16,
          "duration": 2,
					"twoWeeksOnly": true,
          "room": "PCPool",
          "type": "ÜB"
				}
			]
		}
	]
}
