import { useState } from 'react'
import { Table } from './components/Table'
import { Switch } from './components/ui/switch'

const columns = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'email', title: 'Email' },
  { key: 'role', title: 'Role' },
]

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Manager' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'User' },
]

export default function Home() {
  const [theme, setTheme] = useState('light')
  const [enableShadow, setEnableShadow] = useState(false)

  return (
    <main className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Modern Table Example</h1>
      <div className="mb-4 flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span>Theme:</span>
          <Switch
            checked={theme === 'dark'}
            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
          />
          <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>Shadow:</span>
          <Switch
            checked={enableShadow}
            onCheckedChange={setEnableShadow}
          />
        </div>
      </div>
      <Table
        columns={columns}
        data={data}
        enableSearch
        enableShadow={enableShadow}
        theme={theme}
      />
    </main>
  )
}

