const fileUpload = require('express-fileupload');
const mysql = require('mysql');
require('dotenv').config();
const product = require('../models/admin.models');


exports.view = async (req, res) =>{
    try{
      const rows = await product.view();
      res.render('pages/admin', {css: "/css/admin.css", title: 'admin', rows: rows});

    }catch(err) {
      console.log(err);
    }
}

exports.find = async (req, res) => {

    let searchTerm = req.body.search;
    try{
        const rows = await product.find([`%${searchTerm}%`]);
        res.render('pages/admin', {css: "/css/admin.css", title: 'admin', rows: rows});
    }catch(err) {
      console.log(err);
    }
}


// Add new user
exports.form = (req, res) => {
    res.render('partials/admin/add-product', {title: 'admin'});
}

exports.create = async (req, res) => {

  try{

    const { product_name, price, description} = req.body;

    let sampleFile;
    let uploadPath;
  
    // if (!req.files || Object.keys(req.files).length === 0) {
    //   return res.status(400).send('No files were uploaded.');
    // }

    sampleFile = req.files.sampleFile;
    // console.log(sampleFile);

    let  product_image= Date.now() + '_' + sampleFile.name;
    uploadPath = `src/public/image/product_img/`+ Date.now() + '_' + sampleFile.name;
    
    await sampleFile.mv(uploadPath, async(err)=>{
      if(err) return res.status(500).send(err);
      const newProduct = await product.createProduct({
          product_name,
          price,
          product_image,
          description,
      });
    });
    res.render('partials/admin/add-product', {title: 'Add Product', alert: 'Product added successfully.' });

  }catch(err) { 
    console.log(err);
  }
}

// Edit user
// return id
exports.edit = async (req, res) => {

    try{
        let idEdit = req.params.id;
        const rows = await product.edit(idEdit);
        res.render('partials/admin/edit-product', { title: 'Edit Product', rows });
    }
    catch (err) {
      console.log(err);
    }
}

exports.update = async (req, res) => {
    try{
      const { product_name, price, description} = req.body;
      let sampleFile;
      let uploadPath;
    
      // if (!req.files || Object.keys(req.files).length === 0) {
      //   return res.status(400).send('No files were uploaded.');
      // }

      sampleFile = req.files.sampleFile;
      // console.log(sampleFile);

      let  product_image = Date.now() + '_' + sampleFile.name;
      uploadPath = `src/public/image/product_img/`+ Date.now() + '_' + sampleFile.name;
      let id = req.params.id;
      await sampleFile.mv(uploadPath, async(err)=>{
        if(err) return res.status(500).send(err);
        const update = await product.update(
            product_name,
            price,
            product_image,
            description,
            id,
        );
      });
      const rows = await product.edit(id);
      res.render('partials/admin/edit-product', { title: 'Update Product', rows: rows, alert: `${product_name} has been updated.` });
     
    }catch(err) {
      console.log(err);
    }
  }

  //delete

  exports.delete = async (req, res) => {
    try {
      let id = req.params.id;
      const rows = await product.delete(id);
      res.redirect('/admin');
    }catch(err) {
      console.log(err);
    }
  }

  // exports.viewall = async (req, res) => {
  //   try{
  //       let id = req.params.id;
  //       const rows = await product.viewall(id);
  //       res.render('partials/admin/view-product', { rows: rows });
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

