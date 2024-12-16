const Docs = ({
    params,
}: {
    params: {
        slug: string[];
    }
}) => {
    if(params.slug.length === 2){
        return(
            <h1>Viewing docs for {params.slug[0]} and {params.slug[1]}</h1>
        )
    }
    else if(params.slug.length === 1){
        return(
            <h1>Viewing docs for {params.slug[0]}</h1>
        )
    }
    else{
        return(
            <div>
                <h1>Docs home page</h1>
            </div>
        )
    }
}

export default Docs;