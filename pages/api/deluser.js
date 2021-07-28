//@ts-check
import {db} from '../../lib/db';
export default async function dellus(req,res){
    const { id_pembeli }= req.query;
    try {
        if (!id_pembeli){
            return res
            .status(400)
            .json({message : 'primary key ne wes di busek'})
        }



        const results = await db.query(
            `DELETE FROM pembeli WHERE id_pembeli= ?`,id_pembeli
        );
      
        res.json(results)
    }catch (e){
        res.status(500).json({message : e.message});
    }
}