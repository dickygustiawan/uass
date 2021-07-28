import useSWR from 'swr'
async function fetcher(url){
    const res = await fetch(url);
    return res.json();
}
export const pem = () =>{
    const url = 'http://localhost:3000/api/datauser';
    const {data, error}= useSWR(url, fetcher);
    return{data, error}
}

export const bar = () =>{
    const url = 'http://localhost:3000/api/barang/databarang';
    const {data, error}= useSWR(url, fetcher);
    return{data, error}
}

export const not = () =>{
    const url = 'http://localhost:3000/api/nota/datanota';
    const {data, error}= useSWR(url, fetcher);
    return{data, error}
}