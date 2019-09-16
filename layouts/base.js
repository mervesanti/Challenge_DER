import Head from 'next/head'
import Link from 'next/link'

export default ({ children }) => (
    <div>
        <Head>
           <title>Weather App</title>
        </Head>
        <div className='main-container'>
            <div className='container_box'>
                <div className='name_app'>
                    <h3> · MerriWeather app_</h3>
                </div>
                {children}
                <div className="footer_box">
                    <h5>- ApiWeather : <Link href="https://www.apixu.com/doc/"><a>Apixu</a></Link> -</h5>
                </div>
            </div>
        </div>
    {/* my global styles in container box */}
        <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=Crete+Round:400i|
            Merriweather:300,400,400i,700,900|Open+Sans|Patua+One|Roboto:300,400');
            
            body{
                margin:0;
            }

            .main-container{
                background-color:#9CE4E1;
                height: 100vh;
                padding-top:6%;
            }
            .container_box{
                width:70%;
                margin:auto ;
                background-color: #F7F7E6;
                border-radius: 7px;
            }
            .name_app{
                height: 28px;
                border-bottom: 1px solid #F04B31;
                margin: 0 6px;
            }
            .name_app h3{
                font-family: 'Open Sans', sans-serif;
                font-size: 13px;
                font-weight: 400;
                color:#0E6483;
                margin-left: 3px;
                line-height:28px;
            }
            .footer_box{
                border-top: 1px solid #F04B31;
                height:28px;
                margin: 0 6px;
            }
            .footer_box h5{
                font-size:11px;
                font-family: 'Roboto', sans-serif;
                font-weight: 300;
                color:#353132;
                text-align: right;
                margin: 0 3px;
                line-height:28px;
                text-decoration: none;

            }
            .footer_bpx link a{
                color:#065873;
                text-decoration: none;
            }
       `}</style>
    </div>
)