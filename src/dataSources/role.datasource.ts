import Role, { ICreateRole, IUpdateRole } from '../core/entities/Role';
import RoleRepository from '../core/repositories/roleRepository';
import RoleModel from '../db/models/role.model';
import boom from '@hapi/boom';


export default class RoleDataSource implements RoleRepository {
  async create(role: ICreateRole): Promise<Role> {

    const newRole = await RoleModel.create(role)

    return newRole

  }
  async getOne(id: number): Promise<Role> {
    const role = await RoleModel.findByPk(id, {include: ['users']})
    if(!role){
      throw boom.notFound('No se encuentra el rol')
    }

    return role
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
