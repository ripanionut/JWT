import jwt from 'jsonwebtoken';

const secretKey = 'signkey-wqdwqdqw';

export const generateToken = (payload) => {
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  console.log(token);
  return token;
};


export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
   
    return { error: 'JWT - Malformat' };  // Return null instead of throwing an error
  }
};
