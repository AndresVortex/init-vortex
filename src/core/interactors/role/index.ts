import RoleDataSource from "../../../dataSources/role.datasource";
import CreateRole from "./createRole.interactor";


const roleRepository = new RoleDataSource()


export const createRol = new CreateRole(roleRepository)
