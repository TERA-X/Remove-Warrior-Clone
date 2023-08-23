exports.NetworkMod = function(mod) {
	mod.command.add('warrfps', ()=>{
		mod.settings.enabled = !mod.settings.enabled;
		mod.command.message("Warrior fps fix enabled? :" + mod.settings.enabled)
	})
	mod.hook("S_ABNORMALITY_BEGIN", '*', { order : -Infinity, filter : { fake : null } }, e=>{
		if(!mod.settings.enabled) return;
		if(e.id == 103132 ) return false;
	})
	mod.hook("S_ABNORMALITY_REFRESH", '*', { order : -Infinity, filter : { fake : null } }, e=>{
		if(!mod.settings.enabled) return;
		if(e.id == 103132 ) return false;
	})
		
};
