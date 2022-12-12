export const getFullYear = (dateCode) => {
    const date = new Date(dateCode);
    return date.getFullYear();
}


export  const getMonth = (dateCode) => {
const date = new Date(dateCode);
return date.getMonth();
}

export const getTime = (dateCode) => {
const date = new Date(dateCode);
let hours = date.getHours();
let minutes = date.getMinutes();
const ampm = hours >= 12 ? 'pm' : 'am';
hours %= 12;
hours = hours || 12; // the hour '0' should be '12'
minutes = minutes < 10 ? `0${minutes}` : minutes;
const strTime = `${hours} : ${minutes} ${ampm}`;
return strTime;
} 

export const getDay = (dateCode) => {
const date = new Date(dateCode);
return date.getDay();
}