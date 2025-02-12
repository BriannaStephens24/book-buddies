import { Link } from "react-router-dom"

const LogIn = () => {

return (
<>
  <h1>Log In Or Create an Account!</h1>

<form>
<input 
placeholder="Username (Email)"
/>

<input
placeholder="Password"
/>

<button>Log In</button>

</form>

<h2>Don't have an account?</h2>
<Link to = "/SignUp"> 
<button>Click Here To Create One! </button>
</Link> 
</>
)



}

export default LogIn