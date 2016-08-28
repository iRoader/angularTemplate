angular.module('kira.directive')
    .directive("chartLine", dataChartPieFun);

/**
 * 折线图组件
 */

dataChartPieFun.$inject = [];

function dataChartPieFun(){

	console.log('---------dataChartPie----------')
	return {
			restrict: 'AE',
			replace: 'true',
			templateUrl: PARTIALS_PATH + 'echarts-templ/chart_line.html',
			link: function(scope){

				console.log('---------link----------')
				console.log(scope);

				scope.elemt = document.getElementById('main');
				scope.myChart1 = echarts.init(scope.elemt);

				scope.option = {
				    title: {
				        text: '未来一周气温变化',
				        subtext: '纯属虚构'
				    },
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['最高气温','最低气温']
				    },
				    toolbox: {
				        show: true,
				        feature: {
				            dataZoom: {
				                yAxisIndex: 'none'
				            },
				            dataView: {readOnly: false},
				            magicType: {type: ['line', 'bar']},
				            restore: {},
				            saveAsImage: {}
				        }
				    },
				    xAxis:  {
				        type: 'category',
				        boundaryGap: false,
				        data: ['周一','周二','周三','周四','周五','周六','周日']
				    },
				    yAxis: {
				        type: 'value',
				        axisLabel: {
				            formatter: '{value} °C'
				        }
				    },
				    series: [
				        {
				            name:'最高气温',
				            type:'line',
				            data:[11, 11, 15, 13, 12, 13, 10],
				            markPoint: {
				                data: [
				                    {type: 'max', name: '最大值'},
				                    {type: 'min', name: '最小值'}
				                ]
				            },
				            markLine: {
				                data: [
				                    {type: 'average', name: '平均值'}
				                ]
				            }
				        },
				        {
				            name:'最低气温',
				            type:'line',
				            data:[1, -2, 2, 5, 3, 2, 0],
				            markPoint: {
				                data: [
				                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
				                ]
				            },
				            markLine: {
				                data: [
				                    {type: 'average', name: '平均值'},
				                    [{
				                        symbol: 'none',
				                        x: '90%',
				                        yAxis: 'max'
				                    }, {
				                        symbol: 'circle',
				                        label: {
				                            normal: {
				                                position: 'start',
				                                formatter: '最大值'
				                            }
				                        },
				                        type: 'max',
				                        name: '最高点'
				                    }]
				                ]
				            }
				        }
				    ]
				};

				

				
				// scope.option1 = {
				//     title : {
				//         text: '饼状图显示',
				//         // subtext: '纯属虚构',
				//         x:'center'
				//     },
				//     tooltip : {
				//         trigger: 'item',
				//         formatter: "{a} <br/>{b} : {c} ({d}%)"
				//     },
				//     legend: {
				//         orient: 'vertical',
				//         left: 'left',
				//         data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
				//     },
				//     series : [
				//         {
				//             name: '访问来源',
				//             type: 'pie',
				//             radius : '55%',
				//             center: ['50%', '60%'],
				//             data:[
				//                 {value:335, name:'直接访问'},
				//                 {value:310, name:'邮件营销'},
				//                 {value:234, name:'联盟广告'},
				//                 {value:135, name:'视频广告'},
				//                 {value:1548, name:'搜索引擎'}
				//             ],
				//             itemStyle: {
				//                 emphasis: {
				//                     shadowBlur: 10,
				//                     shadowOffsetX: 0,
				//                     shadowColor: 'rgba(0, 0, 0, 0.5)'
				//                 }
				//             }
				//         }
				//     ]
				// };

				scope.myChart1.setOption(scope.option);

				console.log(scope.myChart1)
			}
	  };

}