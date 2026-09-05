const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("verify")
    .setDescription("Verify yourself"),

  async execute(interaction) {
    const member = interaction.member;

    const verifyChannel = interaction.guild.channels.cache.find(
      channel => channel.name.toLowerCase() === "verify"
    );

    if (!verifyChannel || interaction.channelId !== verifyChannel.id) {
      return interaction.reply({
        content: "❌ You can only use `/verify` in the verification channel.",
        ephemeral: true
      });
    }

    const unverifiedRole = interaction.guild.roles.cache.find(
      role => role.name.toLowerCase() === "unverified"
    );

    const verifiedRole = interaction.guild.roles.cache.find(
      role => role.name.toLowerCase() === "verified"
    );

    if (!unverifiedRole || !verifiedRole) {
      return interaction.reply({
        content: "❌ The **Unverified** or **Verified** role is missing.",
        ephemeral: true
      });
    }

    if (!member.roles.cache.has(unverifiedRole.id)) {
      return interaction.reply({
        content: "✅ You are already verified!",
        ephemeral: true
      });
    }

    await member.roles.remove(unverifiedRole);
    await member.roles.add(verifiedRole);

    await interaction.reply({
      content: "✅ You are now verified! Welcome to the server! 🎉",
      ephemeral: true
    });
  }
};
