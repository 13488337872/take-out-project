<template>
    <div>
        <address-top></address-top>
        <div class="address-content">
            <li>
                <h3>收货地址:</h3>
                <p>
                    <input type="text" placeholder="点击选择">
                    <i class="icon iconfont dizhi">&#xe60c;</i>
                    <i class="icon iconfont jiantou">&#xe604;</i> 
                </p>
            </li>
            <li>
                <h3>门牌号:</h3>
                <p>
                    <input type="text" placeholder="详细地址，例：16号楼5层501室"> 
                </p>
            </li>
            <li class="linkman">
                <h3>联系人:</h3>
                <p>
                    <input type="text" placeholder="请填写收货人的姓名"> 
                </p>
                <div class="sex">
                     <img src="/img/checked.png" alt="">先生
                     <img class="" src="/img/check.png" alt="">女士
                </div>
            </li>
            <li>
                <h3>手机号:</h3>
                <p>
                    <input type="text" placeholder="请填写收货手机号码"> 
                </p>
            </li>
            <li class="label">
                <h3>标签:</h3>
                <p>
                    <span>家</span>
                    <span>公司</span>
                    <span>学校</span>
                </p>
            </li>
            <div class="saveAdress">
                保存地址
            </div>
        </div>
    </div>
</template>

<script>
import addTop from '../components/common/addTop'
export default {
    components:{
        "address-top":addTop
    }
}
</script>

<style scoped>
@import "../assets/addAddress.css";
</style>