
const evt= require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@whiskeysockets/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const config = require('../config');
const { domainToASCII } = require('url');
const ll ="```Enter a word```"
const Ln = "Free Fire logo maker"
const QUEEN = config.WORKTYPE == 'public' ? true : ''
const DIANA = config.WORKTYPE == 'private' ? true : false


evt.getCMD({pattern: 'ffpack ?(.*)', fromMe: QUEEN , react:'📁' ,deleteCommand: false,  NoListCmd: true }, (async (message, match) => {

    if (match[1] === '' ) return await message.reply(ll);

    const linkk = match[1]

    const rows =[ 
    {title: ' FF logo pack image 01 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff01 ${linkk}`  },
    {title: ' FF logo pack image 02 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff02 ${linkk}`  },
    {title: ' FF logo pack image 03 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff03 ${linkk}`  },
    {title: ' FF logo pack image 04 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff04 ${linkk}`  },
    {title: ' FF logo pack image 05 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff05 ${linkk}`  },
    {title: ' FF logo pack image 06 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff06 ${linkk}`  },
    {title: ' FF logo pack image 07 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff07 ${linkk}`  },
    {title: ' FF logo pack image 08 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff08 ${linkk}`  },
    {title: ' FF logo pack image 09 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff09 ${linkk}`  },
    {title: ' FF logo pack image 10 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff10 ${linkk}`  },
    {title: ' FF logo pack image 11 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff11 ${linkk}`  },
    {title: ' FF logo pack image 12 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff12 ${linkk}`  },
    {title: ' FF logo pack image 13 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff13 ${linkk}`  },
    {title: ' FF logo pack image 14 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff14 ${linkk}`  },
    {title: ' FF logo pack image 15 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff15 ${linkk}`  },
    {title: ' FF logo pack image 16 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff16 ${linkk}`  },
    {title: ' FF logo pack image 17 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff17 ${linkk}`  },
    {title: ' FF logo pack image 18 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff18 ${linkk}`  },
    {title: ' FF logo pack image 19 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff19 ${linkk}`  },
    {title: ' FF logo pack image 20 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff20 ${linkk}`  },
    {title: ' FF logo pack image 21 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff21 ${linkk}`  },
    {title: ' FF logo pack image 22 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff22 ${linkk}`  },
    {title: ' FF logo pack image 23 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff23 ${linkk}`  },
    {title: ' FF logo pack image 24 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff24 ${linkk}`  },
    {title: ' FF logo pack image 25 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff25 ${linkk}`  },
    {title: ' FF logo pack image 26 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff26 ${linkk}`  },
    {title: ' FF logo pack image 27 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff27 ${linkk}`  },
    {title: ' FF logo pack image 28 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff28 ${linkk}`  },
    {title: ' FF logo pack image 29 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff29 ${linkk}`  },
    {title: ' FF logo pack image 30 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff30 ${linkk}`  },
    {title: ' FF logo pack image 31 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff31 ${linkk}`  },
    {title: ' FF logo pack image 32 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff32 ${linkk}`  },
    {title: ' FF logo pack image 33 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff33 ${linkk}`  },
    {title: ' FF logo pack image 34 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff34 ${linkk}`  },
    {title: ' FF logo pack image 35 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff35 ${linkk}`  },
    {title: ' FF logo pack image 36 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff36 ${linkk}`  },
    {title: ' FF logo pack image 37 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff37 ${linkk}`  },
    {title: ' FF logo pack image 38 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff38 ${linkk}`  },
    {title: ' FF logo pack image 39 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff39 ${linkk}`  },
    {title: ' FF logo pack image 40 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff40 ${linkk}`  },
    {title: ' FF logo pack image 41 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff41 ${linkk}`  },
    {title: ' FF logo pack image 42 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff42 ${linkk}`  },
    {title: ' FF logo pack image 43 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff43 ${linkk}`  },
    {title: ' FF logo pack image 44 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff44 ${linkk}`  },
    {title: ' FF logo pack image 45 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff45 ${linkk}`  },
    {title: ' FF logo pack image 46 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff46 ${linkk}`  },
    {title: ' FF logo pack image 47 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff47 ${linkk}`  },
    {title: ' FF logo pack image 48 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff48 ${linkk}`  },
    {title: ' FF logo pack image 49 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff49 ${linkk}`  },
    {title: ' FF logo pack image 50 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff50 ${linkk}`  } ]



  const sections = [{ title: "FF logo pack ", rows: rows}]

const button = {

buttonText: 'SELECT',
title: '',
text: `
╔═══════【👸】═══════╗
                  𝚀𝚄𝙴𝙴𝙽 𝙳𝙸𝙰𝙽𝙰
*〘FF LOGO MAKER PACK〙*

YOU ENTERED TEXT:
_${linkk}_
SELECT YOU NEED RESULT 
     TYPE HERE 


╚════════●●●════════╝    
`,
footer: config.FOOTER,
sections

}

await message.client.sendMessage(message.jid, button, {quoted: message.data})    



}));
 
  evt.getCMD({ pattern: 'ff01 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

    if (match[1] === '' ) return await message.reply(ll);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/db68993a2656b4748a16a.jpg`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

}));

  evt.getCMD({ pattern: 'ff02 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/ecf60ef31d7e75c2620fd.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff03 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '') return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4cc2fe3ca2a712d3b14cc.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
    }));
 
 evt.getCMD({ pattern: 'ff04 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0a25356767c7833bbd9ca.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff05 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/33eb446f4132e76a2fd58.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff06 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/2f7de65a46ed366a63676.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff07 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/e5f8d6f2e9f9000ebe3d9.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff08 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/6090aadefff57762e8b35.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff09 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/6ad8890337f9f2ea3b92a.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff10 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/244312383300b34f99bcc.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff11 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/b670c4eca0fafdb88a7f0.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff12 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/95a088f7b0453d4d82b7a.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff13 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/fd7500684c9ae986befc3.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff14 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/1e962653c4412f5271844.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff15 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/24483aa07e99edad88b4c.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff16 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/129a6861e1efdfd0f7bca.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff17 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/deab8459bd6d06b4f9421.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff18 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/696f93289f32687d3b4f7.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff19 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f0145f46d111ed493e62b.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff20 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f577262bce9b3733402ea.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff21 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/099f8580a45433eb6688c.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff22 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/a1fe3fe9e295c24256ede.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff23 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/2056e2cdd3a30971da0a6.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff24 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c730c8c57cfccb7756dc4.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff25 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/d3749dfe51e3f13012e8e.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff26 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f376a881b40c1e994d75d.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
  evt.getCMD({ pattern: 'ff27 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/1d307457e0778ae9b0d44.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
 
   evt.getCMD({ pattern: 'ff28 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/bf886fc083f66fb404ff1.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff29 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/d60199bc191c261497813.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff30 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/a4c9fa2db7598d876345b.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff31 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0c87d73846b138193b203.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff32 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c41f0c5ec4a3874dfd7fe.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff33 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/8c082e45671f2726c4010.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff34 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/dd660681c36a3126c590f.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff35 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/6c1412d523455abb2677a.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff36 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/a421f4d85a38545be4926.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff37 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f0568921ca66fc0b01b83.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff38 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/816aaa82629bfa202f3d4.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff39 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/91ec01a9b6375b414803c.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff40 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/5e0c5e4999b8aa21c021f.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff41 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0a9ae825b02db2cc591bb.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff42 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0df898e2ad77b8f69f91c.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff43 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/e354930c0989a3077485e.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff44 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/b41fc723da2d9835f0151.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff45 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/bc64365aa73d60de3dcfd.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff46 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/b82196ba630383df9da76.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff47 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/8013933a6603cf2d75f94.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff48 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4cd1004d8c8f3a800138f.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff49 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/7e9911e44f490fd5ba4bf.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));
   evt.getCMD({ pattern: 'ff50 ?(.*)', fromMe: QUEEN , react:'🪄' , NoListCmd: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.reply(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/816aaa82629bfa202f3d4.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })

    }));


    evt.getCMD({pattern: 'ffpack ?(.*)', fromMe: DIANA , react:'📁' ,deleteCommand: false,  desc: 'Free fire logo maker pack' }, (async (message, match) => {
        if (match[1] === '' ) return await message.reply(ll);
   
        const linkk = match[1]
        const rows =[ 
        {title: ' FF logo pack image 01 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff01 ${linkk}`  },
        {title: ' FF logo pack image 02 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff02 ${linkk}`  },
        {title: ' FF logo pack image 03 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff03 ${linkk}`  },
        {title: ' FF logo pack image 04 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff04 ${linkk}`  },
        {title: ' FF logo pack image 05 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff05 ${linkk}`  },
        {title: ' FF logo pack image 06 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff06 ${linkk}`  },
        {title: ' FF logo pack image 07 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff07 ${linkk}`  },
        {title: ' FF logo pack image 08 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff08 ${linkk}`  },
        {title: ' FF logo pack image 09 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff09 ${linkk}`  },
        {title: ' FF logo pack image 10 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff10 ${linkk}`  },
        {title: ' FF logo pack image 11 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff11 ${linkk}`  },
        {title: ' FF logo pack image 12 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff12 ${linkk}`  },
        {title: ' FF logo pack image 13 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff13 ${linkk}`  },
        {title: ' FF logo pack image 14 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff14 ${linkk}`  },
        {title: ' FF logo pack image 15 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff15 ${linkk}`  },
        {title: ' FF logo pack image 16 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff16 ${linkk}`  },
        {title: ' FF logo pack image 17 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff17 ${linkk}`  },
        {title: ' FF logo pack image 18 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff18 ${linkk}`  },
        {title: ' FF logo pack image 19 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff19 ${linkk}`  },
        {title: ' FF logo pack image 20 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff20 ${linkk}`  },
        {title: ' FF logo pack image 21 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff21 ${linkk}`  },
        {title: ' FF logo pack image 22 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff22 ${linkk}`  },
        {title: ' FF logo pack image 23 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff23 ${linkk}`  },
        {title: ' FF logo pack image 24 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff24 ${linkk}`  },
        {title: ' FF logo pack image 25 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff25 ${linkk}`  },
        {title: ' FF logo pack image 26 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff26 ${linkk}`  },
        {title: ' FF logo pack image 27 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff27 ${linkk}`  },
        {title: ' FF logo pack image 28 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff28 ${linkk}`  },
        {title: ' FF logo pack image 29 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff29 ${linkk}`  },
        {title: ' FF logo pack image 30 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff30 ${linkk}`  },
        {title: ' FF logo pack image 31 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff31 ${linkk}`  },
        {title: ' FF logo pack image 32 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff32 ${linkk}`  },
        {title: ' FF logo pack image 33 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff33 ${linkk}`  },
        {title: ' FF logo pack image 34 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff34 ${linkk}`  },
        {title: ' FF logo pack image 35 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff35 ${linkk}`  },
        {title: ' FF logo pack image 36 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff36 ${linkk}`  },
        {title: ' FF logo pack image 37 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff37 ${linkk}`  },
        {title: ' FF logo pack image 38 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff38 ${linkk}`  },
        {title: ' FF logo pack image 39 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff39 ${linkk}`  },
        {title: ' FF logo pack image 40 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff40 ${linkk}`  },
        {title: ' FF logo pack image 41 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff41 ${linkk}`  },
        {title: ' FF logo pack image 42 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff42 ${linkk}`  },
        {title: ' FF logo pack image 43 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff43 ${linkk}`  },
        {title: ' FF logo pack image 44 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff44 ${linkk}`  },
        {title: ' FF logo pack image 45 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff45 ${linkk}`  },
        {title: ' FF logo pack image 46 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff46 ${linkk}`  },
        {title: ' FF logo pack image 47 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff47 ${linkk}`  },
        {title: ' FF logo pack image 48 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff48 ${linkk}`  },
        {title: ' FF logo pack image 49 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff49 ${linkk}`  },
        {title: ' FF logo pack image 50 ', description: `create logo for \n  *${linkk}*`, rowId: `.ff50 ${linkk}`  } ]
    
    
    
      const sections = [{ title: "FF logo pack ", rows: rows}]
    
      const button = {

        buttonText: 'SELECT',
        title: '',
        text: `
        ╔═══════【👸】═══════╗
                          𝚀𝚄𝙴𝙴𝙽 𝙳𝙸𝙰𝙽𝙰
        *〘FF LOGO MAKER PACK〙*
        
        YOU ENTERED TEXT:
        _${linkk}_
        SELECT YOU NEED RESULT 
             TYPE HERE 
        
        
        ╚════════●●●════════╝    
        `,
        footer: config.FOOTER,
        sections
        
        }
    
    await message.client.sendMessage(message.jid, button, {quoted: message.data})    
    
    
    
    }));
     
      evt.getCMD({ pattern: 'ff01 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
        if (match[1] === '' ) return await message.reply(ll);
    
        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/db68993a2656b4748a16a.jpg`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
    }));
    
      evt.getCMD({ pattern: 'ff02 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/ecf60ef31d7e75c2620fd.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff03 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '') return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4cc2fe3ca2a712d3b14cc.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
        
        }));
     
     evt.getCMD({ pattern: 'ff04 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0a25356767c7833bbd9ca.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff05 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/33eb446f4132e76a2fd58.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff06 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/2f7de65a46ed366a63676.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff07 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/e5f8d6f2e9f9000ebe3d9.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff08 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/6090aadefff57762e8b35.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff09 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/6ad8890337f9f2ea3b92a.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff10 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/244312383300b34f99bcc.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff11 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/b670c4eca0fafdb88a7f0.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff12 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/95a088f7b0453d4d82b7a.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff13 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/fd7500684c9ae986befc3.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff14 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/1e962653c4412f5271844.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff15 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/24483aa07e99edad88b4c.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff16 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/129a6861e1efdfd0f7bca.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff17 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/deab8459bd6d06b4f9421.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff18 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/696f93289f32687d3b4f7.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff19 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f0145f46d111ed493e62b.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff20 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f577262bce9b3733402ea.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff21 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/099f8580a45433eb6688c.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff22 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/a1fe3fe9e295c24256ede.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff23 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/2056e2cdd3a30971da0a6.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff24 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c730c8c57cfccb7756dc4.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff25 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/d3749dfe51e3f13012e8e.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff26 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f376a881b40c1e994d75d.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
      evt.getCMD({ pattern: 'ff27 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/1d307457e0778ae9b0d44.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
     
       evt.getCMD({ pattern: 'ff28 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/bf886fc083f66fb404ff1.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff29 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/d60199bc191c261497813.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff30 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/a4c9fa2db7598d876345b.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff31 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0c87d73846b138193b203.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff32 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c41f0c5ec4a3874dfd7fe.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff33 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/8c082e45671f2726c4010.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff34 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/dd660681c36a3126c590f.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff35 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/6c1412d523455abb2677a.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff36 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/a421f4d85a38545be4926.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff37 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f0568921ca66fc0b01b83.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff38 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/816aaa82629bfa202f3d4.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff39 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/91ec01a9b6375b414803c.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff40 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/5e0c5e4999b8aa21c021f.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff41 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0a9ae825b02db2cc591bb.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff42 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0df898e2ad77b8f69f91c.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff43 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/e354930c0989a3077485e.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff44 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/b41fc723da2d9835f0151.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff45 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/bc64365aa73d60de3dcfd.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff46 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/b82196ba630383df9da76.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff47 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/8013933a6603cf2d75f94.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff48 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4cd1004d8c8f3a800138f.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff49 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/7e9911e44f490fd5ba4bf.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));
       evt.getCMD({ pattern: 'ff50 ?(.*)', fromMe: DIANA , react:'🪄' , NoListCmd: true }, (async (message, match) => {
    
            if (match[1] === '' ) return await message.reply(ll);
    
            var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/816aaa82629bfa202f3d4.jpg`, { responseType: 'arraybuffer' })
    
            await message.client.sendMessage(message.jid , {image: Buffer.from(ttinullimage.data) , caption: config.CAPTION}, { quoted: message.data })
    
        }));    