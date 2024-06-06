let matrix=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
let flag=1

for(let i=0;i<matrix[0]?.length;i++){
    flag=!flag
    for(let j=0;j<matrix?.length;j++){
        console.log(flag ? matrix[(matrix?.length-1)-j][i] : matrix[j][i])
    }
}