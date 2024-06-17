function revindex(arr,m){
    if (m<0 || arr.length<m){
        return "index m is error"
    }
    let subarray = arr.slice(m+1).reverse();
    return arr.slice(0,(m+1)).concat(subarray);
}

let arr=[1,2,3,4,5,6,7,8,9,0];
let ans = revindex(arr,5);
console.log(ans);