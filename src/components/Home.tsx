
type newsProp = {
    news: any,
    search: any,
    menu: any
}


const Home = (props: newsProp) => {
    return (
        <div>
            <a href={props ?.news[1] ?.url}><div className="flex mt-5 p-3">
                <img className="w-5/12 h-80" src={props ?.news[1] ?.urlToImage} />
                <h1 className="font-extrabold text-4xl w-96 text-sky-900 p-3 hover:underline">{props ?.news[0] ?.title}</h1>
            </div>
            </a>
            <div className="grid grid-cols-4 p-4">
                {props ?.news ?.filter((data: any) => data ?.title ?.includes(props ?.search)).map((data: any) => {
                    return <a href={data ?.url}><div className="p-3">
                        <img src={data ?.urlToImage} className="w-80 h-44 rounded-md" />
                        <h1 className="text-sky-900 font-extrabold text-xl">{data ?.title}</h1>
                    </div>
                    </a>
                })}
            </div>
        </div>

    )
}

export default Home