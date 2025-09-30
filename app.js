
const calendarDates = document.getElementById('calendar-dates');
const monthYear = document.getElementById('month-year');
const prevMonth = document.getElementById('prev-month');
const nextMonth = document.getElementById('next-month');

let currentDate = new Date();

function renderCalendar(date) {
    calendarDates.innerHTML = ''; 

    const month = date.getMonth();
    const year = date.getFullYear();

    
    monthYear.textContent = date.toLocaleString('default', { month: 'long', year: 'numeric' });

    
    const firstDay = new Date(year, month, 1).getDay();

    
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        calendarDates.appendChild(emptyDiv);
    }

    
    for (let i = 1; i <= daysInMonth; i++) {
        const dateDiv = document.createElement('div');
        dateDiv.textContent = i;


        const today = new Date();
        if (
            i === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dateDiv.classList.add('today');
        }

        calendarDates.appendChild(dateDiv);
    }
}

prevMonth.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonth.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

renderCalendar(currentDate);
