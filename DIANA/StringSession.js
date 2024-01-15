/*const fs = require("fs");
var { File } = require("megajs");
const config = require('../config');


async function StringSession(id){
  if ( fs.existsSync('/root/queendianamd/DIANA/diaAuth.json') ) return console.log('📶️ Logging to Whatsapp...');
 try{
const Url = id.replace("DIANA;;;" , "") 
const tey = Buffer.from(Url, 'base64');
const dianses = tey.toString('utf-8');

  const diaurl = 'https://mega.nz/file/' + dianses
  
const file = await File.fromURL(diaurl)
const data = await file.downloadBuffer() 
fs.writeFileSync('/root/queendianamd/DIANA/diaAuth.json', data.toString())
 console.log('Verifying Your String Session')
  
 }catch {

   throw new Error('⚠️️ Invalid Session Provided! please fill with correct informations.')
   
 } 
}

module.exports = StringSession;
*/