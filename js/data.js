
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
      "main": "Wahrscheinlichkeitstheorie"
    },
    {
      "main": "Fortgeschrittene Methoden der Statistik"
    },
    {
      "main": "Statistische Inferenz",
      "sub": [
        {
          "name": "Moderne Methoden der Statistik",
          "sp_range": [6,14]
        },
        {
          "name": "Angewandte Statistik",
          "sp_range": [5,12]
        },
        {
          "name": "Stichprobentheorie",
          "sp_range": [-1,-1]
        },
        {
          "name": "Aktuelle Forschungsfragen der Statistik",
          "sp_range": [5,10]
        },
        {
          "name": "Mathematische Statistik",
          "sp_range": [10]
        },
        {
          "name": "Nichtparametrische Statistik",
          "sp_range": [10]
        },
        {
          "name": "Statistik stochastischer Prozesse",
          "sp_range": [5]
        },
        {
          "name": "Zuverlässigkeitstheorie",
          "sp_range": [10]
        }
      ]
    },
    {
      "main": "Ökonometrie",
      "sub": [
        {
          "name": "Mikroökonometrie",
          "sp_range": [5,12]
        },
        {
          "name": "Ökonometrische Analyse von Paneldaten",
          "sp_range": [6]
        },
        {
          "name": "Zeitreihenökonometrie",
          "sp_range": [5,11]
        },
        {
          "name": "Ökonometrische Analyse von Finanzmarktdaten",
          "sp_range": [6]
        },
        {
          "name": "Ökonometrische Analyse",
          "sp_range": [5]
        },
        {
          "name": "Projektseminar Ökonometrie",
          "sp_range": [5]
        },
        {
          "name": "Ausgewählte Themen der Ökonometri",
          "sp_range": [6]
        }
      ],
			"break": true
    },
    {
      "main": "Quantitative Methoden der Finanzmärkte",
      "sub": [
        {
          "name": "Statistik und Finanzwirtschaft",
          "sp_range": [6,12]
        },
        {
          "name": "Statistik der Finanzmärkte",
          "sp_range": [6,9]
        },
        {
          "name": "Ökonometrische Analyse von Finanzmarktdaten",
          "sp_range": [6]
        },
        {
          "name": "Stochastik der Finanzmärkte",
          "sp_range": [10]
        }
      ]
    },
    {
      "main": "Survey Statistik",
      "sub": [
        {
          "name": "Grundlagen der Stichprobentheorie",
          "sp_range": [6]
        },
        {
          "name": "Fortgeschrittene Methoden der Survey Statistik",
          "sp_range": [10]
        },
        {
          "name": "Nonresponse",
          "sp_range": [6,12]
        },
        {
          "name": "Simulation und Stichprobenziehung",
          "sp_range": [5,10]
        }
      ]
    },
    {
      "main": "Statistik in den Lebenswissenschaften",
			"break": true
    },
    {
      "main": "Wahlbereich",
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
      "category" : "Methodische Grundlagen",
      "subcategory" : "Multivariate statistische Verfahren",
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
		},
    {  
			"name":"Einführung in Monte-Carlo-Methoden",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "R. Münnich",
      "sp": "5",
      "category" : "Survey Statistik",
			"subcategory" : "Simulation und Stichprobenziehung",
			"annotation" : "Video-Übertragung von der Universität Bamberg Beginn: 26.10.14",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 14,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "VL"
				}
			]
		},
    {  
			"name":"Stichprobenberfahren",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "R. Münnich",
      "sp": "6",
      "category" : "Survey Statistik",
      "subcategory" : "Grundlagen der Stichprobentheorie",
			"annotation" : "Video-Übertragung von der Universität Trier Beginn: 27.10.14",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 14,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "V/Ü"
				}
			]
		},  
    {  
			"name":"Behandlung Fehlender Daten in Erhebungen",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "S. Meinfelder",
      "sp": "6",
      "category" : "Survey Statistik",
			"subcategory" : "Nonresponse",
			"annotation" : "Video-Übertragung von der Universität Bamberg Beginn: 26.10.14",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "V/Ü"
				}
			]
		}, 
    {  
			"name":"Colloquium für Masterarbeitsstudenten und Doktoranden",
			"university":"FU",
      "address" : "Garystr. 21, 14195 Berlin",
			"taken": true,
      "lecturer": "U. Rendtel, T. Schmid",
      "sp": "0",
      "category" : "Wahlbereich",
			"annotation" : "Beginn: 30.10.14",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 15,
          "duration": 2,
          "room": "Raum 315",
          "type": "SE"
				}
			]
		}, 
    {  
			"name":"Computergestützte Statistik mit SAS",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "U. Rendtel",
      "sp": "5",
      "category" : "Survey Statistik",
			"subcategory" : "Simulation und Stichprobenziehung",
			"annotation" : "Beginn: 28.10.14",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 12,
          "duration": 4,
          "room": "Konferenzraum III, Henry Ford Bau, 1. OG",
          "type": "V/Ü"
				}
			]
		}, 
    
    {  
			"name":"Ökonometrische Analyse",
			"university":"FU",
      "address" : "Garystr. 35, 14195 Berlin",
			"taken": true,
      "lecturer": "D. Nautz",
      "sp": "5",
      "category" : "Ökonometrie",
      "subcategory" : "Ökonometrische Analyse",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 8,
          "duration": 2,
          "room": "HS 102",
          "type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 10,
          "duration": 2,
          "room": "HS 102",
          "type": "ÜB"
				}
			]
		}, 
		
		// TODO Seminar Aktuelle Forschungsfragen der Ökonometrie FEHLT
		
		
		{  
			"name":"Angewandte Ökonometrie",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Droge, J. de Lazzer, M. Zimmermann",
      "sp": "6",
      "category" : "Wahlbereich",
			"language" : "german",
			"annotation" : "Nur wählbar ohne Vertiefungsgebiet Ökonometrie. Freitagstermin abwechselnd Vorlesung/Übung",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 202",
          "type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 220/025",
          "type": "V/Ü"
				}
			]
		},
		
		
		{  
			"name":"Econometric Methods",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Droge, M. Furdas, K. Priesack",
      "sp": "9",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Das lineare Modell",
			"language" : "english",
			"annotation" : "Erster Montag nicht",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
          "duration": 2,
          "room": "Raum 202",
          "type": "VL"
				},
				{
					"day":"Dienstag",
					"startTime": 10,
          "duration": 2,
          "room": "Raum 201",
          "type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 202",
					"hasAlternative" : true,
          "type": "ÜB"
				},
				{
					"day":"Freitag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 202",
					"hasAlternative" : true,
          "type": "ÜB"
				}
			]
		},
		
		
		{  
			"name":"Doktoranden- und Studienabschlussseminar",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Droge, C. Breunig",
      "sp": "0",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 16,
          "duration": 2,
          "room": "Raum 112",
          "type": "SE"
				}
			]
		},
		/*
		{  
			"name":"Time Series Analysis (HU)",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "B. Droge",
      "sp": "-1",
      "category" : "Ökonometrie",
      "subcategory" : "Zeitreihenökonometrie",
			"language" : "english",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 22",
          "type": "Vorlesung"
				},
				{
					"day":"Donnerstag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 202/025",
          "type": "V/Ü"
				}
			]
		},
		
		{  
			"name":"Econometric Projects",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "O. Blaskowitz",
      "sp": "-1",
      "category" : "Ökonometrie",
      "subcategory" : "Projektseminar Ökonometrie",
			"language" : "english",
			"annotation" : "Distinguished Seminar in Econometric Projects on Quantitative Asset Management. 14.10 - 16.12",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 16,
          "duration": 4,
          "room": "Raum 22",
          "type": "SE"
				},
			]
		},
		*/
		{  
			"name":"Microeconometrics (HU)",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "C. Breunig",
      "sp": "6",
      "category" : "Mandatory Courses",
      "subcategory" : "Microeconomics",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 23",
          "type": "V/Ü"
				},
				{
					"day":"Dienstag",
					"startTime": 12,
          "duration": 2,
          "room": "Raum 23/PC Pool 026",
          "type": "V/Ü"
				}
			]
		},
		{  
			"name":"Economic Risk",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "W. Härdle, C. Chen",
      "sp": "3",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Statistik der Finanzmärkte",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 14,
          "duration": 2,
          "room": "Raum 23",
          "type": "SE"
				}
			]
		},
		{  
			"name":"Multivariate Statistische Analyse I",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "L. Borke, M. Grith, P. Gschöpf, W, Wang",
      "sp": "6",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Multivariate statistische Verfahren",
			"language" : "english",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 8,
          "duration": 4,
          "room": "Raum 203",
          "type": "VL"
				}
			]
		},
		{  
			"name":"Datenanlyse II",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "S. Klinke",
      "sp": "-1",
      "category" : "Statistische Inferenz",
      "subcategory" : "Angewandte Statistik",
			"language" : "german",
			"annotation" : "Wenn Computergestützte Statisitik (HU) bereits belegt wurde, kann die VL nicht nochmal",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
					"duration": 2,
					"room": "Raum 22",
					"type": "V/Ü"
				},
				{
					"day":"Montag",
					"startTime": 14,
					"duration": 2,
					"room": "Raum 025",
					"type": "V/Ü"
				},
				{
					"day":"Dienstag",
					"startTime": 12,
					"duration": 2,
					"room": "Raum 025",
					"type": "V/Ü"
				}
			]
		},
		{  
			"name":"Statistics of Financial Markets I",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "W. Härdle, C. Chen",
      "sp": "6",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Statistik und Finanzwirtschaft",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 16,
					"duration": 4,
					"room": "Raum 23",
					"type": "VL"
				}
			]
		},
		/* TODO IS MISSING
		{  
			"name":"Statistical Programming Languages",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "L. Borke, L. Fang",
      "sp": "-1",
      "category" : "Statistische Inferenz",
      "subcategory" : "Angewandte Statistik",
			"language" : "english",
			"annotation" : "Blockveranstaltung",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 10,
					"duration": 2,
					"room": "Raum 22",
					"type": "V/Ü"
				},
				{
					"day":"Montag",
					"startTime": 14,
					"duration": 2,
					"room": "Raum 025",
					"type": "V/Ü"
				},
				{
					"day":"Dienstag",
					"startTime": 8,
					"duration": 12,
					"room": "Raum 025",
					"type": "V/Ü"
				}
			]
		},
		*/
		{  
			"name":"Selected Topic in History of Statistics",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "A. Vogt",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 14,
					"duration": 2,
					"room": "Raum 21a",
					"type": "VL"
				}
			]
		},
		{  
			"name":"Mathematical Statistics",
			"university":"WIAS",
      "address" : "Mohrenstraße 39",
			"taken": true,
      "lecturer": "W. Härdle, V. Spokoiny",
      "sp": "3",
      "category" : "Statistische Inferenz",
      "subcategory" : "Moderne Methoden der Statistik",
			"language" : "english",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 10,
					"duration": 2,
					"room": "Ehrhard- Schmidt-Hörsaal",
					"type": "SE"
				}
			]
		},
		
		{  
			"name":"Einführung zu numerischen Verfahren",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "P. Burdejova, F. Schulz",
      "sp": "3",
      "category" : "Statistische Inferenz",
      "subcategory" : "Angewandte Statistik",
			"language" : "english",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 18,
					"duration": 2,
					"room": "Raum 21b",
					"type": "SE"
				}
			]
		},
		{  
			"name":"Statistical Tools in Finance and Insurance",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "L. Fang, S. Nasekin",
      "sp": "3",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Statistik und Finanzwirtschaft",
			"language" : "english",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 10,
					"duration": 2,
					"room": "Raum 21a",
					"type": "SE"
				}
			]
		},
		{  
			"name":"Selected Topics of Mathematical Statistics",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "W. Härdle, C. Huang. X. XU",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 12,
					"duration": 2,
					"room": "Raum 21b",
					"type": "SE"
				}
			]
		},
		
		
		
		{  
			"name":"Stochastik II",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "D. Becherer",
      "sp": "10",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum 1.013",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 0331",
					"type": "VL"
				},
				{
					"day":"Dienstag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 1034",
					"type": "ÜB"
				}
			]
		},
		
		{  
			"name":"Methoden der Statistik",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "M. Jirak",
      "sp": "10",
      "category" : "Methodische Grundlagen",
      "subcategory" : "Das lineare Modell",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 15,
					"duration": 2,
					"room": "Raum 1.013",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 1.115",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 3.007",
					"type": "ÜB"
				}
			]
		},
		/*
		{  
			"name":"Nichtparametrische Statistik",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "V. Spokoiny",
      "sp": "-1",
      "category" : "Statistische Inferenz",
      "subcategory" : "Moderne Methoden der Statistik",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 0311",
					"type": "VL"
				},
				{
					"day":"Montag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 1.013",
					"type": "VL"
				},
				{
					"day":"Montag",
					"startTime": 15,
					"duration": 2,
					"room": "Raum 3.011",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Nichtparametrische Testtheorie",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "T. Dickhaus",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum 1.013",
					"type": "VL"
				}
			]
		},
		*/
		{  
			"name":"Modern Methods in Applied Stochastics and Nonprametric Statistics",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "V. Spokoiny",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 15,
					"duration": 2,
					"room": "Raum 3.011",
					"type": "SE"
				}
			]
		},
		{  
			"name":"Statistische Lerntheorie",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "A. Reiß, A. Carpentier",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 1.114",
					"type": "VL"
				}
			]
		},
		{  
			"name":"Stochastische Finanzmathematik",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "U. Horst",
      "sp": "10",
      "category" : "Quantitative Methoden der Finanzmärkte",
      "subcategory" : "Stochastik der Finanzmärkte",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum 0311",
					"type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 1.013",
					"type": "VL"
				},
				{
					"day":"Freitag",
					"startTime": 13,
					"duration": 2,
					"room": "Raum 3.006",
					"type": "ÜB"
				}
			]
		},
		
		{  
			"name":"Projektpraktikum II (Stochastik)",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "A. Bachouch",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "german",
			"lectures": [
				{
					"day":"Montag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 2.207",
					"type": "VL"
				}
			]
		},
		
		/*
		{  
			"name":"Statistik stochastischer Prozesse",
			"university":"HU_Mathe",
      "address" : "Rudower Chaussee 25/26",
			"taken": true,
      "lecturer": "M. Reiß",
      "sp": "-1",
      "category" : "Statistische Inferenz",
      "subcategory" : "Statistik stochastischer Prozesse",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum 3.007",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 11,
					"duration": 2,
					"room": "Raum 0310",
					"type": "ÜB"
				}
			]
		},
		*/
		

		{  
			"name":"Methodenlehre I (Multivariante Verfahren in er Psychologie)",
			"university":"HU_Lebenswissenschaften",
      "address" : "Rudower Chaussee 25/26, Zum Großen Winkanal 2 (ZGW2)",
			"taken": true,
      "lecturer": "M. Voelkle, K Hardt, M. Hecht, N. Vogel",
      "sp": "5",
      "category" : "Statistik in den Lebenswissenschaften",
			"language" : "german",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 9,
					"duration": 2,
					"room": "Raum 0110",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 9,
					"duration": 2,
					"room": "Gebäude 305, Seminarraum",
					"hasAlternative": true,
					"type": "ÜB"
				},
				{
					"day":"Mittwoch",
					"startTime": 11,
					"duration": 2,
					"room": "Gebäude 305, Seminarraum",
					"hasAlternative": true,
					"type": "ÜB"
				},
				{
					"day":"Freitag",
					"startTime": 9,
					"duration": 2,
					"room": "Gebäude 305, Seminarraum",
					"hasAlternative": true,
					"type": "ÜB"
				},
			]
		},
		
		{  
			"name":"Engineering Statistics",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "A. Werwatz, F. Plitzko",
      "sp": "-1",
      "category" : "Wahlbereich",
			"language" : "english",
			"annotation" : "Übung ab zweiter Woche",
			"lectures": [
				{
					"day":"Freitag",
					"startTime": 12,
					"duration": 2,
					"room": "Raum H 2013",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 8,
					"duration": 2,
					"room": "Raum H 2038 oder TEL 206_rechts",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Microeconometrics (TU)",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "A. Werwatz, T. Repasky",
      "sp": "6",
      "category" : "Ökonometrie",
      "subcategory" : "Mikroökonometrie",
			"language" : "english",
			"annotation" : "Übung ab zweiter Woche",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 12,
					"duration": 2,
					"room": "EW 201",
					"type": "VL"
				},
				{
					"day":"Dienstag",
					"startTime": 14,
					"duration": 2,
					"room": "Raum H 0106",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Time Series Analysis",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "A. Werwatz, F. Plitzko",
      "sp": "6",
      "category" : "Ökonometrie",
      "subcategory" : "Zeitreihenökonometrie",
			"language" : "english",
			"annotation" : "Übung ab zweiter Woche",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 10,
					"duration": 2,
					"room": "Raum H 2032",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 8,
					"duration": 2,
					"room": "Raum 206_re",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Business Analytics and Data Science",
			"university":"HU_WiWi",
      "address" : "Spandauer Str. 1, 10178 Berlin",
			"taken": true,
      "lecturer": "S. Lessmann",
      "sp": "6",
      "category" : "Wahlbereich",
			"language" : "english",
			"annotation" : "Übung ab zweiter Woche",
			"lectures": [
				{
					"day":"Dienstag",
					"startTime": 12,
					"duration": 2,
					"room": "Raum 220",
					"type": "VL"
				},
				{
					"day":"Dienstag",
					"startTime": 16,
					"duration": 2,
					"room": "Raum 025 PC-Pool",
					"type": "ÜB"
				},
				{
					"day":"Mittwoch",
					"startTime": 8,
					"duration": 2,
					"room": "Raum 025 PC-Pool",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Machine Learning I",
			"university":"TU",
      "address" : "Straße des 17. Juni 135",
			"taken": true,
      "lecturer": "K. Müller",
      "sp": "6",
      "category" : "Wahlbereich",
			"language" : "english",
			"annotation" : "Übung ab erster Woche",
			"lectures": [
				{
					"day":"Mittwoch",
					"startTime": 10,
					"duration": 2,
					"room": "Raum H 0107",
					"type": "VL"
				},
				{
					"day":"Mittwoch",
					"startTime": 12,
					"duration": 2,
					"room": "Raum H 0107",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Machine Intelligence I",
			"university":"TU",
      "address" : "EB Straße des 17. Juni 145",
			"taken": true,
      "lecturer": "K. Obermayer",
      "sp": "6",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 10,
					"duration": 2,
					"room": "EB 202",
					"type": "VL"
				},
				{
					"day":"Donnerstag",
					"startTime": 12,
					"duration": 2,
					"room": "MAR 0.003",
					"type": "ÜB"
				},
				{
					"day":"Mittwoch",
					"startTime": 14,
					"duration": 2,
					"room": "MAR 0.003",
					"type": "ÜB"
				}
			]
		},
		{  
			"name":"Bayesian Learning",
			"university":"TU",
      "address" : "Marchstr. 23",
			"taken": true,
      "lecturer": "K. Müller",
      "sp": "2",
      "category" : "Wahlbereich",
			"language" : "english",
			"lectures": [
				{
					"day":"Donnerstag",
					"startTime": 14,
					"duration": 2,
					"room": "MAR 4.062",
					"type": "VL"
				}
			]
		},
		
	]
}
