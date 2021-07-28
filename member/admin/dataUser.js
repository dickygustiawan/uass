//@ts-check
import {pem} from '../../lib/swr-fetcer'
import Link from 'next/link'
import {mutate} from 'swr';
import Router from 'next/router';
export default function datus(){
    const {data, error}= pem();
    if(error){
        return <div>
            Error loading
        </div>
    }if(!data){
        return <div>
            loading
        </div>
    }
   
    //const {dtUsr} = data;
    //console.log(data);

     async function DeletUser(id_pembeli){
  
        var res = await fetch(`/api/deluser?id_pembeli=${id_pembeli}`, { method : 'DELETE' })
        var json = await res.json()
       
        if(!res.ok) throw Error(json.message)
                mutate('/api/deluser')
             alert("Wes Beres Bos")
             Router.push('/admin/datauser')
    }
    return(
             
        <div className='container w-75 mx-auto py-4'> 
        <h3 className='font-bold'>DATA USER</h3>
        <table className ="table">
            <thead>
                <tr>
                    <th>id_pembeli </th>
                    <th>Nama</th>
                    <th>Alamat</th>
                    
                  
                </tr>
            </thead>
        <tbody>
            {data.map((usr, idx)=>(
                <tr key ={idx}>
                    <td>
                        {usr.id_pembeli}
                    </td>
                    <td>
                        {usr.nama}
                    </td>
                    <td>
                        {usr.alamat}
                    </td>
                 
                    <td> 
                        <div className='d-flex justify-content-between'>
                        <Link href={`/admin/updateusr?id_pembeli=${usr.id_pembeli}&nama=${usr.nama}&alamat=${usr.alamat}`}>
                            <a>Edit</a>
                        </Link>

                        </div>
                            </td>
                            <td>
                            <button type='button' value={usr.id_pembeli} onClick={(e)=>DeletUser(e.target.value)}>Delete</button>
                            </td>
                </tr>
            ))
            }
            </tbody>
            </table>
    </div>
    )
}