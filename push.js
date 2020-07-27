var webPush = require("web-push");

const vapidKeys = {
  publicKey:
    "BDNrUPiES-bGkl39Ew1SpAAoy-GwYj_jRnDruxxojh3WSVLg-Xp39sSRPGSi-v0fExyCp2hQK675enuuxE-tGCU",
  privateKey: "orBzkxiMlp3qMPY2YzYDdpWfu7HigMKCWbKCjO4VpnA",
};

webPush.setVapidDetails(
  "mailto:satya.racerare87@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

var pushSubcription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dYm1TpI4O0I:APA91bFYYtM1dbEo8SBLhgP12uS4tbsqXlYw6ibK4-5prFn7qiwRBj9_QN882evFc8QA4r7qxShGs0il1Ol_VYk3Oiq3Aup3jhtsONA8kkBPlv4VHyKnsUoqosU--zYF25hXrTM-LCTh",
  keys: {
    p256dh:
      "BFnkjTPC0rfkIpb66jfBq+3VpURv/W0cDN1t9GEa6xO8VM1G1v/mnrd9md/el+0REeGRS29/6ZzQRAQ3HAFUyUA=",
    auth: "xex5ZP0/Hk1jY75MyG4Mhg==",
  },
};
var payload = "Hidup Bal Balan";

var options = {
  gcmAPIKey: "456427688517",
  TTL: 60,
};

webPush.sendNotification(pushSubcription, payload, options);
