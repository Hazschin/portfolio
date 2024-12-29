const month = { 
    english:[
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
], 
spanish:[
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
]
};

export function dateFormatter(date : string, lang: language = "english") {
    const regex = /^\d{1,4}-\d{1,2}-\d{1,2}/;
    if(regex.test(date)){
        let splitDate = date.split("-");
        let result =`${month[lang][parseInt(splitDate[1])]} ${parseInt(splitDate[2])}${lang === "english" ? "th" : ""}, ${splitDate[0]}`;

        return result;
    } else {
        return "";
    }
}