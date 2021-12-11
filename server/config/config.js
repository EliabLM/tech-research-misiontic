require('dotenv').config({ path: '.env' });

export getKey(){
    return process.env.JWT_KEYAUTH;
}