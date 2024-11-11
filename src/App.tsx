function App() {
  return (
    <main className="text-center m-4">
      <table
        className="border border-current m-auto text-left inline-grid gap-x-px grid-cols-3"
        summary="A test table"
        aria-describedby="table-title"
        // aria-label="table name"
        // aria-rowcount=""
      >
        <caption id="table-title" className="col-span-3 border-b border-current p-2">
          <h1 className="text-xl font-bold">Table title</h1>
        </caption>
        <thead className="contents">
          <tr className="contents [&>*]:relative [&>*]:after:block [&>:last-child:after]:content-none [&>:after]:absolute [&>:after]:border-current [&>:after]:border-l [&>:after]:h-full [&>:after]:-right-px [&>:after]:inset-y-0">
            <th scope="col" className="p-2">
              Header for first column
            </th>
            <th scope="col" className="p-2">
              Header for second column
            </th>
            <th scope="col" className="p-2" aria-sort="ascending">
              Header for third column
            </th>
          </tr>
        </thead>
        <tbody className="contents">
          <tr className="contents">
            <th
              id="subheader-one"
              className="col-span-3 border-b border-t border-current bg-slate-200 p-2"
              colSpan={3}
              // scope="rowgroup" // https://stackoverflow.com/questions/76215673/whats-the-correct-html-markup-to-use-for-headers-for-groups-of-table-rows / https://www.codeguage.com/courses/html/tables-header-scope
              // scope="colgroup" // https://www.w3.org/WAI/tutorials/tables/multi-level/#colgroup
            >
              Subheader for following rows and columns in gray
            </th>
          </tr>
          <tr className="contents [&>*]:relative [&>*]:after:block [&>:last-child:after]:content-none [&>:after]:absolute [&>:after]:border-current [&>:after]:border-l [&>:after]:h-full [&>:after]:-right-px [&>:after]:inset-y-0">
            <th scope="row" headers="subheader-one" className="bg-slate-200 p-2">
              Subsubheader for all columns in this row
            </th>
            <td headers="subheader-one" className="bg-slate-200 p-2">
              Column 2
            </td>
            <td headers="subheader-one" className="bg-slate-200 p-2">
              Column 3
            </td>
          </tr>
          <tr className="contents [&>*]:relative [&>*]:after:block [&>:last-child:after]:content-none [&>:after]:absolute [&>:after]:border-current [&>:after]:border-l [&>:after]:h-full [&>:after]:-right-px [&>:after]:inset-y-0">
            <th scope="row" headers="subheader-one" className="bg-slate-200 p-2">
              Subsubheader for all columns in this row
            </th>
            <td headers="subheader-one" className="bg-slate-200 p-2">
              Column 2
            </td>
            <td headers="subheader-one" className="bg-slate-200 p-2">
              Column 3
            </td>
          </tr>
        </tbody>
        <tbody className="contents">
          <tr className="contents [&>*]:relative [&>*]:after:block [&>:last-child:after]:content-none [&>:after]:absolute [&>:after]:border-current [&>:after]:border-l [&>:after]:h-full [&>:after]:-right-px [&>:after]:inset-y-0">
            <th scope="row" className="border-t border-current p-2">
              Subsubheader for all columns in this row
            </th>
            <td className="border-t border-current p-2">Column 2</td>
            <td className="border-t border-current p-2">Column 3</td>
          </tr>
        </tbody>
        {/* <tfoot className="contents">
          <tr className="contents [&>*]:relative [&>*]:after:block [&>:last-child:after]:content-none [&>:after]:absolute [&>:after]:border-current [&>:after]:border-l [&>:after]:h-full [&>:after]:-right-px [&>:after]:inset-y-0">
            <td className="border-t border-current">Column 1</td>
            <td className="border-t border-current">Column 2</td>
            <td className="border-t border-current">Column 3</td>
          </tr>
        </tfoot> */}
      </table>
    </main>
  );
}

export default App;
