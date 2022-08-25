import Role, { ICreateRole, IUpdateRole } from '../core/entities/Role';
import RoleRepository from '../core/repositories/roleRepository';
import RoleModel from '../db/models/role.model';


export default class RoleDataSource implements RoleRepository {
  async create(role: ICreateRole): Promise<Role> {

    const newRole = await RoleModel.create(role)

    return newRole

  }
  getOne(id: number): Promise<Role> {
    throw new Error('Method not implemented.');
  }
  get(): Promise<Role[]> {
    throw new Error('Method not implemented.');
  }
  update(id: number, change: IUpdateRole): Promise<Role> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): void {
    throw new Error('Method not implemented.');
  }

}
