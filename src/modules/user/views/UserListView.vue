<style>
    .user_list {
        padding: 0;
        margin: 0;
    }

	.user_list .toolbar {
		display: block;
		width: 100px;
		height: 50px;
	}
</style>

<template id="user_list">
    <div class="user_list">
        <h3>客户列表</h3>

		<div class="toolbar">
			<button @click="addUser()">添加新用户</button>
		</div>

		<table width="800px" border="1" cellpadding="2" cellspacing="0">
			<tr>
				<td>ID</td>
				<td>姓名</td>
				<td>手机</td>
				<td>邮箱</td>
				<td>公司</td>
				<td>职位</td>
				<td>操作</td>
			</tr>
			<tr v-for="user in users">
				<td>{{user.id}}</td>
				<td>{{user.name}}</td>
				<td>{{user.phone}}</td>
				<td>{{user.email}}</td>
				<td>{{user.company}}</td>
				<td>{{user.title}}</td>
				<td>
					 <button @click="removeUser(user.id)">删除</button>
				</td>
			</tr>
		</table>
    </div>
</template>

<script type="text/javascript">
	import log from "utils/log";
    import { mapGetters, mapActions } from "vuex"

    export default {
        computed: mapGetters({
            users: "getUserList"
        }),
        methods: {
			addUser: function(){
				var id = new Date().getTime();

				var user = {
					id: id,
					name: "测试",
					phone: id,
					email: id + "qq.com",
					company: "AAA",
					title: "测试"
				}
				
				this.$store.dispatch("addUser", user)
			},
			removeUser: function(userId){
				log.info("to remove user:" + userId);
				this.$store.dispatch("removeUser", userId)
			}
        }
    }
</script>
		