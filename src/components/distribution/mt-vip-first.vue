<template>
  <section class="mt-vip-sec">
    <div class="vip_first_box">
      <div class="vip_first_box_tit">
        <img src="/img/vip/t1.png" alt />
        <span>免费得会员红包</span>
      </div>
      <p>
        共
        <span>6张</span>,可与优惠叠加使用
      </p>
      <img src="/img/vip/jintie.png" alt id="jintie" />
    </div>
    <div class="vip_first_box">
      <div class="vip_first_box_tit">
        <img src="/img/vip/t2.png" alt />
        <span>限时抢购加量包</span>
      </div>
      <p>仅限在本期会员有效期内购买、使用</p>
    </div>
    <div class="vip_swip_imgs">
      <!-- 一 -->
      <div class="vip_swip_box">
        <img src="/img/vip/hong1.png" alt />
        <h2>迷你加量包</h2>
        <div class="vip_swip_tit">
          <p>
            <sub>￥</sub>5
          </p>
          <del>￥9.5</del>
        </div>
        <span>限时活动</span>
      </div>
      <!-- 二 -->
      <div class="vip_swip_box">
        <img src="/img/vip/hong2.png" alt />
        <h2>小号加量包</h2>
        <div class="vip_swip_tit">
          <p>
            <sub>￥</sub>9.9
          </p>
          <del>￥19</del>
        </div>
        <span>限时活动</span>
      </div>
      <!-- 三 -->
      <div class="vip_swip_box">
        <img src="/img/vip/hong3.png" alt />
        <h2>中号加量包</h2>
        <div class="vip_swip_tit">
          <p>
            <sub>￥</sub>20
          </p>
          <del>￥38</del>
        </div>
        <span>限时活动</span>
      </div>
      <!-- 四 -->
      <div class="vip_swip_box">
        <img src="/img/vip/hong4.png" alt />
        <h2>大号加量包</h2>
        <div class="vip_swip_tit">
          <p>
            <sub>￥</sub>30
          </p>
          <del>￥57</del>
        </div>
        <span>限时活动</span>
      </div>
      <!-- 五 -->
      <div class="vip_swip_box">
        <img src="/img/vip/hong5.png" alt />
        <h2>超级加量包</h2>
        <div class="vip_swip_tit">
          <p>
            <sub>￥</sub>50
          </p>
          <del>￥95</del>
        </div>
        <span>限时活动</span>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style scoped="scoped">
.mt-vip-sec {
  width: 100%;
}
.vip_first_box {
  width: 91.7%;
  margin: 0 auto;
  margin-top: 0.2rem;
  margin-bottom: 0.32rem;
}
.vip_first_box:nth-child(2) {
  width: 91.7%;
  margin: 0 auto;
  margin-top: 0.2rem;
  margin-bottom: 0;
}
.vip_first_box_tit {
  display: -webkit-flex;
  -webkit-justify-content: space-between;
  width: 1.77rem;
}
.vip_first_box_tit img {
  width: 0.46rem;
  height: 0.2rem;
}
.vip_first_box_tit span {
  font-size: 0.17rem;
}
.vip_first_box p {
  font-size: 0.12rem;
  color: #888888;
  margin-top: 0.06rem;
  margin-bottom: 0.14rem;
}
.vip_first_box p span {
  color: #d4b19b;
}
#jintie {
  width: 3.43rem;
  height: 0.92rem;
}
/* 分页 */
.vip_swip_imgs {
  margin-left: 0.16rem;
  display: -webkit-flex;
  -webkit-justify-content: space-between;
  overflow-x: auto;
}
.vip_swip_box {
  width: 1.36rem;
  height: 1.61rem;
  background: #fff;
  border-radius: 0.1rem;
  padding: 0.12rem 0.12rem 0;
  margin-right: 0.08rem;
  flex-shrink: 0;
}
.vip_swip_box img {
  width: 1.35rem;
  height: 0.77rem;
}
.vip_swip_box h2 {
  font-size: 0.13rem;
  margin-top: 0.09rem;
}
.vip_swip_box p {
  font-size: 0.16rem;
  color: #000;
  font-weight: 600;
}
.vip_swip_tit {
  width: 0.52rem;
  display: -webkit-flex;
  -webkit-justify-content: space-between;
}
.vip_swip_box sub {
  font-size: 0.14rem;
}
.vip_swip_box del {
  color: #999;
  font-size: 0.07rem;
  margin-top: 0.16rem;
}
.vip_swip_box span {
  width: 0.48rem;
  height: 0.15rem;
  text-align: center;
  line-height: 0.15rem;
  background: #ffe8e8;
  color: #f04d43;
  font-size: 0.08rem;
  float: left;
  display: block;
  border-radius: 0.06rem;
  margin-top: 0.04rem;
}
</style>
