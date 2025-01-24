function toShamsi(dateString: string | undefined): string {
    if (dateString) {
        const date = new Date(dateString);
        if (date instanceof Date && !isNaN(date.getTime())) {
            const persianDate = date.toLocaleDateString('fa-IR');
            return persianDate.replace(/(\d{4})\/(\d{2})\/(\d{2})/, '$2/$3/$1');
        } else {
            return '-';
        }
    } else {
        return '-';
    }
}

export default toShamsi