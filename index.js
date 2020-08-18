const Discord = require('discord.js');
const Canvas = require('canvas');
const client = new Discord.Client();
client.on('ready', () => {
	console.log('Ready!')
});

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.id === 'The-Channel-Id');
	if (!channel) return;
	const canvas = Canvas.createCanvas(490, 231);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage('http://bl3rbe.net/up/KpU0Cye64pii.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.font = 'bold 30px kathen';
	ctx.fillStyle = '#000000';
	ctx.fillText(member.displayName, canvas.width / 2.73, canvas.height / 1.68);

	ctx.font = 'bold 30px kathen';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(member.displayName, canvas.width / 2.7, canvas.height / 1.7);

    ctx.beginPath();
    ctx.arc(380, 120, 75.3, -25.6, Math.PI * 2, true);
    ctx.closePath();
	ctx.clip();
	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 305, 45, 150, 150);
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome.png');
	channel.send(attachment);
});


client.login('Your-Bot-Token')