import {useState} from "react"

export default function TabsContainer() {

	const [listOfTabs, updateListOfTabs] = useState([])
	const [selectedTab, setSelectedTab] = useState(null)

	const addNewTab = () => {
		const id = new Date().getTime()
		updateListOfTabs((curr) => [...curr, {id: id}])
	}

	const closeTab = (tabId) => {
		if (tabId === selectedTab.id) {
			setSelectedTab(null)
		}
		updateListOfTabs((curr) => {
			return curr.filter((tab) => tab.id !== tabId);
		});
	}

	return (
		<>
			<div style={{display: "flex", flexDirection: "row"}}>
				<div style={{width: "50%"}}>
					<h1>this will be the tab list</h1>
					<ul>
						{listOfTabs.map((tab) => (
							<li key={tab.id}>
								<h3>{tab.id}</h3>
								<button onClick={() => closeTab(tab.id)}>Close Tab</button>
								<button onClick={() => setSelectedTab(tab)}> View Tab </button>
							</li>
						))}
					</ul>
					<button onClick={() => addNewTab()}>Add New Tab</button>
				</div>
				{selectedTab &&
					<div style={{width: "50%"}}>
						<h1>you are viewing the tab with id {selectedTab.id}</h1>
					</div>}
			</div>
		</>
	)
}
