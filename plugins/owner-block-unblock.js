const handler=async(_0x58f4ad,{text:_0x2f9206,conn:_0x3bf450,usedPrefix:_0x10a6f5,command:_0x42e98c})=>{const _0x4bcae4='*[❗]\x20𝚄𝚂𝙾\x20𝙴𝚁𝚁𝙾𝙽𝙴𝙾,\x20𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\x0a*'+(_0x10a6f5+_0x42e98c)+'\x20@'+_0x58f4ad['sender']['split']('@')[0x0]+'*',_0x393be9=_0x58f4ad['mentionedJid'][0x0]?_0x58f4ad['mentionedJid'][0x0]:_0x58f4ad['quoted']?_0x58f4ad['quoted']['sender']:_0x2f9206?_0x2f9206['replace'](/[^0-9]/g,'')+'@s.whatsapp.net':![];if(!_0x393be9)_0x3bf450['reply'](_0x58f4ad['chat'],_0x4bcae4,_0x58f4ad,{'mentions':[_0x58f4ad['sender']]});const _0x4df1d1=[];switch(_0x42e98c){case'blok':case'block':if(_0x393be9)await _0x3bf450['updateBlockStatus'](_0x393be9,'block')['then'](()=>{_0x4df1d1['push'](_0x393be9);});else _0x3bf450['reply'](_0x58f4ad['chat'],_0x4bcae4,_0x58f4ad,{'mentions':[_0x58f4ad['sender']]});break;case'unblok':case'unblock':if(_0x393be9)await _0x3bf450['updateBlockStatus'](_0x393be9,'unblock')['then'](()=>{_0x4df1d1['push'](_0x393be9);});else _0x3bf450['reply'](_0x58f4ad['chat'],_0x4bcae4,_0x58f4ad,{'mentions':[_0x58f4ad['sender']]});break;}if(_0x4df1d1[0x0])_0x3bf450['reply'](_0x58f4ad['chat'],'*[❗]\x20𝚂𝙴\x20𝚄𝚂𝙾\x20𝙲𝙾𝙽\x20𝙴𝚇𝙸𝚃𝙾\x20𝙴𝙻\x20𝙲𝙾𝙼𝙰𝙽𝙳𝙾\x20'+_0x42e98c+'\x20𝙿𝙰𝚁𝙰\x20𝙴𝙻\x20𝚄𝚂𝚄𝙰𝚁𝙸𝙾/𝙰\x20'+(_0x4df1d1?''+_0x4df1d1['map'](_0x480d5a=>'@'+_0x480d5a['split']('@')[0x0]):'')+'*',_0x58f4ad,{'mentions':_0x4df1d1});};handler['command']=/^(block|unblock)$/i,handler['rowner']=!![],handler['register']=!![],handler['group']=!![];export default handler;