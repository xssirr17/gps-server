const redis = require("redis");

const redisClient = redis.createClient({
  socket: {
    host: "127.0.0.1",
    port: "6379",
  },
});


redisClient.on("error", (error) => console.error(`Error : ${error}`));

(async () => {
  await redisClient.connect();
})();

module.exports = redisClient;
