function rev(arr,m){
    if(arr.length==0 || m<0){
        return false;
    }

    let subarr=arr.slice(m+1).reverse();
    return arr.slice(0,(m+1)).concat(subarr)
}

console.log(rev([1,2,3,4,5,6,7,8,9],5));