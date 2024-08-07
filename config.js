//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "chuiofficial03.@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Mselachui03/MSELA-CHUI-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/KStfBpcFDOi154eVtrz6n1";
global.website = process.env.GURL || "https://chat.whatsapp.com/KStfBpcFDOi154eVtrz6n1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b5e8a490b30177df71db0.jpg";
global.devs = "https://t.me/Mselachui_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b5e8a490b30177df71db0.jpg,https://telegra.ph/file/001964ff948602d0c868f.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTURVMDlRdVRrMGJCblJBa3hUeitVQmpyV1EvT3BUMlFMOHpLeWRhODJWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2h3QkJieDl3emMyNGRzZGRTMlZ0K0dBOFNrNStsbGlFZUlsMDNEY0hEMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QUZuS21ENE54QWdGM085QzF2eDhJZk1ZUXpOc3dmVkEyOFZ4K3JveWtFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzT1RLR3kvRWw5dkpERVFHY1ZSYmRMMzM4ZGNPL3NFeXZxYUJKUjZHdUQ0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVMS0lGUEhzQkd0dnhLUjZxNm4rUXJOSDVOc00vQnJ0S2t5VnlMTmJwRkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdYeFMycDVJYkMxb2lHQzVjdXRoUzRzMUFKYXErRy82eFJaenZYV3pORzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY041VTc0Rkc2Rzc1K1BKMlBjWm9lVitud1pybHNVNTEyWWszWEZEQWZVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3BML051dE5FQWZSdlFNNk83aDlQdWVlSGh4WXNtR0lBRnV3U0orT3cxND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJEL0hwdURKblZPYmsvK3EvK25jNDBkVFhtWHRHUGRzZkoyV2Q1bWhSdGpld29XYnpOVWNzRDBzRUVselliOXlJMk93MktSdjVqR09HelhWVnhZTGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6ImpSRUhrd2xsZnMwajFtdDZxRTVPZ25ZU2tkVWNQRlZaNnlsZzY0UEdPN0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkQ5bnZpdnJRUWhpTlpZRXRBUERSUUEiLCJwaG9uZUlkIjoiOWRlNTI5MmMtYzYzZC00NzAzLTg2ODUtYTY5MWI0ODU5MWIxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVFME9mSEdKN3ErdEZ6cE0xakd6Y0hLa3VlYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1OHFQSWlERjVSMHVOMWkzbnZlYjRxUWx1MWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRjFETkJFWDMiLCJtZSI6eyJpZCI6IjI1NTc1ODQ0NTAyNDoxMkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTzdubnRVREVMM2V4N1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVURUQmpIelZOVFJ1MkFZM2lCazVhbDlwRWN3M2hrd2ZvalNCNktneUVscz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibmhlckpmVDMzT2ZmQ3p4YWZRc0Jvck0wWW9YNkxSTFVWSmpXaTk1TGVXYkIrWU01SS9NMjZpcGZpaGtMdjdLK1JWMVBTK2hGK2hKSDdVeUlqMTlNRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IjBwREVRcXQwMUU0c1BMSGgwR1F5MUN6TmJJMmMzZlJ1STF0QkJDdDhFSE1yWURScFpLSWhkSTZ3bnprYmVvNXJ6NVdJMng3K1dkNnpwdVJlRlpSQ2dRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzU4NDQ1MDI0OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZBMHdZeDgxVFUwYnRnR040Z1pPV3BmYVJITU40Wk1INkkwZ2Vpb01oSmIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI5MzcxNjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTThYIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`MSELA-CHUI-V2™`",
  author: process.env.PACK_AUTHER || "MSELA-CHUI-V2",
  packname: process.env.PACK_NAME || "C H U I",
  botname: process.env.BOT_NAME || "MSELA-CHUI-V2",
  ownername: process.env.OWNER_NAME || "Msela Chui",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "C H U I").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
