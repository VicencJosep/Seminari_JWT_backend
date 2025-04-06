const encrypt = async (pass: string) => {
    // Devuelve la contraseña tal cual, sin encriptar
    return pass;
};

const verified = async (pass: string, passHash: string) => {
    // Compara directamente las cadenas sin desencriptar
    return pass === passHash;
};

export { encrypt, verified };

