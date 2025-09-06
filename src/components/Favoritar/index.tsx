interface FavoritarProp {
    favoritar: boolean;
    onChange?: (favoritado: boolean) => void;
}

export default function Favoritar({ favoritar, onChange }: FavoritarProp) {
    return (
        <label className="relative inline-flex items-center justify-center w-[45px] h-[45px] cursor-pointer group">
            <input
                type="checkbox"
                className="hidden peer"
                checked={favoritar}
                onChange={() => onChange?.(!favoritar)}
            />
            <div className="w-8 h-auto flex items-center justify-center relative transition-all duration-200">
                <svg
                    viewBox="0 0 32 32"
                    className="w-full h-full"
                >
                    <path
                        d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"
                        className={`transition-all duration-200 ${favoritar ? 'fill-yellow-400' : 'fill-neutral-600 group-hover:fill-neutral-500'}`}
                    />
                </svg>
            </div>


        </label>
    );
}