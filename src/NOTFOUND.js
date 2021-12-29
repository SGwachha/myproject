import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>sorry!!!</h2>
            <p>Page Not Found</p>
            <Link to= "/" style = {{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Back to homepage...</Link>
        </div>
    );
}
 
export default NotFound;