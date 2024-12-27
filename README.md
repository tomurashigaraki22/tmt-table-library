```markdown
# React Customizable Table

A highly customizable and feature-rich React table component with sorting, searching, and theming capabilities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Styling](#styling)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install the package using npm:

```bash
npm install tmt-table-library
```

Or using yarn:

```shellscript
yarn add tmt-table-library
```

## Usage

Here's a basic example of how to use the Table component:

```javascriptreact
import React from 'react';
import { Table } from 'react-customizable-table';

const columns = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'email', title: 'Email' },
];

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
];

function App() {
  return (
    <Table
      columns={columns}
      data={data}
      enableSearch={true}
      enableShadow={true}
      theme="light"
    />
  );
}

export default App;
```

## Props

The Table component accepts the following props:

| Prop | Type | Default | Description
|-----|-----|-----|-----
| columns | Array | Required | An array of column objects with `key` and `title` properties
| data | Array | Required | An array of objects representing the table data
| initialSortColumn | string | '' | The key of the column to initially sort by
| initialSortDirection | 'asc' | 'desc' | 'asc' | The initial sort direction
| enableSearch | boolean | false | Whether to enable the search functionality
| enableShadow | boolean | false | Whether to add a shadow effect to the table
| maxWidth | string | '100%' | The maximum width of the table
| maxHeight | string | '400px' | The maximum height of the table
| customStyles | object |  | Custom styles to be applied to the table wrapper
| theme | 'light' | 'dark' | 'light' | The theme of the table


## Styling

The Table component uses Tailwind CSS classes for styling. You can customize the appearance by overriding these classes or by providing custom styles through the `customStyles` prop.

To use a dark theme, set the `theme` prop to `'dark'`:

```javascriptreact
<Table
  columns={columns}
  data={data}
  theme="dark"
/>
```

## Examples

### Sortable Table

```javascriptreact
import React from 'react';
import { Table } from 'react-customizable-table';

const columns = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age' },
];

const data = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
];

function SortableTable() {
  return (
    <Table
      columns={columns}
      data={data}
      initialSortColumn="age"
      initialSortDirection="desc"
    />
  );
}

export default SortableTable;
```

### Searchable Table with Custom Styles

```
import React from 'react';
import { Table } from 'react-customizable-table';

const columns = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'email', title: 'Email' },
];

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
];

const customStyles = {
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

function SearchableTable() {
  return (
    <Table
      columns={columns}
      data={data}
      enableSearch={true}
      customStyles={customStyles}
      maxHeight="300px"
    />
  );
}

export default SearchableTable;
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.