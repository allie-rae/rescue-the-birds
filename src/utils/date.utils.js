export class DateUtilities {

    static #date = new Date();

    static getCurrentDateAsOrdinal() {
        const currentDate = DateUtilities.#date.getDate();
        if (currentDate > 3 && currentDate < 21) return `${currentDate}th`;
        const currentDateLastDigit = currentDate % 10;
        switch (currentDateLastDigit) {
            case 1: return `${currentDate}st`;
            case 2: return `${currentDate}nd`;
            case 3: return `${currentDate}rd`;
            default: return `${currentDate}th`;
        }
    }

    static getCurrentMonth() {
        const currentMonth = DateUtilities.#date.getMonth();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[currentMonth];
    }

    static getCurrentFullYear() {
        return DateUtilities.#date.getFullYear();
    }

}