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
    "transparent proxy by TUN and fake ip",
    "various balancing policy and match patterns",
    "easily combine policy and pattern and adjust priority of different patterns",
    "shadowsocks, socks and raw tcp/udp with dual stack protocol(v4/v6)",
    "fullcone nat",
    "easily configured as server，client or relay node",
  ],
}, {
  name: "Mango",
  subname: "Discussion platform like juejin + wordpress",
  url: "https://github.com/intxff/mango",
  description: [
    "designed with micro services",
    "combined with k8s basic service",
    "apisix as gateway",
  ],
}, {
  name: "Regost",
  subname: "Gost management script",
  url: "https://gist.github.com/intxff/2be99ccb0c32c29b89cf39de40f3035c",
  description: [
    "support basic download, update, remove",
    "support create, edit and remove configuration",
    "support optimize network environment simply",
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
          <span className="text-xl text-blue-600 bold"><a href={url}>{name}</a></span>
          <span className="max-sm:hidden ml-2 text-sm text-slate-500">{subname}</span>
        </div>
        <div className="sm:hidden text-slate-500 text-sm">
          {subname}
        </div>
        <ol className="my-1 list-decimal list-inside">
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

