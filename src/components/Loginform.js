import { useState } from "react"
import { ColorRing } from "react-loader-spinner"
import axios from "axios"

function LoginForm(){
    const [loading , setLoading] = useState(false)

    const [value, setValue]=useState({
        email:"",
        password:""
    })

                                                                     
             
    function handleLogin(e){
        e.preventDefault()
        setLoading(true)

        axios.post("http://localhost:3000/api/admin/login", value)
            .then(response => {
                console.log("Login successful:", response.data);
            })
            .catch(error => {
                console.error("Error logging in:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return <form onSubmit={handleLogin} className="flex flex-col justify-center shadow-xl rounded-2xl to-[#75fff65e] from-[#00A99D17] bg-gradient-to-r p-10">
        <h1 className="text-center font-bold text-xl" >Login</h1>
        <div className="mt-4">
            <label htmlFor="email">Tell me your Email?</label> <br />
            <input type="email" onChange={e =>setValue({...value,email:e.target.value})} placeholder="Enter your email" name="email" className="px-3 outline-none py-1 bg-white rounded-2xl mt-2 w-64" />
        </div>
        <div className="mt-4">
            <label htmlFor="password">Enter your passkey</label> <br />
            <input type="password"  onChange={e =>setValue({...value,password:e.target.value})}  placeholder="Passkey" name="password" className="px-3 outline-none py-1 bg-white rounded-2xl mt-2 w-64"/>
        </div>
        <button className="bg-[#00A99D] flex justify-center py-1 px-4 mt-7 text-white rounded-xl hover:bg-[#70c7c355]" onClick={handleLogin}>
            {loading?<ColorRing colors={["white" , 'white', 'white' , 'white' , 'white']} width={24} height={24} />:<p>Login</p>}
        </button>
        <p className="text-xs mt-4 underline text-center">Forgot passkey? Don't worry Click on me</p>
    </form>
}

export default LoginForm