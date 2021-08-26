var users = [{
        image: "Shaq.jpg",
        name: {
            first: "Shaquille",
            last: "O'Neal"
        },
        gender: "Male",
        age: 49,
        year: -1,
        subject: ["Basketball", "Music"],
        qualification: "Other",
        drive: true,
        availability: {
            display: "Friday-Sunday",
            value: ["Friday", "Saturday", "Sunday"]
        },
		area: "Noranda",
		email: "bigshaq@example.com"
    },
    {
        image: "Maya.jpg",
        name: {
            first: "Maya",
            last: "Patel"
        },
        gender: "Female",
        age: 24,
        year: -1,
        subject: ["HASS"],
        qualification: "University",
        drive: false,
        availability: {
            display: "Monday-Wednesday, Friday",
            value: ["Monday", "Tuesday", "Wednesday", "Friday"]
        },
		area: "Online",
		email: "MayaPatel@example.com"
    },
    {
        image: "James.jpg",
        name: {
            first: "James",
            last: "Carter"
        },
        gender: "Male",
        age: 33,
        year: -1,
        subject: ["Math", "English"],
        qualification: "Teacher",
        drive: true,
        availability: {
            display: "Saturday-Sunday",
            value: ["Saturday", "Sunday"]
        },
		area: "Yokine",
		email: "JamesCarter@example.com"
    },
    {
        image: "Liz.jpg",
        name: {
            first: "Liz",
            last: "Chan"
        },
        gender: "Female",
        age: 15,
        year: 10,
        subject: ["Math", "Science", "Music"],
        qualification: "Student",
        drive: false,
        availability: {
            display: "Monday-Tuesday, Friday-Saturday",
            value: ["Monday", "Tuesday", "Friday", "Saturday"]
        },
		area: "Dianella",
		email: "lizchan@example.com"
    }
]
/*


format = {
	image: 'IMAGENAME',
	name : {
		first: "FIRSTNAME",
		last: "LASTNAME"
	},
	gender: "GENDER",
	age: age,
	year: schoolyear,
	subject: ["Subject1","Subject2"],
	qualification: "qualification",
	drive: true/false,
	availability: {
            display: "How the availability is displayed to the viewer",
            value: ["Day","Day","Day"]
        },
	area: "SUBURB",
	email: "EMAIL"
}

*/