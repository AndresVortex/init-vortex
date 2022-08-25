import RoleDataSource from "../../../dataSources/role.datasource";
import CreateRole from "./createRole.interactor";
import DetailRole from "./getDetailRole.interactor";


const roleRepository = new RoleDataSource()


export const createRol = new CreateRole(roleRepository)
export const detailRole = new DetailRole(roleRepository)

