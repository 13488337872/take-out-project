<template>
		<div class="Search_">
		<div class="Search_header">
			<span class="iconfont icon-cx"></span>
			<input class="input_search" type="text" v-model="searchInquire" @input="mtSearch(searchInquire)" placeholder="东北水饺馆 满20减16"/>
		</div>
		<a @click="backuplevel()">取消</a>
	</div>
</template>
<script>
export default{
	props:["mtSearch"],
	data() {
		return {
			
		}
	},
	methods: {
		backuplevel(){
			history.back()
		}
	},
}
</script>

<style scoped>
*{
	margin:0;
	padding: 0;
}
html{
	font-size: 26.27vw;
}
.Search_{
	width: 100%;
	display: flex;
	margin-top: .085rem;
}
.Search_header{
	border-radius: .075rem;
	background: #f1f1f1;
	margin: 0 .15rem;
	height: .34rem;
	display: flex;
 }
.Search_header .icon-cx{
	font-size: .14rem;
	padding: 0 .1rem;
	color: #373737;
	margin: auto 0;
}
.Search_header .input_search{
	width: 2.635rem;
	height: .34rem;
	border: 0;
	background: #f1f1f1;
	outline: none;
}
.Search_ a{
	font-size: .14rem;
	color: #373737;
	margin: auto 0;
	padding-right: .13rem ;
}
/*  */
.Search_find{
	padding-top: .25rem;
	margin: 0 .15rem;
	color: #373737;
	display: flex;
	justify-content: space-between;
}
.Search_find .Find{
	font-size: .13rem;
}
.Search_find a{
	font-size: .13rem;
}
.Search_find .icon-huanyipi{
	vertical-align: middle;
}
/*  */
.Find_Huanyipi{
	margin: .145rem .15rem 0;
	display: flex;
	flex-wrap: wrap;	
}
.Find_Huanyipi a{
	text-align: center;
	height: .3rem;
	line-height: .3rem;
	display: inline-block;
	font-size: .125rem;
	background: #f4f4f4;
	padding: 0 .1rem;
	margin-bottom: .12rem;
	margin-right: .07rem;
}
.Find_Huanyipi .red{
	color: #c88c8c;
}
</style>
