let progress = 0,
    interval,
    $dish = $('#carrots'),
    $output = $('#output');

$('button').on('click', () => {

    interval = setInterval(() => {

        progress += 10;

        $dish.attr('value', progress).text(`${progress}%`);

        if (progress >= $dish.attr('max')) {

            clearInterval(interval);

            $('<div>', {
                "text": 'Your carrots are now cooked 🥕',
            }).appendTo($output)
        }
    }, 1000)
})