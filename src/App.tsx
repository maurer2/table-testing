import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="text-center m-4">
      <table
        /* aria-label="table name" */ aria-describedby="table-title"
        className="border border-black m-auto text-left inline-grid gap-x-4 grid-cols-3"
      >
        <caption id="table-title" className="col-span-3 border-b border-black">
          <h1>Table title</h1>
        </caption>
        <thead className="contents">
          <tr className="contents [&>*]:relative [&>:not(:last-child)]:after:absolute [&>:not(:last-child)]:after:border-black [&>:not(:last-child)]:after:border-l [&>:not(:last-child)]:after:h-full [&>:not(:last-child)]:after:-right-2 [&>:not(:last-child)]:after:inset-y-0">
            <th scope="col">Header 1 for column</th>
            <th scope="col">Header 2 for column</th>
            <th scope="col" aria-sort="ascending">
              Header 3 for column
            </th>
          </tr>
        </thead>
        <tbody className="contents">
          <tr className="contents">
            <th
              id="subheader-one"
              className="col-span-3 border-b border-t border-black"
            >
              Subheader for following rows and columns
            </th>
          </tr>
          <tr className="contents [&>*]:relative [&>:not(:last-child)]:after:absolute [&>:not(:last-child)]:after:border-black [&>:not(:last-child)]:after:border-l [&>:not(:last-child)]:after:h-full [&>:not(:last-child)]:after:-right-2 [&>:not(:last-child)]:after:inset-y-0">
            <th scope="row" headers="subheader-one">
              Subsubheader for columns in row
            </th>
            <td headers="subheader-one">Column 2</td>
            <td headers="subheader-one">Column 3</td>
          </tr>
          <tr className="contents [&>*]:relative [&>:not(:last-child)]:after:absolute [&>:not(:last-child)]:after:border-black [&>:not(:last-child)]:after:border-l [&>:not(:last-child)]:after:h-full [&>:not(:last-child)]:after:-right-2 [&>:not(:last-child)]:after:inset-y-0">
            <th scope="row" headers="subheader-one">
              Subsubheader for columns in row
            </th>
            <td headers="subheader-one">Column 2</td>
            <td headers="subheader-one">Column 3</td>
          </tr>
        </tbody>
        <tbody className="contents">
          <tr className="contents [&>*]:relative [&>:not(:last-child)]:after:absolute [&>:not(:last-child)]:after:border-black [&>:not(:last-child)]:after:border-l [&>:not(:last-child)]:after:h-full [&>:not(:last-child)]:after:-right-2 [&>:not(:last-child)]:after:inset-y-0">
            <th scope="row">Subsubheader for columns in row</th>
            <td>Column 2</td>
            <td>Column 3</td>
          </tr>
        </tbody>
        <tfoot className="contents">
          <tr className="contents [&>*]:relative [&>:not(:last-child)]:after:absolute [&>:not(:last-child)]:after:border-black [&>:not(:last-child)]:after:border-l [&>:not(:last-child)]:after:h-full [&>:not(:last-child)]:after:-right-2 [&>:not(:last-child)]:after:inset-y-0">
            <td>Column 1</td>
            <td>Column 2</td>
            <td>Column 3</td>
          </tr>
        </tfoot>
      </table>
    </main>
  );
}

export default App;
