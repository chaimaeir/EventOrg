import Logo from "../../../../public/images/Logo.png";

function LoginAdminForm() {
    return (
        <div className="min-h-screen mt-6 flex justify-center ">
            <div className=''>
            <div className="bg-white shadow-2xl  w-full rounded-lg  ">
                <img className="object-cover mx-auto mb-5 h-[90px]" src={Logo} alt="" />
                <h1 className=" font-bold font-imbue text-center text-4xl mb-8">Welcome Admin</h1>
                
                    <div className="px-7 py-7">
                        <label className="font-bold text-xl font-imbue text-gray-600 pb-1 block">E-mail</label>
                        <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder='name@gmail.com' />
                        <label className="font-bold text-xl font-imbue text-gray-600 pb-1 block">Password</label>
                        <input type="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" placeholder='Password' />
                        <button type="button" className=" bg-black text-white w-full py-2.5 rounded-lg text-sm  font-semibold text-center inline-block">
                            <span className="font-imbue text-xl inline-block mr-2">Login</span>
                           
                        </button>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    );
}

export default LoginAdminForm;
