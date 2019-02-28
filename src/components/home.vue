<template>
    <div class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <form>
                        <div class="form-group">					   
                            <div class="col-md-6 col-xs-12">
                                <input type="submit" class="form-control btn btn-default" value="اضافة بيانات طالب"/>
                            </div>
                        </div>
                        <div class="form-group">					   
                            <div class="col-md-6 col-xs-12">
                                <input type="submit" class="form-control btn btn-default" value="اضافة مسابقه جديده "/>
                            </div>
                        </div>
                        <div class="form-group">					   
                            <div class="col-md-6 col-xs-12">
                                <input type="submit" class="form-control btn btn-default" value="اضافة مسابقه جديده للطالب "/>
                            </div>
                        </div>
                        <div class="form-group">					   
                            <div class="col-md-6 col-xs-12">
                                <input type="submit" class="form-control btn btn-default" value="عرض التقارير  "/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-3 col-xs-hidden">
                            </div>					   
                            <div class="col-md-6 col-xs-12">
                                <input type="submit" class="form-control btn btn-default" value="خروج "/>
                            </div>
                            <div class="col-md-3 col-xs-hidden">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    
}
</script>

<style scoped>
.section{
    margin-top:150px;
    margin-bottom:130px  
}
.section input[type=submit].btn-default {
   margin:10px;
   color: #000;
    background-color: #fff;
    border-color: #f9ac1a;
    outline: none;
    height: 60px;
    font-size: 22px
 }
 .section input[type=submit].btn-default:hover {
   color: #fff;
    background-color: #f9ac1a;
    border-color: #f9ac1a;
 }
</style>