//@ts-check
import {useEffect, useState} from 'react';
import Router, {useRouter} from 'next/router';

export default function upbar(){
    const [_id_barang, setIdbarang]= useState('');
    const [_stok, setNamalaptop]= useState('');
    const [_nama_barang, setHarga]= useState('');
    const [_harga, setSpeklaptop]= useState('');
   

    const router = useRouter();
    const {id_barang, stok, nama_barang, harga} = router.query;
    useEffect(()=>{
    if(typeof id_barang == 'string'){
        setIdbarang (id_barang); 
            }
        if(typeof stok == 'string'){
        setNamalaptop (stok); 
            }
            if(typeof nama_barang == 'string'){
        setHarga (nama_barang); 
            }
            if(typeof harga == 'string'){
        setSpeklaptop (harga); 
            }
      },[id_barang, stok, nama_barang, harga],
)
    

   async function Upp(e){
    e.preventDefault()
    try{
        const res = await fetch('/api/barang/updatedatabarang',{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json', },
             body : JSON.stringify({
                id_barang :   _id_barang, 
                stok:    _stok, 
                nama_barang:  _nama_barang, 
                harga:      _harga
             }
             ),
        })
        const json = await res.json()
        if(!res.ok) throw Error(json.message)
         alert("Wes Beres Bos")
         Router.push('/admin/barang/databarang')
         
    }catch (e){
     throw Error(e.message)
}
    }




    return(
        <div>   
            <div className='container mt-4'>
        <form className='w-50 mx-auto' onSubmit={Upp}>
            <h3 className='font-bold' >Edit</h3>
            <div className="text-center">
                        
                        </div>
            <div className='form-floating'>
                <input className='form-control mb-2'
                        id='id_barang' type='text' placeholder='Id Barang' required
                        value = {_id_barang} onChange ={(e) => setIdbarang(e.target.value)} />

                    <label htmlFor='id_barang'>ID Barang</label>
            </div>
            <div className='form-floating'>
                <input className='form-control mb-2'
                        id='nama_laptop' type='text' placeholder='Nama Laptop' required
                        value = {_stok} onChange ={(e) => setNamalaptop(e.target.value)} />

                    <label htmlFor='nama_laptop'>Nama Laptop</label>
            </div>
            <div className='form-floating'>
                <input className='form-control mb-2'
                        id='harga' type='text' placeholder='Harga' required
                        value = {_nama_barang} onChange ={(e) => setHarga(e.target.value)} />

                    <label htmlFor='harga'>Harga</label>
            </div>
            <div className='form-floating'>
                <input className='form-control mb-2'
                        id='spek_laptop' type='text' placeholder='Spek Laptop' required
                        value = {_harga} onChange ={(e) => setSpeklaptop(e.target.value)} />

                    <label htmlFor='spek_laptop'>Spek Laptop</label>
            </div>
            
                    <div className='d-flex-row-reverse'>
                    <input type='submit'  value='Edit' className='btn btn-primary' />
                    </div>
        </form>
    
</div>
            </div>

        
    )
}