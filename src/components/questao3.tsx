"use client"
import { ChangeEvent, useState } from "react"

export default function Questao3() {
    const [ nota, setNota ] = useState(0);
    const [ input, setInput ] = useState("");

    const handleNotaChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = parseFloat(event.target.value);
        if (value < 0) value = 0;
        if (value > 5) value = 5;
        setInput(value.toString());
    }

    const handleButtonClick = () => {
        setNota(Math.floor(parseFloat(input)));
        console.log(nota)
    }

    const generateEmoji = (nota: number) => {
        const happyEmojis = "😀".repeat(nota);
        const neutralEmojis = "😶".repeat(5 - nota);
        return happyEmojis + neutralEmojis;
    }

    return (
        <div className="bg-slate-200 h-screen w-screen flex justify-center">
            <div className="p-4">
                <div className="flex flex-col">
                    <label className="flex justify-center items-center gap-2 text-sm">
                        <span>
                            Insira a nota:
                        </span>
                        <input
                            type="number" 
                            name="Nota"
                            onChange={handleNotaChange}
                            value={input}
                            className="p-2 outline-none rounded-xl"
                        />
                    </label>
                    <button onClick={handleButtonClick} className="p-2 mt-2 bg-blue-500 text-white rounded-xl">
                        Inserir Nota
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-gray-700 p-2 text-white">{nota}</span>
                <p className="text-xl">{generateEmoji(nota)}</p>
            </div>
        </div>
    )
}