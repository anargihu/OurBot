const { SlashCommandBuilder, PermissionFlagsBits, ChannelType } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ticket")
    .setDescription("Create a private support ticket"),

  async execute(interaction) {
    const existing = interaction.guild.channels.cache.find(
      channel => channel.name === `ticket-${interaction.user.id}`
    );

    if (existing) {
      return interaction.reply({
        content: `🎫 You already have a ticket: ${existing}`,
        ephemeral: true
      });
    }

    const channel = await interaction.guild.channels.create({
      name: `ticket-${interaction.user.id}`,
      type: ChannelType.GuildText,
      permissionOverwrites: [
        {
          id: interaction.guild.roles.everyone.id,
          deny: [PermissionFlagsBits.ViewChannel]
        },
        {
          id: interaction.user.id,
          allow: [
            PermissionFlagsBits.ViewChannel,
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.ReadMessageHistory
          ]
        }
      ]
    });

    await interaction.reply({
      content: `🎫 Your ticket has been created: ${channel}`,
      ephemeral: true
    });

    await channel.send(
      `🎫 **Support Ticket**\n\nWelcome ${interaction.user}! A staff member will help you soon.`
    );
  }
};
