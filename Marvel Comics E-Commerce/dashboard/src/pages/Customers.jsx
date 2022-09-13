import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Toolbar, Sort, Filter, Edit } from '@syncfusion/ej2-react-grids'

import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className='mt-12 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='Page' title='Customers'/>
    <GridComponent dataSource={customersData} allowPaging allowSorting editSettings={{allowDeleting: true, allowEditing: true, allowAdding: true}} allowPdfExport toolbar={['Search', 'Delete', 'Add']} width='auto'  >
      <ColumnsDirective>
        {customersGrid.map((item,index) => (
          <ColumnDirective key={index} {...item}/>
        ))}
      </ColumnsDirective>
      <Inject services={[Page, Sort, Toolbar, Selection, Edit, Filter]}/>
    </GridComponent>
  </div>
  )
}

export default Customers