import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../components/signin/SignIn';
import SignUp from '../components/signup/SignUp';

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen options={{ headerTitle:'Test', headerShown: false }}  name='SigIn' component={SignIn} />
            <AuthStack.Screen name='SigUp' component={SignUp} />
        </AuthStack.Navigator>
    );
};
export default AuthRoutes;