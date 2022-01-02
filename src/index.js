require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    from: "whatsapp:+14155238886",
    body: "Enviando um arquivo",
    to: "whatsapp:+55",
    mediaUrl:
      "https://media.istockphoto.com/videos/lower-3rd-news-corporate-dual-blue-third-l3rd-video-id468696944",
  })
  .then((message) => console.log(message.sid))
  .catch((error) => console.error(error));
