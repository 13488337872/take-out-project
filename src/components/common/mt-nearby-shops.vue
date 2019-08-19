<template>
    <div class="nearbyShops">
        <div class="nearbyShopsTOP">
			<h2>附近商家</h2>
            <p>
                <span>销量</span>
                <span>距离</span>
                <span>星选</span>
            </p>
		</div>
        <div class="nearbyShopsList">
            <li v-for="(item,nid) in data" :key="nid" @click="mtShopdetail()">
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
export default {
    props:["data"],
    methods: {
        mtShopdetail(){
            //href:设置或者获取地址栏信息路径
            //search：获取地址栏参数 例：(?name=zj&age=18)
            //host:返回主机（域名）
            //port:返回端口号
            //pathname:返回路径
            //hash：返回片段 #后面的内容，常见链接 锚点
            location.href = "http://localhost:8080/#/shopdetail"
        }
    },
}
</script>

<style scoped>

</style>