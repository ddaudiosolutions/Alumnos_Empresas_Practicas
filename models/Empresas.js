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
        },
        id: {
            type: Sequelize.NUMBER,
            primaryKey: true

        },
        CFGSS: { type: Sequelize.BOOLEAN},       
        CFGSR : { type: Sequelize.BOOLEAN},
        CFGMVDJ : { type: Sequelize.BOOLEAN},
        CFGSI : { type: Sequelize.BOOLEAN},
        CFGSA : { type: Sequelize.BOOLEAN},
        CFGSP : { type: Sequelize.BOOLEAN},
       

})