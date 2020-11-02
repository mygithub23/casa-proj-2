import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IDepartment } from './departments';

export class DepartmentData implements InMemoryDbService {

  createDb(): { departments: IDepartment[]} {
    const departments: IDepartment[] = [
      {
        id:       1,
        departmentName:     'Network',
        departmentManager:  'Adam',
        departmentLocation: 'Paris'
      },
      {
        id: 2,
        departmentName: 'DevOps',
        departmentManager: 'Leila',
        departmentLocation: 'Rome'
      },
      {
        id: 1,
        departmentName: 'Database',
        departmentManager: 'Fatima',
        departmentLocation: 'France'

      },
      {
        id: 1,
        departmentName: 'IT Support',
        departmentManager: 'Ryan',
        departmentLocation: 'Casablanca'
      }
    ];
    return { departments };
  }
}
