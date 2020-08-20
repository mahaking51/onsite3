function stacking(a){
    n=a.length
    count=0
    for(var i=0;i<n;i++){
        y=70;

        if(a[i]==='o' || a[i]==='O'){
            console.log("brown");
            y=y+count*20
            z=n-count;
            document.getElementById('output').innerHTML+='<div class="O" id="'+count+'" style="top:'+y+'px; z-index:'+z+'"></div>'
            count++;
        }
        if(a[i]==='&'){
            console.log('blank');
            y=y+count*45
            count=count+5;
        }
        if(a[i]==='e'|| a[i]==='E'){
            if(a[i-1]==='r'|| a[i-1]==='R'){
                console.log("white");
                y=y+count*20
                z=n-count;
                document.getElementById('output').innerHTML+='<div class="re" id="'+count+'" style="top:'+y+'px; z-index:'+z+'""></div>'
                count++;
            }
        }
    }
    console.log(count);
    // for(var j=0;j<count;j++){
    //     // document.getElementById(j.toString()).style.top=y+j*20;
    // }
}
document.getElementById('input').addEventListener('keyup',function(){
    // console.log(document.getElementById('input').value);
    document.getElementById('output').innerHTML=''
    stacking(document.getElementById('input').value)
})