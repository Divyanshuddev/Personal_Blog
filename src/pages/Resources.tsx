import CommonHeader from "../components/CommonHeader"
import NavBar from "../components/NavBar"
import ResourceCard from "../components/ResourcesPage/ResourceCard"
import ResourceHeader from "../components/ResourcesPage/ResourceHeader"
import logo1 from '../assets/ResourcesLogo1.svg'
import logo2 from '../assets/ResourcesLogo2.svg'
import { Divider } from "@mui/material"
import ResourcesCollection from "../components/ResourcesPage/ResourcesCollection"
import Revolution from "../components/Revolution/Revolution"
import Footer from "../components/Footer/Footer"
const cardsData = [
    {
        logo: logo1,
        title: "Quantum Computing Whitepaper",
        details: "Provides technical specifications and requirements for implementing quantum computing systems.",
        image: "https://img.freepik.com/premium-photo/abstract-red-energy-waves-from-particles-futuristic-hitech-glowing-background_75563-14058.jpg",
        topic: "Quantum Computing Whitepaper",
        desc: "An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.",
        cards: [
            {
                title: "Publication Date",
                value: "July 2023"
            },
            {
                title: "Category",
                value: "Quantum Computing"
            },
            {
                title: "Author",
                value: "Dr. Quantum"
            },
        ]
    },
    {
        logo: logo2,
        title: "Space Exploration Whitepaper",
        details: "Explores Mars colonization, asteroid resource potential, and space tourism.",
        image: "https://gmpis.com/wp-content/uploads/2023/03/Best-Machine-Learning-Software-500x278.jpg",
        topic: "Space Exploration Whitepaper",
        desc: "An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining.",
        cards: [
            {
                title: "Publication Date",
                value: "September 2023"
            },
            {
                title: "Category",
                value: "Space Exploration"
            },
            {
                title: "Author",
                value: "FutureTech Space Division"
            },
        ]
    },
]
const Resources = () => {
    return (
        <div>
            <NavBar />
            <ResourceHeader />
            <CommonHeader subTitle="Dive into the Details" title="In-Depth Reports and Analysis" button="none" />
            {
                cardsData.map((data, index) => {
                    return (
                        <div key={index}>
                            <ResourceCard data={data} />
                            <Divider style={{backgroundColor:"rgba(61, 59, 60, 0.8)"}} />
                        </div>

                    )
                })
            }
            <ResourcesCollection />
            <Revolution />
            <Footer />
        </div>
    )
}

export default Resources
