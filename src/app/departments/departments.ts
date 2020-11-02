
/* Define the Department entity */
export interface IDepartment {
  id: number;
  departmentName: string;
  departmentManager: string;
  departmentLocation: string;
}

export interface DepartmentRec {
  Department: IDepartment;
  error?: any;
}
