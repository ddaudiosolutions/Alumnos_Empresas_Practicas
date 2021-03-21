import Sequelize from 'sequelize'
import db from '../config/db.js';

export const Alumno = db.define('Alumnos', {
    
    cursoAl: {
        type: Sequelize.STRING
    },
    nombreAl: {
        type: Sequelize.STRING
    },
    localidadAl: {
        type: Sequelize.STRING
    },
    emailAl: {
        type: Sequelize.STRING
    },
    empresaAl: {
        type: Sequelize.STRING
    },
    contactoEmp: {
        type: Sequelize.STRING
    },
    practicas: {
        type: Sequelize.STRING
    }

})