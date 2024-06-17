function a(str){
    let anslow=str.toLowerCase().split("");
    let ansobj={};
    let res="";
    for(let i=0 ; i<anslow.length; i++){
        if(ansobj[anslow[i]]){
            ansobj[anslow[i]]++
        }
        else{
            ansobj[anslow[i]]=1
        }
    }

    for (let key in ansobj){
        if(ansobj[key]===1){
            res+=key
        }
        
    }
    console.log(ansobj);
    console.log(res);

}



let ans="HelloThere";
a(ans)