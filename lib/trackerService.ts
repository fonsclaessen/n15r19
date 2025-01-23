export async function fetchUserDataTracker(userId: number) {
  const response = await fetch(`https://192.168.2.31/user/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  return response.json();
}
