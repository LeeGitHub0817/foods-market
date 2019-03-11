
function ajax(obj){
    //指定提交方式的默认值
    obj.type = obj.type || "get";
    //设置是否异步，默认为true(异步)
    obj.async = obj.async || true;
    obj.timeout = obj.timeout || 15000;
    //设置数据的默认值
    obj.data = obj.data || null;
    var params=_params(obj.data);
    if(obj.type.toLowerCase()=="get" && params.length>0){//将转换后的data.与url进行拼接。
        obj.url+=(obj.url.indexOf("?")>-1?"":"?");
        obj.url+=params;
    }
    var xhr=new XMLHttpRequest();
    xhr.open(obj.type,obj.url,obj.async);
    if(obj.type.toLowerCase()=="post"){
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(params)
    }else
        xhr.send(null);

    //在响应成功前设置一个定时器（响应超时提示）
    var timer = setTimeout(function(){
        //让后续的函数停止执行
        xhr.onreadystatechange = null;

        //提示网响应超时
        obj.error('timeout');

        //json.timeout（超时时间，需要与后端相对应）
    },obj.timeout);
    if(obj.async){//异步调用
        //监听响应状态。
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4)//响应状态为4，数据加载完毕。
                callback();
        }
    }else//同步
        callback();
    function callback(){
        if(xhr.status==200){
            clearTimeout(timer);
            obj.success(JSON.parse(xhr.responseText));
        }else{
            obj.error(JSON.parse(xhr.status));
        }
    }
    //将对象序列化，将对象拼接成url字符串
    function _params(data){
        if(obj==null)
            return obj;
        var arr=[];
        for(var i in data){
            arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
        }
        return arr.join("&");
    }
}

export default ajax
