//@ts-check
import {db} from '../../../lib/db';
export default async function upbarr(req,res){
    const {id_barang, stok, nama_barang, harga}= req.body;
    try {
        if (!id_barang || !stok || !nama_barang || !harga){
            return res
            .status(400)
            .json({message : 'Ada Value yang Kurang Bro'})
        }



        const results = await db.query(
            `UPDATE penjualan_barang set id_barang = ?, stok = ?, nama_barang = ?, harga = ? WHERE id_barang= ?`,[id_barang, stok, nama_barang, harga, id_barang]
        );
      
        return res.json(results)
    }catch (e){
        res.status(500).json({message : e.message});
    }
}