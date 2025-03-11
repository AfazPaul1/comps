import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

   function Link({to, children }) {

    const {navigate} = useNavigation()
    const handleClick = (event) => {
        console.log(event);
        if (event.ctrlKey || event.metaKey) {
            return;
        }
            event.preventDefault();
            navigate(to)
    }

    const classes = classNames('text-blue-500')

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link