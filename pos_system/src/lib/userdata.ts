export default function UserData(formData: FormData) {
  return {
    name: formData.get("name")?.toString().trim() || "",
    email: formData.get("email")?.toString().trim() || "",
    password: formData.get("email")?.toString().trim() || "",
  };
}
