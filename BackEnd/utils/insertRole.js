import Roles from "../model/rolesModel.js";

const insertRoles = async () => {
  const rolesData = [
    { role_name: "Manager", role_number: 1 },
    { role_name: "Supervisor", role_number: 2 },
    { role_name: "Worker", role_number: 3 },
  ];

  try {
    for (const role of rolesData) {
      const [roleRecord, created] = await Roles.findOrCreate({
        where: { role_number: role.role_number },
        defaults: { role_name: role.role_name },
      });

      if (created) {
        console.log(`Inserted role: ${role.role_name}`);
      } else {
        console.log(`Role already exists: ${role.role_name}`);
      }
    }

    console.log("Role insertion/check completed.");
  } catch (error) {
    console.error("Error inserting roles:", error);
  }
};

export default insertRoles;

