export const handleUserInitials = (name) => {
  const first = name?.split(" ")[0][0];
  const last = name?.split(" ")[1][0];
  console.log(`${first} ${last}`);
};
