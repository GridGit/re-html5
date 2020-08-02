import html2canvas from 'html2canvas'
import echarts from 'echarts';
// let echarts = require('echarts');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});

setTimeout(() => {
    html2canvas(document.getElementById('app')).then(function(canvas) {
        // document.body.appendChild(canvas);
        let oImg = new Image();
        oImg.src = canvas.toDataURL(); // 导出图片
        oImg.width = 300;
        document.body.appendChild(oImg); // 将生成的图片添加到body

        // let saveLink = document.createElement('a');
        // saveLink.href = canvas.toDataURL();
        // saveLink.download = 'img';
        // saveLink.click();
    });
}, 3000)

let a = {
    b: 1
}

console.log(a, '----');
// console.log(, '')
for(let i = 0; i < 1000000000; i++) {

}
a.c = 2