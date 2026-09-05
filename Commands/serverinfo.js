const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("serverinfo").setDescription("Show server information"),
  async execute(interaction) {
    const g = interaction.guild;
    await interaction.reply(`🏠 **${g.name}**\nMembers: ${g.memberCount}\nOwner: <@${g.ownerId}>\nChannels: ${g.channels.cache.size}\nRoles: ${g.roles.cache.size}`);
  }
};