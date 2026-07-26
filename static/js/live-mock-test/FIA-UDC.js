/* ==========================================================================
   ExamPrep – Live Mock Test (FIA Computer-Based Test)
   Vanilla JS (ES6). Complete quiz state machine with real-time scoring.
   ========================================================================== */

(function () {
    'use strict';

    // Quiz dataset provided by USER with corrected syntax (fixed "id": 09 to 9)
    const quizData = {
        "test_name": "FIA Computer-Based Test - Module 5",
        "based_on_syllabus": {
            "General Knowledge": "45%",
            "English": "30%",
            "Mathematics": "15%",
            "Pakistan Studies": "5%",
            "Islamiat": "5%"
        },
        "total_questions": 100,
        "questions": [
            {
                "id": 1,
                "subject": "General Knowledge",
                "question": "What is the height of Tarbela Dam?",
                "options": {
                    "A": "143 m",
                    "B": "147 m",
                    "C": "152 m",
                    "D": "160 m"
                },
                "answer": "B"
            },
            {
                "id": 2,
                "subject": "General Knowledge",
                "question": "Diamer-Bhasha Dam is being constructed on which river?",
                "options": {
                    "A": "Jhelum",
                    "B": "Chenab",
                    "C": "Indus",
                    "D": "Kabul"
                },
                "answer": "C"
            },
            {
                "id": 3,
                "subject": "General Knowledge",
                "question": "What is the total installed capacity of Tarbela Dam after T-5 extension?",
                "options": {
                    "A": "3478 MW",
                    "B": "4888 MW",
                    "C": "6298 MW",
                    "D": "7028 MW"
                },
                "answer": "C"
            },
            {
                "id": 4,
                "subject": "General Knowledge",
                "question": "Mangla Dam is located in which district?",
                "options": {
                    "A": "Jhelum",
                    "B": "Mirpur",
                    "C": "Rawalpindi",
                    "D": "Gujrat"
                },
                "answer": "B"
            },
            {
                "id": 5,
                "subject": "General Knowledge",
                "question": "What is the crest length of Mangla Dam?",
                "options": {
                    "A": "3140 m",
                    "B": "3400 m",
                    "C": "3650 m",
                    "D": "4000 m"
                },
                "answer": "B"
            },
            {
                "id": 6,
                "subject": "General Knowledge",
                "question": "Mohmand Dam's gross storage capacity is?",
                "options": {
                    "A": "0.676 MAF",
                    "B": "1.293 MAF",
                    "C": "2.1 MAF",
                    "D": "3.4 MAF"
                },
                "answer": "B"
            },
            {
                "id": 7,
                "subject": "General Knowledge",
                "question": "Which dam is known as 'Kala Bagh Dam Alternative'?",
                "options": {
                    "A": "Diamer-Bhasha",
                    "B": "Akhori Dam",
                    "C": "Katzarah Dam",
                    "D": "Shyok Dam"
                },
                "answer": "B"
            },
            {
                "id": 8,
                "subject": "General Knowledge",
                "question": "Hub Dam supplies water to which two cities?",
                "options": {
                    "A": "Karachi & Lasbela",
                    "B": "Lahore & Faisalabad",
                    "C": "Peshawar & Mardan",
                    "D": "Quetta & Sibi"
                },
                "answer": "A"
            },
            {
                "id": 9,
                "subject": "General Knowledge",
                "question": "What type of dam is Tarbela?",
                "options": {
                    "A": "Arch Dam",
                    "B": "Gravity Dam",
                    "C": "Earth-filled Dam",
                    "D": "Rock-filled Dam"
                },
                "answer": "C"
            },
            {
                "id": 10,
                "subject": "General Knowledge",
                "question": "Dasu Hydropower Project Stage-I will generate how much power?",
                "options": {
                    "A": "1080 MW",
                    "B": "2160 MW",
                    "C": "4320 MW",
                    "D": "5400 MW"
                },
                "answer": "B"
            },
            {
                "id": 11,
                "subject": "General Knowledge",
                "question": "Which is the largest dam in Pakistan by water storage capacity?",
                "options": {
                    "A": "Mangla Dam",
                    "B": "Tarbela Dam",
                    "C": "Diamer-Bhasha",
                    "D": "Mirani Dam"
                },
                "answer": "B"
            },
            {
                "id": 12,
                "subject": "General Knowledge",
                "question": "Neelum-Jhelum Hydropower Project has a tunnel length of?",
                "options": {
                    "A": "28.5 km",
                    "B": "42 km",
                    "C": "52 km",
                    "D": "68 km"
                },
                "answer": "C"
            },
            {
                "id": 13,
                "subject": "General Knowledge",
                "question": "Under Section 4 of FIA Act 1974, superintendence of FIA vests in?",
                "options": {
                    "A": "Prime Minister",
                    "B": "Federal Government",
                    "C": "Interior Minister",
                    "D": "DG FIA"
                },
                "answer": "B"
            },
            {
                "id": 14,
                "subject": "General Knowledge",
                "question": "FIA can investigate offences under which schedule?",
                "options": {
                    "A": "Schedule I",
                    "B": "Schedule II",
                    "C": "Schedule III",
                    "D": "Both A & B"
                },
                "answer": "B"
            },
            {
                "id": 15,
                "subject": "General Knowledge",
                "question": "Section 20 of PECA 2016 deals with?",
                "options": {
                    "A": "Hacking",
                    "B": "Offences against dignity of natural person",
                    "C": "Cyber Terrorism",
                    "D": "Electronic Fraud"
                },
                "answer": "B"
            },
            {
                "id": 16,
                "subject": "General Knowledge",
                "question": "Maximum punishment for Cyber Terrorism under PECA 2016 is?",
                "options": {
                    "A": "7 years",
                    "B": "14 years",
                    "C": "Life imprisonment",
                    "D": "Death penalty"
                },
                "answer": "C"
            },
            {
                "id": 17,
                "subject": "General Knowledge",
                "question": "FIA 'Anti-Corruption Circle' investigates cases under which law?",
                "options": {
                    "A": "PPC only",
                    "B": "Prevention of Corruption Act 1947",
                    "C": "NAB Ordinance",
                    "D": "Both A & B"
                },
                "answer": "D"
            },
            {
                "id": 18,
                "subject": "General Knowledge",
                "question": "Which section of FIA Act 1974 gives power to arrest without warrant?",
                "options": {
                    "A": "Section 3",
                    "B": "Section 4",
                    "C": "Section 5",
                    "D": "Section 6"
                },
                "answer": "C"
            },
            {
                "id": 19,
                "subject": "General Knowledge",
                "question": "National Response Centre for Cyber Crime (NR3C) is a wing of?",
                "options": {
                    "A": "PTA",
                    "B": "FIA",
                    "C": "ISI",
                    "D": "IB"
                },
                "answer": "B"
            },
            {
                "id": 20,
                "subject": "General Knowledge",
                "question": "'Hundi/Hawala' cases are investigated by which FIA wing?",
                "options": {
                    "A": "Anti-Human Trafficking",
                    "B": "Economic Crime Wing",
                    "C": "Anti-Corruption",
                    "D": "Cyber Crime"
                },
                "answer": "B"
            },
            {
                "id": 21,
                "subject": "General Knowledge",
                "question": "Pakistan's GDP growth for FY 2025-26 is projected at?",
                "options": {
                    "A": "2.8%",
                    "B": "3.6%",
                    "C": "4.1%",
                    "D": "5.2%"
                },
                "answer": "B"
            },
            {
                "id": 22,
                "subject": "General Knowledge",
                "question": "Who is Pakistan's current Foreign Minister as of July 2026?",
                "options": {
                    "A": "Bilawal Bhutto",
                    "B": "Ishaq Dar",
                    "C": "Jalil Abbas Jilani",
                    "D": "Hina Rabbani Khar"
                },
                "answer": "B"
            },
            {
                "id": 23,
                "subject": "General Knowledge",
                "question": "SIFC approved how much FDI in June 2026?",
                "options": {
                    "A": "$1.2 Billion",
                    "B": "$2.5 Billion",
                    "C": "$3.8 Billion",
                    "D": "$5.1 Billion"
                },
                "answer": "A"
            },
            {
                "id": 24,
                "subject": "General Knowledge",
                "question": "Pakistan launched its first Moon mission 'ICUBE-Q' with help of?",
                "options": {
                    "A": "NASA",
                    "B": "CNSA China",
                    "C": "Roscosmos",
                    "D": "ESA"
                },
                "answer": "B"
            },
            {
                "id": 25,
                "subject": "General Knowledge",
                "question": "New Chief of Army Staff appointed in Nov 2025 is?",
                "options": {
                    "A": "Gen Asim Munir",
                    "B": "Gen Sahir Shamshad",
                    "C": "Gen Azhar Abbas",
                    "D": "Gen Nadeem Raza"
                },
                "answer": "A"
            },
            {
                "id": 26,
                "subject": "General Knowledge",
                "question": "Pakistan's inflation rate in June 2026 was?",
                "options": {
                    "A": "9.6%",
                    "B": "11.8%",
                    "C": "13.2%",
                    "D": "15.4%"
                },
                "answer": "A"
            },
            {
                "id": 27,
                "subject": "General Knowledge",
                "question": "Which country became Pakistan's largest export destination in 2025-26?",
                "options": {
                    "A": "USA",
                    "B": "China",
                    "C": "UK",
                    "D": "UAE"
                },
                "answer": "A"
            },
            {
                "id": 28,
                "subject": "General Knowledge",
                "question": "Pakistan won how many medals in Paris Olympics 2024?",
                "options": {
                    "A": "0",
                    "B": "1",
                    "C": "2",
                    "D": "3"
                },
                "answer": "B"
            },
            {
                "id": 29,
                "subject": "General Knowledge",
                "question": "'Pakistan Single Window' Phase-II was launched in?",
                "options": {
                    "A": "Jan 2026",
                    "B": "March 2026",
                    "C": "May 2026",
                    "D": "July 2026"
                },
                "answer": "B"
            },
            {
                "id": 30,
                "subject": "General Knowledge",
                "question": "Pakistan's forex reserves in July 2026 stood at?",
                "options": {
                    "A": "$8.2 Billion",
                    "B": "$9.5 Billion",
                    "C": "$11.3 Billion",
                    "D": "$13.7 Billion"
                },
                "answer": "B"
            },
            {
                "id": 31,
                "subject": "General Knowledge",
                "question": "Which protocol is used to send emails?",
                "options": {
                    "A": "HTTP",
                    "B": "FTP",
                    "C": "SMTP",
                    "D": "TCP"
                },
                "answer": "C"
            },
            {
                "id": 32,
                "subject": "General Knowledge",
                "question": "1 TB = ? GB",
                "options": {
                    "A": "100",
                    "B": "1000",
                    "C": "1024",
                    "D": "1048"
                },
                "answer": "C"
            },
            {
                "id": 33,
                "subject": "General Knowledge",
                "question": "Which key is used to open 'Task Manager' directly?",
                "options": {
                    "A": "Ctrl+Alt+Del",
                    "B": "Ctrl+Shift+Esc",
                    "C": "Alt+Tab",
                    "D": "Windows+R"
                },
                "answer": "B"
            },
            {
                "id": 34,
                "subject": "General Knowledge",
                "question": "'BIOS' stands for?",
                "options": {
                    "A": "Basic Input Output System",
                    "B": "Binary Input Output System",
                    "C": "Basic Internal Operating System",
                    "D": "None"
                },
                "answer": "A"
            },
            {
                "id": 35,
                "subject": "General Knowledge",
                "question": "Which gas is used in electric bulbs?",
                "options": {
                    "A": "Oxygen",
                    "B": "Nitrogen",
                    "C": "Argon",
                    "D": "Hydrogen"
                },
                "answer": "C"
            },
            {
                "id": 36,
                "subject": "General Knowledge",
                "question": "Speed of sound in air is approximately?",
                "options": {
                    "A": "300 m/s",
                    "B": "330 m/s",
                    "C": "343 m/s",
                    "D": "400 m/s"
                },
                "answer": "C"
            },
            {
                "id": 37,
                "subject": "General Knowledge",
                "question": "Which vitamin is produced in human skin by sunlight?",
                "options": {
                    "A": "Vitamin A",
                    "B": "Vitamin C",
                    "C": "Vitamin D",
                    "D": "Vitamin K"
                },
                "answer": "C"
            },
            {
                "id": 38,
                "subject": "General Knowledge",
                "question": "SQL stands for?",
                "options": {
                    "A": "Structured Query Language",
                    "B": "Simple Query Language",
                    "C": "Sequential Query Language",
                    "D": "None"
                },
                "answer": "A"
            },
            {
                "id": 39,
                "subject": "General Knowledge",
                "question": "Which of these is an operating system?",
                "options": {
                    "A": "MS Word",
                    "B": "Linux",
                    "C": "Oracle",
                    "D": "Photoshop"
                },
                "answer": "B"
            },
            {
                "id": 40,
                "subject": "General Knowledge",
                "question": "Human blood pH value is?",
                "options": {
                    "A": "6.4",
                    "B": "7.0",
                    "C": "7.4",
                    "D": "8.0"
                },
                "answer": "C"
            },
            {
                "id": 41,
                "subject": "General Knowledge",
                "question": "Headquarters of International Court of Justice is in?",
                "options": {
                    "A": "Geneva",
                    "B": "New York",
                    "C": "The Hague",
                    "D": "Paris"
                },
                "answer": "C"
            },
            {
                "id": 42,
                "subject": "General Knowledge",
                "question": "Which country will host FIFA World Cup 2026?",
                "options": {
                    "A": "Qatar",
                    "B": "USA, Canada, Mexico",
                    "C": "Germany",
                    "D": "Morocco"
                },
                "answer": "B"
            },
            {
                "id": 43,
                "subject": "General Knowledge",
                "question": "BRICS added how many new members in 2024?",
                "options": {
                    "A": "4",
                    "B": "5",
                    "C": "6",
                    "D": "7"
                },
                "answer": "B"
            },
            {
                "id": 44,
                "subject": "General Knowledge",
                "question": "Currency of Turkey is?",
                "options": {
                    "A": "Lira",
                    "B": "Euro",
                    "C": "Dinar",
                    "D": "Peso"
                },
                "answer": "A"
            },
            {
                "id": 45,
                "subject": "General Knowledge",
                "question": "'World Environment Day' is celebrated on?",
                "options": {
                    "A": "5th March",
                    "B": "5th June",
                    "C": "22nd April",
                    "D": "16th September"
                },
                "answer": "B"
            },
            {
                "id": 46,
                "subject": "English",
                "question": "Synonym of 'Candid':",
                "options": {
                    "A": "Dishonest",
                    "B": "Frank",
                    "C": "Rude",
                    "D": "Secretive"
                },
                "answer": "B"
            },
            {
                "id": 47,
                "subject": "English",
                "question": "Antonym of 'Hostile':",
                "options": {
                    "A": "Friendly",
                    "B": "Enemy",
                    "C": "Aggressive",
                    "D": "Angry"
                },
                "answer": "A"
            },
            {
                "id": 48,
                "subject": "English",
                "question": "Choose correct spelling:",
                "options": {
                    "A": "Embarass",
                    "B": "Embarrass",
                    "C": "Embaras",
                    "D": "Embarras"
                },
                "answer": "B"
            },
            {
                "id": 49,
                "subject": "English",
                "question": "'To hit the nail on the head' means:",
                "options": {
                    "A": "To get hurt",
                    "B": "To do something exactly right",
                    "C": "To be confused",
                    "D": "To work hard"
                },
                "answer": "B"
            },
            {
                "id": 50,
                "subject": "English",
                "question": "He ___ in Karachi since 2010.",
                "options": {
                    "A": "live",
                    "B": "lives",
                    "C": "has been living",
                    "D": "is living"
                },
                "answer": "C"
            },
            {
                "id": 51,
                "subject": "English",
                "question": "Passive of 'FIA arrested the culprit':",
                "options": {
                    "A": "The culprit is arrested by FIA",
                    "B": "The culprit was arrested by FIA",
                    "C": "The culprit has been arrested by FIA",
                    "D": "The culprit had been arrested by FIA"
                },
                "answer": "B"
            },
            {
                "id": 52,
                "subject": "English",
                "question": "One word for 'A person who loves books':",
                "options": {
                    "A": "Biographer",
                    "B": "Bibliophile",
                    "C": "Philosopher",
                    "D": "Author"
                },
                "answer": "B"
            },
            {
                "id": 53,
                "subject": "English",
                "question": "She is good ___ mathematics.",
                "options": {
                    "A": "in",
                    "B": "at",
                    "C": "on",
                    "D": "for"
                },
                "answer": "B"
            },
            {
                "id": 54,
                "subject": "English",
                "question": "Plural of 'Analysis':",
                "options": {
                    "A": "Analysises",
                    "B": "Analyses",
                    "C": "Analysis",
                    "D": "Analys"
                },
                "answer": "B"
            },
            {
                "id": 55,
                "subject": "English",
                "question": "'To take after' means:",
                "options": {
                    "A": "To follow",
                    "B": "To resemble",
                    "C": "To leave",
                    "D": "To chase"
                },
                "answer": "B"
            },
            {
                "id": 56,
                "subject": "English",
                "question": "Choose correct:",
                "options": {
                    "A": "Each of the boys are ready",
                    "B": "Each of the boys is ready",
                    "C": "Each of the boy is ready",
                    "D": "Each of boys are ready"
                },
                "answer": "B"
            },
            {
                "id": 57,
                "subject": "English",
                "question": "Synonym of 'Ephemeral':",
                "options": {
                    "A": "Permanent",
                    "B": "Short-lived",
                    "C": "Beautiful",
                    "D": "Strong"
                },
                "answer": "B"
            },
            {
                "id": 58,
                "subject": "English",
                "question": "'The police ___ the thief.'",
                "options": {
                    "A": "catch",
                    "B": "catches",
                    "C": "caught",
                    "D": "have catch"
                },
                "answer": "C"
            },
            {
                "id": 59,
                "subject": "English",
                "question": "Antonym of 'Scarce':",
                "options": {
                    "A": "Rare",
                    "B": "Abundant",
                    "C": "Less",
                    "D": "Few"
                },
                "answer": "B"
            },
            {
                "id": 60,
                "subject": "English",
                "question": "'The cat is hiding ___ the bed.'",
                "options": {
                    "A": "on",
                    "B": "over",
                    "C": "under",
                    "D": "above"
                },
                "answer": "C"
            },
            {
                "id": 61,
                "subject": "English",
                "question": "Indirect of 'She said, 'I can speak English'':",
                "options": {
                    "A": "She said that I could speak English",
                    "B": "She said that she could speak English",
                    "C": "She said that she can speak English",
                    "D": "She told that she could speak English"
                },
                "answer": "B"
            },
            {
                "id": 62,
                "subject": "English",
                "question": "Meaning of 'Status quo':",
                "options": {
                    "A": "New situation",
                    "B": "Existing state of affairs",
                    "C": "Change",
                    "D": "Progress"
                },
                "answer": "B"
            },
            {
                "id": 63,
                "subject": "English",
                "question": "Which is a verb?",
                "options": {
                    "A": "Success",
                    "B": "Succeed",
                    "C": "Successful",
                    "D": "Successfully"
                },
                "answer": "B"
            },
            {
                "id": 64,
                "subject": "English",
                "question": "'Either you or he ___ wrong.'",
                "options": {
                    "A": "is",
                    "B": "are",
                    "C": "were",
                    "D": "have"
                },
                "answer": "A"
            },
            {
                "id": 65,
                "subject": "English",
                "question": "Synonym of 'Obsolete':",
                "options": {
                    "A": "Modern",
                    "B": "Outdated",
                    "C": "Useful",
                    "D": "New"
                },
                "answer": "B"
            },
            {
                "id": 66,
                "subject": "English",
                "question": "'To let the cat out of the bag' means:",
                "options": {
                    "A": "To free a cat",
                    "B": "To reveal a secret",
                    "C": "To buy a bag",
                    "D": "To be careful"
                },
                "answer": "B"
            },
            {
                "id": 67,
                "subject": "English",
                "question": "Correct usage:",
                "options": {
                    "A": "He is junior than me",
                    "B": "He is junior to me",
                    "C": "He is junior from me",
                    "D": "He is junior of me"
                },
                "answer": "B"
            },
            {
                "id": 68,
                "subject": "English",
                "question": "Plural of 'Mouse' (animal):",
                "options": {
                    "A": "Mouses",
                    "B": "Mice",
                    "C": "Mouse",
                    "D": "Mices"
                },
                "answer": "B"
            },
            {
                "id": 69,
                "subject": "English",
                "question": "'Put off' means:",
                "options": {
                    "A": "Wear",
                    "B": "Postpone",
                    "C": "Switch on",
                    "D": "Remove"
                },
                "answer": "B"
            },
            {
                "id": 70,
                "subject": "English",
                "question": "'Water ___ at 100°C.'",
                "options": {
                    "A": "boil",
                    "B": "boils",
                    "C": "boiling",
                    "D": "boiled"
                },
                "answer": "B"
            },
            {
                "id": 71,
                "subject": "English",
                "question": "Antonym of 'Amplify':",
                "options": {
                    "A": "Increase",
                    "B": "Reduce",
                    "C": "Expand",
                    "D": "Loud"
                },
                "answer": "B"
            },
            {
                "id": 72,
                "subject": "English",
                "question": "'They have been waiting ___ 2 hours.'",
                "options": {
                    "A": "for",
                    "B": "since",
                    "C": "from",
                    "D": "till"
                },
                "answer": "A"
            },
            {
                "id": 73,
                "subject": "English",
                "question": "One word for 'Study of earthquakes':",
                "options": {
                    "A": "Geology",
                    "B": "Seismology",
                    "C": "Geography",
                    "D": "Archaeology"
                },
                "answer": "B"
            },
            {
                "id": 74,
                "subject": "English",
                "question": "'No sooner had I closed my eyes ___ I fell asleep.'",
                "options": {
                    "A": "when",
                    "B": "than",
                    "C": "then",
                    "D": "that"
                },
                "answer": "B"
            },
            {
                "id": 75,
                "subject": "English",
                "question": "Synonym of 'Mitigate':",
                "options": {
                    "A": "Intensify",
                    "B": "Alleviate",
                    "C": "Create",
                    "D": "Ignore"
                },
                "answer": "B"
            },
            {
                "id": 76,
                "subject": "Mathematics",
                "question": "If 40% of a number is 80, the number is?",
                "options": {
                    "A": "150",
                    "B": "180",
                    "C": "200",
                    "D": "240"
                },
                "answer": "C"
            },
            {
                "id": 77,
                "subject": "Mathematics",
                "question": "Ratio of 2 kg to 800 grams = ?",
                "options": {
                    "A": "2:8",
                    "B": "5:2",
                    "C": "2:5",
                    "D": "8:2"
                },
                "answer": "B"
            },
            {
                "id": 78,
                "subject": "Mathematics",
                "question": "Average of first 15 natural numbers = ?",
                "options": {
                    "A": "7",
                    "B": "7.5",
                    "C": "8",
                    "D": "8.5"
                },
                "answer": "C"
            },
            {
                "id": 79,
                "subject": "Mathematics",
                "question": "If CP = Rs 800 and Loss = 15%, then SP = ?",
                "options": {
                    "A": "Rs 640",
                    "B": "Rs 680",
                    "C": "Rs 720",
                    "D": "Rs 760"
                },
                "answer": "B"
            },
            {
                "id": 80,
                "subject": "Mathematics",
                "question": "A car travels 240 km in 4 hours. Its speed = ?",
                "options": {
                    "A": "50 km/h",
                    "B": "60 km/h",
                    "C": "65 km/h",
                    "D": "70 km/h"
                },
                "answer": "B"
            },
            {
                "id": 81,
                "subject": "Mathematics",
                "question": "HCF of 36, 60, 72 = ?",
                "options": {
                    "A": "6",
                    "B": "12",
                    "C": "18",
                    "D": "36"
                },
                "answer": "B"
            },
            {
                "id": 82,
                "subject": "Mathematics",
                "question": "If 5x - 3 = 12, then x = ?",
                "options": {
                    "A": "2",
                    "B": "3",
                    "C": "4",
                    "D": "5"
                },
                "answer": "B"
            },
            {
                "id": 83,
                "subject": "Mathematics",
                "question": "12 workers finish work in 16 days. 8 workers will take?",
                "options": {
                    "A": "20 days",
                    "B": "22 days",
                    "C": "24 days",
                    "D": "26 days"
                },
                "answer": "C"
            },
            {
                "id": 84,
                "subject": "Mathematics",
                "question": "Perimeter of rectangle with length 12 cm and width 8 cm = ?",
                "options": {
                    "A": "20 cm",
                    "B": "32 cm",
                    "C": "40 cm",
                    "D": "96 cm"
                },
                "answer": "C"
            },
            {
                "id": 85,
                "subject": "Mathematics",
                "question": "3/4 expressed as percentage = ?",
                "options": {
                    "A": "60%",
                    "B": "65%",
                    "C": "70%",
                    "D": "75%"
                },
                "answer": "D"
            },
            {
                "id": 86,
                "subject": "Mathematics",
                "question": "Compound interest on Rs 5000 at 10% for 2 years = ?",
                "options": {
                    "A": "Rs 1000",
                    "B": "Rs 1050",
                    "C": "Rs 1100",
                    "D": "Rs 1200"
                },
                "answer": "B"
            },
            {
                "id": 87,
                "subject": "Mathematics",
                "question": "Missing term: 3, 9, 27, 81, ?",
                "options": {
                    "A": "162",
                    "B": "243",
                    "C": "324",
                    "D": "400"
                },
                "answer": "B"
            },
            {
                "id": 88,
                "subject": "Mathematics",
                "question": "If y/4 = 12, then y = ?",
                "options": {
                    "A": "3",
                    "B": "16",
                    "C": "48",
                    "D": "64"
                },
                "answer": "C"
            },
            {
                "id": 89,
                "subject": "Mathematics",
                "question": "30% of 60% of 200 = ?",
                "options": {
                    "A": "18",
                    "B": "24",
                    "C": "36",
                    "D": "48"
                },
                "answer": "C"
            },
            {
                "id": 90,
                "subject": "Mathematics",
                "question": "Probability of getting an even number on a dice = ?",
                "options": {
                    "A": "1/6",
                    "B": "1/3",
                    "C": "1/2",
                    "D": "2/3"
                },
                "answer": "C"
            },
            {
                "id": 91,
                "subject": "Pakistan Studies",
                "question": "Pakistan's first Constitution was enforced in which year?",
                "options": {
                    "A": "1954",
                    "B": "1956",
                    "C": "1962",
                    "D": "1973"
                },
                "answer": "B"
            },
            {
                "id": 92,
                "subject": "Pakistan Studies",
                "question": "Objective Resolution was passed in?",
                "options": {
                    "A": "1947",
                    "B": "1948",
                    "C": "1949",
                    "D": "1950"
                },
                "answer": "C"
            },
            {
                "id": 93,
                "subject": "Pakistan Studies",
                "question": "Who gave the title 'Quaid-e-Azam' to M.A. Jinnah?",
                "options": {
                    "A": "Allama Iqbal",
                    "B": "Maulana Mazharuddin",
                    "C": "Liaquat Ali Khan",
                    "D": "Moulvi Muhammad Ali"
                },
                "answer": "B"
            },
            {
                "id": 94,
                "subject": "Pakistan Studies",
                "question": "'One Unit' was established in?",
                "options": {
                    "A": "1954",
                    "B": "1955",
                    "C": "1956",
                    "D": "1958"
                },
                "answer": "B"
            },
            {
                "id": 95,
                "subject": "Pakistan Studies",
                "question": "Length of Pakistan-India border is?",
                "options": {
                    "A": "2912 km",
                    "B": "3323 km",
                    "C": "3450 km",
                    "D": "3650 km"
                },
                "answer": "B"
            },
            {
                "id": 96,
                "subject": "Islamiat",
                "question": "How many times is the word 'Muhammad (PBUH)' mentioned in the Holy Quran?",
                "options": {
                    "A": "3",
                    "B": "4",
                    "C": "5",
                    "D": "6"
                },
                "answer": "B"
            },
            {
                "id": 97,
                "subject": "Islamiat",
                "question": "Battle of Khandaq was fought in which Hijri?",
                "options": {
                    "A": "3 Hijri",
                    "B": "4 Hijri",
                    "C": "5 Hijri",
                    "D": "6 Hijri"
                },
                "answer": "C"
            },
            {
                "id": 98,
                "subject": "Islamiat",
                "question": "Nisab of Zakat for silver is?",
                "options": {
                    "A": "50 tola",
                    "B": "52.5 tola",
                    "C": "60 tola",
                    "D": "70 tola"
                },
                "answer": "B"
            },
            {
                "id": 99,
                "subject": "Islamiat",
                "question": "Which Surah is called 'Heart of Quran'?",
                "options": {
                    "A": "Surah Fatiha",
                    "B": "Surah Rahman",
                    "C": "Surah Yaseen",
                    "D": "Surah Mulk"
                },
                "answer": "C"
            },
            {
                "id": 100,
                "subject": "Islamiat",
                "question": "How many Takbeers are there in Eid-ul-Adha prayer?",
                "options": {
                    "A": "6",
                    "B": "9",
                    "C": "12",
                    "D": "15"
                },
                "answer": "C"
            }
        ]
    };

    let currentQuestionIndex = 0;
    const userAnswers = {}; // key: question.id, value: selected option ('A', 'B', 'C', 'D')
    const flaggedQuestions = new Set(); // set of question indices
    let submittedDueToTimeout = false;
    let quizStarted = false;

    /* ------------------------------ Timer Logic ---------------------------- */
    const TimerModule = (function () {
        let timeLeft = 3600; // 60 minutes in seconds
        let timerInterval = null;
        let countdownEl = null;

        function formatTime(totalSeconds) {
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            return [hours, minutes, seconds]
                .map((unit) => String(unit).padStart(2, '0'))
                .join(':');
        }

        function tick() {
            if (!countdownEl) return;
            countdownEl.textContent = formatTime(timeLeft);

            if (timeLeft > 0) {
                timeLeft -= 1;
            } else {
                clearInterval(timerInterval);
                countdownEl.classList.add('text-error');
                submittedDueToTimeout = true;
                submitExamResults();
            }
        }

        function init() {
            countdownEl = document.getElementById('countdown');
            if (!countdownEl) return;

            // Start 10-second prepare countdown first
            let prepTime = 10;
            const prepValEl = document.getElementById('prep-countdown-val');
            const overlay = document.getElementById('prep-overlay');

            if (prepValEl) prepValEl.textContent = prepTime;

            let prepInterval = setInterval(() => {
                prepTime -= 1;
                if (prepValEl) prepValEl.textContent = prepTime;

                if (prepTime <= 0) {
                    clearInterval(prepInterval);
                    if (overlay) {
                        overlay.classList.add('fade-out');
                    }
                    quizStarted = true;
                    // Start actual test countdown
                    tick();
                    timerInterval = setInterval(tick, 1000);
                }
            }, 1000);
        }

        return { init };
    }());

    /* --------------------------- Palette Module --------------------------- */
    const PaletteModule = (function () {
        function createButton(index) {
            const btn = document.createElement('button');
            const label = (index + 1) < 10 ? `0${index + 1}` : `${index + 1}`;
            btn.type = 'button';
            btn.className = 'palette-btn is-not-visited';
            btn.id = `palette-btn-${index}`;
            btn.setAttribute('data-question-index', String(index));
            btn.setAttribute('aria-label', `Question ${index + 1}`);
            btn.textContent = label;

            btn.addEventListener('click', () => {
                currentQuestionIndex = index;
                renderCurrentQuestion();
            });

            return btn;
        }

        function init() {
            const container = document.getElementById('question-palette');
            if (!container) return;
            container.innerHTML = '';

            const fragment = document.createDocumentFragment();
            for (let i = 0; i < quizData.questions.length; i += 1) {
                fragment.appendChild(createButton(i));
            }
            container.appendChild(fragment);
        }

        return { init };
    }());

    /* -------------------------- Render Question -------------------------- */
    function renderCurrentQuestion() {
        const q = quizData.questions[currentQuestionIndex];
        if (!q) return;

        // Update exam headers
        const titleEl = document.querySelector('.exam-title');
        if (titleEl) titleEl.textContent = quizData.test_name;

        const subtitleEl = document.querySelector('.exam-subtitle');
        if (subtitleEl) {
            subtitleEl.innerHTML = `
                <span class="material-symbols-outlined">history_edu</span>
                Syllabus: GK 45%, Eng 30%, Math 15%, Pak Studies 5%, Islam 5%
            `;
        }

        // Meta rows
        const eyebrow = document.querySelector('.question-eyebrow');
        if (eyebrow) eyebrow.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.total_questions}`;

        const tagRow = document.querySelector('.tag-row');
        if (tagRow) {
            tagRow.innerHTML = `
                <span class="tag-chip">${q.subject}</span>
                <span class="tag-chip tag-hard">1.0 Mark</span>
            `;
        }

        // Question text
        const qText = document.querySelector('.question-text');
        if (qText) qText.textContent = q.question;

        // Hide illustration (since this is general knowledge & studies questions)
        const qIllust = document.querySelector('.question-illustration');
        if (qIllust) qIllust.style.display = 'none';

        // Render options list
        const answerList = document.querySelector('.answer-list');
        if (answerList) {
            answerList.innerHTML = '';
            Object.entries(q.options).forEach(([key, value]) => {
                const isSelected = userAnswers[q.id] === key;
                const optionLabel = document.createElement('label');
                optionLabel.className = `answer-option ${isSelected ? 'is-selected' : ''}`;

                optionLabel.innerHTML = `
                    <input class="answer-radio" type="radio" name="question_${q.id}" value="${key}" ${isSelected ? 'checked' : ''}>
                    <div class="answer-body">
                        <span>${value}</span>
                    </div>
                    <span class="answer-letter">${key}</span>
                `;

                const radio = optionLabel.querySelector('.answer-radio');
                radio.addEventListener('change', () => {
                    userAnswers[q.id] = key;
                    answerList.querySelectorAll('.answer-option').forEach(opt => opt.classList.remove('is-selected'));
                    optionLabel.classList.add('is-selected');
                    updateProgressAndPalette();
                });

                optionLabel.addEventListener('click', (e) => {
                    if (e.target !== radio) {
                        radio.checked = true;
                        radio.dispatchEvent(new Event('change'));
                    }
                });

                answerList.appendChild(optionLabel);
            });
        }

        // Update overall palette active styles
        updateProgressAndPalette();
    }

    function isQuestionLocked(index) {
        const allAnswered = quizData.questions.every(q => !!userAnswers[q.id]);
        if (allAnswered) {
            // Phase 2: Review mode. Only flagged questions are unlocked!
            return !flaggedQuestions.has(index) && index !== currentQuestionIndex;
        } else {
            // Phase 1: Sequential mode. Only the current active question is unlocked!
            return index !== currentQuestionIndex;
        }
    }

    function updateProgressAndPalette() {
        const total = quizData.questions.length;
        const answeredCount = Object.keys(userAnswers).length;

        // Update progress displays
        const widthVal = `${(answeredCount / total) * 100}%`;
        const headerProgress = document.getElementById('header-progress-bar');
        const footerProgress = document.getElementById('footer-progress-bar');
        if (headerProgress) headerProgress.style.width = widthVal;
        if (footerProgress) footerProgress.style.width = widthVal;

        // Update palette buttons styles
        for (let index = 0; index < total; index += 1) {
            const btn = document.getElementById(`palette-btn-${index}`);
            if (!btn) continue;

            const q = quizData.questions[index];
            const label = (index + 1) < 10 ? `0${index + 1}` : `${index + 1}`;

            // Reset classes
            btn.className = 'palette-btn';

            const locked = isQuestionLocked(index);
            if (locked) {
                btn.classList.add('is-locked');
                btn.textContent = label;
                btn.style.pointerEvents = 'none';
                btn.style.opacity = '0.35';
            } else {
                btn.style.pointerEvents = 'auto';
                btn.style.opacity = '1';

                if (index === currentQuestionIndex) {
                    btn.classList.add('is-current');
                }

                if (flaggedQuestions.has(index)) {
                    btn.classList.add('is-flagged');
                    btn.innerHTML = `${label}<span class="flag-badge"><span class="material-symbols-outlined fill">flag</span></span>`;
                } else if (userAnswers[q.id]) {
                    btn.classList.add('is-answered');
                    btn.textContent = label;
                } else {
                    btn.classList.add('is-not-visited');
                    btn.textContent = label;
                }
            }
        }
    }

    /* ---------------------------- Scoring & Submission -------------------------- */
    function submitExamResults() {
        let correctCount = 0;
        quizData.questions.forEach((q) => {
            if (userAnswers[q.id] === q.answer) {
                correctCount += 1;
            }
        });

        const score = correctCount;
        const percentage = ((score / quizData.total_questions) * 100).toFixed(0);
        const passed = score >= 50 && !submittedDueToTimeout; // If timeout, they fail automatically!

        const modalContent = document.getElementById('modal-content');
        if (modalContent) {
            let titleText = passed ? 'Congratulations!' : 'Exam Finished';
            let statusText = passed ? 'PASSED' : 'FAILED';
            let descText = `You scored <strong>${score} out of 100</strong> (${percentage}%).`;
            let iconText = passed ? 'check_circle' : 'cancel';

            if (submittedDueToTimeout) {
                titleText = 'Time Out!';
                statusText = 'FAILED';
                descText = 'You failed because of time limit. You ran out of time.';
                iconText = 'alarm_off';
            }

            modalContent.innerHTML = `
                <div class="text-center">
                    <div class="modal-icon-wrap" style="background-color: ${passed ? 'rgba(0, 108, 73, 0.1)' : 'rgba(186, 26, 26, 0.1)'}">
                        <span class="material-symbols-outlined" style="color: ${passed ? 'var(--color-secondary)' : 'var(--color-error)'}">
                            ${iconText}
                        </span>
                    </div>
                    <h2 class="modal-title">${titleText}</h2>
                    <p class="modal-text">${descText}<br>
                    Status: <strong style="color: ${passed ? 'var(--color-secondary)' : 'var(--color-error)'}">${statusText}</strong></p>
                    <div class="modal-btn-row">
                        <button type="button" class="btn-modal btn-modal-primary" id="modal-dashboard-btn" style="flex: 1 1 100%;">
                            Go to Dashboard
                        </button>
                    </div>
                </div>
            `;

            // Make sure modal is visible
            const modal = document.getElementById('submit-modal');
            if (modal) {
                modal.classList.remove('d-none');
                modalContent.classList.add('is-visible');
            }

            const dashboardBtn = document.getElementById('modal-dashboard-btn');
            if (dashboardBtn) {
                dashboardBtn.addEventListener('click', () => {
                    window.location.href = '/dashboard/';
                });
            }
        }
    }

    /* ----------------------------- Modal Module -------------------------------- */
    const ModalModule = (function () {
        let modal = null;
        let content = null;

        function open() {
            if (!modal || !content) return;

            // Render unanswered warnings inside confirmation modal before submitting
            const total = quizData.total_questions;
            const answeredCount = Object.keys(userAnswers).length;

            const modalText = modal.querySelector('.modal-text');
            if (modalText) {
                modalText.innerHTML = `You have answered <strong>${answeredCount} out of ${total}</strong> questions.<br>Are you sure you want to finish the test?`;
            }

            modal.classList.remove('d-none');
            window.setTimeout(() => {
                content.classList.add('is-visible');
            }, 10);
        }

        function close() {
            if (!modal || !content) return;
            content.classList.remove('is-visible');
            window.setTimeout(() => {
                modal.classList.add('d-none');
            }, 300);
        }

        function init() {
            modal = document.getElementById('submit-modal');
            content = document.getElementById('modal-content');

            const finishBtn = document.getElementById('finish-test-btn');
            const goBackBtn = document.getElementById('modal-go-back-btn');
            const submitBtn = modal ? modal.querySelector('.btn-modal-primary') : null;

            if (finishBtn) finishBtn.addEventListener('click', open);
            if (goBackBtn) goBackBtn.addEventListener('click', close);
            if (submitBtn) {
                submitBtn.addEventListener('click', () => {
                    submitExamResults();
                });
            }
        }

        return { init, open, close };
    }());

    function getNextReviewQuestionIndex(startIndex) {
        const total = quizData.questions.length;
        for (let i = startIndex + 1; i < total; i += 1) {
            if (flaggedQuestions.has(i)) {
                return i;
            }
        }
        return -1;
    }

    /* --------------------------- Actions Bindings --------------------------- */
    function initActionBindings() {
        const flagBtn = document.getElementById('flag-btn');
        const saveNextBtn = document.getElementById('save-next-btn');

        if (flagBtn) {
            flagBtn.addEventListener('click', () => {
                if (flaggedQuestions.has(currentQuestionIndex)) {
                    flaggedQuestions.delete(currentQuestionIndex);
                } else {
                    flaggedQuestions.add(currentQuestionIndex);
                }
                updateProgressAndPalette();
            });
        }

        if (saveNextBtn) {
            saveNextBtn.addEventListener('click', () => {
                const allAnswered = quizData.questions.every(q => !!userAnswers[q.id]);
                if (allAnswered) {
                    const nextIndex = getNextReviewQuestionIndex(currentQuestionIndex);
                    if (nextIndex !== -1) {
                        currentQuestionIndex = nextIndex;
                        renderCurrentQuestion();
                    } else {
                        ModalModule.open();
                    }
                } else {
                    const currentQ = quizData.questions[currentQuestionIndex];
                    if (!userAnswers[currentQ.id]) {
                        alert("Please answer the current question to unlock the next one.");
                        return;
                    }
                    if (currentQuestionIndex < quizData.questions.length - 1) {
                        currentQuestionIndex += 1;
                        renderCurrentQuestion();

                        const nowAllAnswered = quizData.questions.every(q => !!userAnswers[q.id]);
                        if (nowAllAnswered) {
                            alert("Great job! You have answered all questions. You can now review your flagged questions from the sidebar navigator, or click Finish to submit your test.");
                        }
                    } else {
                        ModalModule.open();
                    }
                }
            });
        }
    }

    /* ------------------------------ Keyboard Nav -------------------------------- */
    const KeyboardNavModule = (function () {
        function handleKeydown(event) {
            if (!quizStarted) return;
            if (event.key === 'ArrowRight') {
                const allAnswered = quizData.questions.every(q => !!userAnswers[q.id]);
                if (allAnswered) {
                    const nextIndex = getNextReviewQuestionIndex(currentQuestionIndex);
                    if (nextIndex !== -1) {
                        currentQuestionIndex = nextIndex;
                        renderCurrentQuestion();
                    }
                } else {
                    const currentQ = quizData.questions[currentQuestionIndex];
                    if (!userAnswers[currentQ.id]) {
                        alert("Please answer the current question to unlock the next one.");
                        return;
                    }
                    if (currentQuestionIndex < quizData.questions.length - 1) {
                        currentQuestionIndex += 1;
                        renderCurrentQuestion();

                        const nowAllAnswered = quizData.questions.every(q => !!userAnswers[q.id]);
                        if (nowAllAnswered) {
                            alert("Great job! You have answered all questions. You can now review your flagged questions from the sidebar navigator, or click Finish to submit your test.");
                        }
                    }
                }
            }
        }

        function init() {
            document.addEventListener('keydown', handleKeydown);
        }

        return { init };
    }());

    /* ------------------------------ Sidebar Toggle ------------------------------ */
    function initSidebarToggle() {
        const closeBtn = document.getElementById('sidebar-close-btn');
        if (!closeBtn) return;

        const icon = closeBtn.querySelector('.material-symbols-outlined');

        function updateIcon() {
            if (!icon) return;
            const isCollapsed = document.body.classList.contains('sidebar-collapsed');
            if (window.innerWidth >= 768) {
                icon.textContent = isCollapsed ? 'chevron_right' : 'chevron_left';
            } else {
                icon.textContent = isCollapsed ? 'expand_more' : 'expand_less';
            }
        }

        closeBtn.addEventListener('click', () => {
            document.body.classList.toggle('sidebar-collapsed');
            updateIcon();
        });

        window.addEventListener('resize', updateIcon);
        updateIcon();
    }

    /* -------------------------- Fullscreen & Dark Mode & Clear Answer -------------------------- */
    function initFullScreenToggle() {
        const fullscreenBtn = document.getElementById('fullscreen-btn');
        if (!fullscreenBtn) return;

        const icon = fullscreenBtn.querySelector('.material-symbols-outlined');

        function updateIcon() {
            if (!icon) return;
            if (document.fullscreenElement) {
                icon.textContent = 'fullscreen_exit';
            } else {
                icon.textContent = 'fullscreen';
            }
        }

        fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen()
                    .then(updateIcon)
                    .catch((err) => {
                        console.error(`Error attempting to enable fullscreen: ${err.message}`);
                    });
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen().then(updateIcon);
                }
            }
        });

        document.addEventListener('fullscreenchange', updateIcon);
    }

    function initDarkModeToggle() {
        const darkmodeBtn = document.getElementById('darkmode-btn');
        const icon = document.getElementById('dark-mode-icon');
        if (!darkmodeBtn) return;

        // Persist theme choice using localStorage
        const savedTheme = localStorage.getItem('theme') || document.documentElement.getAttribute('data-bs-theme') || 'light';
        document.documentElement.setAttribute('data-bs-theme', savedTheme);
        if (icon) icon.textContent = savedTheme === 'dark' ? 'dark_mode' : 'light_mode';

        darkmodeBtn.addEventListener('click', () => {
            const html = document.documentElement;
            const targetTheme = html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-bs-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
            if (icon) {
                icon.textContent = targetTheme === 'dark' ? 'dark_mode' : 'light_mode';
            }
        });
    }

    /* ---------------------------------- Boot ------------------------------------- */
    document.addEventListener('DOMContentLoaded', () => {
        TimerModule.init();
        PaletteModule.init();
        renderCurrentQuestion();
        ModalModule.init();
        initActionBindings();
        initSidebarToggle();
        initFullScreenToggle();
        initDarkModeToggle();
        KeyboardNavModule.init();
    });
}());
