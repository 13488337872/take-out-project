<template>
    <div class="nearbyShops">
        <div class="nearbyShopsTOP">
			<h2>附近商家</h2>
            <p>
                <span v-for="(item,key) in sortRank" :key="key" @click="volume(key)">{{item}}</span>
            </p>
		</div>
        <div class="nearbyShopsList" v-if="isShow">
            <li v-for="(item,shopId) in data" :key="shopId" @click="mtShopdetail(shopId,item)">
                <img :src=item.nearbyShopPic alt="">
                <div class="shopsDetails">
                    <div class="detailsTop">
                        <h2>{{item.nearbyShopName}}</h2>
                        <i class="icon iconfont dian">&#xe602;</i>
                    </div>
                    <div class="detailsSale">
                        <p>
                            <img src="/img/xingxing.png" alt="">
                            <span>{{item.nearbyShopStar}}</span>
                            <i>月售<span>{{item.nearbyShopSale}}</span></i>
                            <div class="timer">
                                <span>{{item.nearbyShopTime}}分钟</span>
                                <strong>{{item.nearbyShopDistance}}</strong>
                            </div>
                        </p>
                    </div>
                    <div class="detailsSale">
                        <div class="send">
                            <span>起送￥{{item.nearbyShopSend}}</span>
                            <span>配送￥1</span>
                            <span>人均￥10</span>
                            <img src="/img/meituan.png" alt="">
                        </div>
                    </div>
                    <div class="detailsSale classify">
                        <img class="kuaican" src="/img/kuaican.png" alt="">
                        <span>{{item.nearbyShopType}}</span>
                    </div>
                    <div class="mitigate">
                        <span v-for="(Mitig,kid) in item.nearbyShopMitig" :key="kid">{{Mitig.full}}减{{Mitig.minus}}</span>
                    </div>
                </div>
            </li>
		</div>
		<div class="nearbyShopsList" v-if="isShows">
		    <li v-for="(item,shopId) in datas" :key="shopId" @click="mtShopdetail(shopId)">
		        <img :src=item.nearbyShopPic alt="">
		        <div class="shopsDetails">
		            <div class="detailsTop">
		                <h2>{{item.nearbyShopName}}</h2>
		                <i class="icon iconfont dian">&#xe602;</i>
		            </div>
		            <div class="detailsSale">
		                <p>
		                    <img src="/img/xingxing.png" alt="">
		                    <span>{{item.nearbyShopStar}}</span>
		                    <i>月售<span>{{item.nearbyShopSale}}</span></i>
		                    <div class="timer">
		                        <span>{{item.nearbyShopTime}}分钟</span>
		                        <strong>{{item.nearbyShopDistance}}</strong>
		                    </div>
		                </p>
		            </div>
		            <div class="detailsSale">
		                <div class="send">
		                    <span>起送￥{{item.nearbyShopSend}}</span>
		                    <span>配送￥1</span>
		                    <span>人均￥10</span>
		                    <img src="/img/meituan.png" alt="">
		                </div>
		            </div>
		            <div class="detailsSale classify">
		                <img class="kuaican" src="/img/kuaican.png" alt="">
		                <span>{{item.nearbyShopType}}</span>
		            </div>
		            <div class="mitigate">
		                <span v-for="(Mitig,kid) in item.nearbyShopMitig" :key="kid">{{Mitig.full}}减{{Mitig.minus}}</span>
		            </div>
		        </div>
		    </li>
		</div>
    </div>
</template>

<script>
	import axios from 'axios'
export default {
    props:["data"],
	data:function(){
		return {
			isShow:true,
			isShows:false,
            datas:{},
            sortRank:["销量","距离","星选"]
		}
	},
    methods: {
        mtShopdetail(shopId,shopProduct){
            //href:设置或者获取地址栏信息路径
            //search：获取地址栏参数 例：(?name=zj&age=18)
            //host:返回主机（域名）
            //port:返回端口号
            //pathname:返回路径
            //hash：返回片段 #后面的内容，常见链接 锚点
            this.$router.push({
                path:"/shopdetail",query:{
                    shopId:shopId+1,shopProduct:shopProduct
                }
            })
        },
        volume(orderBy){//排序
			axios({
			 url:`http://39.100.63.237:8000/api/orderby/?orderBy=${orderBy}`,
			 methods:'get',
			}).then(res=>{
					  // this.data = res.data;
					  this.isShow = false;
					  this.isShows = true;
					  this.datas = res.data.nearbyShop;
			})
		},
    },
}
</script>

<style scoped>

</style>