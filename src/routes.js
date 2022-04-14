const express=require('express');
const routes=express.Router()


//rutas: Muestra todas las experiencias existentes
routes.get('/', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return  res.send(err)
        conn.query('SELECT *FROM expe', (err,rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })

})


//rutas: Crea nuevas experiencias 
routes.post('/', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return  res.send(err)
        conn.query('INSERT INTO expe set?', [req.body], (err)=>{
            if(err) return res.send(err)
            res.send('La experiencia ha sido creada con exito')
        })
    })
})


//rutas: eliminar
routes.delete('/:id', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return  res.send(err)
        conn.query('DELETE FROM expe WHERE id=?', [req.params.id], (err)=>{
            if(err) return res.send(err)
            res.send('La experiencia ha sido eliminada con exito')
        })
    })
})


//rutas: Actualizar
routes.put('/:id', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return  res.send(err)
        conn.query('UPDATE expe set ? WHERE id=?',[req.body, req.params.id], (err)=>{
            if(err) return res.send(err)
            res.send('La experiencia  se ha actualizado con exito')
        })
    })
})



//Filtrar las experiencias por el ID y mostrar una unica experiencia:
routes.get('/:id', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return  res.send(err)
        conn.query('SELECT *FROM expe WHERE id=?',[req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})




//Filtrar las experiencias asociadas a una sala:
routes.get('/salas/:sala', (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return  res.send(err)
        conn.query('SELECT *FROM expe WHERE sala=?',[req.params.sala], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})




module.exports=routes