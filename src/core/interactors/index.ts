import saveUser from "../interactors/users/saveUser.interactor";
import UpdateUsers from "../interactors/users/updateUser.interactor";

import Login from './login/login.interactor';
import UserDataSource from '../../dataSources/user.datasource';
import EmailNotifier from '../../dataSources/emailNotify.datasource';
import AuthDataSource from '../../dataSources/auth.datasource';
import ListUsers from './users/getUsers.interactor';

export const userRepository = new UserDataSource()
const authRepository = new AuthDataSource()
const notifierRepository = new EmailNotifier()



export const userUpdates = new UpdateUsers(userRepository)
export const login = new Login(authRepository, userRepository)
export const listUser = new ListUsers(userRepository)


export default saveUser(userRepository,authRepository, notifierRepository)
