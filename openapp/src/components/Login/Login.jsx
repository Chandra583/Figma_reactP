
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleSignIn = () => {

        navigate('/home');
    }
    return (
        <>
            <div className="flex flex-row w-full items-center bg-[#605bff] h-20  px-5 lg:visible md:hidden ">
                <img
                    src="https://file.rendit.io/n/3CLqHbC9HtBaexmNloig.svg"
                    alt="Subtract1"
                    className="m-4 w-[3rem] h-[5rem] bg-no-repeat bg-center bg-cover bg-blend-normal  " // Added 'hidden lg:block' to hide on small screens
                    style={{ backgroundImage: "url(https://file.rendit.io/n/4EVtjdGnUufrc53Uprkh.svg)" }}
                />
                <div id="base2" className="text-[1.5rem] font-semibold text-[#fafafb] ml-1 lg:visible md:hidden">Base</div>
            </div>
            <div id="SignInRoot" className="relative min-h-screen  bg-[#f8faff] flex md:flex-row  flex-col-reverse">

                <div
                    id="LeftSide"
                    className=" bg-[url(https://file.rendit.io/n/2lixlIFQExSVOYnbTTyB.svg)] bg-cover bg-50%_50% flex-grow md:flex md:flex-col md:justify-between md:w-1/2 md:min-h-screen py-12 px-16 order-2 md:order-1 hidden md:block " >
                    <div className=" top-[461px] left-[196px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[72px] tracking-[0] leading-[normal]">

                        <div className='absolute cursor-pointer md:w-[4.5rem] ' >
                            <img
                                src="https://file.rendit.io/n/SUs1ujJatcvt029Hfdty.svg"
                                alt="Logo"
                                className=" md:w-20 md:h-20  md: h-16"
                            />
                            <div id='stroking' className='absolute top-7 md:w-[4rem]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="30" viewBox="3 2 81 28" fill="none">
                                    <path d="M2.02979 11.0531L32.0871 25.7478L58.8048 3.70578L84.8545 17.0646" stroke="#605BFF" stroke-width="7" />
                                </svg>

                            </div>
                        </div>

                    </div>
                    <div id="baseText" className="hidden md:block text-5xl font-bold text-white text-center md:text-centre font-family:Montserrat-Bold">BASE</div>

                    <div className="flex justify-center gap-10 cursor-pointer sm:visible md:visible ">
                        <img
                            src="https://file.rendit.io/n/DggEbC8V7aeSy5fClIH7.svg"
                            alt="Twitter icon"
                            className="w-10 h-10"
                        />

                        <img
                            src="https://file.rendit.io/n/GwAsoaOagpzCsR9iopVo.svg"
                            alt="Facebook icon"
                            className="w-10 h-10"
                        />
                        <img
                            src="https://file.rendit.io/n/ZcYdIiFSIXR9pKEjRDdm.svg"
                            alt="LinkedIn icon"
                            className="w-10 h-10"
                        />
                        <img
                            src="https://file.rendit.io/n/ID1N8slF37TjaI9YVcmO.svg"
                            alt="Discord icon"
                            className="w-10 h-10"
                        />
                    </div>
                </div>


                <div className="md:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 md:py-0 order-1 md:order-2"> {/* Added order-1 and md:order-2 to change the order on mobile screens */}

                    <div className="md:text-left text-center">
                        <h1 className="text-4xl font-bold font-['Montserrat']">Sign In</h1>
                        <p className="mt-4 font-['Lato']">Sign in to your account</p>
                    </div>

                    <div className="flex flex-col gap-6 mt-6 md:mt-12">
                        <div className="flex gap-6">
                            <button
                                type="submit"
                                onClick={handleSignIn}
                                id="GoogleSignIn"
                                className="gap-2 bg-white py-2 px-3 flex-grow flex justify-center items-center rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                            >
                                <img
                                    src="https://file.rendit.io/n/zWjdvlR2rbtbLMe8jIOs.svg"
                                    alt="Google icon"
                                    className="w-4"
                                />
                                <span className="text-xs text-[#858585]">Sign in with Google</span>
                            </button>

                            <button
                                id="AppleSignIn"
                                className="gap-2 bg-white py-2 px-3 flex-grow flex justify-center items-center rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"

                            >
                                <img
                                    src="https://file.rendit.io/n/hePdffAErrFI3U7nXmxu.svg"
                                    alt="Apple icon"
                                    className="w-3"
                                />
                                <span className="  text-xs font-bold text-[#858585]">Sign in with Apple</span>
                            </button>
                        </div>

                        <div
                            id="Card"
                            className="bg-white flex flex-col gap-5 w-full p-8 rounded-[20px] shadow-md"
                        >
                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="email" className="font-['Lato']">Email address</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="johndoe@gmail.com"
                                    className="bg-[#f5f5f5] p-3 rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="password" className="font-['Lato']">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="bg-[#eaeaea] p-3 rounded-lg"
                                />
                            </div>

                            <a href="#" className="text-[#346bd4] mb-px ml-px font-['Lato']">Forgot password?</a>
                            <button
                                onClick={handleSignIn}
                                id="ButtonPrimary"
                                className="bg-[#605bff] p-3 rounded-lg text-white font-bold font-family: Montserrat; hover:bg-[#352eb5] transition duration-700 ease-in-out"
                            >
                                Sign In
                            </button>
                        </div>

                        <div className="text-center text-[#858585]">
                            Don’t have an account?{" "}
                            <a href="#" className="text-[#346bd4] font-['Lato']">Register here</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full ">
                        <div className="flex flex-row justify-around mt-[4rem] items-center w-full max-w-xs sm:max-w-[5rem] md:max-w-sm md:visible lg:hidden md:hidden sm:hidden lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl my-4">
                            <img
                                src="https://file.rendit.io/n/ytlHpo8cFWwfEHXzO9gR.svg"
                                alt="Vector"
                                className="w-6 h-6"
                            />
                            <img
                                src="https://file.rendit.io/n/vBV4xllQD84D1aNjAGAD.svg"
                                alt="Vector1"
                                className="w-6 h-6"
                            />
                            <img
                                src="https://file.rendit.io/n/emQtwl8p5NvdHbx0hy0j.svg"
                                alt="LinkedIn Logo"
                                className="w-8 h-8"
                            />
                            <img
                                src="https://file.rendit.io/n/uMV3yOpKRQpYWYFb9EOp.svg"
                                alt="Discord Logo"
                                className="w-8 h-8"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login