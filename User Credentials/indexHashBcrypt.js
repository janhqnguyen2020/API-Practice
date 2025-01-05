import bcrypt from 'bcrypt'//encryption library to help with hash and salt methods

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(12);//generate salt with 12 rounds; more salt rounds = more secure
    const passwordHash = await bcrypt.hash(password, salt);
    console.log(salt)

    return passwordHash;
}

async function comparePasswords(userPassword, passwordHash) {
    const result = await bcrypt.compare(userPassword, passwordHash);

    return result;
}

// exact pattern:
// $[algorithm]$[cost]$[salt][hash]
// example: $2b$12$qDHh5JjAxeVxhJCec.GKm.q/t0IZk82bo7zhbl/RBGEaM6xkP6QQy
// $[2b]$[12]$[qDHh5JjAxeVxhJCec.GKm.][q/t0IZk82bo7zhbl/RBGEaM6xkP6QQy]

/*
async function main() {
    const userPassword = 'Password Hash me please';
    const passwordHash = await hashPassword(userPassword);

    console.log(userPassword);
    console.log(passwordHash);
} */

async function main() {
    const userPassword = 'Password Hash me please';
    const passwordHash = await hashPassword(userPassword);

    console.log(userPassword);
    console.log(passwordHash);

    const verified = await comparePasswords(userPassword, passwordHash);
    console.log('The password verification is ' + verified);
}

main();