export function formatDate(date) {
    date = new Date(date);
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Intl.DateTimeFormat('en-US', options).format(date);
}