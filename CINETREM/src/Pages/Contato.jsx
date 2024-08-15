import Footer from "../Componentes/Footer/Footer";
import { useState } from 'react';
import emailjs from '@emailjs/browser'

function Contato() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            alert("Preencha todos os campos");
            return;
        }
        
        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_84ij4cy", "template_g8is39b", templateParams, "Nro_tNmY9y4NE6psl")
        .then((response) => {
            console.log("email enviado", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (error) => {
            console.log("erro", error)
        })
    }

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex-col">
                    <h1 className="font-bold text-color_preto text-2xl ml-10 mt-10">Entre em contato Conosco</h1>
                    <div className="flex ml-16 mt-10 bg-cover">
                        <div className="bg-color_roxo3 p-6 pr-8 rounded-lg w-80 h-full flex flex-col drop-shadow-lg">
                            <form className="flex flex-col gap-4 items-center" onSubmit={sendEmail}>

                                <input className="block w-full p-2 rounded-md ml-2 bg-color_roxo1 placeholder:text-color_branco placeholder:text-sm text-color_branco focus:outline-none" 
                                type="text" 
                                placeholder="Digite seu nome" 
                                onChange={(e) => setName(e.target.value)} 
                                value={name} />

                                <input className="block w-full p-2 rounded-md ml-2 bg-color_roxo1 placeholder:text-color_branco placeholder:text-sm text-color_branco focus:outline-none" 
                                type="text" 
                                placeholder="Digite seu email" 
                                onChange={(e) => setEmail(e.target.value)} 
                                value={email} />

                                <textarea className="block w-full p-2 ml-2 bg-color_roxo1 text-white rounded-md focus:outline-none placeholder:text-color_branco placeholder:text-sm" 
                                placeholder="Digite sua mensagem" 
                                onChange={(e) => setMessage(e.target.value)} 
                                value={message} />
                                
                                <input className="w-40 text-color_branco bg-color_roxo1 rounded-lg py-2 px-4 hover:underline hover:font-semibold" 
                                type="submit" value="Enviar" />

                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-60">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Contato;