client.on('messageCreate', async (message) => {
  if (message.author.bot || !message.content.startsWith('t ')) return;

  const args = message.content.slice(2).trim().split(/ +/);
  const targetMember = message.mentions.members.first();
  const timeInMinutes = parseInt(args[1]);

  if (!targetMember || isNaN(timeInMinutes) || timeInMinutes <= 0) return;
  if (!message.member.permissions.has('ModerateMembers')) return;

  try {
    await targetMember.timeout(timeInMinutes * 60 * 1000);
    message.channel.send(`✅ تم إعطاء **${targetMember.user.tag}** تايم أوت لمدة **${timeInMinutes}** دقيقة.`);
  } catch (error) {
    console.error(error);
  }
});
