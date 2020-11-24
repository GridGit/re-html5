import '@/style.css'
import '@/style.scss'
import $ from 'jquery'

// console.log($('.audio')[0].play());
// console.log($('.audio')[0].currentTime);
// console.log($('.audio')[0].duration);

setTimeout(() => {
    console.log($('.audio')[0].pause());
}, 5000)

let touchstartX1 = 0;
let touchstartX2 = 0;

let audioWidth = $('.audio-operate-btn').width();
let processBarWidth = $('.process-bar').width() / audioWidth;

// console.log(processBarWidth, '');
// $('.process-bar').width("90%");

$('.audio-operate-btn').on('touchstart', (oEvent) => {
    let _touch = oEvent.originalEvent.targetTouches[0];
    touchstartX1 = _touch.pageX;

    console.log(touchstartX1, '1');
});

$('.audio-operate-btn').on('touchmove', (oEvent) => {
    let _touch = oEvent.originalEvent.targetTouches[0];
    touchstartX2 = _touch.pageX;
    console.log(touchstartX2, '2')
    // debugger
    let deltaX = +((touchstartX2 - touchstartX1) / audioWidth * 100).toFixed(3);

    console.log(deltaX, '-');
    // debugger
    if (processBarWidth >= 0 && processBarWidth <= 100) {
        touchstartX1 = touchstartX2;
        processBarWidth = processBarWidth + deltaX > 100 ? 100 : processBarWidth + deltaX < 0 ? 0 : processBarWidth + deltaX;
        console.log(processBarWidth, '');
        $('.process-bar').width(`${processBarWidth}%`);
    }
});
$('.audio-operate-btn').on('touchend', (oEvent) => {
    touchstartX1 = touchstartX2 = 0;
    // if (processBarWidth < audioWidth) {
    //     processBarWidth = processBarWidth + deltaX > audioWidth ? audioWidth : processBarWidth + deltaX;
    //     $('.process-bar').width(`${processBarWidth}%`);
    // }
});


// let demo1 =  document.querySelector('.demo-1')

// demo1.addEventListener('transitionend', () => {
//     console.log('end', '---');
// })
// let $content = $('.content');
// let aArr = new Array(30)

// aArr.forEach((item, i) => {
//     // let lefts = 
// })