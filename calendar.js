document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGrid',
        views: {
            dayGrid: {
                type: 'dayGrid',
                duration: { months: 12 }, // Muestra 12 meses consecutivos
                dayMaxEventRows: 3 // Número máximo de filas por día en la vista de cuadrícula
            }
        },
        events: [
            { title: 'Cumpleaños de Juan', start: '2024-01-20' },
            { title: 'Cumpleaños de María', start: '2024-02-15' },
            { title: 'Cumpleaños de Pedro', start: '2024-03-10' },
            { title: 'Cumpleaños de Ana', start: '2024-04-05' },
            { title: 'Cumpleaños de Carlos', start: '2024-05-18' },
            { title: 'Cumpleaños de Laura', start: '2024-06-22' },
            { title: 'Cumpleaños de Andrés', start: '2024-07-07' },
            { title: 'Cumpleaños de Sofía', start: '2024-08-12' },
            { title: 'Cumpleaños de Luis', start: '2024-09-30' },
            { title: 'Cumpleaños de Marta', start: '2024-10-14' },
            { title: 'Cumpleaños de Pablo', start: '2024-11-25' },
            { title: 'Cumpleaños de Elena', start: '2024-12-19' }
        ]
    });

    calendar.render();
});
