function uni(str1,str2){
    let substrarr=(str1+str2).toLowerCase().split("");

    let unival=substrarr.filter((char)=>{
        return substrarr.indexOf(char)===substrarr.lastIndexOf(char)
    })
    console.log(unival.join(""));
}

uni("hello","there")