import Base from '../layouts/base'
import axios from 'axios'
import { myKey } from './key'

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            region: '',
            actual: '',
            pronostico: '',
            conditionActual: '',
            loading: true
        }
    }

    cargaDeApi() {
        const apiUrl = `https://api.apixu.com/v1/forecast.json?key=${myKey}&q=Argentina&days=5&lang=es`

        axios.get(apiUrl)
            .then((result) => {
                this.setState({
                    region: result.data.location,
                    actual: result.data.current,
                    conditionActual: result.data.current.condition,
                    pronostico: result.data.forecast.forecastday,
                    loading: false
                })
            })
    }

    componentDidMount() {
        this.cargaDeApi();
    }

    render() {

        if (this.state.loading) {
            return <p>Cargando...</p>
        }

        return (
            <Base>
                <div className='box_child'>
                    <div className="col_2">
                        <h5 className="encabezado">Clima del Día /</h5>
                        <h3 className="localtime">{this.state.region.localtime}</h3>
                        <div className="box_region_icon">
                            <h4 className="temp_day">- {this.state.actual.temp_c}°C -</h4>
                            <h2>{this.state.region.name}</h2>
                            <div className="container_img">
                                <img src={this.state.conditionActual.icon} alt="" />
                            </div>
                        </div>
                        <h4 className="region">{this.state.region.tz_id}</h4>
                        <div className="box_temp">
                            <span className="temp_min_max">Min: {this.state.pronostico[0].day.mintemp_c}° / Máx: {this.state.pronostico[0].day.maxtemp_c}° </span>
                            <span className="humidity"> | Humedad: {this.state.actual.humidity}%</span>
                        </div>
                        <h3 className="text_condition">"{this.state.conditionActual.text}"</h3>
                    </div>
                    <div className="col_3">
                        <h5 className="encabezado">Pronóstico /</h5>
                        <div className="box_days">
                            <div className="containerday">
                                <h3 className="localtime day">{this.state.pronostico[1].date}</h3>
                                <div className="container_img_days">
                                    <img src={this.state.pronostico[1].day.condition.icon} alt="" />
                                </div>
                                <span className="temp_min_max border">Min: {this.state.pronostico[1].day.mintemp_c}° / Máx: {this.state.pronostico[1].day.maxtemp_c}° </span>
                                <h4 className="humidity"> - Humedad: {this.state.pronostico[1].day.avghumidity}% -</h4>
                                <h3 className="text_condition">"{this.state.pronostico[1].day.condition.text}"</h3>
                            </div>
                            <div className="containerday">
                                <h3 className="localtime day">{this.state.pronostico[2].date}</h3>
                                <div className="container_img_days">
                                    <img src={this.state.pronostico[2].day.condition.icon} alt="" />
                                </div>
                                <span className="temp_min_max border">Min: {this.state.pronostico[2].day.mintemp_c}° / Máx: {this.state.pronostico[0].day.maxtemp_c}° </span>
                                <h4 className="humidity"> - Humedad: {this.state.pronostico[2].day.avghumidity}% -</h4>
                                <h3 className="text_condition">"{this.state.pronostico[2].day.condition.text}"</h3>
                            </div>
                        </div>
                    </div>

                </div>

                <style jsx>{`               
                    .box_child, .box_days{
                        display:flex;
                    }
                    
                    .col_2{
                        width: 45%;
                        border-right: 1px solid #F04B31;
                        margin-top:20px;
                        margin-bottom:20px;
                        margin-left:5%;
                    }
                    .encabezado{
                        font-family: 'Crete Round', serif;
                        font-size: 15px;
                        color:#065873;
                        margin-bottom:0;
                    }
                    
                    .box_region_icon{
                        position:relative;

                    }
                    .box_region_icon h2{
                        font-family: 'Patua One', cursive;
                        font-size: 48px;
                        color:#F04B31;
                        margin:0;
                    }
                    .container_img{
                        height: 103px;
                        position:absolute;
                        bottom: 0;
                        right:13%;
                    }
                    .container_img img{
                        height:103px;
                        margin:auto;
                    }
                    .localtime{
                        font-size:15px;
                        font-family: 'Roboto', sans-serif;
                        font-weight:500;
                        margin-top:7px;
                        color:#F04B31;
                        margin-bottom:5px;
                        border-radius: 5px;
                        border: 1.5px solid #F04B31;
                        padding: 6px;
                        width: 30%;
                        text-align:center;

                    }
                    .region{
                        font-family: 'Merriweather', serif;
                        font-size:12px;
                        color: #353132;
                        font-weight:400;
                        margin:8px 0;
                    }
                    .temp_day{
                        font-family: 'Roboto', sans-serif;
                        color:#065873;
                        font-size: 40px;
                        margin-top:8px;
                        margin-bottom:0;
                    
                    }
                    .box_temp{
                        border-top: 2px solid #065873;
                        border-bottom: 2px solid #065873;
                        width:85%;
                        padding: 6px 0;
                        margin-top: 6px;
                    }
                    .temp_min_max{
                        font-family: 'Roboto', sans-serif;
                        color:#065873;
                        font-weight: 600;
                        font-size: 15px;
                    }
                    .humidity{
                        font-family: 'Roboto', sans-serif;
                        color:#353132;
                        font-size: 15px;
                        font-weight: 300;
                        margin: 9px 0;

                    }
                    .text_condition{
                        font-family: 'Merriweather', serif;
                        font-size:15px;
                        font-weight:400;
                        font-style: italic;
                        color:#065873;
                        margin: 9px 0;
                    }
                    .col_3{
                        width:45%;
                        margin-top:20px;
                        margin-bottom:20px;
                        padding-left: 2%;
                        margin-rigth:5%;

                    }
                    .col_3 .encabezado{
                        margin-left:30px;
                    }
                    .day{
                        width: 48%;
                        margin:auto;
                    }
                    .containerday{
                        width:50%;
                        text-align: center;
                        margin-top:2%;
                    }
                    .containerday:first-of-type{
                        border-right: 1px solid #B1B8B5;
                    }
                    .container_img_days img{
                        width:40%;
                    }
                    .border{
                        border-top: 2px solid #065873;
                        border-bottom: 2px solid #065873;
                    }
                    .containerday .text_condition{
                        font-size: 12.5px;
                    }
                
                `}</style>
            </Base>
        )
    }
}

