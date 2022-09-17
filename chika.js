/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const riy = require('xfarr-api')

//function rpg
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

// Database Rpg
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

// Language
const  { ind } = require(`./language`)
lang = ind // Language
typemenu = 'image'
// Date
moment.tz.setDefault("Asia/Jakarta").locale("id");


module.exports = chika = async (chika, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await chika.decodeJid(chika.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid

        // Time & Date
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
        const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        
        // Group
        const groupMetadata = m.isGroup ? await chika.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
	
	    // Reply
        const replly = (teks) => {
            chika.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botname}`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `${myweb}`}}}, { quoted: m })
        }
            const reply = (teks) => {
            chika.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botname}`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `${myweb}`}}}, { quoted: m })
        }
        // Reply 2
        const replay = (teks) => {
            chika.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botname}`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `${myweb}`}}}, { quoted: m })
        }
        
        
         
              //—————「 Auto Sound + Sticker 」—————//
const araara = (hehe) => {
const bisaa = ['janganToxic','image/Kasar','image/Kasar']
const gaa = bisaa[Math.floor(Math.random() * bisaa.length)]
omkeh4 = fs.readFileSync('./${gaa}.mp3')
chika.sendMessage(from, {audio: omkeh4, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
}
const sound = (hehe) => {
const bisaa = ['sound1','sound2','sound60','sound61','sound62','sound63','sound64','sound65','sound65','sound64','sound63','sound62','sound61','sound60','sound59','sound59','sound4','sound5','sound6','sound7','sound8','sound9','sound11','sound12','sound13','sound14','sound15','sound16','sound17','sound18','sound19','sound20','sound21','sound22','sound23','sound24','sound25','sound26','sound27','sound28','sound29','sound30','sound31','sound32','sound33','sound34','sound35','sound36','sound37','sound38','sound39','sound40','sound41','sound42','sound43','sound44','sound45','sound46','sound47','sound48','sound49','sound50','sound51','sound52','sound53','sound54','sound55','sound56','sound57','sound58']
const gaa = bisaa[Math.floor(Math.random() * bisaa.length)]
omkeh4 = fs.readFileSync(`./${gaa}.mp3`)
chika.sendMessage(from, {audio: omkeh4, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
}
const rohani = (hehe) => {
const bisaa = ['rohani']
const gaa = bisaa[Math.floor(Math.random() * bisaa.length)]
omkeh4 = fs.readFileSync(`./${gaa}.mp3`)
chika.sendMessage(from, {audio: omkeh4, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
}
const apasih = (hehe) => {
const bisaa = ['apasih','image/Kasar']
const gaa = bisaa[Math.floor(Math.random() * bisaa.length)]
omkeh4 = fs.readFileSync(`./${gaa}.mp3`)
chika.sendMessage(from, {audio: omkeh4, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
}
const ownerku = (hehe) => {
const bisaa = ['Ownerku']
const gaa = bisaa[Math.floor(Math.random() * bisaa.length)]
omkeh4 = fs.readFileSync(`./image/${gaa}.mp3`)
chika.sendMessage(from, {audio: omkeh4, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
}
const sayangku = (hehe) => {
omkeh4 = fs.readFileSync(`./image/Sayang.mp3`)
chika.sendMessage(from, {audio: omkeh4, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
}
const velo = (hehe) => {
const bisaa = ['velo.mp4','velo1.mp4']
const gaa = bisaa[Math.floor(Math.random() * bisaa.length)]
omkeh4 = fs.readFileSync(`./${gaa}`)
chika.sendImageAsSticker(m.chat, omkeh4, m, { packname: global.packname, author: global.santuy })
}
const nangis = (hehe) => {
omkeh4 = fs.readFileSync(`./nangis.webp`)
chika.sendImageAsSticker(m.chat, omkeh4, m, { packname: global.packname, author: global.santuy })
}
const sticAdmin = (hehe) => {
ano = fs.readFileSync('./admin.webp')
chika.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: `𝗞𝗮𝗺𝘂 𝗕𝘂𝗸𝗮𝗻 𝗮𝗱𝗺𝗶𝗻 🗿`})
}
const sticGroup = (hehe) => {
ano = fs.readFileSync('./group.webp')
chika.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: `𝗣𝗮𝗸𝗮𝗶 𝗜𝘁𝘂 𝗱𝗶 𝗴𝗿𝘂𝗽🗿`})
}
const sticBotAdmin = (hehe) => {
ano = fs.readFileSync('./botadmin.webp')
chika.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: `𝗕𝗼𝘁 𝗕𝘂𝗸𝗮𝗻 𝗮𝗱𝗺𝗶𝗻 🗿`})
}
const Sesat2 = (hehe) => {
ano = fs.readFileSync('./Ini.webp')
chika.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: `𝗣𝗮𝗸𝗮𝗶 𝗜𝘁𝘂 𝗱𝗶 𝗴𝗿𝘂𝗽🗿`})
}
const Sesat = (hehe) => {
ano = fs.readFileSync('./Sesat.webp')
chika.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: `𝗣𝗮𝗸𝗮𝗶 𝗜𝘁𝘂 𝗱𝗶 𝗴𝗿𝘂𝗽🗿`})
}



        // Memeg
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!chika.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            chika.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await chika.setStatus(`${chika.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return reply('𝗢𝗵 𝗶𝘆𝗮 𝗹𝘂𝗽𝗮 𝘁𝗲𝗿𝗻𝘆𝗮𝘁𝗮 𝗮𝗸𝘂 𝗯𝘂𝗸𝗮𝗻 𝗮𝗱𝗺𝗶𝗻 (´ . .̫ . `)')
        let gclink = (`https://chat.whatsapp.com/`+await chika.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`𝗨𝗻𝘁𝘂𝗻𝗴 𝗹𝗶𝗻𝗸 𝗴𝗿𝘂𝗽 𝗶𝗻𝗶, 𝗸𝗮𝗹𝘂 𝗯𝘂𝗸𝗮𝗻 𝘂𝗱𝗮𝗵 𝗰𝘆𝗮 𝗸𝗶𝗸 (￣▽￣)`)
        if (isAdmins) return reply('𝗨𝗽𝘀 𝗵𝗮𝗺𝗽𝗶𝗿 𝗰𝘆𝗮 𝗸𝗶𝗸, 𝘂𝗻𝘁𝘂𝗻𝗴 𝗮𝗱𝗺𝗶𝗻𝗸𝘂 ´･ᴗ･`')
        if (isCreator) return reply(`𝗨𝗽𝘀( ･_･) 𝗟𝘂𝗽𝗮, 𝗧𝗲𝗿𝗻𝘆𝗮𝘁𝗮 𝗸𝗮𝗺𝘂 𝗼𝘄𝗻𝗲𝗿 𝗕𝗼𝘁 𝗸𝘂 ♡＾▽＾♡`)
        m.reply('𝗗𝗮𝗱𝗮 𝗕𝗲𝗯𝗮𝗻(≧▽≦)👋. . .') 
        chika.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }


      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: chika.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, chika.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        chika.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            chika.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await chika.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, chika.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await chika.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await chika.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    chika.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    chika.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) chika.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) chika.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) chika.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    chika.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) chika.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) chika.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    chika.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

      switch(command) {
        
	    

case 'naa':
reply('*𝗡𝗲𝗹𝘀𝗼𝗻*')
break


case 'waaas':
setTimeout( () => {
  reply(`was`)     
  }, 1500),
  setTimeout( () => {
  reply(`was`)     
  }, 3000)
		  
break
case 'ara ara':
case 'Ara Ara':
case 'Ara':
araara(from)
break


case 'gropen':
reply('Tungu saja mungkin dia lagi sibuk atau data nya abis\n\n intinya pasti bakal di Jawab ko🐦')
break

case 'p':
case 'Nelson':
case 'nelson':
case 'Nel':
case 'nel':
case 'bang':
case 'woi':
case 'hi':
case 'halo':
case 'hai':
case 'hay':
case 'cok':
case 'oi':
case 'son':
case 'Son':
case 'P':
if (m.isGroup) return
reply(`𝐈𝐲𝐚 𝐀𝐝𝐚 𝐘𝐚𝐧𝐠 𝐁𝐢𝐬𝐚 𝐒𝐚𝐲𝐚 𝐁𝐚𝐧𝐭𝐮 𝐊𝐚𝐤 ${pushname} ?\nKetik menu jika ingin menggunakan bot\nJika mencari Nelson *chat wa.me//6281241100804`)
break

case "virtex":
reply('《《   ֎ ⃢🇲🇨⚠️SLAYER VIRTEX⚠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🇲🇨  ²⁰²⁰》》* \n *_*██VIRTEX██*_ \n*𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇨⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈\n**ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰ă̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̱̱̱̱̩̩̩̩̜̞̞̞̞̤̤̤̝̖̖̋̋̋̌̌̌̌̎̎̎̎̎̏̏̏̏̎̎̎̎̎̎̎̎̎̎̎̎̎̎̎̔̔̔̔̓̓̓̓̓̓̕̕˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰ă̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̱̱̱̱̩̩̩̩̜̞̞̞̞̤̤̤̝̖̖̋̋̋̌̌̌̌̎̎̎̎̎̏̏̏̏̎̎̎̎̎̎̎̎̎̎̎̎̎̎̎̔̔̔̔̓̓̓̓̓̓̕̕˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌ą̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰ċ̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰ï̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰ă̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̴̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̱̱̱̱̩̩̩̩̜̞̞̞̞̤̤̤̝̖̖̋̋̋̌̌̌̌̎̎̎̎̎̏̏̏̏̎̎̎̎̎̎̎̎̎̎̎̎̎̎̎̔̔̔̔̓̓̓̓̓̓̕̕˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*\n\n\n\n\n\n𝗔𝗽𝗮 𝗹𝗶𝗮𝘁 𝗹𝗶𝗮𝘁🐦')
break




case 'tes':
if (!m.isGroup) return
reply('Naoo?')              
break

case 'thx':
case 'thanks':
case 'makasih':
case 'mksih':
case 'tanks':
case 'mksh':
case 'mksih':
reply(`𝗦𝗮𝗺𝗮 𝗦𝗮𝗺𝗮 𝗷𝗴 𝗸𝗮𝗸 ${pushname} 🐦`)              
break
   
case 'salken':
if (!m.isGroup) return
reply(`salken jg kak ${pushname} 🐦`)              
break        
        
        
        
    
        
        
	    


//—————「 Auto VN dll 」—————//

case 'sini':
case 'yok':
case 'gas':
if (!isBotAdmins) return
omkeh3 = fs.readFileSync('./image/Gamau.mp3')
chika.sendMessage(from,{audio: omkeh3, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break   
 
 case 'lag':
 if (!isBotAdmins) return
omkeh3 = fs.readFileSync('./image/Ngelag.mp3')
chika.sendMessage(from,{audio: omkeh3, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break   

 case ':v':
 case 'awokawok':
 case 'hihi':
 if (!isBotAdmins) return
omkeh3 = fs.readFileSync('./image/Hihi.mp3')
chika.sendMessage(from,{audio: omkeh3, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break   

case 'pap':
 if (!isBotAdmins) return
omkeh3 = fs.readFileSync('./image/Pap.mp3')
chika.sendMessage(from,{audio: omkeh3, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break   
 
 case 'bantuin':
 if (!isBotAdmins) return
omkeh3 = fs.readFileSync('./image/Buat apa.mp3')
chika.sendMessage(from,{audio: omkeh3, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break   

 case 'kenapa':
 case 'kenapa?':
 if (!isBotAdmins) return
omkeh3 = fs.readFileSync('./image/Karna lo wibu.mp3')
chika.sendMessage(from,{audio: omkeh3, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break   
 
 case '🥰':
 case '😘':
 case '😍':
 if (!isBotAdmins) return
omkeh3 = fs.readFileSync('./image/Imut.mp3')
chika.sendMessage(from,{audio: omkeh3, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break   

 case 'uwu':
 if (!isBotAdmins) return
omkeh3 = fs.readFileSync(`./image/Uwu.mp3`)
chika.sendMessage(from,{audio: omkeh3, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break   

case 'uwuuu':
 if (!isBotAdmins) return
omkeh3 = fs.readFileSync(`./image/Uwuuu.mp3`)
chika.sendMessage(from,{audio: omkeh3, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break   
		
 case 'uwuii':
 if (!isBotAdmins) return
 omkeh3 = fs.readFileSync(`./image/Uwuii.mp3`)
 chika.sendMessage(from,{audio: omkeh3, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break   
		      
 case 'i like you':
 if (!isBotAdmins) return
omkeh3 = fs.readFileSync('./image/I like you.mp3')
chika.sendMessage(from,{audio: omkeh3, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break   

case "onichan":
case 'oni':
if (!isBotAdmins) return
	omkeh2 = fs.readFileSync('./onichan.mp3')
	chika.sendMessage(from,{audio: omkeh2, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break   
 
 
 case 'ara':
 if (!isBotAdmins) return
omkeh3 = fs.readFileSync('./vn.mp3')
chika.sendMessage(from,{audio: omkeh3, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break   
 
 case 'sad':
 case '🥲':
 case '😔':
 case '🙂':
 case '😭':
 case '🙃':
 case ':)':
 case ':(':
 case 'dalah':
 case 'T_T':
 const bisaa = ['sad1','sad2','sad3','sad4','segala','hanyasatu','sound10','sound60','sound60','sound66','sound66','sound63','sound63']
const gaa = bisaa[Math.floor(Math.random() * bisaa.length)]
 omkeh4 = fs.readFileSync(`./${gaa}.mp3`)
chika.sendMessage(from,{audio: omkeh4, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
nangis(from)
 break   
 

 case 'kontol':
 case 'koncol':
 case 'woi ajg':
 case 'memek':
 case 'asu':
 case 'ajim':
 case 'kontl':
 case 'ajg':
 case 'anj':
 case 'babi':
 case 'anjg':
 case 'bangsat':
 case 'bangst':
 case 'bgst':
 case 'ajing':
 case 'bacot':
 case 'anjing':
 case 'bot ajg':
 case 'bot babi':
 if (!m.isGroup) return apasih(from)
 if (!isBotAdmins) return
  if (isAdmins) return araara(from)
 const bisaaa = ['apasih','image/Gaboleh gitu']
const gaaa = bisaaa[Math.floor(Math.random() * bisaaa.length)]
 omkeh4 = fs.readFileSync(`./${gaaa}.mp3`)
chika.sendMessage(from,{audio: omkeh4, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break   
 
 
 case 'nelson':
 case 'nel':
 case 'son':
 case 'apa':
 case 'apasih':
 case 'idih':
 case 'woi':
 case 'dih':
 case 'bot':
 case '@𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃':
 if (!m.isGroup) return
 if (!isBotAdmins) return
 omkeh5 = fs.readFileSync('./apasih.mp3')
chika.sendMessage(from,{audio: omkeh5, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break


case 'sc':
case 'script':
omkeh5 = fs.readFileSync('./apasih.mp3')
chika.sendMessage(from,{audio: omkeh5, mimetype:'audio/mp4', ptt:true }, {quoted:m}) 
 break


    case "bodoh":
    case "lolii":
    case "kenamental":
    case "lagi_nyari_jodoh":
    case "kenabuly":
    case "jomblo":
    case "terkaya":
    case "lagingentod":
    case "babu":
    case "jadibadut":
    case "tolol":
    case "artis":
    case "bego":
    case "pakboy":
    case "terpintar":
    case "lonte":
    case "beban":
    case "nyimak":
    case "sange":
    case "lagisad": 	 
    case "lebsi": 	
    case "lagicoli":
    case "ganteng":
    case "jelek":
    case "cantik":
    case "gay":
    case "terpedo":
    case "wibu":{
 if (!m.isGroup) throw sticGroup(from)
            let member = participants.map(u => u.id)
            let oi = m.sender
            let ytm = member[Math.floor(Math.random() * member.length)]
            let mty = `𝐘𝐚𝐧𝐠  ${command} 𝐃𝐢 𝐆𝐫𝐮𝐩 𝐈𝐧𝐢 𝐀𝐝𝐚𝐥𝐚𝐡🙀 \n\n @${ytm.split('@')[0]}\n`
            let ments = [oi, ytm]
            reply(mty)
}
break



case 'yatim':{
 if (!m.isGroup) throw sticGroup(from)
            let member = participants.map(u => u.id)
            let oi = m.sender
            let ytm = member[Math.floor(Math.random() * member.length)]
            let mty = `𝐂𝐢𝐞𝐞 𝐀𝐝𝐚 𝐘𝐚𝐭𝐢𝐦 𝐁𝐚𝐫𝐮 (≧▽≦) \n\n@${ytm.split('@')[0]}\n`
            let ments = [oi, ytm]
            reply(mty)
}
break

            

case 'ayang':
case 'syg':
case 'sayang': {
            if (!m.isGroup) throw sticGroup(from)
              if (isAdmins) return sayangku(from)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = ` 𝐒𝐢 @${me.split('@')[0]} 𝐂𝐚𝐫𝐢𝐢𝐧 𝐥𝐮😺 @${jodoh.split('@')[0]} \n\n𝐊𝐚𝐭𝐚𝐧𝐲𝐚 𝐝𝐢𝐚 𝐤𝐚𝐧𝐠𝐞𝐧 𝐤𝐚𝐦𝐮`
            let ments = [me, jodoh]
            reply(jawab)
            }
            break


case 'selingkuh':
case 'ngewe': {
            if (!m.isGroup) throw sticGroup(from)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `𝐘𝐚𝐧𝐠 ${command} 𝐊𝐞𝐦𝐚𝐫𝐢𝐧 𝐃𝐢 𝐆𝐫𝐮𝐩 𝐢𝐧𝐢 𝐀𝐝𝐚𝐥𝐚𝐡🙀

@${orang.split('@')[0]} 𝐃𝐞𝐧𝐠𝐚𝐧 @${jodoh.split('@')[0]}\n`
            let menst = [orang, jodoh]
            reply(jawab)
            }
           
            break

            

            
case 'owner': case 'creator': {
	setTimeout( () => {
  ownerku(from)
  }, 2000)
	
            }
            break






case 'sound':
case '😎':
case 'musik':
case 'santuy':
reply('𝗝𝗮𝗻𝗴𝗮𝗻 𝗟𝘂𝗽𝗮 𝗦𝗮𝗻𝘁𝘂𝘆 '),
  sound(from)
break

case 'awkokkkkkk':
reply('𝗔𝘄𝗼𝗸𝗮𝘄𝗼𝗸🐦')
break




case 'menu': {
if(typemenu == 'image'){
await chika.send5ButImg(from, `` + '' + lang.menu(botname, pushname, salam), `© ${ownername}`,thumb, [{"urlButton": {"displayText": "𝐌𝐲 𝐓𝐢𝐤𝐓𝐨𝐤","url": `${youtube}`}},{"urlButton": {"displayText": `Owner`,"url": `wa.me//6281241100804`}}])
 setTimeout( () => {
  sound(from)
  }, 1000)
}
	break
  
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    chika.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
