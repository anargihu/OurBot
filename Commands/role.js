const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("role").setDescription("Show a role").addRoleOption(o => o.setName("role").setDescription("Role").setRequired(true)),
  async execute(interaction) {
    const role = interaction.options.getRole("role");
    await interaction.reply(`🎭 ${role} — ${role.members.size} members`);
  }
};
