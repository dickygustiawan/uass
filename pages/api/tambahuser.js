//@ts-check
import {db} from '../../lib/db';

const handler = async(req,res) =>{
    const {id_pembeli, nama, alamat}= req.body;
    try {
        if (!id_pembeli || !nama || !alamat){
            return res
            .status(400)
            .json({message : 'Ada Value yang Kurang Bro '})
           
        }



        const results = await db.query(`
           INSERT INTO pembeli (id_pembeli, nama, alamat) VALUES (?,?,?)`,[id_pembeli, nama, alamat]
        );
        await db.end;
        return res.json(results)
    }catch (e){
        
        res.status(500).json({message : e.message});
        //alert('id_pembeli e lek podo gak oleh')
    }
};
export default handler;