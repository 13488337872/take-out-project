<template>
	<footer class="mt-my-foot" @click="yy">
		<router-link to=""><span>退出当前账号</span></router-link>
	</footer>

</template>

<script>
	import {MessageBox} from 'mint-ui'
	export default{
		methods:{
			yy(){
				MessageBox.confirm('',{
					title:'确定退出？',
					message:'退出登录后将无法查看订单，重新登录后即可查看',
					confirmButtonText:'确定',
					cancelButtonText:'取消'
				}).then(action=>{
					if(action=='confirm'){
						this.$router.push({
							path:'/mtMyRedlist'
						})
					}
				}).catch(error=>{
					if(error=='cancel'){
						
					}
				});
			}
		}
	}
</script>

<style>
.mt-my-foot{
		width:100%;
		height:.5rem;
		border-top:1px solid #f1f1f1;
		line-height: .5rem;
		background:#fff;
		display: flex;
		justify-content: center;
		position: absolute;
		bottom: 0;
		left: 0;
	}
.mt-my-foot span{
	color: #ff5f57;
	font-size: .13rem;
	display:block;
}

/* 弹出 */
.mint-msgbox{
	width: 75% !important;
	border-radius: .08rem !important;
}
.mint-msgbox-title {
    font-size: 2em;
    font-weight: 700;
    color: #333;
}
.mint-msgbox-message {
    color: #999;
    margin: 0;
		font-size:.13rem !important;
    text-align: center;
    line-height: .16rem !important;
}
.mint-msgbox-confirm {
    color: #ffc10e !important;
    width: 50%;
}
.mint-msgbox-cancel {
    width: 50%;
    border-right: 1px solid #d9d9d9 !important;
}
.mint-msgbox-content {
    border-bottom: 1px solid #d9d9d9 !important;
}
</style>
