<template>
<section class="login">
    <div class="container">
		<div class="row">
		    <!-- Login Box -->
	        <div class="col-md-5 col-md-offset-3 col-sm-offset-3">
                <form class="login-page">
                    <div class="login-header">
						<i class="fa fa-lock fa-5x"></i>
					</div>
                    <div class="input-group col-md-12" style="margin-bottom:20px" data-validate="Name is required">
						<div class="group">
							<input type="text" name="name" id="name" required autocomplete="off" autofocus="on" />
							<span class="highlight"></span>
							<span class="bar"></span>
							<label><i class="fa fa-user"></i> الاسم</label>
						</div>
					</div>
                    <div class="input-group col-md-12">
						<div class="group">
							<input type="Password" name="Password" id="Password" required autocomplete="off" />
							<span class="highlight"></span>
							<span class="bar"></span>
							<label><i class="fa fa-key"></i> الرقم السري</label>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<a href="#" class="genric-btn warning-border circle arrow">دخول <span class="fa fa-long-arrow-right fa-2x"></span></a>
					    </div>
					</div>
                </form>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
  
}
</script>

<style scoped>

.login-page {
  margin-top:82px;
  margin-bottom:60px;
  background: none repeat scroll 0 0 #FEFEFE;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  box-shadow: 0 0 3px #EEEEEE;
  color: #555555;
  padding: 30px;
  box-shadow:5px 5px 15px #404040
}

.login-header{
	font-size:20px;
	text-align:center;
	margin-bottom:30px;
	color:#f9ac1a
}

.login .btn{
	margin-top:10px
}

.group {
  position: relative;
  z-index: 1;
  margin-bottom: 30px;
  }
  
.group input{
    font-size: 15px;
    font-style: italic;
    padding: 10px;
    display: block;
    width: 100%;
    height: 35px;
    border: none;
    border-bottom: 2px solid;
    border-color: #f0f0f0;
}

.group input:focus{
  outline: none;
  box-shadow: none;
 }
 
.group label {
    color: #878787;
    font-size: 15px;
    font-weight: normal;
    position: absolute;
    right: 0;
    top: 5px;
    transition: 0.5s ease all;
 }
.group .bar {
    position: relative;
    display: block;
    width: 100%;
 }
.group .bar:before, 
.group .bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 0;
  position: absolute;
  background-color: #f9ac1a;
  transition: 0.5s ease all;
  }
  
.group .bar:before {
      left: 50%;
  }
  
.group .bar:after {
      right: 50%;
  }
  
.group .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
	}

input:focus ~ label,
input:valid ~ label {
  top: -15px;
  font-size: 15px;
  color:#b37f1b ;
 }
 
nput:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
  }

input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
  }
  
.genric-btn {
  display: inline-block;
  outline: none;
  line-height: 35px;
  padding: 0 20px;
  font-size:15px;
  text-align: center;
  text-decoration: none;
  font-weight:400;
  cursor: pointer;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
   margin-top:15px 
  }
  
.genric-btn:focus {
  outline: none;
  }
  
.circle {
  border-radius: 20px;
  }
  
.genric-btn.warning-border {
  color: #f9ac1a;
  border: 1px solid #f9ac1a;
  background: #fff;
  }
  
.genric-btn.warning-border:hover {
  color:#fff;
  background:#f9ac1a;
  border: 1px solid transparent;
  }
  
.genric-btn.arrow {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  }

.genric-btn.arrow span {
  margin-right: 10px;
  }
.login{
  background-image: url('../../public/5.jpg');
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -o-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
  
</style>
