const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("kick").setDescription("Kick a member").addUserOption(o => o.setName("user").setDescription("Member").setRequired(true)).addStringOption(o => o.setName("reason").setDescription("Reason")).setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
  async execute(interaction) {
    const member = interaction.options.getMember("user");
    if (!member?.kickable) return interaction.reply("❌ I can't kick that member.");
    await member.kick(interaction.options.getString("reason") || "No reason provided");
    await interaction.reply(`❌ Kicked ${member.user.tag}.`);
  }
};
