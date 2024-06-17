// function rev(arr){
//     let ans=[];
//     for(let i=arr.length-1 ; i>=0 ; i--){
//         ans.push(arr[i])

//     }
//     return ans;
// }

aray=[1,2,3,4,5,6,7,8,9,0];
// newarr=rev(aray);
// console.log(newarr);

function revarr(arr,start,end){
    var temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;

        if(start+1<end-1){
            revarr(arr,start+1,end-1)
        }
    
}

revarr(aray,0,9);
console.log(aray);
