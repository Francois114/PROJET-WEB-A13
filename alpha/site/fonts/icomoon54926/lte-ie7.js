/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-heart' : '&#xe000;',
			'icon-heart-2' : '&#xe001;',
			'icon-comment' : '&#xe004;',
			'icon-export' : '&#xe003;',
			'icon-pencil' : '&#xe002;',
			'icon-cross' : '&#xe005;',
			'icon-plus' : '&#xe006;',
			'icon-user' : '&#xe007;',
			'icon-mail' : '&#xe008;',
			'icon-bell' : '&#xe009;',
			'icon-profile' : '&#xe00a;'
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