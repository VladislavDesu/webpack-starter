import classes from "@/App.module.css"
import {Link, Outlet} from "react-router-dom";
import IconUser from "@/assets/user.svg"

const App = () => {
    return (
        <div data-testid={'test'} className={classes.body}>
            hello world!
            <div>{__PLATFORM__}</div>
            <Link to={'/about'}>About</Link>
            <Link to={'/shop'}>Shop</Link>
            <Link to={'/'}>Home</Link>
            <IconUser width={100} height={100}/>

            <Outlet/>
        </div>
    );
};

export default App;