const handler=async(_0xfae9f0,{conn:_0x43f2ae,text:_0x4e6d37,args:_0x9bd4e0,usedPrefix:_0x500438,command:_0x794d2e})=>{const _0x192a43='*[❗]\x20Uso\x20incorrecto\x20del\x20comando.*\x0a\x0a*Ejemplo\x20de\x20uso\x20válido:*\x0a*'+(_0x500438+_0x794d2e)+'\x20@'+_0xfae9f0['sender']['split']('@')[0x0]+'*\x0a*\x20'+(_0x500438+_0x794d2e)+'\x20'+_0xfae9f0['sender']['split']('@')[0x0]+'*\x0a*◉\x20'+(_0x500438+_0x794d2e)+'\x20<mensaje\x20citado>*',_0x3bc80e=_0xfae9f0['mentionedJid'][0x0]?_0xfae9f0['mentionedJid'][0x0]:_0xfae9f0['quoted']?_0xfae9f0['quoted']['sender']:_0x4e6d37?_0x4e6d37['replace'](/[^0-9]/g,'')+'@s.whatsapp.net':![];if(!_0x3bc80e)return _0x43f2ae['reply'](_0xfae9f0['chat'],_0x192a43,_0xfae9f0,{'mentions':[_0xfae9f0['sender']]});switch(_0x794d2e){case'addowner':const _0x1345fa=_0x3bc80e;global['owner']['push']([_0x1345fa]),await _0x43f2ae['reply'](_0xfae9f0['chat'],'*[❗]\x20Nuevo\x20número\x20agregado\x20con\x20éxito\x20a\x20la\x20lista\x20de\x20owners.*',_0xfae9f0);break;case'delowner':const _0x3266ed=_0x3bc80e,_0x46947f=global['owner']['findIndex'](_0x1ec71c=>_0x1ec71c[0x0]===_0x3266ed);_0x46947f!==-0x1?(global['owner']['splice'](_0x46947f,0x1),await _0x43f2ae['reply'](_0xfae9f0['chat'],'*[❗]\x20El\x20número\x20fue\x20eliminado\x20con\x20éxito\x20de\x20la\x20lista\x20de\x20owners.*',_0xfae9f0)):await _0x43f2ae['reply'](_0xfae9f0['chat'],'*[❗]\x20El\x20número\x20ingresado\x20no\x20existe\x20en\x20la\x20lista\x20de\x20owners.*',_0xfae9f0);break;}};handler['command']=/^(addowner|delowner)$/i,handler['rowner']=!![],handler['register']=!![],handler['group']=!![];export default handler;