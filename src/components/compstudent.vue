<template>
    <section class="compstudent">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title text-center">بحث </h3>
                        </div>
                        <div class="panel-body">
                            <form>
                                <div class="form-group">
                                    <label class="col-md-2  col-xs-4 col-form-label">اسم الطالب</label>
                                    <div class="col-md-3 col-xs-8">
                                        <input type="text" class="form-control" name="name" placeholder="اسم الطالب" autocomplete="off" required/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-2  col-xs-4 col-form-label"> الرقم القومي</label>
                                    <div class="col-md-3 col-xs-8">
                                        <input type="text" class="form-control" name="date" placeholder=" الرقم القومي" required/>
                                    </div>
                                </div>
                                <div class="form-group">                                  						   
                                    <div class="col-md-2 col-xs-12">
                                        <input type="submit" class="btn btn-default hvr-grow" value="بحث"/>
                                    </div>                                    
                                </div>
                                <div class="form-group text-center">
                                    <div class="table-responsive col-xs-12 col-md-12">
                                        <table class="table table-hover" border="1" align="center">
                                            <thead>
                                                <tr class="one">
                                                    <th>اسم الطالب</th>
                                                    <th>الرقم القومي</th>
                                                    <th>الكليه</th>
                                                    <th>الحاله</th>
                                                    <th>الفرقه</th>
                                                    <th>رقم الهاتف</th>
                                                    <th>الصوره الشخصيه</th>
                                                    <th> ملاحظات</th>									
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>احمد محمد محمود</td>
                                                    <td>01234567894561</td>
                                                    <td>اداب</td>
                                                    <td>مستجد</td>
                                                    <td>الاولي</td>
                                                    <td>01234567891</td>
                                                    <td>تتتتتتت</td>
                                                    <td>اا ببل بببب اا تتتتتتتت تتتت لللل اااا اااا لللل ااا</td>
                                                </tr>								
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="form-group">                                  						   
                                    <div class="col-md-4 col-xs-12">
                                        <input type="submit" class="btn btn-default hvr-grow" value="تسجيل"/>
                                        <input type="submit" class="btn btn-default hvr-grow" value="تعديل"/>
                                    </div>                                    
                                </div>
                            </form>
                        </div>
                    </div>
                                        <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title text-center">اضافة مسابقه لطالب </h3>
                        </div>
                        <div class="panel-body">
                            <form>
                                <div class="form-group">
                                    <label class="col-md-4  col-xs-5 col-form-label">اسم الطالب</label>
                                    <div class="col-md-6 col-xs-7">
                                        <select class="form-control">
                                            <option>- اسم الطالب -</option>              
                                            <option>اااا</option>			   
                                            <option>للللل</option>			   			   
                                    </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-4  col-xs-5 col-form-label"> المسابقه</label>
                                    <div class="col-md-6 col-xs-7">
                                        <select class="form-control">
                                            <option>- المسابقه -</option>              
                                            <option>اااا</option>			   
                                            <option>للللل</option>			   			   
                                    </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-4  col-xs-5 col-form-label"> المركز </label>
                                    <div class="col-md-6 col-xs-7">
                                        <select class="form-control">
                                            <option>- المركز -</option>              
                                            <option>اااا</option>			   
                                            <option>للللل</option>			   			   
                                    </select>
                                    </div>                                   
                                </div>
                                <div class="form-group">
                                    <label class="col-md-4  col-xs-5 col-form-label"> التميز </label>
                                    <div class="col-md-6 col-xs-7">
                                        <input type="checkbox" value="التميز" id="التميز">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-4  col-xs-5 col-form-label">نوع التميز</label>
                                    <div class="col-md-6 col-xs-7">
                                        <textarea class="form-control" rows="5" cols="20" placeholder="نوع التميز" required></textarea>
                                    </div>
                                </div>
                                <div class="form-group">                                  						   
                                    <div class="col-md-7 col-xs-12">
                                        <input type="submit" class="btn btn-default hvr-grow" value="اضافه"/>
                                        <input type="submit" class="btn btn-default hvr-grow" value="الرجوع للصفحه الرئيسيه"/>
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
.compstudent{
    margin-top: 100px;
   
}
.panel-primary>.panel-heading {
    color: #fff;
    background-color: #f9ac1a;
    border-color: #f9ac1a;
}
.panel-primary {
    border-color: #f9ac1a;
}
.panel-title{
    font-size: 25px;
    font-weight: bold
}
label{
    text-align: left;
    display:inline-block;
    }
input,
select{
    margin-bottom:10px;
    display:inline-block;  	
}
table{
	border:2px solid #f9ac1a;
	background:#fff;
}
.one{
    background: #ffa7008c;
}
.compstudent input[type=submit].btn-default {
   margin:10px;
   color: #f9f7f7;
    background-color: #f9ac1a;
    border-color: #f9ac1a;
    outline: none;
 }
 
</style>