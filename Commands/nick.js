const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("nick").setDescription("Change a member's nickname").addUserOption(o => o.setName("user").setDescription("Member").setRequired(true)).addStringOption(o => o.setName("nickname").setDescription("Nickname").setRequired(true)).setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames),
  async execute(interaction) {
    const member = interaction.options.getMember("user");
    await member.setNickname(interaction.options.getString("nickname"));
    await interaction.reply(`🏷️ Nickname changed.`);
  }
};
