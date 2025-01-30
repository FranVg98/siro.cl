'use client';
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showBark, setShowBark] = useState(false);

  // Función para cambiar el estado y mostrar el "ladrido"
  const handleImageClick = () => {
    setShowBark(true);
    setTimeout(() => setShowBark(false), 2000); // Ocultar el texto después de 2 segundos
  };

  return (
    <div>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >


        {/* Mostrar el ladrido si el estado showBark es true */}
        {showBark && (
          <h2
            style={{
              fontFamily: "sans-serif",
              fontSize: "3rem",
              color: "white",
              animation: "bark-animation 2s forwards",
            }}
          >
            ¡Woof! ¡Woof! ¡Woof!
          </h2>
        )}

        <Image
          src="/image.png" // Asegúrate de que esta imagen esté en la carpeta public/
          alt="Perro"
          width={450}
          height={455}
          priority
          style={{ borderRadius: "3%", cursor: "pointer" }}
          onClick={handleImageClick} // Evento de clic en la imagen
        />
        <h1
          style={{
            fontFamily: "sans-serif",
            fontSize: "2rem",
            marginTop: "1rem",
          }}
        >
          Simplemente siro
        </h1>


        <style jsx>{`
          @keyframes bark-animation {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              transform: translateY(-30px); /* Mueve hacia arriba */
              opacity: 0.5; /* Empieza a desvanecerse */
            }
            100% {
              transform: translateY(-60px); /* Sigue moviendo hacia arriba */
              opacity: 0; /* Se desvanece completamente */
            }
          }
        `}</style>
      </main>
    </div>
  );
}
