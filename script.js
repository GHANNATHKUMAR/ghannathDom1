let a="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";

const ro=async ()=>{
    const re=await fetch(a);
    console.log(re);
}

ro();