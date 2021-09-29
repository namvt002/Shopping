const profileModel = require('../models/profile.models');

module.exports.form = (req, res) => {
    res.render('pages/profile', {css: "/css/profile.css", title: 'Profile'});
}

module.exports.view = async (req, res) => {
    try{
        // console.log(req.session.username);
        const profile = await profileModel.view(req.session.username);
        // console.log(typeof(profile.user_name));
        res.render('pages/profile', {css: "/css/profile.css", title: 'Profile', result: profile});

    }
    catch(err){
        console.log(err);
    }
   
}


exports.update = async (req, res) => {
    try{
      const { first_name, last_name, phone, user_name, password, email, avatar} = req.body;
      console.log(first_name, last_name, phone, user_name, password, email, avatar);
      let sampleFile;
      let uploadPath;
    
      // if (!req.files || Object.keys(req.files).length === 0) {
      //   return res.status(400).send('No files were uploaded.');
      // }

    //   sampleFile = req.files.sampleFile;
    //   // console.log(sampleFile);
    //   if(sampleFile != ""){
    //     let  product_image = Date.now() + '_' + sampleFile.name;
    //     uploadPath = `src/public/image/user_img/`+ Date.now() + '_' + sampleFile.name;
    //     let id = req.session.username;
    //     await sampleFile.mv(uploadPath, async(err)=>{
    //       if(err) return res.status(500).send(err);
    //       const update = await profileModel.update(
    //           first_name, 
    //           last_name, 
    //           phone, 
    //           user_name,
    //           password,
    //           email,
    //           avatar,
    //           id
    //       );
    //     });
    //     const profile = await profileModel.view(req.session.username);
    //     res.render('partials/profile', { title: 'Profile', result: profile, alert: `${user_name} has been updated.` });
    //   }else{

    //     let id = req.session.username;
    //     const update = await profileModel.update(
    //         first_name, 
    //         last_name, 
    //         phone, 
    //         user_name,
    //         password,
    //         email,
    //         id
    //     );
    //     const profile = await profileModel.view(req.session.username);
    //     res.render('partials/profile', { title: 'Profile', result: profile, alert: `${user_name} has been updated.` });
    //   }  
     
     
    }catch(err) {
      console.log(err);
    }
  }
