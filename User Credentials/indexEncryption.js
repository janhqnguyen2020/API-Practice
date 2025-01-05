//encrypting/decrypting

import crypto from 'crypto';//import crypto module, cryptographic functionalities

//define the algorithm and init vector

const algorithm = 'aes-256-cbc';//common encryption algorithm
const initVector = crypto.randomBytes(16);//randomly generate a vector
const securityKey = crypto.randomBytes(32);//randomly generate a security key

function encrypt(mmessageToEncrypt) {
    const cipher = crypto.createCipheriv(algorithm, securityKey, initVector);//create cipher
    let encryptedMessage = cipher.update(mmessageToEncrypt, 'utf-8', 'hex');
    encryptedMessage += cipher.final('hex');

    return encryptedMessage;
}

function decrypt(mmessageToDecrypt) {
    const decipher = crypto.createDecipheriv(algorithm, securityKey, initVector);
    let decryptedMessage = decipher.update(mmessageToDecrypt, 'hex', 'utf-8');
    decryptedMessage += decipher.final('utf-8');

    return decryptedMessage;
}

//encrypting the plain text
console.log('Encrypt Me!');

const encryptedMessage = encrypt('Encrypt Me!');
console.log(encryptedMessage);

const decryptedMessage = decrypt(encryptedMessage);
console.log(decryptedMessage);
