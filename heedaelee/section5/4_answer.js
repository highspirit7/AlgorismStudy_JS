function solution(m, arr){
  let answer=0, sum=0, lt=0;
  for(let rt=0; rt<arr.length; rt++){
    console.log(`1 sum=${sum} rt=${rt} lt=${lt}`);
      sum+=arr[rt];
      while(sum>m){
        console.log(`  3 sum=${sum} rt=${rt} lt=${lt}`);
          sum-=arr[lt++];
      }
      console.log(` 2 sum=${sum} answer+=(rt-lt+1) => answer:${answer+rt-lt+1} = ${answer}+(${rt}-${lt}+1)`);
      answer+=(rt-lt+1);
  }               
  return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));