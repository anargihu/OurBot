const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("addrole").setDescription("Add a role").addUserOption(o => o.setName("user").setDescription("Member").setRequired(true)).addRoleOption(o => o.setName("role").setDescription("Role").setRequired(true)).setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),
  async execute(interaction) {
    const member = interaction.options.getMember("user");
    const role = interaction.options.getRole("role");
    await member.roles.add(role);
    await interaction.reply(`✅ Added ${role} to ${member.user.tag}.`);
  }
};
