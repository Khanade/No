const {tracksModel} = require ("../models")


/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req,res) =>{
    const data = await tracksModel.find({});
    res.send({data:data});
} 

/**
 * Obtener un registro
 * @param {} req 
 * @param {*} res 
 */
const getItem = (req,res) =>{
    const {body} = req;
    console.log(body);
    res.send({body:body});
    
} 

/**
 * Crear un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req,res) =>{
    
    
}

/**
 * Actualizar un registro
 * @param {} req 
 * @param {*} res 
 */
const updateItems = (req,res) =>{
    
}  

/**
 * Borrar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItems = (req,res) =>{
    
}    

module.exports = {getItems,getItem, createItem,updateItems,deleteItems}