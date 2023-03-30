const { EmbedBuilder } = require('discord.js');

function createEmbed(embedDTO) {
	const embed = new EmbedBuilder()
		.setTitle(embedDTO.title)
		.addFields(embedDTO.fields)
		.setDescription(embedDTO.description)
		.setColor(embedDTO.colour)
		.setFooter({ text: embedDTO.footer })
		.setTimestamp();
	if (embedDTO.image) {
		embed.setImage(embedDTO.image);
	}
	if (embedDTO.author) {
		embed.setAuthor({ name: embedDTO.author });
	}

	return embed;
}

function createBanEmbed(recievedEmbedDTO, colour = generateRandomColour()) {
	if (recievedEmbedDTO.sentDM === false) {
		embedDTO.fields[2] = {
			name: 'No DM sent',
			value: 'No DM has been sent because user has DMs closed',
		};
	}
	return createEmbed(embedDTO);
}

function createKickEmbed(recievedEmbedDTO, colour = generateRandomColour()) {
	const embedDTO = {
		title: 'Kick',
		fields: [
			{
				name: 'User kicked',
				value: `${recievedEmbedDTO.kickedUser}`,
				inline: true,
			},
			{
				name: 'Kicked by',
				value: `${recievedEmbedDTO.interaction.member.user}`,
				inline: true,
			},
		],
		description: `${recievedEmbedDTO.kickedUser} was kicked by ${recievedEmbedDTO.interaction.member.user}`,
		footer: 'Someone was kicked',
		author: recievedEmbedDTO.interaction.user.username,
		colour,
	};

	if (recievedEmbedDTO.sentDM === false) {
		embedDTO.fields[2] = {
			name: 'No DM sent',
			value: 'No DM has been sent because user has DMs closed',
		};
	}
	return createEmbed(embedDTO);
}

function createCatEmbed(recievedEmbedDTO, colour = generateRandomColour()) {
	const embedDTO = {
		title: 'Here a cat image',
		fields: [
			{
				name: 'Bot',
				value: recievedEmbedDTO.client.user.username,
			},
		],
		description: 'A cat',
		footer: 'Image from https://thecatapi.com',
		image: recievedEmbedDTO.image,
		colour,
	};
	return createEmbed(embedDTO);
}

function createCommandListEmbed(recievedEmbedDTO, colour = generateRandomColour()) {
	const embedDTO = {
		title: 'List of commands',
		fields: [
			{
				name: 'Test commands',
				value: `${recievedEmbedDTO.testCommands.join('\n')}`,
				inline: true,
			},
			{
				name: 'Admin commands',
				value: `${recievedEmbedDTO.adminCommands.join('\n')}`,
				inline: true,
			},
		],
		description: 'All commands on this server',
		footer: 'Beep boop, at your service!',
		colour,
	};

	return createEmbed(embedDTO);
}
function generateRandomColour() {
	return Math.floor(Math.random() * 16777215).toString(16);
}
module.exports = {
	createBanEmbed,
	createKickEmbed,
	createCatEmbed,
	createCommandListEmbed,
};
