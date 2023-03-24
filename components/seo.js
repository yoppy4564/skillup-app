import Head from 'next/head'
import { useRouter } from 'next/router'

const Seo = (props) => {
    const router = useRouter()
    const baseUrl = "http://localhost:3000"
    const currentUrl = baseUrl + router.pathname
    const defaultImage = `${baseUrl}/images/social-card.png`
    return (
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" /> 
            <meta charSet="utf-8" />

            <title>{props.title}</title>
            <meta name="description" content={props.description} key="description" />
            <meta name="image" content={defaultImage} key="image" />   
            <link rel="canonical" href={currentUrl} key="canonical" />

            <meta property="og:title" content={props.title} key="ogtitle" />
            <meta property="og:description" content={props.description} key="ogdescription" />
            <meta property="og:image" content={defaultImage} key="ogimage" />
            <meta property="og:url" content={currentUrl} key="ogurl" />

            <link rel="shortcut icon" href="/images/favicon.ico" /> 
        </Head>
    )
}

export default Seo