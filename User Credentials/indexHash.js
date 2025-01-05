import crypto from 'crypto';//import crypto module, cryptographic functionalities
/*
function hashPassword(password) {
    const hash = crypto.createHmac('sha256','')
        .update(password)
        .digest('hex');

    return hash;
}

console.log('Encrypt Me!');
const hash = hashPassword("Encrypt Me!");
console.log(hash);

 There is a flaw with hashing in the sense that two identical passwords may
incur the same hash value */


//salting is essentially adding random values to data before hashing
//making each hash unique even if data is same
function hashPassword(password, salt) {
    const hash = crypto.createHmac('sha256',salt)
        .update(password)
        .digest('hex');

    return hash;
}

console.log('Encrypt Me!');

const hash1 = hashPassword("Encrypt Me!", 'salt1');
console.log(hash1);

const hash2 = hashPassword("Encrypt Me!", 'salt2');
console.log(hash2);