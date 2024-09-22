import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { SiJupyter } from 'react-icons/si'
import { SiOpencv } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { SiPowerbi } from 'react-icons/si'
import { SiPandas } from 'react-icons/si'
import { TbBrandNextjs } from "react-icons/tb"

const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-warp items-center justify-center gap-4">
            <div>
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="p-4">
                <TbBrandNextjs className="text-7xl" />
            </div>
            <div className="p-4">
                <SiMongodb className="text-7xl text-green-700" />
            </div>
            <div className="p-4">
                <SiJupyter className="text-7xl" style={{ color: '#F37626' }}/>
            </div>
            <div className="p-4">
                <SiOpencv className="text-7xl" style={{ color: '#5C3EE8' }}/>
            </div>
            <div className="p-4">
                <SiPython className="text-7xl" style={{ color: '#306998' }} />
            </div>
            <div className="p-4">
                <SiPowerbi className="text-7xl" style={{ color: '#F2C811' }} />
            </div>
            <div className="p-4">
            <SiPandas className="text-7xl" style={{ color: '#150458' }} />
            </div>
        </div>
    </div>
  )
}

export default Technologies
