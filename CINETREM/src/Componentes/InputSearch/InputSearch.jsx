import { ImSearch } from "react-icons/im"

const InputSearch = ({type, name, id, value, placeholder, onChange}) => {
    return(

        <div className="relative flex items-center mx-5 mt-3">
                    <ImSearch className="absolute left-4 text-color_branco" />
                    <input
                        type={type}
                        name={name}
                        id={id}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        className="block w-80 h-12 rounded-2xl pl-12 bg-color_preto placeholder:text-color_branco placeholder:text-sm text-color_branco focus:outline-none"
                    />
                </div>

    )
}
export default InputSearch