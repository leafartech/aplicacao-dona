
export default function Button({ label }: { label: string }) {
    return (
        <button
            className="z-50 w-full max-w-md bg-gradient-to-br from-orange-400 to-orange-700 hover:to-orange-500 hover:from-orange-500 py-2 rounded-md text-white sm:text-xl font-semibold uppercase shadow-2xl shadow-orange-600"
        >
            {label}
        </button>
    )
}