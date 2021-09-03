const multer = require('multer');
const path = require('path');


class UploadFileProduct{
    index(){
        const storage = multer.diskStorage({
            destination: `src/public/image/product_img`,
            filename: function (req, file, callback) {
                callback(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
            }
        });
        const upload  = multer({
            storage: storage,
        });
        return upload;
    }
}

module.exports = new UploadFileProduct;