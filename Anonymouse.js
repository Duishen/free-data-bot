
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
const nexusnw = require('xfarr-api')

//rpg function\\
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

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
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

module.exports = Anony= async (Anony, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Anony.decodeJid(Anony.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await Anony.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
        //member\\
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
	
	//group target \\
const reply = (teks) => {
            Anony.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ 🔐`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Anony/anony.jpg`),"sourceUrl": "https://telegra.ph/file/6852aab70c51bf2797244.jpg"}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            Anony.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` 🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ 🔐`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Anony/anony.jpg`),"sourceUrl": "https://telegra.ph/file/6852aab70c51bf2797244.jpg"}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!Anony.public) {
            if (!m.key.fromMe) return
        }

	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await Anony.setStatus(`${Anony.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await Anony.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
        if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner 😘`)
        Anony.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

 

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Anony.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Anony.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Anony.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Anony.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Anony.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, Anony.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
 
switch(command) {
        case 'userlimit': 
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
case 'menu': case '.menu':{


    const buttons = [
        {buttonId: 'isp', buttonText: {displayText: ' Get Files'}, type: 1},
        {buttonId: 'app', buttonText: {displayText: ' Get apps'}, type: 1}
      
      ]
      
      const buttonMessage = {
          image: {url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/SLTMobitel.jpg'},
          caption:"*😍Welcome to Free Data Bot😍*\n\n*මේ bot පාවිචිකරලා ඔයාට free internet යන්න ඕන ehi, v2ray File නොමිලේ ලාබාගන්න පුලුවන්.*\n\n*මේ files ඔයාලට ගන්න පුලුවන්*\n\n*✅ Whatsapp package file all isp*\n\n*✅ Youtube package file all isp*\n\n*✅ Facebook package file all isp*\n\n😎 *Zero balance file for all isp free file anad paid files*\n\n *ඔයාලා ලග මේ files use කරන්න ඕන app නැත්තම් පල්ලෙහා තියන get app button එක click කරලා ගන්න පුලුවන්*",
          footer: "🍁ꜱᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴄʜᴏᴏꜱᴇ🍁",
          buttons: buttons,
          headerType: 4
      }
      Anony.sendMessage(m.chat, buttonMessage, { quoted: m })

}
break

case 'isp':
    
    const sections = [
        {
        title: "SELECT YOUR ISP",
        rows: [
            {title: "🤎 Airtel 🤎", rowId: "airtel"},
            {title: "❤️ Dialog ❤️", rowId: "dialog"},
            {title: "🖤 Mobitel 🖤", rowId: "mobitel"},
            {title: "🤍 Hutch 🤍", rowId: "hutch"}
        ]
        }
    ]
    
    const listMessage = {
      text: "*❤️ Select Your Internet Provider ❤️*",
      title: "Select Your Sim Card ",
      buttonText: "Click Here ☛",
      sections
    }

    Anony.sendMessage(m.chat, listMessage, { quoted : m })

break

 
case 'dialog':  
if (!m.isGroup) return replay('bot only working group only')
{

    const buttons = [
     {buttonId: 'd-list', buttonText: {displayText: '🙂Package'}, type: 1},
     {buttonId: 'd-ze', buttonText: {displayText: '😍 zero'}, type: 1}
   
   ]
   
   const buttonMessage = {
       image: {url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/Dialog_Axiata_logo.svg%20(1).jpg'},
       caption:"ඔබට පැකේජයක් (whatsapp, youtube, iom) Activate කර තිබේනම් Package තෝරන්න. ඔබ පැකේජයක් Active කර නොමැතිනම් zero තෝරන්න.",
       footer: "🍁ꜱᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴛʏᴘᴇ🍁",
       buttons: buttons,
       headerType: 4
   }
   Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
   }
break

case 'd-list':
    const sections1 = [
        {
        title: "ඔබ Active කර ඇති Package එක තෝරන්න",
        rows: [
            {title: "🙃 Youtube", rowId: "d-yt"},
            {title: "😊 Whatsapp", rowId: "d-wh"},
            {title: "😇Facebook", rowId: "d-fb"},
            {title: "😍 Zero", rowId: "d-ze"}
        ]
        }
    ]
    
    const listMessage1 = {
      text: "*❤️ Select Your Package ❤️*",
      title: "Select Your Package ",
      buttonText: "Click Here ☛",
      sections:sections1
    }

    Anony.sendMessage(m.chat, listMessage1, { quoted : m })

break

//--------dialog-package-start---------
case 'd-yt':
    if (!m.isGroup) return replay('bot only working group only')
    
Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/http%20injector/dialog/Dialog%20Youtube.ehi' }, 
    mimetype: 'application/octet-stream',
    fileName: '🚀Dialog Youtube v2ray.ehi' },
    { quoted: m })
await Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/eV2ray/Dialog%20Youtube%20v2ray.v2' }, 
    mimetype: 'application/octet-stream',
    fileName: '🚀Dialog Youtube v2ray.v2' },
    { quoted: m })
    
await Anony.sendMessage(m.chat, { text : '*🍁NetMod Syana app v2ray config🍁* \n\n nm-vmess://XKLkNHvxyc3NKiv0uGV3144uNWzqMCGzBRVTc2UWHW8qkh8G/emGQW//9al6wvU79+HMFJpjaRd930l4a4O8iPvdkkiyf/N6Bt7HqNJfqo4WeYaUAQU+dL8icfCebr/wYe2nPySXUvmChWmrtdWCP0rX4rlGgqw9iuoFeI7ksgqVf8bFraz815iWDN6dxBcZMhCrI1KSTo+BMI1ssPcuuGoY1zhVyrDMlIixfAMthQ44wJ9CgOCZ/8Zt5dMLLlbofTAPcghjChsW4HrJX3cRZrATZoP+vT0CscCETi9/oQU='}, { quoted: m })
await Anony.sendMessage(m.chat, { text : q ? q : '🫅🏻 HIGHSPEED Paid ZERO V2ray Available at low price 🫅🏻\n\n*🔰MOBITEL ZERO V2ray RS.100.00*\n\n*🔰AIRTEL ZERO V2ray RS.100.00*\n\n*🔰ALL V2ray ONE MONTH WORKING*\n\n*✅Gaming support*\n\n*✅Whatsapp call working*\n\n*✅LOW PING 60-70*\n\n*🤝මාසයක උපරිම වගකීමක් දෙනු ලැබේ.*\n\nV2ray අවශ්‍ය අය 👇\n\nwa.me/94703374287' , mentions: participants.map(a => a.id)}, { quoted: m })
    
break  

case 'd-fb':
    if (!m.isGroup) return replay('bot only working group only')
    
Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/http%20injector/dialog/Dialog%20Facebook.ehi' }, 
    mimetype: 'application/octet-stream',
    fileName: '💎Dialog Facebook v2ray.ehi' },
    { quoted: m })
await Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/eV2ray/Dialog%20Facebook%20v2ray.v2' }, 
    mimetype: 'application/octet-stream',
    fileName: '💎Dialog Facebook v2ray.v2' },
    { quoted: m })
    
await Anony.sendMessage(m.chat, { text : '*🍁NetMod Syana app v2ray config🍁* \n\n nm-vmess://XKLkNHvxyc3NKiv0uGV3144uNWzqMCGzBRVTc2UWHW8qkh8G/emGQW//9al6wvU79+HMFJpjaRd930l4a4O8iPvdkkiyf/N6Bt7HqNJfqo4WeYaUAQU+dL8icfCebr/wYe2nPySXUvmChWmrtdWCP0rX4rlGgqw9iuoFeI7ksgrItBxLEku3uYbrMLLpzpZP0xTUC3kmmYWK/8PITvo4Oe8nLje41RJ7QSLJsaPiCnJ5KgJ+Jw/uQD2baSo7GQsdIrUklV++hG8WxAsoh590nxt8t4LnoHTUFZp7XlQdslI='}, { quoted: m })
await Anony.sendMessage(m.chat, { text : q ? q : '🫅🏻 HIGHSPEED Paid ZERO V2ray Available at low price 🫅🏻\n\n*🔰MOBITEL ZERO V2ray RS.100.00*\n\n*🔰AIRTEL ZERO V2ray RS.100.00*\n\n*🔰ALL V2ray ONE MONTH WORKING*\n\n*✅Gaming support*\n\n*✅Whatsapp call working*\n\n*✅LOW PING 60-70*\n\n*🤝මාසයක උපරිම වගකීමක් දෙනු ලැබේ.*\n\nV2ray අවශ්‍ය අය 👇\n\nwa.me/94703374287' , mentions: participants.map(a => a.id)}, { quoted: m })
    
break 

case 'd-wh':
    if (!m.isGroup) return replay('bot only working group only')
    
Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/http%20injector/dialog/Dialog%20Whatsapp.ehi' }, 
    mimetype: 'application/octet-stream',
    fileName: '🎁Hutch Whatsapp v2ray.ehi' },
    { quoted: m })
await Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/eV2ray/Dialog%20whatsapp%20v2ray%20.v2' }, 
    mimetype: 'application/octet-stream',
    fileName: '🎁Hutch Whatsapp v2ray.v2' },
    { quoted: m })
    
await Anony.sendMessage(m.chat, { text : '*🍁NetMod Syana app v2ray config🍁* \n\n nm-vmess://XKLkNHvxyc3NKiv0uGV3144uNWzqMCGzBRVTc2UWHW8qkh8G/emGQW//9al6wvU79+HMFJpjaRd930l4a4O8iPvdkkiyf/N6Bt7HqNJfqo4WeYaUAQU+dL8icfCebr/wYe2nPySXUvmChWmrtdWCP0rX4rlGgqw9iuoFeI7ksgqO/Vbd7iZNIHpiugHfxvgH0xTUC3kmmYWK/8PITvo4OWwM+UaiIepQ1XQ5Dxi8IkoP9OBSTu9ApqsnornJrsHwRltVa5z4xEbuobOpBrkl58r9rCYMGpMmSjxYhK/cU4k='}, { quoted: m })
await Anony.sendMessage(m.chat, { text : q ? q : '🫅🏻 HIGHSPEED Paid ZERO V2ray Available at low price 🫅🏻\n\n*🔰MOBITEL ZERO V2ray RS.100.00*\n\n*🔰AIRTEL ZERO V2ray RS.100.00*\n\n*🔰ALL V2ray ONE MONTH WORKING*\n\n*✅Gaming support*\n\n*✅Whatsapp call working*\n\n*✅LOW PING 60-70*\n\n*🤝මාසයක උපරිම වගකීමක් දෙනු ලැබේ.*\n\nV2ray අවශ්‍ය අය 👇\n\nwa.me/94703374287' , mentions: participants.map(a => a.id)}, { quoted: m })
    
break

//d-zero-start
case 'd-ze':
    if (!m.isGroup) return replay('bot only working group only')
    
replay('*Dialog zero paid fils only \n\n *අවශ්‍ය අය* 👇\n\nwa.me/94703374287*')
await Anony.sendMessage(m.chat, { text : q ? q : '🫅🏻 HIGHSPEED Paid ZERO V2ray Available at low price 🫅🏻\n\n*🔰MOBITEL ZERO V2ray RS.100.00*\n\n*🔰AIRTEL ZERO V2ray RS.100.00*\n\n*🔰ALL V2ray ONE MONTH WORKING*\n\n*✅Gaming support*\n\n*✅Whatsapp call working*\n\n*✅LOW PING 60-70*\n\n*🤝මාසයක උපරිම වගකීමක් දෙනු ලැබේ.*\n\nV2ray අවශ්‍ය අය 👇\n\nwa.me/94703374287' , mentions: participants.map(a => a.id)}, { quoted: m })
break
//d-zero-end
//-------end-dialog------//






//-----------start-hutch----------//

case 'hutch':  {
    if (!m.isGroup) return replay('bot only working group only')

    const buttons = [
     {buttonId: 'h-list', buttonText: {displayText: '🙂Package'}, type: 1},
     {buttonId: 'h-ze', buttonText: {displayText: '😍 zero'}, type: 1}
   
   ]
   
   const buttonMessage = {
       image: {url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/hutch.jpg'},
       caption:"ඔබට පැකේජයක් (whatsapp, youtube, iom) Activate කර තිබේනම් Package තෝරන්න. ඔබ පැකේජයක් Active කර නොමැතිනම් zero තෝරන්න.",
       footer: "🍁ꜱᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴛʏᴘᴇ🍁",
       buttons: buttons,
       headerType: 4
   }
   Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
   }
break

case 'h-list':
    if (!m.isGroup) return replay('bot only working group only')
    const sections2 = [
        {
        title: "ඔබ Active කර ඇති Package එක තෝරන්න",
        rows: [
            {title: "🙃 Youtube", rowId: "h-yt"},
            {title: "😊 Whatsapp", rowId: "h-wh"},
            {title: "😇Facebook", rowId: "h-fb"},
            {title: "😍 Zero", rowId: "h-ze"}
        ]
        }
    ]
    
    const listMessage2 = {
      text: "*❤️ Select Your Package ❤️*",
      title: "Select Your Package ",
      buttonText: "Click Here ☛",
      sections:sections2
    }

    Anony.sendMessage(m.chat, listMessage2, { quoted : m })

break

case 'h-yt':
    if (!m.isGroup) return replay('bot only working group only')
    
Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/http%20injector/Hutch/Hutch%20Facebook.ehi' }, 
    mimetype: 'application/octet-stream',
    fileName: '🚀Hutch Youtube v2ray.ehi' },
    { quoted: m })
await Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/eV2ray/Hutch%20youtube%20v2ray.v2' }, 
    mimetype: 'application/octet-stream',
    fileName: '🚀Hutch Youtube v2ray.v2' },
    { quoted: m })
    
await Anony.sendMessage(m.chat, { text : '*🍁NetMod Syana app v2ray config🍁* \n\n nm-vmess://XKLkNHvxyc3NKiv0uGV3144uNWzqMCGzBRVTc2UWHW8qkh8G/emGQW//9al6wvU79+HMFJpjaRd930l4a4O8iPvdkkiyf/N6Bt7HqNJfqo4WeYaUAQU+dL8icfCebr/wYe2nPySXUvmChWmrtdWCP0rX4rlGgqw9iuoFeI7ksgqtEu6zz3hkM6v6SwPXp+4yMhCrI1KSTo+BMI1ssPcuuHwx9MjnvBh/eBdtKy2I23hKOw5ojOP/IcejoT+7R4XNrqtR19QAKdPGNJKXP2sBqrik9IjETHtCgxAaX19wLyw='}, { quoted: m })
await Anony.sendMessage(m.chat, { text : q ? q : '🫅🏻 HIGHSPEED Paid ZERO V2ray Available at low price 🫅🏻\n\n*🔰MOBITEL ZERO V2ray RS.100.00*\n\n*🔰AIRTEL ZERO V2ray RS.100.00*\n\n*🔰ALL V2ray ONE MONTH WORKING*\n\n*✅Gaming support*\n\n*✅Whatsapp call working*\n\n*✅LOW PING 60-70*\n\n*🤝මාසයක උපරිම වගකීමක් දෙනු ලැබේ.*\n\nV2ray අවශ්‍ය අය 👇\n\nwa.me/94703374287' , mentions: participants.map(a => a.id)}, { quoted: m })
    
break  

case 'h-fb':
    if (!m.isGroup) return replay('bot only working group only')
    
Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/http%20injector/Hutch/Hutch%20Facebook.ehi' }, 
    mimetype: 'application/octet-stream',
    fileName: '💎Hutch Facebook v2ray.ehi' },
    { quoted: m })
await Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/eV2ray/Hutch%20facebook%20v2ray.v2' }, 
    mimetype: 'application/octet-stream',
    fileName: '💎Hutch Facebook v2ray.v2' },
    { quoted: m })
    
await Anony.sendMessage(m.chat, { text : '*🍁NetMod Syana app v2ray config🍁* \n\n nm-vmess://XKLkNHvxyc3NKiv0uGV3144uNWzqMCGzBRVTc2UWHW8qkh8G/emGQW//9al6wvU79+HMFJpjaRd930l4a4O8iPvdkkiyf/N6Bt7HqNJfqo4WeYaUAQU+dL8icfCebr/wYe2nPySXUvmChWmrtdWCP0rX4rlGgqw9iuoFeI7ksgqtEu6zz3hkM6v6SwPXp+4yMhCrI1KSTo+BMI1ssPcuuHwx9MjnvBh/eBdtKy2I23hKOw5ojOP/IcejoT+7R4XNrqtR19QAKdPGNJKXP2sBqrik9IjETHtCgxAaX19wLyw='}, { quoted: m })
await Anony.sendMessage(m.chat, { text : q ? q : '🫅🏻 HIGHSPEED Paid ZERO V2ray Available at low price 🫅🏻\n\n*🔰MOBITEL ZERO V2ray RS.100.00*\n\n*🔰AIRTEL ZERO V2ray RS.100.00*\n\n*🔰ALL V2ray ONE MONTH WORKING*\n\n*✅Gaming support*\n\n*✅Whatsapp call working*\n\n*✅LOW PING 60-70*\n\n*🤝මාසයක උපරිම වගකීමක් දෙනු ලැබේ.*\n\nV2ray අවශ්‍ය අය 👇\n\nwa.me/94703374287' , mentions: participants.map(a => a.id)}, { quoted: m })
    
break 

case 'h-wh':
    if (!m.isGroup) return replay('bot only working group only')
    
Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/http%20injector/Hutch/Hutch%20Facebook.ehi' }, 
    mimetype: 'application/octet-stream',
    fileName: '🎁Hutch Whatsapp v2ray.ehi' },
    { quoted: m })
await Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/eV2ray/Hutch%20facebook%20v2ray.v2' }, 
    mimetype: 'application/octet-stream',
    fileName: '🎁Hutch Whatsapp v2ray.v2' },
    { quoted: m })
    
await Anony.sendMessage(m.chat, { text : '*🍁NetMod Syana app v2ray config🍁* \n\n nm-vmess://XKLkNHvxyc3NKiv0uGV3144uNWzqMCGzBRVTc2UWHW8qkh8G/emGQW//9al6wvU79+HMFJpjaRd930l4a4O8iPvdkkiyf/N6Bt7HqNJfqo4WeYaUAQU+dL8icfCebr/wYe2nPySXUvmChWmrtdWCP0rX4rlGgqw9iuoFeI7ksgqtEu6zz3hkM6v6SwPXp+4yMhCrI1KSTo+BMI1ssPcuuHwx9MjnvBh/eBdtKy2I23hKOw5ojOP/IcejoT+7R4XNrqtR19QAKdPGNJKXP2sBqrik9IjETHtCgxAaX19wLyw='}, { quoted: m })
await Anony.sendMessage(m.chat, { text : q ? q : '🫅🏻 HIGHSPEED Paid ZERO V2ray Available at low price 🫅🏻\n\n*🔰MOBITEL ZERO V2ray RS.100.00*\n\n*🔰AIRTEL ZERO V2ray RS.100.00*\n\n*🔰ALL V2ray ONE MONTH WORKING*\n\n*✅Gaming support*\n\n*✅Whatsapp call working*\n\n*✅LOW PING 60-70*\n\n*🤝මාසයක උපරිම වගකීමක් දෙනු ලැබේ.*\n\nV2ray අවශ්‍ය අය 👇\n\nwa.me/94703374287' , mentions: participants.map(a => a.id)}, { quoted: m })
    
break

//h-zero-start
case 'h-ze':
    if (!m.isGroup) return replay('bot only working group only')
    
Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/http%20injector/Hutch/Hutch%20Zero.ehi' }, 
    mimetype: 'application/octet-stream',
    fileName: '😎 Hutch Zero v2ray.ehi' },
    { quoted: m })
await Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/eV2ray/Hutch%20zero.v2' }, 
    mimetype: 'application/octet-stream',
    fileName: '😎 Hutch Zero v2ray.v2' },
    { quoted: m })
    

await Anony.sendMessage(m.chat, { text : '*🍁NetMod Syana app v2ray config🍁* \n\n nm-vmess://XKLkNHvxyc3NKiv0uGV3144uNWzqMCGzBRVTc2UWHW+8pbiaIuD0nHHzAvcjg2iWr3z/fN3ei/spRmkvx+U+JVT56oIES7/vVE+vs6eZSTO3Qx8w9nHgqh2gQFa0xFQJP6s7dWEG1eazPo2t4JSKpiwB6/LanyFIzjI6Cdu+pT+ZFa+KEM5TQrmD5whAWt+x9JnS8s+J6v/DLioDckVqGw6SPiUUUqjArPHlQOdTO0qOJ8N/+7yYG5pIx4UHAoP9flPnpTY60i7+xVbZ+BNMHT6V2D3e1VzU1OGS8HQiwI0='}, { quoted: m })

await Anony.sendMessage(m.chat, { text : q ? q : '🫅🏻 HIGHSPEED Paid ZERO V2ray Available at low price 🫅🏻\n\n*🔰MOBITEL ZERO V2ray RS.100.00*\n\n*🔰AIRTEL ZERO V2ray RS.100.00*\n\n*🔰ALL V2ray ONE MONTH WORKING*\n\n*✅Gaming support*\n\n*✅Whatsapp call working*\n\n*✅LOW PING 60-70*\n\n*🤝මාසයක උපරිම වගකීමක් දෙනු ලැබේ.*\n\nV2ray අවශ්‍ය අය 👇\n\nwa.me/94703374287' , mentions: participants.map(a => a.id)}, { quoted: m })
break





//-------end-hutch------//


//-------start-airtel-----------//
case 'airtel':  
if (!m.isGroup) return replay('bot only working group only')
{
    

    const buttons = [
     {buttonId: 'a-list', buttonText: {displayText: '🙂Package'}, type: 1},
     {buttonId: 'a-ze', buttonText: {displayText: '😍 zero'}, type: 1}
   
   ]
   
   const buttonMessage = {
       image: {url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/airtel.jpg'},
       caption:"ඔබට පැකේජයක් (whatsapp, youtube, iom) Activate කර තිබේනම් Package තෝරන්න. ඔබ පැකේජයක් Active කර නොමැතිනම් zero තෝරන්න.",
       footer: "🍁ꜱᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴛʏᴘᴇ🍁",
       buttons: buttons,
       headerType: 4
   }
   Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
   }
break

case 'a-list':
    if (!m.isGroup) return replay('bot only working group only')
    const sections3 = [
        {
        title: "ඔබ Active කර ඇති Package එක තෝරන්න",
        rows: [
            {title: "🙃 Youtube", rowId: "a-yt"},
            {title: "😊 Whatsapp", rowId: "a-wh"},
            {title: "😇Facebook", rowId: "a-fb"},
            {title: "😍 Zero", rowId: "a-ze"}
        ]
        }
    ]
    
    const listMessage3 = {
      text: "*❤️ Select Your Package ❤️*",
      title: "Select Your Package ",
      buttonText: "Click Here ☛",
      sections:sections3
    }

    Anony.sendMessage(m.chat, listMessage3, { quoted : m })

break


case 'a-yt':
    if (!m.isGroup) return replay('bot only working group only')
    
Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/http%20injector/Airtel/Airtel%20Youtube.ehi' }, 
    mimetype: 'application/octet-stream',
    fileName: '🚀Airtel Youtube v2ray.ehi' },
    { quoted: m })
await Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/eV2ray/Airtel%20youtube%20v2ray.v2' }, 
    mimetype: 'application/octet-stream',
    fileName: '🚀Airtel Youtube v2ray.v2' },
    { quoted: m })
    
await Anony.sendMessage(m.chat, { text : '*🍁NetMod Syana app v2ray config🍁* \n\n vmess://eyJhZGQiOiIxMzIuMTQ1LjI0LjIxMiIsImFpZCI6IjAiLCJob3N0IjoiIiwiaWQiOiJlZjc2OThkNS04ZmFhLTQ4ZDItZWM0MC01YTRkNTIxMjkyYmMiLCJuZXQiOiJ0Y3AiLCJwYXRoIjoiIiwicG9ydCI6IjQ0MyIsInBzIjoiQUlSVEVMIFlPVVRVQkUiLCJ0bHMiOiJ0bHMiLCJzbmkiOiJ5dGltZy5sLmdvb2dsZS5jb20iLCJ0eXBlIjoibm9uZSIsInYiOiIyIn0='}, { quoted: m })
await Anony.sendMessage(m.chat, { text : q ? q : '🫅🏻 HIGHSPEED Paid ZERO V2ray Available at low price 🫅🏻\n\n*🔰MOBITEL ZERO V2ray RS.100.00*\n\n*🔰AIRTEL ZERO V2ray RS.100.00*\n\n*🔰ALL V2ray ONE MONTH WORKING*\n\n*✅Gaming support*\n\n*✅Whatsapp call working*\n\n*✅LOW PING 60-70*\n\n*🤝මාසයක උපරිම වගකීමක් දෙනු ලැබේ.*\n\nV2ray අවශ්‍ය අය 👇\n\nwa.me/94703374287' , mentions: participants.map(a => a.id)}, { quoted: m })
    
break  

case 'a-fb':
    if (!m.isGroup) return replay('bot only working group only')
    
Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/http%20injector/Airtel/Airtel%20Facebook.ehi' }, 
    mimetype: 'application/octet-stream',
    fileName: '💎Airtel Facebook Bypass v2ray.ehi' },
    { quoted: m })
await Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/eV2ray/Airtel%20Facebook%20bypass%20v2ray.v2' }, 
    mimetype: 'application/octet-stream',
    fileName: '💎Airtel Facebook Bypass v2ray.v2' },
    { quoted: m })
    
await Anony.sendMessage(m.chat, { text : '*🍁NetMod Syana app v2ray config🍁* \n\n nm-vmess://XKLkNHvxyc3NKiv0uGV3144uNWzqMCGzBRVTc2UWHW8qkh8G/emGQW//9al6wvU79+HMFJpjaRd930l4a4O8iPvdkkiyf/N6Bt7HqNJfqo4WeYaUAQU+dL8icfCebr/wYe2nPySXUvmChWmrtdWCP0rX4rlGgqw9iuoFeI7ksgrFlwo0krppPQKg26sV+eWMInYDe268JBTPnqpviNT9wtYI/2LL2DmvQtSEgL3oFOGaqIynFdW3qvXCC8pSrvYoO7KCmQJT8m6UT2vxxpukFFObeYAqSxRySu4NbUaQJoogh0tPHsOQgFVaADecsPFT'}, { quoted: m })
await Anony.sendMessage(m.chat, { text : q ? q : '🫅🏻 HIGHSPEED Paid ZERO V2ray Available at low price 🫅🏻\n\n*🔰MOBITEL ZERO V2ray RS.100.00*\n\n*🔰AIRTEL ZERO V2ray RS.100.00*\n\n*🔰ALL V2ray ONE MONTH WORKING*\n\n*✅Gaming support*\n\n*✅Whatsapp call working*\n\n*✅LOW PING 60-70*\n\n*🤝මාසයක උපරිම වගකීමක් දෙනු ලැබේ.*\n\nV2ray අවශ්‍ය අය 👇\n\nwa.me/94703374287' , mentions: participants.map(a => a.id)}, { quoted: m })
    
break 

case 'a-wh':
    if (!m.isGroup) return replay('bot only working group only')
    
Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/http%20injector/Airtel/Airtel%20Whatsapp.ehi' }, 
    mimetype: 'application/octet-stream',
    fileName: '🎁Airtel Whatsapp Bypass v2ray.ehi' },
    { quoted: m })
await Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/eV2ray/Airtel%20Whatsapp%20Bypass%20v2ray.v2' }, 
    mimetype: 'application/octet-stream',
    fileName: '🎁Airtel Whatsapp Bypass v2ray.v2' },
    { quoted: m })
    
await Anony.sendMessage(m.chat, { text : '*🍁NetMod Syana app v2ray config🍁* \n\n vmess://eyJhZGQiOiIxMzIuMTQ1LjI0LjIxMiIsImFpZCI6IjAiLCJob3N0IjoiIiwiaWQiOiJlZjc2OThkNS04ZmFhLTQ4ZDItZWM0MC01YTRkNTIxMjkyYmMiLCJuZXQiOiJ0Y3AiLCJwYXRoIjoiIiwicG9ydCI6IjQ0MyIsInBzIjoiQUlSVEVMIFdIQVRTQVBQIEJ5cGFzcyIsInRscyI6InRscyIsInNuaSI6ImZuYS53aGF0c2FwcC5uZXQiLCJ0eXBlIjoibm9uZSIsInYiOiIyIn0='}, { quoted: m })
await Anony.sendMessage(m.chat, { text : q ? q : '🫅🏻 HIGHSPEED Paid ZERO V2ray Available at low price 🫅🏻\n\n*🔰MOBITEL ZERO V2ray RS.100.00*\n\n*🔰AIRTEL ZERO V2ray RS.100.00*\n\n*🔰ALL V2ray ONE MONTH WORKING*\n\n*✅Gaming support*\n\n*✅Whatsapp call working*\n\n*✅LOW PING 60-70*\n\n*🤝මාසයක උපරිම වගකීමක් දෙනු ලැබේ.*\n\nV2ray අවශ්‍ය අය 👇\n\nwa.me/94703374287' , mentions: participants.map(a => a.id)}, { quoted: m })
    
break

//a-zero-start
case 'a-ze':
    if (!m.isGroup) return replay('bot only working group only')
    
Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/http%20injector/Airtel/Airtel%20Zero.ehi' }, 
    mimetype: 'application/octet-stream',
    fileName: '😎 Airtel Zero v2ray.ehi' },
    { quoted: m })
await Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/eV2ray/Airtel%20zero.v2' }, 
    mimetype: 'application/octet-stream',
    fileName: '😎 Airtel Zero v2ray.v2' },
    { quoted: m })
    

await Anony.sendMessage(m.chat, { text : '*🍁NetMod Syana app v2ray config🍁* \n\n vmess://eyJhZGQiOiIxMzIuMTQ1LjI0LjIxMiIsImFpZCI6IjAiLCJob3N0IjoidW5pdmVyc2l0eS5kYXJhei5sayIsImlkIjoiMDE3Y2ZjZGUtNjEzNS00YjkxLWQwZTItMDhkYzhjNzUxOTM4IiwibmV0Ijoid3MiLCJwYXRoIjoiXC8iLCJwb3J0IjoiODAxMCIsInBzIjoiQWlydGVsIFplcm8iLCJ0bHMiOiJub25lIiwic25pIjoiIiwidHlwZSI6Im5vbmUiLCJ2IjoiMiJ9'}, { quoted: m })

await Anony.sendMessage(m.chat, { text : q ? q : '🫅🏻 HIGHSPEED Paid ZERO V2ray Available at low price 🫅🏻\n\n*🔰MOBITEL ZERO V2ray RS.100.00*\n\n*🔰AIRTEL ZERO V2ray RS.100.00*\n\n*🔰ALL V2ray ONE MONTH WORKING*\n\n*✅Gaming support*\n\n*✅Whatsapp call working*\n\n*✅LOW PING 60-70*\n\n*🤝මාසයක උපරිම වගකීමක් දෙනු ලැබේ.*\n\nV2ray අවශ්‍ය අය 👇\n\nwa.me/94703374287' , mentions: participants.map(a => a.id)}, { quoted: m })
break

//--------end-airtel---------//

//-------start-mobitel--------//
case 'mobitel': 
if (!m.isGroup) return replay('bot only working group only')
 {


    const buttons = [
     {buttonId: 'm-list', buttonText: {displayText: '🙂Package'}, type: 1},
     {buttonId: 'm-ze', buttonText: {displayText: '😍 zero'}, type: 1}
   
   ]
   
   const buttonMessage = {
       image: {url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/SLTMobitel.jpg'},
       caption:"ඔබට පැකේජයක් (whatsapp, youtube, iom) Activate කර තිබේනම් Package තෝරන්න. ඔබ පැකේජයක් Active කර නොමැතිනම් zero තෝරන්න.",
       footer: "🍁ꜱᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴛʏᴘᴇ🍁",
       buttons: buttons,
       headerType: 4
   }
   Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
   }
break

case 'm-list':
    if (!m.isGroup) return replay('bot only working group only')

    const sections4 = [
        {
        title: "ඔබ Active කර ඇති Package එක තෝරන්න",
        rows: [
            {title: "🙃 Youtube", rowId: "h-yt"},
            {title: "😊 Whatsapp", rowId: "h-wh"},
            {title: "😇Facebook", rowId: "h-fb"},
            {title: "😍 Zero", rowId: "h-ze"}
        ]
        }
    ]
    
    const listMessage4 = {
      text: "*❤️ Select Your Package ❤️*",
      title: "Select Your Package ",
      buttonText: "Click Here ☛",
      sections:sections4
    }

    Anony.sendMessage(m.chat, listMessage4, { quoted : m })

break


case 'm-yt':
    if (!m.isGroup) return replay('bot only working group only')
    
Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/http%20injector/Mobitel/Mobitel%20Youtube.ehi' }, 
    mimetype: 'application/octet-stream',
    fileName: '🚀Mobitel Youtube v2ray.ehi' },
    { quoted: m })
await Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/eV2ray/Mobitel%20Youtube%20bypass%20v2ray.v2' }, 
    mimetype: 'application/octet-stream',
    fileName: '🚀Mobitel Youtube v2ray.v2' },
    { quoted: m })
    
await Anony.sendMessage(m.chat, { text : '*🍁NetMod Syana app v2ray config🍁* \n\n nm-vmess://XKLkNHvxyc3NKiv0uGV3144uNWzqMCGzBRVTc2UWHW8qkh8G/emGQW//9al6wvU79+HMFJpjaRd930l4a4O8iPvdkkiyf/N6Bt7HqNJfqo4WeYaUAQU+dL8icfCebr/wYe2nPySXUvmChWmrtdWCP0rX4rlGgqw9iuoFeI7ksgp2VpKdPKO9fs7+vLiWwT7h0xTUC3kmmYWK/8PITvo4OWDDOwVrOuSfAMog8D4ZigzgCJaQEfPnfOsePlwxbrm5flPnpTY60i7+xVbZ+BNMHT6V2D3e1VzU1OGS8HQiwI0='}, { quoted: m })
await Anony.sendMessage(m.chat, { text : q ? q : '🫅🏻 HIGHSPEED Paid ZERO V2ray Available at low price 🫅🏻\n\n*🔰MOBITEL ZERO V2ray RS.100.00*\n\n*🔰AIRTEL ZERO V2ray RS.100.00*\n\n*🔰ALL V2ray ONE MONTH WORKING*\n\n*✅Gaming support*\n\n*✅Whatsapp call working*\n\n*✅LOW PING 60-70*\n\n*🤝මාසයක උපරිම වගකීමක් දෙනු ලැබේ.*\n\nV2ray අවශ්‍ය අය 👇\n\nwa.me/94703374287' , mentions: participants.map(a => a.id)}, { quoted: m })
    
break  

case 'm-fb':
    if (!m.isGroup) return replay('bot only working group only')
    
Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/http%20injector/Mobitel/Mobitel%20Facebook.ehi' }, 
    mimetype: 'application/octet-stream',
    fileName: '💎Mobitel Facebook Bypass v2ray.ehi' },
    { quoted: m })
await Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/eV2ray/Mobitel%20Facebook%20Bypass%20v2ray.v2' }, 
    mimetype: 'application/octet-stream',
    fileName: '💎Mobitel Facebook Bypass v2ray.v2' },
    { quoted: m })
    
await Anony.sendMessage(m.chat, { text : '*🍁NetMod Syana app v2ray config🍁* \n\n nm-vmess://XKLkNHvxyc3NKiv0uGV3144uNWzqMCGzBRVTc2UWHW8qkh8G/emGQW//9al6wvU79+HMFJpjaRd930l4a4O8iPvdkkiyf/N6Bt7HqNJfqo4WeYaUAQU+dL8icfCebr/wYe2nPySXUvmChWmrtdWCP0rX4rlGgqw9iuoFeI7ksgq0GvnqpPgBGaGkKotr3NCP0GTjhrB/JcMkiJRbRKeTIW3SJKaJVXaEjn8hXRizR/hc7k9dwN9Be0DaTmHVmVnZAJxKH8TXDgoXRfgOGh2XaeiDfHlhVId4iW4id2FSgE8='}, { quoted: m })
await Anony.sendMessage(m.chat, { text : q ? q : '🫅🏻 HIGHSPEED Paid ZERO V2ray Available at low price 🫅🏻\n\n*🔰MOBITEL ZERO V2ray RS.100.00*\n\n*🔰AIRTEL ZERO V2ray RS.100.00*\n\n*🔰ALL V2ray ONE MONTH WORKING*\n\n*✅Gaming support*\n\n*✅Whatsapp call working*\n\n*✅LOW PING 60-70*\n\n*🤝මාසයක උපරිම වගකීමක් දෙනු ලැබේ.*\n\nV2ray අවශ්‍ය අය 👇\n\nwa.me/94703374287' , mentions: participants.map(a => a.id)}, { quoted: m })
    
break 

case 'm-wh':
    if (!m.isGroup) return replay('bot only working group only')
    
Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/http%20injector/Mobitel/Mobitel%20Whatsapp.ehi' }, 
    mimetype: 'application/octet-stream',
    fileName: '🎁Mobitel Whatsapp Bypass v2ray.ehi' },
    { quoted: m })
await Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/eV2ray/Mobitel%20Whatsapp%20bypass%20v2ray.v2' }, 
    mimetype: 'application/octet-stream',
    fileName: '🎁Mobitel Whatsapp Bypass v2ray.v2' },
    { quoted: m })
    
await Anony.sendMessage(m.chat, { text : '*🍁NetMod Syana app v2ray config🍁* \n\n vmess://eyJhZGQiOiIxMzIuMTQ1LjI0LjIxMiIsImFpZCI6IjAiLCJob3N0IjoiIiwiaWQiOiJlZjc2OThkNS04ZmFhLTQ4ZDItZWM0MC01YTRkNTIxMjkyYmMiLCJuZXQiOiJ0Y3AiLCJwYXRoIjoiIiwicG9ydCI6IjQ0MyIsInBzIjoiTU9CSVRFTCBXSEFUU0FQUCBCWVBBU1MgIiwidGxzIjoidGxzIiwic25pIjoibS5saW5rZWRpbi5jb20iLCJ0eXBlIjoibm9uZSIsInYiOiIyIn0='}, { quoted: m })
await Anony.sendMessage(m.chat, { text : q ? q : '🫅🏻 HIGHSPEED Paid ZERO V2ray Available at low price 🫅🏻\n\n*🔰MOBITEL ZERO V2ray RS.100.00*\n\n*🔰AIRTEL ZERO V2ray RS.100.00*\n\n*🔰ALL V2ray ONE MONTH WORKING*\n\n*✅Gaming support*\n\n*✅Whatsapp call working*\n\n*✅LOW PING 60-70*\n\n*🤝මාසයක උපරිම වගකීමක් දෙනු ලැබේ.*\n\nV2ray අවශ්‍ය අය 👇\n\nwa.me/94703374287' , mentions: participants.map(a => a.id)}, { quoted: m })
    
break

//m-zero-start
case 'm-ze':
    if (!m.isGroup) return replay('bot only working group only')
    
Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/http%20injector/Mobitel/Mobitel%20Zero.ehi' }, 
    mimetype: 'application/octet-stream',
    fileName: '😎 Mobitel Zero v2ray.ehi' },
    { quoted: m })
await Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/eV2ray/Mobitel%20zero.v2' }, 
    mimetype: 'application/octet-stream',
    fileName: '😎 Mobitel Zero v2ray.v2' },
    { quoted: m })
    

await Anony.sendMessage(m.chat, { text : '*🍁NetMod Syana app v2ray config🍁* \n\n nm-vmess://XKLkNHvxyc3NKiv0uGV3144uNWzqMCGzBRVTc2UWHW9TmBfrSHY90GgdULk3tTeJctOxMAV0DYT+7LzUxqE9+9Ie45C2OuX3sxBlTAwImWhFvKIpk7QfnJKd+MyZrWlQRb8oMoJwDzjnK5ydMBQ13SG3LKqL8U4mM0m5Dtck0eWyWB8ZHM1/i4J2XoaYmmC2O8ytgvLXUl5Cb5dAlUdc764oGGFOnqQ9Ykem5zDyTHqUKcteTslqG6XXaXZCZ+87U5t5gCpLFHJK7g1tRpAmiiCHS08ew5CAVVoAN5yw8VM='}, { quoted: m })

await Anony.sendMessage(m.chat, { text : q ? q : '🫅🏻 HIGHSPEED Paid ZERO V2ray Available at low price 🫅🏻\n\n*🔰MOBITEL ZERO V2ray RS.100.00*\n\n*🔰AIRTEL ZERO V2ray RS.100.00*\n\n*🔰ALL V2ray ONE MONTH WORKING*\n\n*✅Gaming support*\n\n*✅Whatsapp call working*\n\n*✅LOW PING 60-70*\n\n*🤝මාසයක උපරිම වගකීමක් දෙනු ලැබේ.*\n\nV2ray අවශ්‍ය අය 👇\n\nwa.me/94703374287' , mentions: participants.map(a => a.id)}, { quoted: m })
break

//--------end-mibitel---------//


case 'app': 
if (!m.isGroup) return replay('bot only working group only')
{

    const buttons = [
     {buttonId: 'http-apk', buttonText: {displayText: '🤩 HTTP Injector'}, type: 1},
     {buttonId: 'netmod-apk', buttonText: {displayText: '🥰 NetMod syna'}, type: 1},
     {buttonId: 'ev2ray-apk', buttonText: {displayText: '😍 e-v2ray'}, type: 1}
   
   ]
   
   const buttonMessage = {
       image: {url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/app_logo.png'},
       caption:"*ඔයාලට අපි දෙන file මේ App වලට import කරලා use කරන්න පුලුවන් ඔයාට ඕන app එක තෝරන්න.😍*",
       footer: "🍁𝚂𝙴𝙻𝙴𝙲𝚃 𝚈𝙾𝚄𝚁 𝙰𝙿𝙿🍁",
       buttons: buttons,
       headerType: 4
   }
   Anony.sendMessage(m.chat, buttonMessage, { quoted: m })
   }
break

case 'http-apk':
    if (!m.isGroup) return replay('bot only working group only')    
{
    
          
Anony.sendMessage(m.chat, { document: { 
    url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/app/HTTP%20Injector.apk' }, 
    mimetype: 'application/vnd.android.package-archive', 
    fileName: 'Http Injector.apk' }, { quoted: m })

    await Anony.sendMessage(m.chat, { document: { 
        url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/app/V2Ray%20plugin%20for%20HTTP%20Injector.apk' }, 
        mimetype: 'application/vnd.android.package-archive', 
        fileName: 'V2Ray plugin for HTTP Injector.apk' }, { quoted: m })
}

break

case 'netmod-apk': 
if (!m.isGroup) return replay('bot only working group only')
{         
    Anony.sendMessage(m.chat, { document: { 
        url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/app/NetMod%20Syna.apk' }, 
        mimetype: 'application/vnd.android.package-archive', 
        fileName: 'NetMod Syna.apk' }, { quoted: m })
    
}
break
case 'ev2ray-apk': 
if (!m.isGroup) return replay('bot only working group only')
{         
    Anony.sendMessage(m.chat, { document: { 
        url: 'https://admin.firemovieshub.ml/disk1/admin/ehi/app/e-V2ray.apk' }, 
        mimetype: 'application/vnd.android.package-archive', 
        fileName: 'e-v2ray.apk' }, { quoted: m })
    
}
    
    break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
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
		    Anony.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
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
