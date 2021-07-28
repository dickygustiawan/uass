//@ts-check
import {useState} from 'react'
import Router, {useRouter} from 'next/router';

export default function tU(){
    const [id_barang, setIdbarang]= useState('');
    const [stok, setstok]= useState('');
    const [nama_barang, setnama_barang]= useState('');
    const [harga, setharga]= useState('');
    
   async function submitHandler(e){
       e.preventDefault()
       try{
           const res = await fetch('http://localhost:3000/api/barang/tambahbarang',{
               method: 'POST',
               headers: {'Content-Type': 'application/json', },
                body : JSON.stringify({
                    id_barang, 
                    stok, 
                    nama_barang, 
                    harga
                    
                }
                ),
           })
           const json = await res.json()
           if(!res.ok) throw Error(json.message)
            alert("Wes melbu Bos")
            Router.push('/admin/barang/databarang')
       }catch (e){
        throw Error(e.message)
   }
}
    return(
        <div>
                 <div className='container mt-4'>
                    <form className='w-50 mx-auto' onSubmit={submitHandler}>
                        <h3>Tambah Barang</h3>
                        <div className="text-center">
                           
                        </div>
                        <div className='form-floating'>
                            <input className='form-control mb-2'
                                    id='id_barang' type='text' required placeholder='Id Barang'
                                    value = {id_barang} onChange ={(e) => setIdbarang(e.target.value)} />

                                <label htmlFor='id_barang'>ID Barang</label>
                        </div>
                        <div className='form-floating'>
                            <input className='form-control mb-2'
                                    id='nama_laptop' type='text' required placeholder='Nama Laptop'
                                    value = {stok} onChange ={(e) => setstok(e.target.value)} />

                                <label htmlFor='nama_laptop'>Nama Laptop</label>
                        </div>
                        <div className='form-floating'>
                            <input className='form-control mb-2'
                                    id='harga' type='text' required placeholder='Harga'
                                    value = {nama_barang} onChange ={(e) => setnama_barang(e.target.value)} />

                                <label htmlFor='harga'>Harga</label>
                        </div>
                        <div className='form-floating'>
                            <input className='form-control mb-2'
                                    id='spek_laptop' type='text' required placeholder='Spek Laptop'
                                    value = {harga} onChange ={(e) => setharga(e.target.value)} />

                                <label htmlFor='spek_laptop'>Spek Laptop</label>
                        </div>
                        
                                <div className='d-flex-row-reverse'>
                                <input type='submit'  value='simpan' className='btn btn-primary' />
                                </div>
                    </form>
                
            </div>
        </div>
    )
}