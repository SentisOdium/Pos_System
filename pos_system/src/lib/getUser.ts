export async function getUser() {
  const res = await fetch("http://localhost:5000/api/user", {
    method: "GET",
    credentials: "include", // important for cookies
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data.user; // { id, name, email, role, ... }
}
