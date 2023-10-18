import { SiGnometerminal, SiGo, SiMysql, SiShell, SiTsnode } from 'react-icons/si';
import { FaBars, FaBrain, FaLayerGroup, FaLinux, FaNetworkWired } from 'react-icons/fa';

const LanguageIconColor = "#ffb4a2";
type ProgramLanguage = "Go" | "SQL" | "Lua" | "Web Frontend" | "Bash Shell" | "Others";
interface LanguageEntry {
  name: ProgramLanguage,
  description: string[],
  icon: JSX.Element,
};
const LanguageSheet: LanguageEntry[] = [{
  name: "Go",
  description: [
    "Proficient in go syntax and common toolchains",
    "Understand underlying implementation of go compiler and runtime",
    "Read partial code of go compiler and runtime",
    "Read a lot of source code like clash, v2ray, smux, gin and so on",
    "Familiar with go concurrent programming",
  ],
  icon: <SiGo size="30px" color={LanguageIconColor} />,
}, {
  name: "SQL",
  description: [
    "Familiar with standard sql statements",
    "Understand sql performance analysis and tuning",
    "Understand underlying implementation",
  ],
  icon: <SiMysql size="30px" color={LanguageIconColor} />,
}, {
  name: "Web Frontend",
  description: [
    "Understand html+css+js/ts",
    "Able to use React framework",
  ],
  icon: <SiTsnode size="30px" color={LanguageIconColor} />,
}, {
  name: "Bash Shell",
  description: [
    "Familiar with bash shell syntax",
    "Familiar with writing shell script to automate process",
  ],
  icon: <SiShell size="30px" color={LanguageIconColor} />,
}, {
  name: "Others",
  description: [
    "Good at C, Lua, and Python",
    "Know a little about Rust",
  ],
  icon: <SiGnometerminal size="30px" color={LanguageIconColor} />,
}]

const BasicIconColor = "#b5e48c";
type BasicKnowledge = "Network" | "OS (Linux)" | "DSAL" | "Middleware" | "Others";
interface BasicEntry {
  name: BasicKnowledge,
  description: string[],
  icon: JSX.Element,
};
const BasicSheet: BasicEntry[] = [{
  name: "Network",
  description: [
    "Familiar with TCP/IP protocol and network programming",
    "Familiar with http/1.1 and grpc",
    "Understand http2, websocket, quic and grpc",
    "Good at network modules in Linux such as iptables, xdp, namespace, virtual network device and so on", "Good at using tcpdump and wireshark to capture and analy network package",
    "Understand docker network",
  ],
  icon: <FaNetworkWired size="30px" color={BasicIconColor} />,
}, {
  name: "OS (Linux)",
  description: [
    "Have used many Linux distributions like gentoo, archlinux, debian, fedora and so on",
    "Able to write linux programming",
    "Understand basic theory of OS",
  ],
  icon: <FaLinux size="30px" color={BasicIconColor} />,
}, {
  name: "DSAL",
  description: [
    "Understand common data structures and algorithms",
  ],
  icon: <FaBrain size="30px" color={BasicIconColor} />,
}, {
  name: "Middleware",
  description: [
    "Understand usage of redis and its implementation",
    "Used Nginx and HAproxy",
    "Familiar with docker",
  ],
  icon: <FaLayerGroup size="30px" color={BasicIconColor} />,
}, {
  name: "Others",
  description: [
    "Good at reading technical documents and communicating in english ",
  ],
  icon: <FaBars size="30px" color={BasicIconColor} />,
}]
export default function() {
  const LanguageList: JSX.Element[] = LanguageSheet.map(({ name, description, icon }: LanguageEntry) => {
    const temp = description.map((e) => {
      return (
        <li className="py-[1px] text-sm">{e}</li>
      )
    })
    return (
      <div key={name} className="flex items-center content-center">
        <div className="h-fit w-fit p-4 border-2 border-gray-300 rounded-full">
          {icon}
        </div>
        <div className="ml-4 self-center">
          <h5 className="text-lg mb-1">{name}</h5>
          <ol className="list-inside list-disc">
            {temp}
          </ol>
        </div>
      </div>
    )
  })
  const BaiscList: JSX.Element[] = BasicSheet.map(({ name, description, icon }: BasicEntry) => {
    const temp = description.map((e) => {
      return (
        <li className="py-[1px] text-sm">{e}</li>
      )
    })
    return (
      <div key={name} className="flex items-center content-center">
        <div className="h-fit w-fit p-4 border-2 border-gray-300 rounded-full">
          {icon}
        </div>
        <div className="ml-4 self-center">
          <h5 className="text-lg mb-1">{name}</h5>
          <ol className="list-inside list-disc">
            {temp}
          </ol>
        </div>
      </div>
    )
  })
  return (
    <div className="max-lg:w-full lg:w-[720px] h-full p-[50px] max-sm:p-5 sm:overflow-y-auto">
      <h3 className="border-b-2 pb-2 text-2xl bold">Skills</h3>
      <div className="">
        <h4 className="text-xl my-2">Program Languages</h4>
        <div className="grid gap-y-4 items-start">
          {LanguageList}
        </div>
      </div>
      <div className="">
        <h4 className="text-xl my-2">Basic Knowledge</h4>
        <div className="grid gap-y-4">
          {BaiscList}
        </div>
      </div>
    </div>
  )
}
