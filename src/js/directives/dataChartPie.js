angular.module('kira.directive')
    .directive("chartPie", dataChartPieFun);

/**
 * 饼图组件
 */

dataChartPieFun.$inject = [];

function dataChartPieFun(){

	console.log('---------dataChartPie----------')
	return {
			restrict: 'AE',
			replace: 'true',
			templateUrl: PARTIALS_PATH + 'chart_pie.html',
			link: function(scope){

				console.log('---------link----------')
				console.log(scope);
				

				scope.elemt = document.getElementById('main');
				scope.myChart1 = echarts.init(scope.elemt);
				scope.option1 = {
				    title : {
				        text: '饼状图显示',
				        // subtext: '纯属虚构',
				        x:'center'
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        left: 'left',
				        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
				    },
				    series : [
				        {
				            name: '访问来源',
				            type: 'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:[
				                {value:335, name:'直接访问'},
				                {value:310, name:'邮件营销'},
				                {value:234, name:'联盟广告'},
				                {value:135, name:'视频广告'},
				                {value:1548, name:'搜索引擎'}
				            ],
				            itemStyle: {
				                emphasis: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            }
				        }
				    ]
				};

				scope.myChart1.setOption(scope.option1);

				console.log(scope.myChart1)
			}
	  };

}