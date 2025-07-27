import {createContext, useContext, useState} from "react"

const DropDownContext = createContext()

function ListOfOptions({children}) {
	return (
		<div>{children}</div>
	)
}
function Option({children}) {
	const {setShowListOfOptions, setActiveOption} = useContext(DropDownContext)
	return (
		<button onClick={() => {setActiveOption(children); setShowListOfOptions(false)}} >{children}</button>
	)
}

export default function DropdownComponent({children}) {
	const [activeOption, setActiveOption] = useState("")
	const [showListOfOptions, setShowListOfOptions] = useState(false)

	return (
		<DropDownContext.Provider value={{activeOption, setActiveOption, showListOfOptions, setShowListOfOptions}} >
			<h1>{activeOption}</h1>
			<button onClick={() => setShowListOfOptions((curr) => !curr)} >select Option</button>
			{showListOfOptions && <>{children}</>}
		</DropDownContext.Provider>)
}

DropdownComponent.ListOfOptions = ListOfOptions
DropdownComponent.Option = Option
