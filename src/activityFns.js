export function prefix(location, ...prefixes) {
	return prefixes.some(
		prefix => (
			location.href.indexOf(`${location.origin}/${prefix}`) !== -1
		)
	)
}

export function navigation() {
	return true;
}

export function main(location) {
	return location.href === 'http://localhost:3000/';
}

export function client(location) {
	return prefix(location, 'client')
}

export function info(location) {
	return prefix(location, 'info')
}
