/* Encapsulado específico con # para evitar conflictos */
#section-interactive {
    background-color: #000;
    height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;
}

#section-interactive .interactive {
    display: flex;
    width: 100%;
    height: 100%;
}

#section-interactive .slider-left,
#section-interactive .slider-right {
    flex: 1;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
}

#section-interactive .slider-left {
    position: relative;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

#section-interactive .slider-left .image-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 200%; /* Ajustar según el número de imágenes */
    height: 100%;
}

#section-interactive .slider-left img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    flex: 1 0 100%;
}

#section-interactive .slider-right {
    padding: 40px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centrar verticalmente */
    align-items: flex-start; /* Alinear al inicio horizontalmente */
}

#section-interactive .slider-right h2 {
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 60px; /* Aumentamos el margen inferior */
    color: #fff;
    max-width: 80%;
    line-height: 1.2;
}

#section-interactive .slider-right .options-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

#section-interactive .slider-right .option {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
}

#section-interactive .slider-right .option-number {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #fff;
    color: #000;
    margin-right: 10px;
    transition: background-color 0.3s, color 0.3s;
    flex-shrink: 0;
}

#section-interactive .slider-right .option:hover .option-number,
#section-interactive .slider-right .option.active .option-number {
    background-color: #007bff; /* Azul destacado */
    color: #fff;
}

#section-interactive .slider-right .option-text {
    max-width: calc(100% - 60px);
}

#section-interactive .slider-right .option-text h3 {
    font-weight: 500;
    margin: 0;
    margin-bottom: 5px;
    color: #fff;
    transition: color 0.3s;
}

#section-interactive .slider-right .option:hover .option-text h3,
#section-interactive .slider-right .option.active .option-text h3 {
    color: #007bff; /* Azul destacado */
}

#section-interactive .slider-right .option-text p {
    margin: 0;
    color: #fff;
    transition: color 0.3s;
    display: none;
}

#section-interactive .slider-right .option.active .option-text p {
    display: block;
}

#section-interactive .buttons {
    display: flex;
    gap: 10px;
    margin-top: 50px; /* Aumentamos el margen superior */
    align-self: center; /* Centramos horizontalmente */
}

#section-interactive .buttons a {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 180px;
    padding: 15px 15px;
    text-decoration: none;
    border-radius: 0px;
    transition: all 0.3s;
    color: #000;
    background-color: #FEDD00;
}

#section-interactive .buttons a:hover {
    color: #fff;
    background-color: #FFD700;
    transform: scale(1.05);
}

#section-interactive .slider-left .nav-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    color: #000;
    background-color: #fff;
    border: none;
    cursor: pointer;
    z-index: 10;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#section-interactive .slider-left .nav-arrow.prev {
    left: 10px;
}

#section-interactive .slider-left .nav-arrow.next {
    right: 10px;
}

/* Ocultar en pantallas móviles */
@media only screen and (max-width: 768px) {
    #section-interactive {
        display: none;
    }
}
