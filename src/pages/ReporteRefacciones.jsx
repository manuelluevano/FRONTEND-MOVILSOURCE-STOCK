import DataTable from "react-data-table-component"


const ReporteRefacciones = () => {
    const columns = [
        {
            name: 'Refaccion',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Precio',
            selector: row => row.email,
            sortable: true

        }
    ]
    const data = [
        {
            id: 1,
            name: 'juan',
            email: "a@gmai.com"
        },
        {
            id: 2,
            name: 'jose',
            email: "12@gmai.com"
        }
    ]
  return (
    <div className="container mt-5">
        <DataTable
        columns={columns}
        data={data}
        selectableRows
        fixedHeader
        pagination
        >

        </DataTable>
    </div>
  )
}

export default ReporteRefacciones