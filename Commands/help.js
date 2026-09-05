const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("help").setDescription("Show OurBot commands"),
  async execute(interaction) {
    await interaction.reply("🤖 OurBot commands: /ping /help /serverinfo /userinfo /avatar /botinfo /uptime /say /announce /embed /clear /kick /ban /unban /timeout /untimeout /warn /warnings /unwarn /lock /unlock /slowmode /purge /nick /role /addrole /removerole /mute /unmute /poll /choose /coinflip /dice /eightball /remind /invite /stats /membercount /channels /roles /commands");
  }
};