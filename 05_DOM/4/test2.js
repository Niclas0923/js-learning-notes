
window.onload = function(){
    var ss = document.getElementsByName("items");
    var qx = document.getElementById("checkedAllBox");
    function myClik(str,fun,ss){
        var oo = document.getElementById(str);
        oo.onclick = fun
    }
    
    function cheak(ss){
        a = 0;
        for (var i = 0;i<ss.length;i++){
            if(ss[i].checked){
                a+=1;
            }else{
                a-=1;
            }
        }
        // alert(a)
        if(a ==ss.length){
            qx.checked = true;
        }else{
            qx.checked = false;
        }
        // alert(qx.checked)
    }
    // 全选或非全选
    qx.onclick = function(){
        if(qx.checked){
            for(var i =0;i<ss.length;i++){
                ss[i].checked = true;
            }
        }else{
            for(var i =0;i<ss.length;i++){
                ss[i].checked = false;
            }
        }
        
    }


    // 全选
    myClik("checkedAllBtn",function(){
        for (var i=0;i<ss.length;i++){
            ss[i].checked = true;
        }
        qx.checked = true;
    },ss)

    // 全不选
    myClik("checkedNoBtn",function(){
        for (var i=0;i<ss.length;i++){
            ss[i].checked = false;
        }
        qx.checked = false;
    },ss)

    // 反选
    myClik("checkedRevBtn",function(){
        for (var i=0;i<ss.length;i++){
            if(ss[i].checked){
                ss[i].checked = false;
            }else{
                ss[i].checked = true;
            }
        }
        cheak(ss)
    },ss)

    // 提交
    myClik("sendBtn",function(){
        var ooooo = [];
        for(var i = 0;i<ss.length;i++){
            if(ss[i].checked){
                ooooo[ooooo.length] = ss[i].value;
            }
        }
        if(ooooo[0]!=undefined){
            alert(ooooo);
        }else{
            alert("您没有选中任何项")
        }
        
    },ss)

    // 各个选项

    for (var i=0;i<ss.length;i++){
        ss[i].onclick = function(){
            cheak(ss)
        }
    }

}