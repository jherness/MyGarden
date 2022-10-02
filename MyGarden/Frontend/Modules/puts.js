export const putToDb = async (data, route) => {
  try {
    await fetch(`http://10.57.0.195:3000/${route}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log("Status " + response.status);
    });
  } catch (error) {
    console.error(error);
  }
};
