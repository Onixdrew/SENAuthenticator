"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import "../../Style/login.css";
// import "../../Style/login2.css"

import Modal from "../Modal/modal";

import Logo from "../../../public/assets/Img/Logo Reconocimiento Facial - Blanco.png";
import escudo from "../../../public/assets/Img/logoVerdeSENA.png";
import encabezado from "../../../public/assets/Img/logoSofiaLogin.png"

export default function Login() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
        <div className="bb ">
          <div className="Contenedor">
            <div className="Logo">
              <Image src={Logo} alt="Logo" width={150} height={150} />
            </div>

            <div className="Login ">
              <div className="Loogin">
                <form action="">
                  <div className="formulario">
                    <div className="flex flex-col justify-center gap-4 items-center">
                    <Image src={encabezado} alt="Logo" width={120} height={120} />
                    <span className="font-bold text-lg">¡Bienvenidos!</span>
                    </div>

                    <div className="TD">
                      <ion-icon name="people-circle-outline"></ion-icon>
                      <select name="" id="">
                        <option hidden selected>
                          Tipo de documento
                        </option>
                        <option value="CC">CC</option>
                        <option value="TI">TI</option>
                        <option value="PPT">PPT</option>
                        <option value="CE">CE</option>
                      </select>
                    </div>
                    
                    <div className="IP ">
                      <ion-icon name="keypad-outline"></ion-icon>
                      <input
                        type="text"
                        placeholder="Numero de documento"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="IP">
                      <ion-icon name="key-outline"></ion-icon>
                      <input
                        type="password"
                        placeholder="Contraseña"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </form>
                <div>
                  <button className="BB" onClick={() => setMostrar(true)}>
                    Ingresar
                  </button>
                  <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
                    <div className="Oopciones">
                      <h3>Rol</h3>
                      <div className="Opp">
                        <Link href="/Administrativo">Administrativo</Link>
                        <Link href="/guardia/guardiaInicio">Vigilante</Link>
                        <Link href="/Instructor">Instructor</Link>
                        <Link href="/Aprendiz">Aprendiz</Link>
                      </div>
                    </div>
                  </Modal>
                </div>
                <Link className="underline" href="/OlvidarContraseña">
                  Olvide mi contraseña
                </Link>
                <Link className="underline" href="/Register">
                  Registrarse
                </Link>
              </div>
            </div>

            <div className="Escudo">
              <Image src={escudo} alt="Logo" width={150} height={150} />
            </div>
          </div>
        </div>
    </div>
  );
}
