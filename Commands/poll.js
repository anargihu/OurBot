const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("poll").setDescription("Create a poll").addStringOption(o => o.setName("question").setDescription("Question").setRequired(true)),
  async execute(interaction) {
    const msg = await interaction.reply({ content: `📊 **Poll:** ${interaction.options.getString("question")}\n\n👍 Yes\n👎 No`, fetchReply: true });
    await msg.react("👍");
    await msg.react("👎");
  }
};
