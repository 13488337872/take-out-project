<template>
    <div class="mt-shop-cart-footer">
        <div class="mt-shop-cart-footer-left">
            <input type="checkbox" v-model="data.checked" @change="tcheckAll" style="vertical-align:center"/>
            全选
        </div>
        <div class="mt-shop-cart-footer-right">
            <p>
                <span>总合计<i>￥{{data | total}}</i></span>
                <span>总优惠<i style="font-size:0.1rem;">￥{{data.totalSjg}}</i></span>
            </p>
            <p>
                <span>一键结算</span>
                <span>{{data | numOfCal}}个商家</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name:"mtshopcartfooter",
    props:["data"],
    data:function(){
        return{
          
        }
    },
    methods:{
        tcheckAll(){
            this.$emit("checkedAll")
        }
    },
    filters:{
       /**
        *  用购物车的信息计算商品的个数
        *  */
       numOfCal(shopCarInfo){
           let num = 0;
            shopCarInfo.shops.forEach((shop,sid) => {
                shop.products.forEach((product,pid)=>{
                    if(product.checked){
                        num++;
                    }
                })
            });
            return num;
       },
        total(shopCarInfo){
           let total = 0;
		   let price = 0;
		   let index = 0;
            shopCarInfo.shops.forEach((shop,sid) => {
                shop.products.forEach((product,pid)=>{
                    if(product.checked){
                        total += product.productPrice * product.productNum;
                    }
                })
				for(var total in shop[sid].price){
					if(total > shop[sid].price[i].total){
						index = i;
					}
				}
				shop.productSjg = shop.price[index].totalJg;
				price += shop.productSjg;
				tatol = tatol + shop.PackingFee + shop.DistributionFee;
            });
			total -= price;
			shopCarInfo.totalSjg = price;
            return total;
       }
    }
}
</script>

<style scoped>
.mt-shop-cart-footer{
    position: fixed;
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    padding:0.05rem 0.12rem;
    background: #fff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.12rem;
    box-sizing: border-box;
}
.mt-shop-cart-footer-right{
    display: flex;
    justify-content: space-between;
    overflow: hidden;
}
.mt-shop-cart-footer-right p:nth-child(1){
   padding:0 0.1rem;
}
.mt-shop-cart-footer-right p:nth-child(1) i{
   color: red;
    font-style: normal;
}
.mt-shop-cart-footer-right p:nth-child(2){
   background: #e4a82e;
   padding:0 0.3rem;
   height: 0.4rem;
   border-radius: 0.4rem;
}
.mt-shop-cart-footer-right p span{
   display: flex;
   color: #333333;
   line-height: 0.2rem;
   height: 0.2rem;
}
.mt-shop-cart-footer-right p:nth-child(2) span:nth-child(2){
  text-align: center;
  font-size: 0.05rem;
}
</style>