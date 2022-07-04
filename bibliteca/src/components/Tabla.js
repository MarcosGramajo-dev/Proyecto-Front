import React , {useState}from 'react'
import '../Styles/Tabla.css'

function Tabla(props) {
    const svgDelete = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="15" fill="#D11A2A"/>
    <g clipPath="url(#clip0_10_95)">
    <path d="M11.2291 9.89583L12.401 28.6458C12.4567 29.7292 13.2448 30.5208 14.276 30.5208H25.0573C26.0926 30.5208 26.866 29.7292 26.9323 28.6458L28.1041 9.89583" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.35416 9.89583H29.9792H9.35416Z" fill="white"/>
    <path d="M9.35416 9.89583H29.9792" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M15.9166 9.89583V7.55208C15.9161 7.36726 15.9521 7.18415 16.0226 7.0133C16.093 6.84244 16.1966 6.6872 16.3273 6.55651C16.458 6.42582 16.6132 6.32225 16.7841 6.25178C16.9549 6.1813 17.1381 6.14529 17.3229 6.14583H22.0104C22.1952 6.14529 22.3783 6.1813 22.5492 6.25178C22.72 6.32225 22.8753 6.42582 23.006 6.55651C23.1366 6.6872 23.2402 6.84244 23.3107 7.0133C23.3812 7.18415 23.4172 7.36726 23.4166 7.55208V9.89583M19.6666 13.6458V26.7708M15.4479 13.6458L15.9166 26.7708M23.8854 13.6458L23.4166 26.7708" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_10_95">
    <rect width="22" height="26" fill="white" transform="translate(8.66666 5.33333)"/>
    </clipPath>
    </defs>
    </svg>

    const svgEdit = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="15" fill="#24A0ED"/>
    <path d="M28.6667 16.3333V25.9167C28.6667 26.1903 28.6128 26.4612 28.5081 26.7139C28.4034 26.9667 28.2499 27.1964 28.0565 27.3898C27.863 27.5833 27.6334 27.7367 27.3806 27.8414C27.1278 27.9461 26.8569 28 26.5833 28H14.0833C13.5308 28 13.0009 27.7805 12.6102 27.3898C12.2195 26.9991 12 26.4692 12 25.9167V13.4167C12 12.8641 12.2195 12.3342 12.6102 11.9435C13.0009 11.5528 13.5308 11.3333 14.0833 11.3333H22.8063" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32.6219 7.44011C32.5458 7.35648 32.4535 7.28916 32.3506 7.2422C32.2478 7.19524 32.1365 7.16963 32.0234 7.1669C31.9104 7.16417 31.798 7.18439 31.693 7.22634C31.588 7.26828 31.4926 7.33108 31.4125 7.41094L30.7682 8.05209C30.6902 8.13022 30.6463 8.23616 30.6463 8.34662C30.6463 8.45708 30.6902 8.56302 30.7682 8.64115L31.3589 9.23073C31.3976 9.26963 31.4436 9.3005 31.4943 9.32156C31.5449 9.34262 31.5993 9.35346 31.6542 9.35346C31.709 9.35346 31.7634 9.34262 31.8141 9.32156C31.8647 9.3005 31.9108 9.26963 31.9495 9.23073L32.5776 8.60573C32.8953 8.28855 32.925 7.77188 32.6219 7.44011ZM29.4656 9.35417L20.0635 18.7396C20.0065 18.7964 19.9651 18.8669 19.9432 18.9443L19.5083 20.2396C19.4979 20.2747 19.4972 20.312 19.5062 20.3476C19.5152 20.3831 19.5337 20.4155 19.5596 20.4415C19.5855 20.4674 19.6179 20.4858 19.6535 20.4949C19.689 20.5039 19.7263 20.5031 19.7615 20.4927L21.0557 20.0578C21.1332 20.0359 21.2036 19.9945 21.2604 19.9375L30.6458 10.5344C30.7327 10.4466 30.7814 10.3281 30.7814 10.2047C30.7814 10.0812 30.7327 9.96276 30.6458 9.87501L30.1276 9.35417C30.0397 9.26655 29.9207 9.21734 29.7966 9.21734C29.6725 9.21734 29.5535 9.26655 29.4656 9.35417Z" fill="white"/>
    </svg>

    const svgAlert = <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M87.5 50C87.5 29.2969 70.7031 12.5 50 12.5C29.2969 12.5 12.5 29.2969 12.5 50C12.5 70.7031 29.2969 87.5 50 87.5C70.7031 87.5 87.5 70.7031 87.5 50Z" stroke="#D11A2A" strokeWidth="6" strokeMiterlimit="10"/>
    <path d="M48.879 32.4317L50.0001 56.2501L51.1192 32.4317C51.1261 32.2794 51.1019 32.1273 51.048 31.9848C50.9942 31.8422 50.9118 31.7121 50.806 31.6024C50.7001 31.4927 50.573 31.4057 50.4325 31.3468C50.2919 31.2879 50.1408 31.2583 49.9883 31.2598V31.2598C49.8377 31.2612 49.689 31.293 49.5509 31.3532C49.4128 31.4134 49.2883 31.5008 49.1848 31.6101C49.0812 31.7195 49.0008 31.8486 48.9482 31.9898C48.8957 32.1309 48.8721 32.2812 48.879 32.4317V32.4317Z" stroke="#D11A2A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50 71.8574C49.2274 71.8574 48.4722 71.6283 47.8298 71.1991C47.1874 70.7699 46.6868 70.1598 46.3911 69.446C46.0954 68.7323 46.0181 67.9468 46.1688 67.1891C46.3195 66.4314 46.6916 65.7353 47.2379 65.189C47.7842 64.6427 48.4802 64.2707 49.2379 64.12C49.9957 63.9693 50.7811 64.0466 51.4949 64.3423C52.2086 64.6379 52.8187 65.1386 53.2479 65.781C53.6772 66.4234 53.9063 67.1786 53.9063 67.9512C53.9063 68.9872 53.4947 69.9807 52.7621 70.7133C52.0296 71.4459 51.036 71.8574 50 71.8574Z" fill="#D11A2A"/>
    </svg>

    const svgSubmit = <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.25 14.2578C31.25 14.2578 33.6289 13.0859 25 13.0859C21.9097 13.0859 18.8887 14.0023 16.3192 15.7192C13.7497 17.4361 11.747 19.8764 10.5644 22.7315C9.38177 25.5866 9.07234 28.7283 9.67524 31.7592C10.2781 34.7902 11.7663 37.5743 13.9515 39.7595C16.1367 41.9447 18.9208 43.4328 21.9517 44.0357C24.9827 44.6386 28.1243 44.3292 30.9794 43.1466C33.8345 41.9639 36.2748 39.9612 37.9917 37.3917C39.7086 34.8222 40.625 31.8013 40.625 28.7109" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="square"/>
    <path d="M25 5.66406L32.8125 13.4766L25 21.2891" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
    </svg>

    let [classNameEliminar, setClassNameEliminar] = useState("conteiner-modal-delete-oculto")

    let [classNameSubmit, setClassNameSubmit] = useState("conteiner-modal-submit-oculto")

    function eliminar(e) {
        e.preventDefault();

        console.log("elimina")

        if(classNameEliminar === "conteiner-modal-delete"){
            setClassNameEliminar("conteiner-modal-delete-oculto")
        }

        else{
            setClassNameEliminar("conteiner-modal-delete")
        }
    }
    

    function cargar(){

        setClassNameEliminar("conteiner-modal-delete-oculto")
        if(classNameSubmit === "conteiner-modal-submit"){
            setClassNameSubmit("conteiner-modal-submit-oculto")
        }

        else{
            setClassNameSubmit("conteiner-modal-submit")

            setTimeout(function() {
                setClassNameSubmit("conteiner-modal-submit-oculto")      
            }, 500);
        }
    }
    
    
    

    return (
        <div className="contenedor3">
            <table>
                <thead>
                    <tr>
                        <td>Nombre y Apellido</td>
                        <td className="telefono">Telefono</td>
                        <td>Direccion</td>
                        <td>Titulo del Libro</td>
                        <td>Fecha de Devolucion</td>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {props.usuarios.map((user) => (
                    <tr>
                        <td> {user.nombre} </td>
                        <td className="telefono"> {user.telefono} </td>
                        <td> {user.direccion} </td>
                        <td> {user.libro} </td>
                        <td> {user.date} </td>
                        <th><div className="editar">{svgEdit}</div></th>
                        <th><div className="eliminar" onClick={eliminar}>{svgDelete}</div></th>
                    </tr>
                        ))}
                    <tr className="impar">
                            <td>Nombre y Apellido</td>
                            <td className="telefono">Telefono</td>
                            <td>Direccion</td>
                            <td>Titulo del Libro</td>
                            <td>Fecha de Devolucion</td>
                            <th><div className="editar">{svgEdit}</div></th>
                            <th><div className="eliminar" onClick={eliminar}>{svgDelete}</div></th>
                    </tr>

                    <tr className="par">
                            <td>Nombre y Apellido</td>
                            <td className="telefono">Telefono</td>
                            <td>Direccion</td>
                            <td>Titulo del Libro</td>
                            <td>Fecha de Devolucion</td>
                            <th><div className="editar">{svgEdit}</div></th>
                            <th><div className="eliminar" onClick={eliminar}>{svgDelete}</div></th>
                    </tr>

                    <tr className="impar">
                            <td>Nombre y Apellido</td>
                            <td className="telefono">Telefono</td>
                            <td>Direccion</td>
                            <td>Titulo del Libro</td>
                            <td>Fecha de Devolucion</td>
                            <th><div className="editar">{svgEdit}</div></th>
                            <th><div className="eliminar" onClick={eliminar}>{svgDelete}</div></th>
                    </tr>

                    <tr className="par">
                            <td>Nombre y Apellido</td>
                            <td className="telefono">Telefono</td>
                            <td>Direccion</td>
                            <td>Titulo del Libro</td>
                            <td>Fecha de Devolucion</td>
                            <th><div className="editar">{svgEdit}</div></th>
                            <th><div className="eliminar" onClick={eliminar}>{svgDelete}</div></th>
                    </tr>

                    <tr className="impar">
                            <td>Nombre y Apellido</td>
                            <td className="telefono">Telefono</td>
                            <td>Direccion</td>
                            <td>Titulo del Libro</td>
                            <td>Fecha de Devolucion</td>
                            <th><div className="editar">{svgEdit}</div></th>
                            <th><div className="eliminar" onClick={eliminar}>{svgDelete}</div></th>
                    </tr>

                    <tr className="par">
                            <td>Nombre y Apellido</td>
                            <td className="telefono">Telefono</td>
                            <td>Direccion</td>
                            <td>Titulo del Libro</td>
                            <td>Fecha de Devolucion</td>
                            <th><div className="editar">{svgEdit}</div></th>
                            <th><div className="eliminar" onClick={eliminar}>{svgDelete}</div></th>
                    </tr>

                </tbody>
            </table>

            <div className={classNameEliminar}>
                <div className="modal-delete">
                    <div className="img-alert">{svgAlert}</div>
                    <h4>¿Está seguro de que quiere eliminar?</h4>
                    <div>
                        <button className="button-cancelar" onClick={eliminar}>Cancelar</button>
                        <button className="button-eliminar" onClick={cargar}>Eliminar</button>
                    </div>
                </div>
            </div>

            <div className={classNameSubmit}>
                <div className="modal-submit">
                    <div className="img-submit">{svgSubmit}</div>
                    <h4>Cargando Cambios</h4>
                </div>
            </div>
        </div>

    );
  }
  
  export default Tabla;