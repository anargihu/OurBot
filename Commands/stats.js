const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("stats").setDescription("Show server statistics"),
  async execute(interaction) {
    const g = interaction.guild;
    await interaction.reply(`📊 **${g.name} Stats**\n👥 Members: ${g.memberCount}\n💬 Channels: ${g.channels.cache.size}\n🎭 Roles: ${g.roles.cache.size}\n😀 Emojis: ${g.emojis.cache.size}`);
  }
};
