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
export const tblHeaders =
[
    { KEY: "name",          label: "Name",          sortable: true  },
    { KEY: "email",         label: "Email",         sortable: true  },
    { KEY: "contactNo",     label: "Contact No.",   sortable: true  },
    { KEY: "password",      label: "Password",      sortable: true  },
    { KEY: "description",   label: "Description",   sortable: true  },
    { KEY: "role",          label: "Role",          sortable: true  },
    { KEY: "action",        label: "Action",        sortable: false },
]

export type menuObject = {
  id:          string;
  sku:         string;
  item:        string;
  category:    string;
  quantity:    string; 
  price:       string; 
  description: string; 
};

export const tblMenuHeaders =
[
    { KEY: "sku",          label: "Sku",          sortable: true  },
    { KEY: "item",         label: "Item",         sortable: true  },
    { KEY: "category",     label: "Category",     sortable: true  },
    { KEY: "quantity",     label: "Quantity",     sortable: true  },
    { KEY: "price",        label: "Price",        sortable: true  },
    { KEY: "description",  label: "Description",  sortable: true  },
    { KEY: "action",       label: "Action",       sortable: false },
]

export type FooterProps = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  setLimit: (limit: number) => void;
}

export type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

export type SearchQueryProps = {
  setSearchQuery: (query: string) => void;
  setPage: (page: number) => void;
}

export type SetRowsProps = {
  setLimit: (limit: number) => void;
  setPage: (page: number) => void;
}

export type FormProps = {
    mode: "add" | "update";
    id?: string;
    onSuccess?: () => void;
    fetchData?: () => void; 
}
