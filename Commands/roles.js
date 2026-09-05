const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("roles").setDescription("Show server roles"),
  async execute(interaction) {
    const roles = interaction.guild.roles.cache.filter(r => r.id !== interaction.guild.id).map(r => r.name);
    await interaction.reply(`🎭 Roles (${roles.length}):\n${roles.slice(0, 50).join(", ") || "None"}`);
  }
};
