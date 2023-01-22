function Login(){
    return(
        <div className="flex justify-center items-center h-screen bg-slate-100">
            <div className="w-1/3 px-10 py-20 shodow-lg bg-white rounded-md border-2 border-gray"> 
            <h3 className="text-2xl font-semibold">Welcome to DEV Community 👩‍💻👨‍💻</h3>
            <p className="font-bold text-xs text-gray-500 mt-4"> DEV Community 👩‍💻👨‍💻 is a community of 991,010 amazing developers </p>
            <div className="mt-8"> 
            <div>
            <label className="text-lg font-medium">Email</label>
                <input className="w-full border-2 border-gary-100 rounded-xl p-2 mt-1 bg-transparent " placeholder="Enter your email" type="email" />
            </div>
            <div>
            <label className="text-lg font-medium">Password</label>
                <input className="w-full border-2 border-gary-100 rounded-xl p-2 mt-1 bg-transparent " placeholder="Enter your password" type="password" />
            </div>
                <div className="mt-8 flex justify-between items-center"> 
                <div> 
                    <input type="checkbox" id="remember"/>
                    <label className="ml-2 font-medium text-base" for="remember">Remember Me</label>
                    </div>
                   
                    </div>
                    <div className="mt-8 flex flex-col gap-y-4">
                        <button className="py-2 rounded-xl bg-blue-600 text-white text-lg font-bold">Log in</button>
                        <button className="font-normal text-base text-blue-700">I forgot my password</button>
                    </div>
                    </div>
            </div>
            
                
            
        </div>
    )

}

export default Login