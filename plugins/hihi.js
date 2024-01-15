/*
Copyright (C) 2021 KAVIYAAH   ,  Diana whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
kaviyaah - kavishka sandaruwan (v 1.0.0 avalable)
*/

const evt = require('../events');



evt.getCMD({pattern: 'bye$' , fromMe: false, deleteCommand: false, desc: "give anser hi"}, (async (message, match) => {
 await message.client.sendMessage(message.jid, { text: 'bye sago' }) 
}));
evt.getCMD({pattern: 'bye$' , fromMe: true, deleteCommand: false, desc: "give anser hi"}, (async (message, match) => {
    await message.client.sendMessage(message.jid, { text: 'bye sago' }) 
    await message.reply('hi')
   }));
   