const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("untimeout").setDescription("Remove a timeout").addUserOption(o => o.setName("user").setDescription("Member").setRequired(true)).setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
  async execute(interaction) {
    const member = interaction.options.getMember("user");
    await member.timeout(null);
    await interaction.reply(`✅ Timeout removed from ${member.user.tag}.`);
  }
};
