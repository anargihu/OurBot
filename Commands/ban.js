const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("ban").setDescription("Ban a member").addUserOption(o => o.setName("user").setDescription("Member").setRequired(true)).addStringOption(o => o.setName("reason").setDescription("Reason")).setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  async execute(interaction) {
    const member = interaction.options.getMember("user");
    if (!member?.bannable) return interaction.reply("❌ I can't ban that member.");
    await member.ban({ reason: interaction.options.getString("reason") || "No reason provided" });
    await interaction.reply(`🔨 Banned ${member.user.tag}.`);
  }
};
