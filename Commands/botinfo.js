const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("botinfo").setDescription("Show OurBot information"),
  async execute(interaction, client) {
    await interaction.reply(`🤖 **OurBot**\nServers: ${client.guilds.cache.size}\nUsers: ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\nNode: ${process.version}`);
  }
};
