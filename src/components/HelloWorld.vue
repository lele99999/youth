<template>
<div class="section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title text-center">ادخال بيانات الطلاب </h3>
                    </div>
                    <div class="panel-body">
                        <form>
                            <div class="form-group">
                                <label class="col-md-4  col-xs-6 col-form-label">اسم الطالب</label>
                                <div class="col-md-6 col-xs-6">
                                    <input type="text" class="form-control" name="name" placeholder="اسم الطالب" required/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4  col-xs-6 col-form-label">الرقم القومي</label>
                                <div class="col-md-6 col-xs-6">
                                    <input type="text" class="form-control" name="id" placeholder="الرقم القومي" autocomplete="off" required/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4  col-xs-6 col-form-label">الحاله</label>
                                <div class="col-md-6 col-xs-6">
                                    <select class="form-control">
                                        <option>- الحاله -</option>              
                                        <option>sssssss</option>			   
                                        <option>lddddds</option>			   
                                        <option>lwedddaa</option>			   
                                </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4  col-xs-6 col-form-label">الكليه</label>
                                <div class="col-md-6 col-xs-6">
                                    <select class="form-control">
                                        <option>- الكليه -</option>              
                                        <option>sssssss</option>			   
                                        <option>lddddds</option>			   
                                        <option>lwedddaa</option>			   
                                </select>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label class="col-md-4 col-xs-6 col-form-label">الفرقه</label>
                                <div class="col-md-6 col-xs-6">
                                    <select class="form-control">
                                        <option>- الفرقه -</option>              
                                        <option>sssssss</option>			   
                                        <option>lddddds</option>			   
                                        <option>lwedddaa</option>			   
                                </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4  col-xs-6 col-form-label">القسم</label>
                                <div class="col-md-6 col-xs-6">
                                    <input type="text" class="form-control" name="part" placeholder="القسم"/>
                                </div>
                            </div>                   
                            <div class="form-group">
                                <label class="col-md-4  col-xs-6 col-form-label">الشعبه</label>
                                <div class="col-md-6 col-xs-6">
                                    <input type="text" class="form-control" name="" placeholder="الشعبه"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4  col-xs-6 col-form-label">العنوان</label>
                                <div class="col-md-6 col-xs-6">
                                    <input type="text" class="form-control" name="address" placeholder="العنوان" required/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4  col-xs-6 col-form-label">رقم الهاتف</label>
                                <div class="col-md-6 col-xs-6">
                                    <input type="text" class="form-control" name="complaint" placeholder="رقم الهاتف" autocomplete="off" required/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4  col-xs-6 col-form-label">النوع</label>
                                <div class="col-md-6 col-xs-6">
                                    <select class="form-control">
                                        <option>- النوع -</option>              
                                        <option>انثي</option>			   
                                        <option>ذكر</option>			   			   
                                </select>
                                </div>
                            </div>                        
                            <div class="form-group">
                                <label class="col-md-4  col-xs-6 col-form-label">الصوره الشخصيه</label>
                                <div class="col-md-6 col-xs-6">
                                    <input type="file" class="form-control" name="picture" required/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4  col-xs-6 col-form-label">بطاقة الرقم القومي</label>
                                <div class="col-md-6 col-xs-6">
                                    <input type="file" class="form-control" name="id" required/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4  col-xs-6 col-form-label">صورة كارنيه الجامعه</label>
                                <div class="col-md-6 col-xs-6">
                                    <input type="file" class="form-control" name="card" required/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4  col-xs-5 col-form-label">ملاحظات</label>
                                <div class="col-md-6 col-xs-7">
                                    <textarea class="form-control" rows="5" cols="20" placeholder="ملاحظات" required></textarea>
                                </div>
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
                        </form>
                    </div>        
                </div>
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
.section{
    margin-top: 70px;
    margin-bottom: 30px
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
.section input[type=submit].btn-default {
   margin:10px;
   color: #f9f7f7;
    background-color: #f9ac1a;
    border-color: #f9ac1a;
    outline: none;
 }
 
</style>
