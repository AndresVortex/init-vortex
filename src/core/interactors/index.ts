import saveUser from "./saveUser.interactor";
import UserDataSource from '../../dataSources/user.datasource';
import EmailNotifier from '../../dataSources/emailNotify.datasource';
import AuthDataSource from '../../dataSources/auth.datasource';

const userRepository = new UserDataSource()
const authRepository = new AuthDataSource()
const notifierRepository = new EmailNotifier()

export default saveUser(userRepository,authRepository, notifierRepository)
