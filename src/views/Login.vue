<template>
	<div class="row">
		<div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
			<div class="login-panel panel panel-default">
				<div class="panel-heading">Login</div>
				<div class="panel-body">
						<div class="form-group">
							<input class="form-control" placeholder="Username" v-model="username">
						</div>
						<div class="form-group">
							<input class="form-control" placeholder="Password" v-model="password">
						</div>
						<div class="checkbox">
							<label>
								<input name="remember" type="checkbox" value="Remember Me">Remember Me
							</label>
						</div>
						<button class="btn btn-primary" @click="login">Login</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  import axios from 'axios'
  import type from '../store/type'

	export default {
		name:"login-page",
		data () {
			return {
				username:null,
				password:null
			}
		},
		methods:{
			login(){
        axios.post('api/blog/adminLogin',{
          username:this.username,
          password:this.password
        }).then(res=>{
          this.$store.commit(type.LOGIN,res.data);
          let path = this.$route.query.redirect || '/admin';
          this.$router.push({path});
        },err=>{
          console.log(err);
        })
			}
		}
	}
</script>
