<template>
	<div class="idc-footer">
		<div class="foot-box">
			<div class="website">
				<div class="contact">
					<!-- <img :src="devUrl + logo.big_logo"> -->
					<ul>
						<li><img :src="require('./images/gongsi.png')">{{com.company}}</li>
						<li><img :src="require('./images/youxiang.png')">{{com.email}}</li>
						<li><img :src="require('./images/dizhi.png')">{{com.address}}</li>
					</ul>
				</div>
				<ul class="column clearfix">
					<li v-for="item in themeList" :key="item.id">
						<p>{{item.title}}</p>
						<ul>
							<li v-for="(ite, index) in bott[item.id]" :key="index">
								<a target="_self" :href="ite.title_url">{{ite.title}}</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div class="links">
				<span>友情链接：</span>
				<ul>
					<li v-for="(item, index) in links" :key="index"><a target="_black" :href="item.url">{{item.link_name}}</a></li>
				</ul>
			</div>
			<div class="copyright">
				<ul>
					<li>
						<span>{{net.copyright}}</span>
						<span><a target="_black" href="https://beian.miit.gov.cn">{{net.icp}}</a></span>
					</li>
					<li>
						<span>{{net.icp_permi}}</span>
						<span v-if="net.police"><a target="_black" :href="net.police_url"><img :src="require('./images/gongan.png')">{{net.police}}</a></span>
						<span v-html="net.statistics" ref="statistics"></span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
// import { devUrl, baseUrl } from '@/assets/js/utils';
export default {
	data () {
		return {
			links: [],
			// devUrl,
			com: {},
			bott: {},
			net: {},
			themeList: [{ id: 1, title: '热门产品' }, { id: 2, title: '服务' }, { id: 3, title: '解决方案' }, { id: 4, title: '服务支持' }, { id: 5, title: '快速入口' }]
		};
	},
	// props: ['logo'],
	created () {
		this.getBottomInfo();
	},
	methods: {
		async getBottomInfo () {
			// let res = await this.ajax(baseUrl + '/getBottomInfo', 'post');
			// console.log(res);
			// if (res.code === 0) {
			// 	this.com = res.com;
			// 	this.bott = res.bott;
			// 	this.net = res.net;
			// 	this.links = res.links;
			// } else {
			// 	this.$message.error(res.descript || '获取底部信息失败');
			// }
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
	.idc-footer{
		width: 100%;
		height: auto;
		background: #333840;
		padding: 50px 0 80px;
		.foot-box {
			width: 1200px;
			height: auto;
			margin: 0 auto;
			.website {
				display: flex;
				flex-wrap: wrap;
				.contact {
					width: 30%;
					img {
						max-height: 70px;
					}
					ul {
						margin-top: 48px;
						color: #7b7e86;
						padding-left: 10%;
						li {
							padding: 5px 0;
							font-size: 14px;
							position: relative;
							color: #7b7e86;
							img {
								display: inline-block;
								width: 18px;
								height: 18px;
								vertical-align: middle;
								margin-right: 5px;
							}
						}
					}
				}
				.column {
					width: 70%;
					padding-left: 2%;
					box-sizing: border-box;
					& > li {
						width: 20%;
						padding-left: 5%;
						display: inline-block;
						vertical-align: top;
						box-sizing: border-box;
						p {
							width: 100%;
							font-size: 16px;
							color: #fff;
							padding-bottom: 15px;
							margin-bottom: 15px;
							border-bottom: 1px solid rgba(255, 255, 255, 0.2);
						}
						ul {
							max-height: 175px;
							overflow: hidden;
							li {
								a {
									width: 100%;
									display: inline-block;
									padding: 4px 0;
									font-size: 14px;
									line-height: 1.5;
									color: #818899;
								}
							}
						}
					}
				}
			}

			.links {
				font-size: 12px;
				padding: 20px 0;
				border-top: 1px solid #555a68;
				border-bottom: 1px solid #555a68;
				& > span {
					color: #fff;
				}
				& > ul {
					width: calc(100% - 60px);
					display: inline-block;
					vertical-align: top;
					li {
						margin: 0 0 10px 30px;
						float: left;
					}
				}
			}

			.copyright {
				margin-top: 20px;
				padding-top: 20px;
				color: #7b7e86;
				font-size: 12px;
				text-align: center;
				& > ul {
					padding-left: 3%;
					li {
						&	+ li {
							margin-top: 10px;
						}
						span + span {
							margin-left: 10px;
							padding-left: 15px;
						}
						a {
							img {
								vertical-align: middle;
								margin-right: 5px;
								display: inline-block;
							}
						}
					}
				}
			}
		}
	}
</style>
