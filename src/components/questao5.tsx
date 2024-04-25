export default function Questao5() {

    type Student = {
        id: number,
        active: boolean,
        name: string,
        email: string,
        avatar: string
        grade1: number,
        grade2: number
    }

    const students: Student[] = [
        {
            id: 1,
            active: true,
            name: 'Mariano Dias',
            email: 'mariano@site.com.br',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJvc3RvfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            grade1: 6.3,
            grade2: 9.5
        },
        {
            id: 2,
            active: true,
            name: 'João Mario',
            email: 'mario@site.com.br',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJvc3RvfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            grade1: 7.9,
            grade2: 8.6
        },
        {
            id: 3,
            active: false,
            name: 'Joana',
            email: 'joana@site.com.br',
            avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJvc3RvfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            grade1: 7.3,
            grade2: 4.9
        },
        {
            id: 4,
            active: true,
            name: 'Margarida',
            email: 'maga@site.com.br',
            avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHJvc3RvfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            grade1: 9,
            grade2: 7.1
        },
        {
            id: 5,
            active: true,
            name: 'Mario Jonas',
            email: 'marioj@site.com.br',
            avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHJvc3RvfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            grade1: 10,
            grade2: 8.7
        },
        {
            id: 6,
            active: false,
            name: 'Neymar Ney',
            email: 'meninoney@escola.com.br',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHJvc3RvfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            grade1: 4.5,
            grade2: 5.2
        }
    ];

    return(
        <div className="flex h-screen w-screen justify-center items-center flex-col gap-2">
            <h1 className="text-2xl font-bold">Lista de Estudantes</h1>
            <table className="rounded-xl border-collapse bg-gray-300">
                <thead className="bg-gray-500">
                    <tr>
                        <th className="font-semibold p-3 text-start">Nome</th>
                        <th className="font-semibold p-3">Status</th>
                        <th className="font-semibold p-3">Grade 1</th>
                        <th className="font-semibold p-3">Grade 2</th>
                        <th className="font-semibold p-3">Final Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((data, index) => {
                        const finalGrade = (data.grade1 + data.grade2) / 2
                        return (
                            <tr key={index} className="border-t border-black">
                                <td className="p-2 w-96">
                                    <div className="flex gap-4 items-center">
                                        <img src={data.avatar} className="w-10 h-10 rounded-3xl"/>
                                        <div>
                                            <p className="text-lg font-semibold">{data.name}</p>
                                            <p className="text-sm font-normal">{data.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="justify-center w-32 text-center">
                                    {
                                        data.active ? 
                                        <span className="text-white bg-green-500 p-1 rounded-md border border-slate-500 text-xs font-semibold">
                                            Ativo
                                        </span> : 
                                        <span className="text-white bg-red-500 p-1 rounded-md border border-slate-500 text-xs font-semibold">
                                            Inativo
                                        </span>
                                    }
                                </td>
                                <td className="w-32 text-center">
                                    <span>{data.grade1}</span>
                                </td>
                                <td className="w-32 text-center">
                                    <span>{data.grade2}</span>
                                </td>
                                <td className="w-32 text-center">
                                    {data.active ? <span>{finalGrade.toFixed(1)}</span> : <span>---</span>}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}