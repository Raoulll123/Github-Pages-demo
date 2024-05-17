var dom = document.getElementById("grid3");
var myChart = echarts.init(dom);
var app = {};
var option;

// 生成随机数据
var words = [];
for (var i = 0; i < 100; i++) {
    words.push({
        name: 'word' + i,
        value: Math.floor(Math.random() * 10000)
    });
}

option = {
    series: [{
        type: 'wordCloud',
        gridSize: 2,
        sizeRange: [12, 50],
        rotationRange: [-90, 90],
        shape: 'heart',
        width: 600,
        height: 400,
        drawOutOfBound: true,
        textStyle: {
            normal: {
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: words.map(function (word) {
            return {
                name: word.name,
                value: word.value,
                textStyle: {
                    normal: {
                        color: 'black'
                    },
                    emphasis: {
                        color: 'red'
                    }
                }
            };
        })
    }]
};

myChart.setOption(option);