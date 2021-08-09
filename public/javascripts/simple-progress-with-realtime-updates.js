let progress = 0,
    interval,
    $dish = $('#carrots'),
    $complete = $('#complete'),
    $status = $('#visible-status'),
    $ariaStatus = $('#approximate-status');

const updateProgress = throttleProgress((progress) => {
    $ariaStatus
        .text(`${progress}%`)
}, 5000)

$('button').one('click', () => {

    $('<div>', {
        'text': 'We are cooking your 🥕',
    }).appendTo($complete)

    interval = setInterval(() => {

        progress += Math.floor(Math.random() * 3);

        if(progress > 100) progress = 100;

        $dish
            .attr('value', progress)
            .attr('aria-valuenow', progress)
            .text(`${progress}%`);

        $status
            .text(`${progress}%`)

        updateProgress(progress)

        if (progress >= $dish.attr('max')) {

            clearInterval(interval);

            $complete.empty();

            $('<div>', {
                'text': 'Your 🥕 is cooked',
            }).appendTo($complete)
        }
    }, 1000)
})

function throttleProgress(updateProgressFunction, waitMilliseconds) {
  var latestProgress = null;
  var lastExecutionTime = 0;
  var timeout = null;

  return function(progress) {
    const currentTimestamp = Date.now();
    console.log(`currentTimestamp is ${currentTimestamp}`)
    const timeSinceLastExecutionMillis = currentTimestamp - lastExecutionTime;

    if (timeSinceLastExecutionMillis > waitMilliseconds) {
      console.log(`Time since last execution is ${timeSinceLastExecutionMillis} ms, wait time is ${waitMilliseconds}, so executing immediately with progress ${progress}`);
      lastExecutionTime = currentTimestamp;
      timeout = null;
      updateProgressFunction(progress);
    } else if (!timeout) {
      const nextExecutionDelayMillis = waitMilliseconds - timeSinceLastExecutionMillis;
      console.log(`There was a recent execution and none is scheduled, so setting timeout in ${nextExecutionDelayMillis} ms with progress ${progress}`);
      timeout = setTimeout(() => {
        console.log(`Actually updating progress with value ${latestProgress}`)
        updateProgressFunction(latestProgress);
        timeout = null;
        lastExecutionTime = Date.now();
      }, nextExecutionDelayMillis)
    } else {
      console.log(`Timeout was already scheduled, so updating progress to  with progress ${progress}`);
      latestProgress = progress;
    }
  }
}
