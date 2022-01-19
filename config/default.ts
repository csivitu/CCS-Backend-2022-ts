import "dotenv/config";

export default {
  port: Number(process.env.PORT),
  dbUri: process.env.DB_CONNECTION,
  enviornment: process.env.ENVIORNMENT,
  saltWorkFactor: Number(process.env.SALT_FACTOR),
  accessTokenPrivateKey: process.env.AT_PRIVATE_KEY,
  accessTokenPublicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCB264Zo58vK/YZd4gmtn+GmpQm
jLlrdQVTW3pO9T6Mlgrk4iKTLXQenlwdGhEcyxKjTpOL44I7QjlM/eeDGHNmni4x
dZc1CC/EWEcH6QtBlhDZXdjl3NSgf5AR+F+RHY2CcgcltHgtbk3LRWD1L+44z+6V
8lORtYMpemFaySG5bQIDAQAB
-----END PUBLIC KEY-----`,
  accessTokenTtl: process.env.AT_TTL,
  refreshTokenPrivateKey: process.env.RT_PRIVATE_KEY,
  refreshTokenPublicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCeriRdqc0lw2avlRD6EfqZCYGz
NIfvF8ZjK7vRyUeoNdxtgTRTgehrZxmF24A6yoibdLhyPp42kVR8Rwm7Nb6V2A4Z
RKFTmnwHce1nU4vIGwLXrFuXdoT6kKY89lSaUUVgtSAhtLD74FNo210f3EINk/zO
f7nAWWlOhIzawxMKZwIDAQAB
-----END PUBLIC KEY-----`,
  refreshTokenTtl: process.env.RT_TTL,
};