import './App.css';
import { useState } from 'react';
import imgUrl from './assets/user.jpg';
import { BiGroup, BiLayer, BiPackage, BiHome } from 'react-icons/bi';
import { GoMarkGithub } from 'react-icons/go';
import Home from './components/home';
import Basic from './components/basic';
import Skills from './components/skills';
import Projects from './components/projects';

type Entry = "Home" | "Profiles" | "Skills" | "Projects" | "More" | "Contact";

interface RightCardInterface {
  width: string,
  height: string,
  cur: Entry,
  pre: Entry,
  real: Entry,
  home: Entry,
  child: JSX.Element,
}

interface ListInterface {
  entry: Entry,
  onClick: React.MouseEventHandler,
  cur: Entry,
  icon: JSX.Element,
}

function SideEntry({ entry, onClick, cur, icon }: ListInterface): JSX.Element {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center ${cur === entry ? ColorSelected : ColorNormal}`} onClick={onClick}>{icon}{entry}</div>
  )
}

function CardContainer({ width, height, cur, pre, real, home, child }: RightCardInterface) {
  return (<div className={`
         bg-slate-100 ${width} ${height} 
         max-sm:h-auto
         ${cur == real && pre != home ?
      "animate-[fadeInFromLeft_1s_ease-in-out_1]" :
      (cur == real && pre == "Home" ?
        "max-lg:animate-[fadeInFromLeft_1s_ease-in-out_1]" :
        "animate-[fadeOutFromRight_1s_ease-in-out_1] sm:hidden"
      )}
         `}>
    {child}
  </div>)
}

const CardBg = "bg-slate-100";
const ColorNormal = "bg-[#f8e9e9]";
const ColorSelected = "bg-[#caf0f8]";

const entrySet: { entry: Entry, child: JSX.Element, icon: JSX.Element }[] = [{
  entry: "Home",
  child: <Home />,
  icon: <BiHome className="text-2xl" />
}, {
  entry: "Profiles",
  child: <Basic />,
  icon: <BiGroup className="text-2xl" />
}, {
  entry: "Skills",
  child: <Skills />,
  icon: <BiLayer className="text-2xl" />
}, {
  entry: "Projects",
  child: <Projects />,
  icon: <BiPackage className="text-2xl" />
}];

function App() {
  const [cur, setCur] = useState<Entry>("Home");
  const [pre, setPre] = useState<Entry>("Home");
  const onClick = (value: Entry) => {
    return () => {
      setPre(cur);
      setCur(value);
    };
  }

  const cardSet = entrySet.map(({ entry, child }) => {
    return <CardContainer key={entry} width="w-full" height="h-[600px]" cur={cur} pre={pre} real={entry} home="Home" child={child} />
  })
  const sideSet = entrySet.map(({ entry, icon }) => {
    return <SideEntry key={entry} entry={entry} cur={cur} icon={icon} onClick={onClick(entry)} />
  })

  return (
    <div className="max-sm:h-fit h-full w-full flex bg-gradient-to-br from-slate-100 to-emerald-100 items-center content-center justify-center">
      <div className="sm:hidden flex flex-col flex-auto w-full h-full px-1 py-2">
        {cardSet}
      </div>
      <div className="max-sm:hidden absolute lg:w-[1170px] h-[600px] w-full rounded-lg shadow-2xl m-auto overflow-hidden bg-slate-100">
        <div className="absolute lg:block hidden">
          <div className={`
            w-0 h-0
            lg:h-[600px] lg:w-[350px]
            ${CardBg} lg:my-auto lg:pt-[140px] lg:pb-[40px]
            `}>
            <div className="">
              <img src={imgUrl} className="border-4 rounded-full w-32 h-32 m-auto">
              </img>
              <p className="text-center mt-8 text-2xl antialiased">INTXFF</p>
              <p className="text-center text-slate-400 text-sm antialiased italic">A Backend Developer</p>
            </div>
            <div className="relative flex gap-x-2 items-center justify-center -bottom-24">
              <div className="bg-white cursor-pointer flex items-center justify-center rounded-full w-12 h-12 hover:bg-emerald-300">
                <GoMarkGithub size={30} />
              </div>
            </div>
          </div>
        </div>
        <div className={`
          absolute lg:w-[1170px] w-full h-[600px] flex flex-row
          ${cur == "Home" ? "transition-[margin] duration-1000 ml-0 lg:ml-0" : "transition-[margin] duration-1000 ml-0 lg:ml-[350px]"}
          justify-items-center items-center content-center
          `}>
          <div className={`${ColorNormal} font-sans text-[14px] min-w-[100px] h-[600px] gap-y-4 grid grid-rows-${entrySet.length} grid-cols-1 justify-items-center items-center`}>
            {sideSet}
          </div>
          <div className="mr-0 w-full lg:w-[1070px]">
            {cardSet}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
