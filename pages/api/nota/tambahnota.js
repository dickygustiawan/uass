//@ts-check
import {db} from '../../../lib/db';

const handler = async(req,res) =>{
    const {id_nota, id_user, id_barang, qty, total_harga}= req.body;
    try {
        if (!id_nota || !id_user || !id_barang || !qty || !total_harga){
            return res
            .status(400)
            .json({message : 'Ada Value yang Kurang Bro '})
           
        }



        const results = await db.query(`
           INSERT INTO nota (id_nota, id_user, id_barang, qty, total_harga) VALUES (?,?,?,?,?)`,[id_nota, id_user, id_barang, qty, total_harga]
        );
        await db.end;
        return res.json(results)
    }catch (e){
        
        res.status(500).json({message : e.message});
        //alert('nim e lek podo gak oleh')
    }
};
export default handler;