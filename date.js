/**
 * @class A custom date class
 */
class CustomDate extends Date {
    constructor(...args) {
        super();
        this.date = new Date(...args);
    }
    /**
     * This function returns the year
     *
     * @returns {number} the year
     */
    year() {
        return this.date.getFullYear();
    }
    /**
     * This function returns the year
     *
     * @return {string} - the month
     */
    month() {
        const month = this.date.getMonth();
        switch (month) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";
            default:
                return "Not a month!";
        }
    }
    /**
     * This function returns the day
     * @returns {number} - the day
     */
    day() {
        return this.date.getDay();
    }

    /**
     * This function returns the hour
     * @returns {number} - the hour
     */
    hours() {
        return this.date.getHours();
    }

    /**
     * This function returns the minutes
     * @returns {number} - the minutes
     */
    mins() {
        return this.date.getMinutes();
    }

    /**
     * This function returns the seconds
     * @returns {number} - the seconds
     */
    secs() {
        return this.date.getSeconds();
    }
    /**
     * Make a date with values for Y, M, D etc.
     * @param {string}- a format for your day
     * @returns a time value
     */
    format(formatString = "default") {
        let date = "";
        const formatObj = {
            Y: this.year(),
            y: `${this.year()}`.slice(-2),
            M: this.month(),
            m: this.month().slice(0, 3),
            D: `0${this.day()}`,
            d: this.day(),
            H: `0${this.hours()}`,
            h: this.hours(),
            I: `0${this.mins()}`,
            i: `${this.mins()}`,
            S: `0${this.secs()}`,
            s: `${this.secs()}`
        };

        if (formatString === "default") {
            return `${this.year()} ${this.month()} 0${this.day()}`;
        }

        for (const char of formatString) {
            if (char in formatObj) {
                date += formatObj[char];
            } else if (char === "/" || char === ":") {
                date += char;
            }
        }
        return date;
    }
    /**
     * This function returns a human readble description of 'when' a date will occur
     * @returns {string} when the date will occur
     */
    when() {
        const currentDate = new Date();
        const yearDifference = currentDate.getFullYear() - this.year();
        const monthDifference = currentDate.getMonth() - this.getMonth();
        const dayDifference = currentDate.getDay() - this.day();
        if (this.date < currentDate) {
            return `This date was: ${yearDifference} years, ${monthDifference} months, and ${dayDifference} days ago`;
        }
        return `This date is: ${Math.abs(yearDifference)} years, ${Math.abs(
            monthDifference
        )} months, and ${Math.abs(dayDifference)} days into the future`;
    }
}

module.exports = CustomDate;