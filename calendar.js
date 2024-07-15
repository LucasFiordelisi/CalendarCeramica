document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { title: 'Cumpleaños de Juan', start: '2024-07-20' },
            { title: 'Cumpleaños de María', start: '2024-08-15' },
            { title: 'Cumpleaños de Pedro', start: '2024-09-10' }
        ]
    });

    calendar.render();
});