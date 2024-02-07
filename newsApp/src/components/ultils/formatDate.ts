export const changeDate = (date: string) => {
    const inputDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }
    const outputDate = inputDate.toLocaleDateString("en-US", options);
    return outputDate;
}