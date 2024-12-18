import {TextGenerateEffect} from '@/app/components/aceternity/text-generate-effect'
import Grid from '@/app/components/grid/grid'

export default function Projects() {
    return (
        <div className="relative z-100 flex flex-col items-center justify-center overflow-hidden">
            <TextGenerateEffect
                words="Projects"
                className="text-center text-5xl md:text-5xl lg:text-6xl my-4"
            />
            <div className={"mx-12 overflow-hidden"}><Grid items={items}/></div>
        </div>
    )
}

const items = [
    {
        title: "TensorDining",
        description: "A custom deep neural network built with Pytorch. Automated data collection script. Labeling that data, however, was possibly the most boring thing I've ever done in my entire life. Working on making the model more accurate and doing more labeling.",
        className: "md:col-span-1 row-span-3 bg-gray-900",
        link: "https://github.com/FRC3950/GymSauna"
    },
    {
        title: "Tuneminal",
        description: "A chromatic tuner and metronome written in Go.\nUses PortAudio to manage input and output audio buffers, which are generated without the use of an external sound file. I started playing guitar recently, and I hope to use this as a practice aid.",
        className: "md:col-span-1 row-span-3 bg-gray-900",
        link: "https://github.com/pat-mart/tune-minal"
    },
    {
        title: "Alpha for Astronomy",
        description: "A Flutter iOS app I developed for planning astronomy observations. I also developed an open-source Dart library (called alpha_lib) for astronomical calculations as a companion project." ,
        className: "md:col-span-2 row-span-1 bg-gray-900",
        link: "https://github.com/pat-mart/alpha_app"
    }
]


