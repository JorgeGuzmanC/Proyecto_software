const rutas = require('express').Router()
    //const { Router } = require('express')
const conexion = require('./config/conexion')

//----------asignacion de rutas----------

//get
rutas.get('/', (req, res) => {
    let sql = 'select * from db_usuarios'
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

//get un usuario
rutas.get('/:id', (req, res) => {
    const { id } = req.params
    let sql = 'select * from db_usuarios where rut = ?'
    conexion.query(sql, [id], (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

//agregar usuario
rutas.post('/', (req, res) => {
    const { rut, nombre, apellido, email, telefono, cargo, pass } = req.body
    let sql = `insert into db_usuarios(rut, nombre, apellido, email, telefono, cargo, pass) values('${rut}','${nombre}','${apellido}','${email}','${telefono}','${cargo}',sha1('${pass}'))`
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: 'Usuario agregado' })
        }
    })


})

//eliminar
rutas.delete('/:id', (req, res) => {
    const { id } = req.params

    let sql = `delete from db_usuarios where rut = '${id}'`
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: 'Usuario eliminado' })
        }
    })

})

//modificar (arreglar)
rutas.put('/:id', (req, res) => {
    const { id } = req.params
    const { rut, nombre, apellido, email, telefono, cargo, pass } = req.body

    let sql = `update db_usuarios set 
                nombre = '${nombre}',
                apellido = '${apellido}',
                email = '${email}',
                telefono = '${telefono}',
                cargo = '${cargo}'
                where rut = '${id}'
    `

    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: 'Usuario modificado' })
        }
    })
})

//login
rutas.get('/login/:rut/:contra', (req, res) => {
    const rut = req.params.rut
    const contra = req.params.contra
    conexion.query("SELECT * FROM db_usuarios where rut=? and pass=sha1(?)", [rut, contra], (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

//datos de entrada a oficina
rutas.post('/entrada', (req, res) => {
    const { fecha, rut, horaE, cupo } = req.body
    let sql = `insert into db_trazabilidad(fecha, rut, horaE, cupo) values('${fecha}','${rut}','${horaE}','${cupo}')`
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: 'ingreso a la oficina' })
        }
    })
})

//get datos de entrada
rutas.get('/entrada/:rut', (req, res) => {
    const rut = req.params.rut

    conexion.query("SELECT * FROM db_trazabilidad where rut=? ", rut, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

//datos de salida de oficina
rutas.put('/salida/:id', (req, res) => {
    const { id } = req.params
    const { horaS, cupo } = req.body

    let sql = `update db_trazabilidad set 
                horaS = '${horaS}',
                cupo = '${cupo}'
                where id = '${id}'
    `

    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: 'Salida de la oficina' })
        }
    })
})

//ver aforo actual
rutas.get('/ver/:fecha', (req, res) => {
    const fecha = req.params.fecha;

    conexion.query("SELECT db_usuarios.rut,nombre,apellido,fecha,horaE,horaS FROM db_trazabilidad INNER JOIN db_usuarios ON db_trazabilidad.rut = db_usuarios.rut WHERE fecha=? AND cupo='1' ORDER BY fecha, horaE", fecha, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

//realizar trazabilidad
rutas.get('/trazabilidad/:fecha', (req, res) => {
    const fecha = req.params.fecha;

    conexion.query("SELECT db_usuarios.rut,nombre,apellido,fecha,horaE,horaS FROM db_trazabilidad INNER JOIN db_usuarios ON db_trazabilidad.rut = db_usuarios.rut WHERE fecha != ? ORDER BY fecha, horaE", fecha, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

//reservar hora
rutas.post('/reserva',(req, res) => {
    const { rut, fecha, horaE, horaS } = req.body
    let sql = `insert into db_reserva(rut, fecha, horaE, horaS) values('${rut}','${fecha}','${horaE}','${horaS}')`
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: 'reserva de cupo' })
        }
    })
})

rutas.post('/reservado',(req, res) => {
    conexion.query("SELECT db_reserva.rut,fecha,horaE,horaS FROM db_trazabilidad", fecha, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})

//obtener cantidad maxima aforo
rutas.get('/aforo/obtener',(req, res) => {
    let sql = 'select * from aforo'
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows)
        }
    })
})


//cambiar cantidad maxima aforo

rutas.put('/aforooo/:id/:cant', (req, res) => {
    const { id,cant } = req.params
    const { aux } = req.body 
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA"+cant)
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA"+id)
    
    let sql = `update aforo set cant = '${cant}' where id = '${id}'`

    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: 'Aforo maximo actualizado' })
        }
    })
})

//---------------------------------------


module.exports = rutas;