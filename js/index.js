window.onload=function(){
    var index=0,      //图片索引
        timer=null;    //定时器
        title=document.getElementById("title"),
        titleItems=title.getElementsByClassName("title-item"),
        imgs=content.getElementsByClassName("img");
    var banner=document.getElementsByClassName("banner")[0];

    //封装通用事件绑定
    function addHandler(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,true);
        }
        else if(element.attachEvent){
            element.attachEvent("on"+type,handler);
        }
        else{
            element["on"+type]=handler;
        }
    }

    //图片切换和选项卡切换
    function changeImg(){
        for(var j=0;j<imgs.length;j++){
            imgs[j].style.display="none";
            titleItems[j].style.background="none";
            titleItems[j].style.fontWeight="normal"
        }
        imgs[index].style.display="block";
        titleItems[index].style.background="#ffcc00";
        titleItems[index].style.fontWeight="bold"
    }

    //设置自动播放
    function startAutoplay(){
        timer=setInterval(function(){
            index++;
            if(index>=imgs.length){index=0;}
            changeImg();
        },1000)
    }

    //设置停止播放
    function stopAutoplay(){
        if(timer){
            clearInterval(timer);
        }
    }

    //为每一个选项卡添加事件
    for(var i=0;i<titleItems.length;i++){
        titleItems[i].setAttribute("img-id",i);
        addHandler(titleItems[i],"click",function(){
            index=this.getAttribute("img-id");
            changeImg();
        })
    }

    //开启自动播放
    startAutoplay();

    //鼠标停留停止，离开继续
    addHandler(banner,"mouseover",stopAutoplay);
    addHandler(banner,"mouseout",startAutoplay);

}