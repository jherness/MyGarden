export const postToDb = async (data, route) => {
  try {
    await fetch(`http://192.168.1.192:3000/${route}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log("Status " + response.status +" Posted");
    });
  } catch (error) {
    console.error(error);
  }
};
