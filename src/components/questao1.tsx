export default function Questao1() {
    const hora = new Date().getHours()
    const minuto = new Date().getMinutes()
  
    return (
      <div className="bg-gradient-to-r from-blue-400 to-blue-900 w-screen h-screen flex justify-center items-center flex-col">
        <span className="text-6xl font-medium text-white">
          {hora}:{minuto}
        </span>
        <h1 className="text-2xl text-white">
          Boa Noite 🌚
        </h1>
      </div>
    );
  }