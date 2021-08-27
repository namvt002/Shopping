const multer = require('multer');
const path = require('path');


class UploadFile{
    index(){
        const storage = multer.diskStorage({
            distination: `src/public/images/user_img`,
            filename: function(req, file, callback) {
                callback(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
            }
        });
        const upload = multer({
            storage: storage,
        });
        return upload;
    }
}

module.exports = new UploadFile;