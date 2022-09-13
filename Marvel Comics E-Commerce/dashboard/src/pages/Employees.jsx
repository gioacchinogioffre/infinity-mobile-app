import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Search, Page, ExcelExport, PdfExport, Edit, Inject, Sort, Toolbar, Selection } from '@syncfusion/ej2-react-grids'

import { employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'

const Employees = () => {
  return (
    <div className='mt-12 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='Page' title='Employees'/>
    <GridComponent dataSource={employeesData} allowPaging allowSorting allowPdfExport editSettings={{allowDeleting: true, allowEditing: true, allowAdding: true}} toolbar={['Search', 'Delete', 'Add']}  width='auto'  >
      <ColumnsDirective>
        {employeesGrid.map((item,index) => (
          <ColumnDirective key={index} {...item}/>
        ))}
      </ColumnsDirective>
      <Inject services={[Page, Search, Sort, Toolbar, Edit, PdfExport, Selection]}/>
    </GridComponent>
  </div>
  )
}

export default Employees