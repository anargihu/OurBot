const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("mute").setDescription("Mute a member").addUserOption(o => o.setName("user").setDescription("Member").setRequired(true)).setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
  async execute(interaction) {
    const member = interaction.options.getMember("user");
    await member.timeout(3600000);
    await interaction.reply(`🔇 ${member.user.tag} muted for 1 hour.`);
  }
};
