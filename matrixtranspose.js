function transpose(arr){
    let trans=[];
    for(let i=0 ; i<arr[0].length; i++){
        trans[i]=[];
        for(let j=0 ; j<arr.length; j++){
            trans[i][j]=arr[j][i]
        }
    }
    console.log(trans);
}

let x=[[1,2,3],[4,5,6],[7,8,9]];
transpose(x);