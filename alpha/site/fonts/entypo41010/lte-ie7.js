/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'entypo\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-mail' : '&#xe000;',
			'icon-pencil' : '&#xe001;',
			'icon-user' : '&#xe002;',
			'icon-users' : '&#xe003;',
			'icon-vcard' : '&#xe004;',
			'icon-export' : '&#xe005;',
			'icon-heart' : '&#xe006;',
			'icon-comment' : '&#xe007;',
			'icon-bell' : '&#xe008;',
			'icon-tools' : '&#xe009;',
			'icon-trophy' : '&#xe00a;',
			'icon-newspaper' : '&#xe00b;',
			'icon-cross' : '&#xe00c;',
			'icon-plus' : '&#xe00d;',
			'icon-folder' : '&#xe00e;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};