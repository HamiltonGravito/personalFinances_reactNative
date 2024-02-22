import 'react-native-gesture-handler';
import { View, ActivityIndicator } from "react-native";
import AuthRoutes from "./auth.routes";

function Routes(){

    const loading = false;
    const signed = false

    return(
        signed ? <AuthRoutes /> : <AuthRoutes />
    );
};
export default Routes;