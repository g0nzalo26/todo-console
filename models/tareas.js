import { v4 as uuidv4 } from 'uuid'
import { Tarea } from './tarea.js'

export class Tareas {

    _listado = {}

    get listadoArr() {

        const listado = []
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })

        return listado

    }

    constructor() {
        this._listado = {}
    }

    crearTarea(desc = '') {

        const tarea = new Tarea(desc)

        this._listado[tarea.id] = tarea

    }

    cargarTareasFromArray(tareas = []) {

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea
        })

    }

    listadoCompleto() {

        console.log()

        this.listadoArr.forEach((tarea, index) => {

            const num = `${index + 1}`.green
            const { desc, completadoEn } = tarea
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red

            console.log(`${num}. ${desc} :: ${estado} `)

        })

    }

    listarPendientesCompletadas(completadas = true) {

        console.log()
        let contador = 0

        this.listadoArr.forEach((tarea) => {

            const { desc, completadoEn } = tarea

            //!! : Si completadoEn es null, undefined, '', 0, o false, entonces !!completadoEn será false.
            const estadoTareaEsCompletada = !!completadoEn

            if (completadas && estadoTareaEsCompletada) {
                contador++
                console.log(` ${contador}. ${desc} :: ${completadoEn.green} `)
            }

            if (!completadas && !estadoTareaEsCompletada) {
                contador++
                console.log(` ${contador}. ${desc} :: ${'Pendiente'.red} `)
            }

        })

    }

    borrarTarea(id = '') {

        if (this._listado[id]) {
            delete this._listado[id]
        }


    }

    cambioEstados( ids = [] ) {

        ids.forEach( id => {

            const tarea = this._listado[id]

            if( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString()

            }

        })

        this.listadoArr.forEach( tarea => {

            if( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].completadoEn = null
            }

        })

    }




}


