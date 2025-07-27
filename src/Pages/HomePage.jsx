import Tabs from "../Components/CompoundCoponent/TabsCoponent";
import TabsContainer from "../Components/TabsContainer";

export default function HomePage() {
	return (
		<>
			<h1>This is tha Home Page</h1>
			<TabsContainer></TabsContainer>
			<Tabs defaultIndex={0}>
				<Tabs.List>
					<Tabs.Tab index={0}>Tab 1</Tabs.Tab>
					<Tabs.Tab index={1}>Tab 2</Tabs.Tab>
					<Tabs.Tab index={2}>Tab 3</Tabs.Tab>
				</Tabs.List>
				<Tabs.Panels>
					<Tabs.Panel index={0}>Content for Tab 1</Tabs.Panel>
					<Tabs.Panel index={1}>Content for Tab 2</Tabs.Panel>
					<Tabs.Panel index={2}>Content for Tab 3</Tabs.Panel>
				</Tabs.Panels>
			</Tabs>
		</>
	)
}
