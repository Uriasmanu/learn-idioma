interface BotaoGeralProp {
    textoBotao: string;
    cor?: 'blue' | 'yellow'; // cores permitidas
}

export default function BotaoGeral({ textoBotao, cor = 'blue' }: BotaoGeralProp) {
    const cores = {
        blue: 'bg-blue-500 border-blue-600 hover:border-b-[6px]',
        yellow: 'bg-amber-300 border-orange-600 hover:border-b-[6px]'
    };

    return (
        <button
            className={`cursor-pointer transition-all text-black font-medium px-6 py-2 rounded-lg
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
            ${cores[cor]}`}
        >
            {textoBotao}
        </button>
    );
}
