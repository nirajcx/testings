function possiblesum(arr,sum){
    let ans=0;
    for(let i=0 ; i<arr.length ; i++){
        for(let j=i+1 ; j<arr.length ; j++){
            if(arr[i]+arr[j]==sum){
                ans++
            }
        }

    }
    return ans;
}

let x= possiblesum([1,5,7,8,1],6);
console.log(x);