
import { Button } from "react-bootstrap";
import { useUserContext } from "../context/userAuthContext";

const Home = () => {
 const {logout,currentUser} = useUserContext()

const handleLogout = async() => {
    try {
        await logout();
    } catch (error:any) {
        console.warn(error.message);
    }

}
  return (
   <>
    <div className="p-4 box mt-3 text-center">
    Hello Welcome <br />
    name:{currentUser && currentUser?.displayName}
    <br />
    email:{currentUser && currentUser.email}
  </div>
  <div className="d-grid gap-2">
    <Button variant="primary" onClick={handleLogout}>
      Log out
    </Button>
  </div>
   
   </>
  )
}

export default Home