const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("unban").setDescription("Unban a user").addStringOption(o => o.setName("user").setDescription("User ID").setRequired(true)).setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  async execute(interaction) {
    await interaction.guild.members.unban(interaction.options.getString("user"));
    await interaction.reply("✅ User unbanned.");
  }
};
