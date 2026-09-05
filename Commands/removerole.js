const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("removerole").setDescription("Remove a role").addUserOption(o => o.setName("user").setDescription("Member").setRequired(true)).addRoleOption(o => o.setName("role").setDescription("Role").setRequired(true)).setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),
  async execute(interaction) {
    const member = interaction.options.getMember("user");
    const role = interaction.options.getRole("role");
    await member.roles.remove(role);
    await interaction.reply(`✅ Removed ${role} from ${member.user.tag}.`);
  }
};
