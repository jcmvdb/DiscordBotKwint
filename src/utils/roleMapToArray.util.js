function roleMapToArray(roleMap) {
	return (value = Array.from(roleMap).map(([id, role]) => role));
}

module.exports = { roleMapToArray };
