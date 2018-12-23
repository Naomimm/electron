<template>
	<div class="hello">
		<div class="echart__demo" ref="echartDemo"></div>
	</div>
</template>

<script>
	import { debounce } from '../common/common';
	export default {
		name: 'echarts',
		data() {
			return {
				echartExample: null
			}
		},
		methods: {
			initEchart() {
				let echartDemo = this.$refs.echartDemo;
				this.echartExample = this.$echarts.init(echartDemo);
				this.echartExample.setOption({
					tooltip: {
						trigger: "axis"
					},
					legend: {
						data: ["邮件营销", "联盟广告"]
					},
					toolbox: {
						show: true,
						feature: {
							mark: {
								show: true
							},
							dataView: {
								show: true,
								readOnly: false
							},
							magicType: {
								show: true,
								type: ["line", "bar", "stack", "tiled"]
							},
							restore: {
								show: true
							},
							saveAsImage: {
								show: true
							}
						}
					},
					calculable: true,
					xAxis: [{
						type: "category",
						boundaryGap: false,
						data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
					}],
					yAxis: [{
						type: "value"
					}],
					series: [{
							name: "expected",
							type: "line",
							stack: "总量",
							data: [120, 132, 101, 134, 90, 230, 210]
						},
						{
							name: "actual",
							type: "line",
							stack: "总量",
							data: [220, 182, 191, 234, 290, 330, 310]
						}
					]
				})
				window.addEventListener("resize", debounce(() => {
					this.echartExample.resize();
				}, 200));
			}
		},
		mounted() {
			this.initEchart();
		}
	}
</script>

<style>
	.echart__demo {
		margin-top: 50px;
		width: 100%;
		height: 400px;
		border: 1px solid black;
	}
</style>