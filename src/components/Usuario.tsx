import { useState } from "react";

 interface User {
  uid: string;
  name: string
 }


 export const Usuario = () => {
  const [user, setUser] = useState<User>()

  const login = () => {
    setUser({
      uid: "ABCD",
      name: "David Pineda"
    })
  }

  return(
    <div className="mt-5">
      <h3>Usuario: useState</h3>
      <button
        className="btn btn-outline-primary"
        onClick={ login }
        >
          Login
        </button>

        <pre>{ JSON.stringify(user)}</pre>
    </div>
  )

}
