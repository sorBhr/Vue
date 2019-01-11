<template>
	<div containr>
	<div class="left">
		<el-menu class="el-menu-vertical-demo" :default-active="this.$router.path" @open="handleOpen" @close="handleClose" router>
		<el-submenu index="1">
			<template slot="title"><i class="el-icon-location"></i><span>导航</span></template>
			<el-menu-item-group>
				<el-menu-item index="/hello">选项1</el-menu-item>
				<el-menu-item index="1-2">选项2</el-menu-item>
				<el-menu-item index="1-3">选项3</el-menu-item>
				<el-menu-item index="1-4">选项4</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="2">
			<template slot="title"><i class="el-icon-location"></i><span>导航</span></template>
			<el-menu-item-group>
				
				<el-menu-item index="2-1">选项1</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
				<el-menu-item index="2-3">选项3</el-menu-item>
				<el-menu-item index="2-4">选项4</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="3">
			<template slot="title"><i class="el-icon-location"></i><span>导航</span></template>
			<el-menu-item-group>
				
				<el-menu-item index="3-1">选项1</el-menu-item>
				<el-menu-item index="3-2">选项2</el-menu-item>
				<el-menu-item index="3-3">选项3</el-menu-item>
				<el-menu-item index="3-4">选项4</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="4">
			<template slot="title"><i class="el-icon-location"></i><span>导航</span></template>
			<el-menu-item-group>
				
				<el-menu-item index="4-1">选项1</el-menu-item>
				<el-menu-item index="4-2">选项2</el-menu-item>
				<el-menu-item index="4-3">选项3</el-menu-item>
				<el-menu-item index="4-4">选项4</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="5">
			<template slot="title"><i class="el-icon-location"></i><span>导航</span></template>
			

				<el-menu-item index="5-1">选项1</el-menu-item>
				<el-menu-item index="5-2">选项2</el-menu-item>
				<el-menu-item index="5-3">选项3</el-menu-item>
				<el-submenu index="5-4" >
					<template slot="title"><span>选项4</span></template>
					<el-menu-item index="5-4-1">选项1</el-menu-item>
					<el-menu-item index="5-4-2">选项2</el-menu-item>
					<el-menu-item index="5-4-3">选项3</el-menu-item>
					<el-menu-item index="5-4-4">选项4</el-menu-item>
				</el-submenu>
				
			
		</el-submenu>
	</el-menu>
	</div>
	<div class="right">
		<!-- <img src="../assets/logo.png"> -->
    
		<router-view></router-view>
	</div>
	</div>
</template>

<script>

	export default {
		name: 'MainPage',
		data () {
			return{
				
				menuList: [
				[
				"选项1-1",
				"选项1-2",
				"选项1-3",
				"选项1-4"
				],
				[
				"选项2-1",
				"选项2-2",
				"选项2-3",
				"选项2-4"
				],
				[
				"选项3-1",
				"选项3-2",
				"选项3-3",
				"选项3-4"
				],
				[
				"选项4-1",
				"选项4-2",
				"选项4-3",
				"选项4-4"
				],
				[
				"选项5-1",
				"选项5-2",
				"选项5-3",
				"选项5-4"
				]
				]
			};
		},
		methods: {
			handleOpen(key,keyPath){
			console.log(key,keyPath);
			},
			handleClose(key,keyPath){
			console.log(key,keyPath);
			}
		}
	}
</script>
<style scoped>
.containr{
	height: 100%;
}
	.el-menu-vertical-demo:not(.el-menu--collapse){
		width:300px;
		height: 100%;
	}
	.left{
		float: left;
		width:300px;
		overflow-y: scroll;
		height: 100% ;
	}
	.right{
		margin-left: 300px;
		overflow-y: scroll;
		height: 100% ;
	}
	/*.el-menu-title {
		padding-left: 45px;
	}*/
</style>