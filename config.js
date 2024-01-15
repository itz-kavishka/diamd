
const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
process.env['DATABASE_URL'] = "./diana.db"

const toBool = (x) => x === "true";
DATABASE_URL = process.env.DATABASE_URL || './diana.db' 

DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v9.0.0',
  
    SESSION: process.env.DIANA_SESSION === undefined ? '' : process.env.DIANA_SESSION,
    
    VIDEOD: process.env.VIDEO_DOWNLOADING === undefined ? '*🎭Downloading Your Video*' : process.env.VIDEO_DOWNLOADING,
    VIDEOU: process.env.VIDEO_UPLOADING === undefined ? '*🚀Uploading Your Video*' : process.env.VIDEO_UPLOADING,
    SONGD: process.env.SONG_DOWNLOADING === undefined ? '*◦•●◉✿Downloading Your Song✿◉●•◦*' : process.env.SONG_DOWNLOADING,
    SONGU: process.env.SONG_UPLOADING === undefined ? '*◦•●◉✿Uploading Your Song✿◉●•◦*' : process.env.SONG_UPLOADING,
    FOOTER: process.env.FOOTER === undefined ? 'Queen Diana' : process.env.FOOTER,
    CAPTION: process.env.CAPTION === undefined ? '*👸Genarated by Queen Diana👸*' : process.env.CAPTION,
    
    ANTIBAD: process.env.ANTIBAD_WORD === undefined ? 'false' : process.env.ANTIBAD_WORD,
    AUTO_REPLY: process.env.AUTO_REPLY === undefined ? 'false' : process.env.AUTO_REPLY,
    STICKERP: process.env.STICKER_REPLY === undefined ? false : convertToBool(process.env.STICKER_REPLY),
    ANTILINK: process.env.ANTI_LINK === undefined ? 'false' : process.env.ANTI_LINK,
    
    TIME_ZONE: process.env.TIME_ZONE === undefined ? 'Asia/Colombo' : process.env.TIME_ZONE,
    AUTOBIO: process.env.AUTO_BIO === undefined ? 'false' : process.env.AUTO_BIO,
    OWNERNAME: process.env.OWNER_NAME === undefined ? 'default' : process.env.OWNER_NAME,
    
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVEIMG: process.env.ALIVE_LOGO === undefined ? 'default' : process.env.ALIVE_LOGO,
    MENULOGO: process.env.MENU_LOGO === undefined ? 'default' : process.env.MENU_LOGO,
    
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    
    WELCOME_GIF: process.env.WELCOME_GIF === undefined ? 'https://i.imgur.com/nErXUGj.mp4' : process.env.WELCOME_GIF,
    BYE_GIF: process.env.GOOD_BYE_GIF === undefined ? 'https://i.imgur.com/Z1jCYGN.mp4' : process.env.GOOD_BYE_GIF,
    
    BOTNAME: process.env.BOT_NAME === undefined ? 'Queen Diana' : process.env.BOT_NAME,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    
    INBOX_NOT: process.env.INBOX_NOT_WORKING === undefined ? 'true' : process.env.INBOX_NOT_WORKING,
    
    STPACK: process.env.STICKER_PACK === undefined ? 'QUEEN DIANA' : process.env.STICKER_PACK,
    STAUTHOUR: process.env.STICKER_AUTHOR === undefined ? 'CREATED BY QUEEN DIANA👸' : process.env.STICKER_AUTHOR,


    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    
    PANEL_COMMAND: process.env.PANEL_COMMAND === undefined ? 'menu' : process.env.PANEL_COMMAND,
    
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? true : convertToBool(process.env.SEND_READ),
    MAHN: '94769370897,0' , 
    
    
    BRANCH: 'main',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE:
    DATABASE_URL === "./diana.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),

    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? 'vbMabKzWGxxYyvS9wYR1vFtn' : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY

};
/*
const DATABASE_URL = process.env.DATABASE_URL || "./assets/database.db";

module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  SESSION_ID: process.env.SESSION_ID || "idvu3oj6_XASENA_w46_XASENA_nb8c",
  LANG: process.env.LANG || "EN",
  HANDLERS:
    process.env.HANDLER === "false" || process.env.HANDLER === "null"
      ? "^"
      : "^[#]",
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: "master",
  WARN_COUNT: 3,
  PACKNAME: process.env.PACKNAME || "X-asena",
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi @user Welcome to @gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",
  AUTHOR: process.env.AUTHOR || "X-electra",
  SUDO: process.env.SUDO || "918113921898,916238316024",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  OWNER_NAME: process.env.OWNER_NAME || "Neeraj-X0",
  BOT_NAME: process.env.BOT_NAME || "X-asena",
  WORK_TYPE: process.env.WORK_TYPE || "public",
  DATABASE_URL: DATABASE_URL,
  DATABASE: DATABASE_URL === "./assets/database.db"? new Sequelize({dialect: "sqlite",storage: DATABASE_URL,logging: false,}): new Sequelize(DATABASE_URL, {dialect: "postgres",ssl: true,protocol: "postgres",dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false,}),


};
*/