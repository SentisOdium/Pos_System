export type userObject = {
  id:           string;
  name:         string;
  email:        string;
  contactNo:    string;
  password:     string; 
  description:  string; 
  role:         string; 
};

export type User= {
  name: string;
  email: string;
  password: string;
}
export const tblHeaders =[
    { KEY: "name",          label: "Name",          sortable: true  },
    { KEY: "email",         label: "Email",         sortable: true  },
    { KEY: "contactNo",     label: "Contact No.",   sortable: true  },
    { KEY: "password",      label: "Password",      sortable: true  },
    { KEY: "description",   label: "Description",   sortable: true  },
    { KEY: "role",          label: "Role",          sortable: true  },
    { KEY: "action",        label: "Action",        sortable: false },
  ]