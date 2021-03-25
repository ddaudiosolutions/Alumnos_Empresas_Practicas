import Sequelize from 'sequelize'
import db from '../config/db.js';

export const Empresa = db.define('Empresas', {
    
        EMPRESA: {
            type: Sequelize.STRING
        },
        CONTACTO: {
            type: Sequelize.STRING
        },
        EMAIL: {
            type: Sequelize.STRING
        },
        TELEFONO: {
            type: Sequelize.STRING
        },
        PRACTICAS: {
            type: Sequelize.STRING
        },
        OBSERVACIONES: {
            type: Sequelize.STRING
        }
       

})