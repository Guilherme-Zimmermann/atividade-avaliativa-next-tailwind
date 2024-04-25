export default function Questao2() {
    const hora = new Date().getHours()
    const minuto = new Date().getMinutes()
  
    return (
      <div className="bg-gradient-to-r from-blue-400 to-blue-900 w-screen h-screen flex justify-center items-center flex-col">
        <span className="text-6xl font-medium text-white">
          {hora}:{minuto}
        </span>
        <h1 className="text-2xl text-white">
          {hora >= 6 && hora < 12  ? "Bom dia ☀️" : hora >= 12 && hora < 18 ? "Boa tarde 🌇" : "Boa noite 🌚"}
        </h1>
      </div>
    );
  }