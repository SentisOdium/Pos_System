export type userObject = {
  id: string;
  name: string;
  email: string;
  contactNo: string;
  password: string; 
  description: string; 
  role: string; 
  [key: string]: string | number;// i dont know whats this for
  
};

export const tblHeaders =[
    { KEY: "name",          label: "Name" },
    { KEY: "email",         label: "Email" },
    { KEY: "contactNo",     label: "Contact No."},
    { KEY: "password",      label: "Password"},
    { KEY: "description",   label: "Description"},
    { KEY: "role",          label: "Role"},
    { KEY: "action",        label: "Action"},
  ]