import react from "react";

import {Formgrid} from "./../grid";
import {SearchBar} from "./../components/SearchBar"
export const Accueil = (props) => {

    const {user, isLogged} = useSelector((state) => state.user)


    return (
        
            <><div>
            <Formgrid />
            </div><SearchBar /></>



    );
}

export default Accueil;