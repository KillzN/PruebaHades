import*as _0x460f63 from'@whiskeysockets/baileys';const handler=async(_0x531d42,{conn:_0x5d7df2,text:_0x458d2a})=>{const [,_0x2b295f]=_0x458d2a['match'](/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i)||[];if(!_0x2b295f)throw'*[❗]\x20Ingrese\x20el\x20link\x20de\x20un\x20grupo\x20de\x20WhatsApp.*';const _0x43e062=await _0x5d7df2['query']({'tag':'iq','attrs':{'type':'get','xmlns':'w:g2','to':'@g.us'},'content':[{'tag':'invite','attrs':{'code':_0x2b295f}}]}),_0x4792c4=extractGroupMetadata(_0x43e062),_0x3e5d29='*⫹⫺\x20ID:*\x20'+_0x4792c4['id']+'\x0a*⫹⫺\x20Nombre:*\x20'+_0x4792c4['subject']+'\x0a*⫹⫺\x20Fecha\x20de\x20creación:*\x20'+_0x4792c4['creation']+'\x0a*⫹⫺\x20Creador:*\x20'+_0x4792c4['owner']+'\x0a*⫹⫺\x20Descripción:*\x0a'+_0x4792c4['desc'],_0x668127=await _0x5d7df2['profilePictureUrl'](_0x4792c4['id'],'image')['catch'](console['error']);if(_0x668127)return _0x5d7df2['sendMessage'](_0x531d42['chat'],{'image':{'url':_0x668127},'caption':_0x3e5d29},{'quoted':_0x531d42});const _0x33f103='*⫹⫺\x20ID:*\x20'+_0x4792c4['id']+'\x0a*⫹⫺\x20Nombre:*\x20'+_0x4792c4['subject']+'\x0a*⫹⫺\x20Fecha\x20de\x20creación:*\x20'+_0x4792c4['creation']+'\x0a*⫹⫺\x20Creador:*\x20'+_0x4792c4['owner']+'\x0a*⫹⫺\x20Descripción:*\x0a'+_0x4792c4['desc'];await _0x5d7df2['reply'](_0x531d42['chat'],_0x33f103,_0x531d42);};handler['command']=/^(inspect)$/i,handler['register']=!![],handler['group']=!![];export default handler;const extractGroupMetadata=_0x3289b2=>{const _0x107ecf=_0x460f63['getBinaryNodeChild'](_0x3289b2,'group'),_0x1a87f9=_0x460f63['getBinaryNodeChild'](_0x107ecf,'description');let _0x4aba07;if(_0x1a87f9)_0x4aba07=_0x460f63['getBinaryNodeChild'](_0x1a87f9,'body')?.['content'];const _0x12da62={'id':_0x107ecf['attrs']['id']['includes']('@')?_0x107ecf['attrs']['id']:_0x460f63['jidEncode'](_0x107ecf['attrs']['id'],'g.us'),'subject':_0x107ecf['attrs']['subject'],'creation':new Date(+_0x107ecf['attrs']['creation']*0x3e8)['toLocaleString']('es-MX',{'timeZone':'America/Mexico_City'}),'owner':_0x107ecf['attrs']['creator']?'wa.me/'+_0x460f63['jidNormalizedUser'](_0x107ecf['attrs']['creator'])['split']('@')[0x0]:_0x107ecf['attrs']['id']['includes']('-')?'wa.me/'+_0x107ecf['attrs']['id']['split']('-')[0x0]:'','desc':_0x4aba07};return _0x12da62;};