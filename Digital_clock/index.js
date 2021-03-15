window.addEventListener('load', function() {
    clock()

    function clock() {

        var hours = document.querySelector('#hour');
        var minutes = document.querySelector('#minute');
        var seconds = document.querySelector('#second')

        const date = new Date;
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        // console.log(h, m, s);

        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s
    }

    setInterval(function() {
        clock();
    }, 1000)
})