//@ts-check
import {db} from '../../lib/db';
export default async function update(req,res){
    const {id_pembeli, nama, alamat}= req.body;
    try {
        if (!id_pembeli || !nama || !alamat){
            return res
            .status(400)
            .json({message : 'Ada Value yang Kurang Bro'})
        }



        const results = await db.query(
            `UPDATE pembeli set id_pembeli = ?, nama = ?, alamat = ? WHERE id_pembeli= ?`,[id_pembeli, nama, alamat, id_pembeli]
        );
      
        return res.json(results)
    }catch (e){
        res.status(500).json({message : e.message});
    }
}