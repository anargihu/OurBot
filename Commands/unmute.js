const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("unmute").setDescription("Unmute a member").addUserOption(o => o.setName("user").setDescription("Member").setRequired(true)).setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
  async execute(interaction) {
    const member = interaction.options.getMember("user");
    await member.timeout(null);
    await interaction.reply(`🔊 ${member.user.tag} unmuted.`);
  }
};
