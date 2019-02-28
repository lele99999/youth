<template>

<nav class="navbar navbar-fixed-top navbar-inverse">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed " data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">        
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>      
    </div>
      <span class="sr-only">Toggle navigation</span>
  	<div class="collapse navbar-collapse col-lg-12 col-sm-12 col-xs-12 navbar-right" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">  
				<li><a href="#/home" class="active">الصفحه الرئيسيه</a></li>                  
        <li><a href="#/add" class="inactive">تسجيل الطلاب</a></li>
		    <li><a href="#/comp" class="inactive">تسجيل المسابقه</a></li>
		    <li><a href="#/coms" class="inactive">تسجيل الطلاب ف المسابقه</a></li>
        <li><a href="#/login" class="inactive">خروج</a></li>
			</ul>  
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

</template>

<script>


export default {
    
}
</script>

<style>
body{
  background: #b1adad
}
.nav{
  font-size: 16px
}
.collapse ul li a.inactive:hover,
.collapse ul li a.inactive:focus,
.collapse ul li a.inactive:active{
	color:#f9ac1a;
	}
.collapse ul li a.active:hover,
.collapse ul li a.active:focus,
.collapse ul li a.active:active{
	color:#f9ac1a;
	}
.collapse ul li a.inactive,
.collapse ul li a.active{
  color:#fff
}
.collapse ul li a.inactive:focus{
	color:#f9ac1a;
	}
</style>
