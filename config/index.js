require('dotenv').config()
var config = require('12factor-config')

var cfg = config({
    host : {
        env      : 'APP_HOST',
        type     : 'string',
        default  : process.env.DEV_HOST,
        required : true,
    },
    port : {
        env      : 'APP_PORT',
        type     : 'integer',
        default  : '3030',
        required : true,
    },
    protocol : {
        env      : 'PROTOCOL',
        type     : 'string',
        default  : 'https',
        required : true,
    },
    dbUri : {
        env      : 'DB_URI',
        type     : 'string',
        default  : '',
        required : true,
    },
    dbType : {
        env      : 'APP_DB_TYPE',
        type     : 'string',
        default  : 'noSQL',
        required : true,
    },
    debugMode : {
        env      : 'APP_DEBUG',
        type     : 'boolean',
        default  : true,
        required : true,
    },
    secret : {
        env      : 'SECRET',
        type     : 'string',
        default  : '99294186737032fedad37dc2e847912e1',
        required : true,
    },
    feDomain : {
        env      : 'FE_DOMAIN',
        type     : 'string',
        default  : 'localhost',
        required : true,
    },
    filesDir : {
        env      : 'IMAGES_DIR',
        type     : 'string',
        default  : './src/public/files/',
        required : true
    },
    maxFileSize : {
        env      : 'MAX_FILE_SIZE',
        type     : 'integer',
        default  : 10000000,
        required : true
    },
    maxImageUpload : {
        env      : 'MAX_IMAGE_UPLOAD',
        type     : 'integer',
        default  : 12,
        required : true
    },
    errorUnAuthorized : {
        env      : 'ERROR_UNAUTHORIZED',
        type     : 'string',
        default  : 'error_unauthorized',
        required : true
    },
    companyName : {
        env      : 'COMPANY_NAME',
        type     : 'string',
        default  : 'ResMan',
        required : true,
    },
    companyEmail : {
        env      : 'COMPANY_EMAIL',
        type     : 'string',
        default  : 'support@resman.com',
        required : true,
    },
    emailUsername : {
        env      : 'EMAIL_USERNAME',
        type     : 'string',
        default  : 'admin@spa.com',
        required : true,
    },
    env : {
      env      : 'NODE_ENV',
      type     : 'enum',
      default  : 'development',
      values   : ['development', 'production', 'test'],
    }
})

module.exports = cfg
