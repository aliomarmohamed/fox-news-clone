import { useEffect, useState } from "react"
import Home from "./Home"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Main = () => {

    const [news, setNews] = useState([])
    const [search, setSearch] = useState("")
    const [menu, setMenu] = useState("")

    const getNews = async () => {
        try {
            await fetch(`https://newsapi.org/v2/everything?q=${menu ? menu : "tesla"}&from=2024-04-30&sortBy=publishedAt&apiKey=a5db5418651e4a448f18ae57b108a9fc`)
                .then(res => res.json())
                .then(json => setNews(json ?.articles))
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getNews()
    }, [menu])

    return (
        <div>
            <Navbar setSearch={setSearch} setMenu={setMenu} />
            <Home news={news} search={search} menu={menu} />
            <Footer />
        </div>
    )
}

export default Main