import { useCounter } from '@mantine/hooks';

import './App.css';

import { Button, Pagination, Tabs } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

function App() {
  function Demo() {
    return (
      <Tabs defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
          <Tabs.Tab value="messages">Messages</Tabs.Tab>
          <Tabs.Tab value="settings">Settings</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>

        <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

        <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
      </Tabs>
    );
  }
  return (
    <>
      <Button variant="light">123</Button>
      <Demo />
      <Pagination total={10} />
      <DatePickerInput label="Pick date" placeholder="Pick date" />
    </>
  );
}

export default App;
