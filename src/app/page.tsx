'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [showBark, setShowBark] = useState(false);
  const [showGif, setShowGif] = useState(false);

  // Función para cambiar el estado y mostrar el "ladrido"
  const handleImageClick = () => {
    setShowBark(true);
    setTimeout(() => setShowBark(false), 2000); // Ocultar el texto después de 2 segundos
  };

  // Efecto para agregar el event listener del teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "r" || event.key === "R") {
      setShowGif(true);
      }
    };

    // Agregar el event listener
    window.addEventListener("keydown", handleKeyDown);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Función para cerrar el GIF
  const handleCloseGif = () => {
    setShowGif(false);
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
          position: "relative",
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
          priority={true}
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
          Perfectamente Siro
        </h1>

        {/* Modal con GIF que aparece al presionar R */}
        {showGif && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 10,
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                maxWidth: "80%",
                textAlign: "center",
              }}
            >
              <h3 style={{ marginBottom: "15px", color:"black" }}>Comiste</h3>
              
              {/* Aquí va el GIF - Usa un placeholder o URL real de un GIF */}
              <div style={{ marginBottom: "15px" }}>
                <img 
                  src="https://media.tenor.com/BhUGJxnbR48AAAAM/letter-r.gif"
                  alt="GIF especial" 
                  style={{ maxWidth: "100%", borderRadius: "5px" }}
                />
              </div>
              
             
              <div>
                <button
                  onClick={handleCloseGif}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

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