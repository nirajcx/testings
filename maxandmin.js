function maxmin(arr){
    let max=arr[1];
    let min=arr[1];

    for(let i = 0 ; i<arr.length ; i++){
        if(max<=arr[i]){
            max=arr[i]
        }
        if(min>arr[i]){
            min=arr[i]
        }
    }
    console.log("max is ", max);
    console.log("min is ", min);
}


maxmin([45,676,456,999,123,1000])