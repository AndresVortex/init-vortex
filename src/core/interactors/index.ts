import saveUser from "./saveUser.interactor";
import UpdateUsers from "./updateUser.interactor";

import Login from './login.interactor';
import UserDataSource from '../../dataSources/user.datasource';
import EmailNotifier from '../../dataSources/emailNotify.datasource';
import AuthDataSource from '../../dataSources/auth.datasource';

const userRepository = new UserDataSource()
const authRepository = new AuthDataSource()
const notifierRepository = new EmailNotifier()

export const userUpdates = new UpdateUsers(userRepository)
export const login = new Login(authRepository, userRepository)

export default saveUser(userRepository,authRepository, notifierRepository)
