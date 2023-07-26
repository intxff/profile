import imgUrl from "../assets/user.jpg";
import { GoMarkGithub } from "react-icons/go";
export default function () {
  return (
    <div className="flex justify-center items-center align-center m-auto">
          <div className={`
            h-[600px] lg:w-[1000px] max-lg:w-full
            my-auto
            `}>
            <div className="pt-[100px]">
              <img src={imgUrl} className="border-4 rounded-full w-32 h-32 m-auto">
              </img>
              <p className="text-center mt-8 text-2xl antialiased">INTXFF</p>
              <p className="text-center text-slate-400 text-sm antialiased italic">A Backend Developer</p>
              <p className="italic text-center text-slate-500 text-lg antialiased mt-8">Common person interested in developing interesting things</p>
            </div>
            <div className="relative flex gap-x-2 items-center justify-center -bottom-[70px]">
              <div className="bg-white cursor-pointer flex items-center justify-center rounded-full w-12 h-12 hover:bg-emerald-300">
                <a href="https://github.com/intxff"><GoMarkGithub size={30}/></a>
              </div>
            </div>
          </div>
    </div>
  )
}
