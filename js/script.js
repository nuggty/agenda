document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['interaction', 'dayGrid', 'list', 'moment'],
        locale: "pt-br",
        timeZone: 'America/Sao_Paulo',
        header: {
            left: 'prev,next title',
            center: '',
            right: 'dayGridDay, dayGridWeek, dayGridMonth'
        },
        events: [
            {
                title: 'Aula Arbyte',
                start: '2020-06-15T19:05:00',
                backgroundColor: 'green',
                extendedProps: {
                    status: 'done'
                }
            },
            {
                title: "Valentine's Day",
                start: '2020-06-12T19:05:00',
                backgroundColor: '#d255ff',
                extendedProps: {
                    status: 'done'
                }
            },
            {
                title: 'Birthday Party',
                start: '2020-06-13T19:00:00',
                backgroundColor: '#00647b',
                borderColor: 'green'
            }
        ],
        defaultView: 'dayGridMonth',
        select: function (start) {
           console.log(start)
        },
        selectable: true,
        editable: true
    });
    calendar.render();
});


const observer = new MutationObserver(() => {
    const day = document.getElementsByClassName("fc-day-top")
    if (day.length > 0)
        for (let x = 0; x < day.length; x++) {
            const a = day[x].querySelector(".fc-day-number")
            if (a !== null) {
                day[x].innerHTML = `<span class="dia">${day[x].querySelector(".fc-day-number").innerHTML}</span>`
            }
        }
})

observer.observe(document.getElementById('calendar'), { attributes: true, childList: true, subtree: true })


// var modal = document.querySelector("#modal");
// var modalOverlay = document.querySelector("#modal-overlay");
// var closeButton = document.querySelector("#close-button");
// var openButton = document.querySelector("#open-button");

// closeButton.addEventListener("click", function() {
//   modal.classList.toggle("closed");
//   modalOverlay.classList.toggle("closed");
// });

// openButton.addEventListener("click", function() {
//   modal.classList.toggle("closed");
//   modalOverlay.classList.toggle("closed");
// });