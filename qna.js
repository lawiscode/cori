exports.data = {
    '0': {
	question: "This calculator is for the sealing of Massachusetts cases that are eligible for sealing through the administrative process, a FREE and SIMPLE form you will mail-in. Non-convictions may also be eligible for sealing by a judge.  Please visit <a style='color:#597C9C' href='http://www.masslegalhelp.org/'>Mass. Legal help</a> to learn about your options for sealing non-convictions. This informational calculator is provided as a public service and does not constitute legal advice which can only be given to you after a consultation with your own attorney.",
	options: [
	    {
		answer: "I understand",
		next: 1,
	    },
	]
    },

    '1': {
	question: "This information relates only to Massachusetts state court criminal records and Massachusetts laws in effect or passed on or before January 16, 2013. You are advised to obtain an official copy of your CORI Report which contains precise details of your criminal cases. You can request your CORI Report using these forms: <a style='color:#597C9C' href='http://www.mass.gov/eopss/docs/chsb/personal-access-form-v2-20121228.pdf'>Personal access form</a> and to waive the fee, <a style='color:#597C9C' href='http://www.mass.gov/courts/docs/forms/sjc/affidavitofindigency.pdf'>Affidavit of indigency</a> ",
	options: [
	    {
		answer: "Continue",
		next: 2,
	    },
	]
    },

    '2': {
	question: "Are you a US citizen?",
	options: [
	    {
		answer: "Yes",
		next: 3,
	    },
	    {
		answer: "No",
		next: 24,
	    },
	],
    },

    '3': {
	question: "Do you have any criminal cases that are open or pending? If you are on probation, parole, have fines,or other court ordered costs to pay, or if you have to go to court again on your case in the future, your case is still open. It is a good idea to obtain a copy of your CORI Report which contains precise information about your criminal cases.",
	options: [
	    {
		answer: "No",
		next: 4,
	    },
	    {
		answer: "yes",
		next: 21,
	    },
	]
    },

    '4': {
	question: "Are you presently registered, or have you ever had to register as a sex offender?",
	options: [
	    {
		answer: "No",
		next: 5,
	    },
	    {
		answer: "Yes",
		next: 22,
	    },
	    {
		answer: "Yes, I was presviously reistered but I am no longer on the Sex offender registry. ",
		next: 23,
	    },
	]
    },

    '5': {
	question: "Are the cases you want to seal from the District Court, Superior Court, or Boston Municipal Court in MASSACHUSETTS?",
	options: [
	    {
		answer: "Yes",
		next: 6,
	    },
	    {
		answer: "No",
		next: 25,
	    },
	]
    },
    '6': {
	question: "Are the cases in Federal Court?",
	options: [
	    {
		answer: "No",
		next: 7,
	    },
	    {
		answer: "Yes",
		next: 26,
	    },
	]
    },

    '7': {
	question: "Do you have any felony convictions?",
	options: [
	    {
		answer: "Yes",
		next: 8,
	    },
	    {
		answer: "No",
		next: 12,
	    },
	]
    },
    '8': {
	question: "When did you plead guilty or when were you found guilty of your most recent felony conviction? Please include the month, day, and year to the best of your ability.",
	options: [
	    {
		answer: "Continue",
		next: 9,
	    },
	],
	date: 'felCon',
    },
    '9': {
	question: "Did you serve jail time for this conviction or any felony conviction?",
	options: [
	    {
		answer: "Yes",
		next: 11,
	    },
	    {
		answer: "No",
		next: 12,
	    },
	]
    },
    '10': {
	question: "Do you have any felony convictions?",
	options: [
	    {
		answer: "Yes",
		next: 8,
	    },
	    {
		answer: "No",
		next: 12,
	    },
	]
    },
    '11': {
	question: "When were you released from jail most recently?  For instance, if you served jail time for a felony 20 years ago, and again for a felony ten years ago,enter the date you were released most recently for a felony conviction. Please include the month, day, and year to the best of your ability.",
	options: [

	    {
		answer: "Continue",
		next: 12,
	    },
	],
	date: 'jailFelCon'
    },

    '12': {
	question: "Do you have any misdemeanor convictions?",
	options: [
	    {
		answer: "Yes",
		next: 13,
	    },
	    {
		answer: "No",
		next: 16,
	    },
	]
    },
    '13': {
	question: "When did you plead guilty or when were you found guilty of your most recent misdemeanor conviction? Please include the month, day, and year to the best of your ability.",
	options: [

	    {
		answer: "Continue",
		next: 14,
	    },
	],
	date: 'misCon'
    },

    '14': {
	question: "Did you serve jail time for this conviction, or any misdemeanor conviction?",
	options: [
	    {
		answer: "Yes",
		next: 15,
	    },
	    {
		answer: "No",
		next: 16,
	    },
	]
    },
    '15': {
	question: "When were you released from jail most recently for a misdemeanor conviction? For instance, if you served jail time for a misdemeanor twenty years ago, and again for a misdemeanor four years ago, enter the date you were most recently released from jail for a misdemeanor conviction. Please include the month, day, and year to the best of your ability.",
	options: [

	    {
		answer: "Continue",
		next: 16,
	    },
	],
	date: 'jailMisCon'
    },

    '16': {
	question: "Do you have any convictions in other states or federally within the past ten years?",
	options: [
	    {
		answer: "Yes",
		next: 17,
	    },
	    {
		answer: "No",
		next: 18,
	    },
	]
    },
    '17': {
	question: "If a misdemeanor, was it within the past five years?  If a felony, was it within the past ten years?  Do not include minor motor vehicle offenses with a fine of less than $50, which do not count for purposes of sealing records.",
	options: [
	    {
		answer: "No, I have not had a misdemeanor conviction within the past 5 years, or a felony conviction within the past 10 years, in any other state. ",
		next: 18,
	    },
	    {
		answer: "Yes, it was a misdemeanor within past 5 years or a felony within the past 10 years.",
		next: 29,
	    },

	]
    },
    '18': {
	question: "Do you have any felony cases that ended in non-convictions?",
	options: [
	    {
		answer: "Yes",
		next: 27,
	    },
	    {
		answer: "No",
		next: 19,
	    }
	]
    },

    '19': {
	question: "Do you have any misdemeanor cases that ended in non-convictions?",
	options: [
	    {
		answer: "Yes",
		next: 28,
	    },
	    {
		answer: "No",
		next: 20,
	    }
	],
    },
    '20': {
	question: "Certain crimes may never be sealed if they end in conviction.  Some of the more common never sealable charges are witness intimidation, resisting arrest, bribery, and certain firearms charges. Other charges will still be able to be sealed by mail,if the waiting periods have been met, but not these charges.",
	options: [
	    {
		answer: "I understand",
		next: 21,
	    },
	]
    },
    '21': {
	question: "You are not eligible to seal any convictions in Massachusetts and other cases using the administrative process under Mass.Gen/law Chapter 276, Section 100A. Please check back after your open cases have closed. You can also visit <a style='color:#597C9C' href='http://www.masslegalhelp.org for more information'>Mass. Legal help</a> ",
    },
    '22': {
	question: "You are not eligible to seal any convictions in Massachusetts and other cases using the administrative process under Mass.Gen/law Chapter 276, Section 100A.",
    },
    '23': {
	question: "Sealing records for people who were previously on the sex offender registry may be more complicated than other types of sealing. Please visit <a style='color:#597C9C' href='http://www.masslegalhelp.org for more information'>Mass. Legal help</a> or contact an attorney",
    },
    '24': {
	question: "Your criminal record history is reviewed when you apply for a “green card”, citizenship or try to change your immigration status.  If you are not a citizen, you should talk to an immigration lawyer before sealing any records.  Otherwise, you may have to go to each court where a record is sealed to ask a judge to unseal the case so you can get papers you need for purposes of immigration. You might not get papers you need in time for an immigration hearing if the case is sealed.  Certified copies of the complaint, docket, and police report for each of your criminal cases are usually needed.",
    },
    '25': {
	question: "The administrative process under Mass. Gen. Law Chapter 276, Section 100A does not include sealing of cases in other states",
    },
    '26': {
	question: "The administrative process under Mass. Gen. Law Chapter 276, Section 100A does not include sealing of federal court cases",
    },
    '27': {
	question: "Did you have any felony cases that ended in Non-convictions more than 10 years ago",
	options: [
	    {
		answer: "Yes",
		next: 19,
	    },
	    {
		answer: "No",
		next: 19,
	    },

	]
    },
    '28': {
	question: "Did you have any misdemeanor cases that ended in Non-convictions more than 5 years ago",
	options: [
	    {
		answer: "Yes",
		next: 20,
	    },
	    {
		answer: "No",
		next: 20,
	    },

	]
    },
    '29': {
	question: "Sorry, you are not currently eligible to seal by mail. You must wait until any out of state and periods of incarceration are at least 5 years old for misdemeanors, and 10 years old for felonies.",
    },


}
