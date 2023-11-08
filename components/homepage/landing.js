import Link from "next/link"
import classes from "../../pages/home.module.css"
import { Fragment } from "react"
export default function Landing(){

    return(
        <div>
            


            <video loop  muted autoPlay id="bg-video" src='/public/VideoForImpresariov2.mp4'>
              <source src='/public/BackgroundImageForTitleImpresario.mp4' />
            </video>
        <svg className="banner">
        <defs>
    <pattern id="imagePattern" x="0%" y="0" width="200%" height="1">
      <image x="-5%" y="0" width="400" height="400" href="/public/images/raftingJake.jpg" />
    </pattern>
  </defs>
          <mask id='mask'>
            <rect fill='white' width="100%" height="80%" y="15%"></rect>
            <text id="impresarioTitle" x="50%" y="25%" textAnchor='middle' dominantBaseline="central">Impresario</text>
            <text id="siteIntroductoryStatement" x="50%" y="35%" textAnchor='middle' dominantBaseline="central" >Design . Develop . Dream</text>
          </mask>
          <rect width="100%" height="100%" id="mask-bg" rx={100} ry={100}> </rect>
          <circle id="myIntroPhoto" cx="20%" cy="60%" r="150" fill="url(#imagePattern)"  />
          <text className="theTextForLandingPage" x="60%" y="55%" textAnchor="middle" dominantBaseline="central">Bring harmony to your Entrepreneurial dreams.</text>
          <text className="theTextForLandingPage" x="60%" y="58%" textAnchor="middle" dominantBaseline="central">Build and maintain your sites with SEO in mind.</text>
          <text className="theTextForLandingPage" x="60%" y="61%" textAnchor="middle" dominantBaseline="central">Learn how to generate your own website.</text>
      </svg>
      <Link href="/Buy/BuildSite">
      <button className='findOutMoreButton'>Build Now</button>
      </Link>









      
        </div>
    )
}


