window.addEventListener('DOMContentLoaded', function() {

    // Бургер меню
    document.querySelectorAll('.maheev-btn-mob').forEach(function(activeMaheev) {
        activeMaheev.addEventListener('click', function() {
            document.querySelectorAll('#menu').forEach(function(menu) {
                menu.classList.toggle('none')
            })
        })
    })

    document.querySelectorAll('.cross').forEach(function(activeMaheev) {
        activeMaheev.addEventListener('click', function() {
            document.querySelectorAll('#menu').forEach(function(menu) {
                menu.classList.toggle('none')
            })
        })
    })
});