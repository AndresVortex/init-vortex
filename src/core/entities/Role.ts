
export default interface IRole  {
  id: number,
  name: string,
  description: string,
  createdAt?: Date,
  updatedAt?: Date,
}

export interface CreateRole extends Omit<IRole, 'id' | 'createdAt' | 'updatedAt' > {
  //añadir relaciones
}

export interface UpdateRole extends Partial<CreateRole> {}
