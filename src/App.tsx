import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="text-center my-4">
      <table /* aria-label="table name" */ aria-describedby="table-title" className="border border-black m-auto text-left inline-grid gap-4 grid-cols-3">
        <caption id="table-title" className="col-span-3">
          <h1>Table title</h1>
        </caption>
        <thead className="contents">
          <tr className="contents">
            <th scope="col" className="">Header 1 for column</th>
            <th scope="col">Header 2 for column</th>
            <th scope="col" aria-sort="ascending">
              Header 3 for column
            </th>
          </tr>
        </thead>
        <tbody className="contents">
          <tr className="contents">
            <th scope="rowgroup" className="col-span-3">Subheader for following rows and columns</th>
          </tr>
          <tr className="contents">
            <th scope="row">Subsubheader for columns in row</th>
            <td>Column 2</td>
            <td>Column 3</td>
          </tr>
          <tr className="contents">
            <th scope="row">Subsubheader for columns in row</th>
            <td>Column 2</td>
            <td>Column 3</td>
          </tr>
        </tbody>
        <tfoot className="contents">
          <tr className="contents">
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
