<template>
    <section class="competition">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                <div class="panel panel-primary">
                    <div class="panel-heading">
					    <h3 class="panel-title text-center">اضافة مسابقه </h3>
				    </div>
                    <div class="panel-body">
                        <form>
                            <div class="form-group">
                                <label class="col-md-4  col-xs-5 col-form-label">مجال المسابقه</label>
                                <div class="col-md-6 col-xs-7">
                                    <select class="form-control">
                                        <option>- مجال المسابقه -</option>              
                                        <option>sssssss</option>			   
                                        <option>lddddds</option>			   
                                        <option>lwedddaa</option>			   
                                </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4  col-xs-5 col-form-label">اسم المسابقه</label>
                                <div class="col-md-6 col-xs-7">
                                    <input type="text" class="form-control" name="name" placeholder="اسم المسابقه" autocomplete="off" required/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4  col-xs-5 col-form-label">تاريخ الانعقاد</label>
                                <div class="col-md-6 col-xs-7">
                                    <input type="date" class="form-control" name="date" placeholder="تاريخ الانعقاد" required/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4  col-xs-5 col-form-label">نوع المسابقه</label>
                                <div class="col-md-6 col-xs-7">
                                    <select class="form-control">
                                        <option>- نوع المسابقه -</option>              
                                        <option>sssssss</option>			   
                                        <option>lddddds</option>			   
                                        <option>lwedddaa</option>			   
                                </select>
                                </div>
                            </div>
                             <div class="form-group">
                                <label class="col-md-4  col-xs-5 col-form-label">مستوى المسابقه</label>
                                <div class="col-md-6 col-xs-7">
                                    <select class="form-control">
                                        <option>- مستوى المسابقه -</option>              
                                        <option>محلي</option>			   
                                        <option>دولى</option>			   			   
                                </select>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-4 col-xs-hidden">
                                    </div>						   
                                    <div class="col-md-4 col-xs-12">
                                        <input type="submit" class="btn btn-default hvr-grow" value="اضافه"/>
                                        <input type="submit" class="btn btn-default hvr-grow" value="الرجوع للصفحه الرئيسيه"/>
                                    </div>
                                    <div class="col-md-4 col-xs-hidden">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>                    
                </div>        
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
.competition{
    margin-top: 100px;
    margin-bottom: 45px
}
.panel-primary>.panel-heading {
    color: #fff;
    background-color: #f9ac1a;
    border-color: #f9ac1a;
}
.panel-primary {
    border-color: #f9ac1a;
}
label{
    text-align: left;
    margin-top: 5px;
    display:inline-block;
    }
.panel-title{
    font-size: 25px;
    font-weight: bold
}
input,
select{
    margin-bottom:10px;
    display:inline-block;  	
}
.competition input[type=submit].btn-default {
   margin:10px;
   color: #f9f7f7;
    background-color: #f9ac1a;
    border-color: #f9ac1a;
    outline: none;
 }
</style>