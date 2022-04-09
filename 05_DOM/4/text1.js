window.onload = function(){ 

    function OneClick(str,fun){
        var bt = document.getElementById(str);
        bt.onclick = fun;
    }
    
    //查找#bj节点
    OneClick("btn01",function(){
        var bj = document.getElementById("bj");
        alert(bj.innerHTML)
    })
    
    //查找所有li节点
    OneClick("btn02",function(){
        var li = document.getElementsByTagName("li");
        var ss = [];
        for(var i=0;i<li.length;i++){
            ss[i] = li[i].innerHTML;
        }
        alert(ss)
    })

    
    //查找name=gender的所有节点
    OneClick("btn03",function(){
        var nm = document.getElementsByName("gender");
        ss = [];
        for (i = 0;i<nm.length;i++){
            // 自结束标签不能使用这个函数，获取不到内容，因为内容在标签之间
            // ss[i] = nm[i].innerHTML;
            // 可以直接读取对象属性
            // 读取其他的直接 元素.属性 即可
            // class需要用classname来读取
            ss[i] = nm[i].value;
        }
        alert(ss)
    })
    
    
    //查找#city下所有li节点
    OneClick("btn04",function(){
        var mmdd = document.getElementById("city");
        var qs = mmdd.getElementsByTagName("li");
        ss = [];
        for(var i=0;i<qs.length;i++){
            ss[i] = qs[i].innerHTML;
        }
        alert(ss);
    })
    

    //返回#city的所有子节点
    OneClick("btn05",function(){
        var mmdd = document.getElementById("city");
        var qsss = mmdd.childNodes;
        for(var i=0;i<qsss.length;i++){
            ss[i] = qsss[i].tagName;
        }
        alert(ss);
    })
    

    //返回#phone的第一个子节点
    OneClick("btn06",function(){
        var mmdds = document.getElementById("phone");
        var qssss = mmdds.firstChild;
        alert(qssss.innerHTML)
    })
    

    //返回#bj的父节点
    OneClick("btn07",function(){
        var sssss = document.getElementById("bj");
        var sssss1 = sssss.parentNode;
        alert(sssss1.tagName,sssss1.id);
    })


    //返回#android的前一个兄弟节点
    OneClick("btn08",function(){
        var andr = document.getElementById("android");
        var andrq = andr.previousSibling;
        // 获取前一个兄弟元素
        // var andrq = andr.previousElementSibling;
        alert(andrq.innerHTML)
    })
    

    //读取#username的value属性值
    OneClick("btn09",function(){
        var vvv = document.getElementById("username");
        alert(vvv.value)
    })
    

    //设置#username的value属性值
    OneClick("btn10",function(){
        var vvv = document.getElementById("username");
        vvv.value = "sssss";
        alert(vvv.value)
    })

    //返回#bj的文本值
    OneClick("btn11",function(){
        var bj = document.getElementById("bj");
        alert(bj.innerHTML)
    })
    
};