import React, {useState, createContext, useContext} from "react";

// Create context to share active tab state and setter
const TabsContext = createContext();

function Tabs({defaultIndex = 0, children}) {
	const [activeIndex, setActiveIndex] = useState(defaultIndex);

	return (
		<TabsContext.Provider value={{activeIndex, setActiveIndex}}>
			<div>{children}</div>
		</TabsContext.Provider>
	);
}

function TabsList({children}) {
	// Just a wrapper for styling or layout of tab buttons
	return <div role="tablist">{children}</div>;
}

function Tab({index, children}) {
	const {activeIndex, setActiveIndex} = useContext(TabsContext);
	const isActive = activeIndex === index;

	return (
		<button
			role="tab"
			aria-selected={isActive}
			onClick={() => setActiveIndex(index)}
			style={{fontWeight: isActive ? "bold" : "normal", cursor: "pointer"}}
		>
			{children}
		</button>
	);
}

function TabsPanels({children}) {
	return <div>{children}</div>;
}

function TabPanel({index, children}) {
	const {activeIndex} = useContext(TabsContext);

	if (activeIndex !== index) {
		return null;
	}

	return (
		<div role="tabpanel" style={{marginTop: 20}}>
			{children}
		</div>
	);
}

// Attach subcomponents as properties for compound API
Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panels = TabsPanels;
Tabs.Panel = TabPanel;

export default Tabs;
