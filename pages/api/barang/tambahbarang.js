//@ts-check
import {db} from '../../../lib/db';

const handler = async(req,res) =>{
    const {id_barang, stok, nama_barang, harga}= req.body;
    try {
        if (!id_barang || !stok || !nama_barang || !harga){
            return res
            .status(400)
            .json({message : 'Ada Value yang Kurang Bro '})
           
        }



        const results = await db.query(`
           INSERT INTO penjualan_barang (id_barang, stok, nama_barang, harga) VALUES (?,?,?,?)`,[id_barang, stok, nama_barang, harga]
        );
        await db.end;
        return res.json(results)
    }catch (e){
        
        res.status(500).json({message : e.message});
        //alert('id_barang e lek podo gak oleh')
    }
};
export default handler;