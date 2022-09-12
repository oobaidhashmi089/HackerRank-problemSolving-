
arr = [9,2,3,6,8]
function minMax(arr) 
{
 let sortedarr= arr.sort()
  let sum=0;
  let max=sortedarr[0];
  let min=sortedarr[0];

  for(let i=0 ;  i<sortedarr.length;i++)
  {
    sum += sortedarr[i]

    
  if(min >= sortedarr[i])
  {
    min= sortedarr[i];
  }
     if(max < sortedarr[i])
  {
    max= sortedarr[i];
  }

  
  }
  console.log(sortedarr)
  
  console.log(sum)
  
  console.log("min ="+min)
  console.log("max ="+max)

  let res = [sum-max ,sum-min ]

  console.log (res)


}

let res = minMax(arr) ;

console.log(res)


