const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("timeout").setDescription("Timeout a member").addUserOption(o => o.setName("user").setDescription("Member").setRequired(true)).addIntegerOption(o => o.setName("minutes").setDescription("Minutes").setMinValue(1).setMaxValue(40320).setRequired(true)).setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
  async execute(interaction) {
    const member = interaction.options.getMember("user");
    await member.timeout(interaction.options.getInteger("minutes") * 60000);
    await interaction.reply(`⏳ Timed out ${member.user.tag}.`);
  }
};
