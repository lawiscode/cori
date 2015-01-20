exports.data = [
    {
	question: "Are you a US citizen?",
	id: 0,
	options: [
	    {
		answer: "Yes",
		next: 1,
	    },
	    {
		answer: "No",
		next: 1111,
	    },
	]
    },

    {
	question: "Do you have any criminal cases that are open or pending? If you are on probation, parole, have fines,or other court ordered costs to pay, or have to court again on your case in the future, your case is still open.",
	id: 1,
	options: [
	    {
		answer: "No",
		next: 2,
	    },
	    {
		answer: "yes",
		next: 2222,
	    },
	]
    },


    {
	question: "Are you presently registered, or have you ever had to register as a sex offender?",
	id: 2,
	options: [
	    {
		answer: "No",
		next: 3,
	    },
	    {
		answer: "Yes",
		next: 3333,
	    },
	    {
		answer: "Yes, I was presviously reistered but I am no longer on the Sex offender registry ",
		next: 4444,
	    },
	]
    },
    {
	question: "Are the cases you want to seal from the District Court, Superior Court, or Boston Municipal Court in MASSACHUSETTS?",
	id: 3,
	options: [
	    {
		answer: "Yes",
		next: 4,
	    },
	    {
		answer: "No",
		next: 5555,
	    },
	]
    },

    {
	question: "Are the cases in Federal Court?",
	id: 4,
	options: [
	    {
		answer: "No",
		next: 5,
	    },
	    {
		answer: "Yes",
		next: 6666,
	    },
	]
    },
    {
	question: "Do you have any felony convictions?",
	id: 4,
	options: [
	    {
		answer: "Yes",
		next: 6,
	    },
	    {
		answer: "No",
		next: 9,
	    },
	]
    },


    {
	question: "When did you plead guilty or when were you found guilty of your most recent felony conviction? Please include the month, day, and year to the best of your ability.",
	id: 5,
	options: [
	    {
		answer: "Date x",
		next: 7,
	    },

	]
    },

    {
	question: "Did you serve jail timefor this convistion or any felony conviction?",
	id: 6,
	options: [
	    {
		answer: "Yes",
		next: 8,
	    },
	    {
		answer: "No",
		next: 9,
	    },
	]
    },

    {
	question: "Do you have any felony convictions?",
	id: 7,
	options: [
	    {
		answer: "Yes",
		next: 8,
	    },
	    {
		answer: "No",
		next: 9,
	    },
	]
    },

    {
	question: "When were you released from jail most recently?  For instance, if you served jail time for a felony 20 years ago, and again for a felony ten years ago,enter the date you were released most recently for a felony conviction. Please include the month, day, and year to the best of your ability.",
	id: 8,
	options: [

	    {
		answer: "Date Y",
		next: 9,
	    },
	]
    },


    {
	question: "Do you have any misdemeanor convictions?",
	id: 9,
	options: [
	    {
		answer: "Yes",
		next: 10,
	    },
	    {
		answer: "No",
		next: 13,
	    },
	]
    },


    {
	question: "When did you plead guilty or when were you found guilty of your most recent misdemeanor conviction? Please include the month, day, and year to the best of your ability.",
	id: 10,
	options: [

	    {
		answer: "Date Z",
		next: 11,
	    },
	]
    },
    {
	question: "Did you serve jail time for this conviction, or any misdemeanor conviction?",
	id: 11,
	options: [
	    {
		answer: "Yes",
		next: 12,
	    },
	    {
		answer: "No",
		next: 13,
	    },
	]
    },
    {
	question: "When were you released from jail most recently for a misdemeanor conviction? For instance, if you served jail time for a misdemeanor twenty years ago, and again for a misdemeanor four years ago, enter the date you were most recently released from jail for a misdemeanor conviction. Please include the month, day, and year to the best of your ability.",
	id: 12,
	options: [

	    {
		answer: "Date Q",
		next: 13,
	    },
	]
    },
    {
	question: "Do you have any convictions in other states or federally within the past ten years?",
	id: 13,
	options: [
	    {
		answer: "Yes",
		next: 12,
	    },
	    {
		answer: "No",
		next: 14,
	    },
	]
    },

    {
	question: "If a misdemeanor, was it within the past five years?  If a felony, was it within the past ten years?  Do not include minor motor vehicle offenses with a fine of less than $50, which do not count for purposes of sealing records.",
	id:14,
	options: [
	    {
		answer: "No, I have not had a misdemeanor conviction within the past 5 years, or a felony conviction within the past 10 years, in any other state. ",
		next: 15,
	    },
	    {
		answer: "Yes, it was a misdemeanor within past 5 years or a felony within the past 10 years.",
		next: 7777,
	    },

	]
    },

]
