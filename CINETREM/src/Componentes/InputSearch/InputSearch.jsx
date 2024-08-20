import { ImSearch } from "react-icons/im"

const InputSearch = props => {
    return(
        <div className="relative flex items-center mx-5 mt-3">
                    <ImSearch className="absolute left-4 text-color_branco" />
                    <input
                        className="block w-80 h-12 rounded-2xl pl-12 bg-color_preto placeholder:text-color_branco placeholder:text-sm text-color_branco focus:outline-none"
                        placeholder="Busque por um filme"
                        type="text"
                        {...props}
                    />
                </div>
    )
}
export default InputSearch