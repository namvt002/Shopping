const User = require('../models/register.models')


module.exports.form = (req, res) => {
    res.render('pages/register', {css: "/css/register.css", title: 'Register'});
}

module.exports.register = async (req, res) => {
    
    try{
        const { first_name, last_name, user_name, password, phone, gender, email,address } = req.body;
        // console.log({ first_name, last_name, user_name, password, phone, gender });
        if (!(user_name && password && first_name && last_name && phone && gender && email && address)) { 
            return
            res.status(400).json({
                message: "All input is required"
            });   
        }
        // let hashpassword = bcrypt.hashSync(password, 10);
        let sampleFile;
        let uploadPath;
      
        if (!req.files || Object.keys(req.files).length === 0) {
          return res.status(400).send('No files were uploaded.');
        }

        // name of the input is sampleFile
        sampleFile = req.files.sampleFile;
        let  avatar = Date.now() + '_' + sampleFile.name;
        uploadPath = `src/public/image/user_img/`+ Date.now() + '_'  + sampleFile.name;
        // Use mv() to place file on the server
        await sampleFile.mv(uploadPath, async (err)=>{
            if (err) return res.status(500).send(err);

            const newUser = await User.createUser({
                first_name,
                last_name,
                user_name,
                password,
                phone,
                email,
                address,
                avatar,
                gender,
            }); 
        });
        res.render('pages/register', { alert: 'User added successfully. Please go back to the login page!', css: "/css/register.css", title: 'Register'});
    }catch (err) {
        console.log(err);
    }
  };
