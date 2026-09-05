const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("warn")
    .setDescription("Warn a member")
    .addUserOption(o => o.setName("user").setDescription("Member").setRequired(true))
    .addStringOption(o => o.setName("reason").setDescription("Reason"))
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),

  async execute(interaction) {
    const user = interaction.options.getUser("user");
    const reason = interaction.options.getString("reason") || "No reason provided";

    try {
      await user.send(
        `⚠️ You have been warned in **${interaction.guild.name}**.\nReason: ${reason}`
      );

      await interaction.reply(`⚠️ **${user.tag}** has been warned. They were notified by DM.`);
    } catch {
      await interaction.reply(`⚠️ **${user.tag}** has been warned, but I couldn't send them a DM.`);
    }
  }
};
