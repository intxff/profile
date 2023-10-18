import { FaLink } from 'react-icons/fa';
type Projects = "Rdcross" | "Mango" | "Regost";
interface ProjectEntry {
  name: Projects,
  subname: string,
  url: string,
  description: string[],
}
const ProjectSheet: ProjectEntry[] = [{
  name: "Rdcross",
  subname: "A proxy tool",
  url: "https://github.com/intxff/rdcross",
  description: [
    "Transparent proxy by TUN and fake ip",
    "Various balancing policy and match patterns",
    "Easily combine policy and pattern and adjust priority of different patterns",
    "Shadowsocks, socks and raw tcp/udp with dual stack protocol(v4/v6)",
    "Fullcone nat",
    "Easily configured as server，client or relay node",
  ],
}, {
  name: "Mango",
  subname: "Discussion platform like juejin + wordpress",
  url: "https://github.com/intxff/mango",
  description: [
    "Designed with micro services",
    "Combined with k8s basic service",
    "Apisix as gateway",
  ],
}, {
  name: "Regost",
  subname: "Gost management script",
  url: "https://gist.github.com/intxff/2be99ccb0c32c29b89cf39de40f3035c",
  description: [
    "Support basic download, update, remove",
    "Support create, edit and remove configuration",
    "Support optimize network environment simply",
  ]
}]

export default function() {
  const ProjectList: JSX.Element[] = ProjectSheet.map(({ name, subname, url, description }: ProjectEntry) => {
    const temp = description.map((e) => {
      return (
        <li className="py-[1px] text-sm">{e}</li>
      )
    })
    return (
      <>
        <div className="py-2">
          <a href={url}><span className="text-xl text-blue-600 bold flex">{name}<FaLink size="8px" /></span></a>
          <span className="max-sm:hidden ml-2 text-sm text-slate-500">{subname}</span>
        </div>
        <div className="sm:hidden text-slate-500 text-sm">
          {subname}
        </div>
        <ol className="my-1 list-decimal list-inside ml-2">
          {temp}
        </ol>
      </>
    )
  })
  return (
    <div className="max-lg:w-full lg:w-[720px] h-full justify-start items-center p-[50px] max-sm:p-5 sm:overflow-y-auto">
      <h3 className="border-b-2 pb-2 text-2xl bold">Projects</h3>
      {ProjectList}
    </div>
  )
}

