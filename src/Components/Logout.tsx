import { Link, useNavigate } from "react-router-dom";


function Logout() {
const navigate = useNavigate();
        
        async function logout(event: any) {
            event.preventDefault();
            const options = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer' + localStorage.getItem("token")
                },
            };    
    
            try {
                const response = await fetch(
                    "https://library-crud-sample.vercel.app/api/user/logout",
                    options
                );
                if (!response.ok) {
                    throw new Error("Network response was not okay");
                }
                const data = await response.json();
                console.log(data.token)
    
                const token = data.token;
                localStorage.setItem('token', token)
                
                setTimeout(() => {
                    alert("Logout successfull");
                    localStorage.clear();
                    navigate("/");
                },1000);
                
            } catch (error) {
                console.error('Error:', Error);
            }
        }
        return (
            <button onClick={logout}> 
            <Link
				
            to="/login"
            className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-1 duration-300 ease-in-out fixed top-0 left-0 w-full z-50 shadow-md px-4 py-2 flex items-center justify-end"
        >
            Logout
        </Link>
        </button>
        )
    }

    export default Logout;