function roleMapToArray(roleMap) {
	const value = Array.from(roleMap).map(([id, role]) => role);
	return value;
}

module.exports = { roleMapToArray };
