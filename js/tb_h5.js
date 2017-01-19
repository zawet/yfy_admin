function xrzb(id,datas){
	var labels = new Array();
	var values = new Array();
	for(var key in datas){
		labels.push(key);
		values.push({value:datas[key][0],name:key,itemStyle:{normal:{color:datas[key][1]}}});
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var myChart = echarts.init(document.getElementById(id));
		option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
        		bottom:0,
				data:labels
			},
			series: [
				{
					name:'学校占比',
					type:'pie',
					radius: ['26%', '60%'],
					avoidLabelOverlap: false,
					startAngle:-20,
					center: ['50%', '40%'],
					label:{normal:{formatter:"{b}\n占比{d}%",textStyle:{fontSize:12},show:true}},
					labelLine:{normal:{smooth:false,length:8,length2:4}},
					data:values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}

function xrsj(id,datas,iss){
	var sj_labels = new Array();
	var sj_values = new Array();
	for(var key in datas){
		sj_labels.push(key);
		sj_values.push(datas[key]);
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var sj_Chart = echarts.init(document.getElementById(id));
		sj_option= {
			tooltip : {trigger:'axis',axisPointer :{type : 'shadow'}},
			legend: {right:10,top:5,data:sj_labels,textStyle:{color:"#999"},selectedMode:true},
			grid:{left: '0%',right: '4%',bottom: '10%',top: '10%',containLabel: true},
			xAxis:[{
				axisLabel:{textStyle:{color:"#333"}},
				axisLine:{lineStyle:{color:"#0db310"}},
				type:'category',
				data:sj_labels,
				axisTick:{alignWithLabel:true,show:false}
			}],
			yAxis:[{
				name:"",
				nameTextStyle:{color:"#333",fontSize:18},
				nameGap:14,
				axisTick:{show:false},
				axisLabel:{show:true,textStyle:{color:"#333"}},
				axisLine:{lineStyle:{color:"#0db310"}},
				type:'value',
				splitLine:{show:true,lineStyle:{color:"#efefef"}}
				}],
			dataZoom: [{
					type: 'inside',
					start: 0,
					end: 100
				}, {
					start: 0,
					end: 100,
					handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
					handleSize: '80%',
					handleStyle: {
						color: '#fff',
						shadowBlur: 3,
						shadowColor: 'rgba(0, 0, 0, 0.6)',
						shadowOffsetX: 2,
						shadowOffsetY: 2
					}
				}],
			series : [
			{
					name:"",
					type:'bar',
					barWidth:"50%",
					itemStyle:{normal:{color:"#0db310"}},
					data:sj_values,
					label:{normal:{show:true,textStyle:{color:"#0db310",fontSize:12},position:"top"}}
				}
				
			]
	};
	if(iss){sj_option.series[0].label.normal.show=true;sj_option.dataZoom[0].end=100;sj_option.dataZoom[1].end=100;}
	else {sj_option.series[0].label.normal.show=true;sj_option.dataZoom[0].end=20;sj_option.dataZoom[1].end=20;}
        // 使用刚指定的配置项和数据显示图表。
        sj_Chart.setOption(sj_option);
}