const handler=async(_0x2c79cc,{conn:_0x4889ae,usedprefix:_0x191f0e,text:_0x507087})=>{const _0x5adae1=_0x2c79cc['quoted']?_0x2c79cc['quoted']['sender']:_0x2c79cc['mentionedJid']&&_0x2c79cc['mentionedJid'][0x0]?_0x2c79cc['mentionedJid'][0x0]:_0x2c79cc['fromMe']?_0x4889ae['user']['jid']:_0x2c79cc['sender'];_0x4889ae['sendFile'](_0x2c79cc['chat'],global['API']('https://some-random-api.com','/canvas/pixelate',{'avatar':await _0x4889ae['profilePictureUrl'](_0x2c79cc['sender'],'image')['catch'](_0x451392=>'https://telegra.ph/file/24fa902ead26340f3df2c.png'),'comment':_0x507087,'username':_0x4889ae['getName'](_0x2c79cc['sender'])}),'error.png','*¡¡𝙸𝙼𝙰𝙶𝙴𝙽\x20𝙿𝙸𝚇𝙴𝙻𝙴𝙰𝙳𝙰\x20𝙲𝙾𝙽\x20𝙴𝚇𝙸𝚃𝙾!!*',_0x2c79cc);};handler['help']=['pixel','difuminar'],handler['tags']=['maker'],handler['command']=/^(pixel|pixelar|difuminar)$/i,handler['register']=!![],handler['group']=!![];export default handler;