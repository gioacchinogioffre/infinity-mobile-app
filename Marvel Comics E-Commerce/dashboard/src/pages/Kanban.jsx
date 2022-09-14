import React from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban'
import { RiAddCircleFill } from 'react-icons/ri'

import { kanbanData, kanbanGrid } from '../data/dummy'
import { Header } from '../components'
import { useStateContext } from '../contexts/ContextProvider'


const Kanban = () => {

  const { currentMode } = useStateContext()

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category='App' title='Kanban'/>
      <button className='flex items-center my-3 justify-end '>
        <RiAddCircleFill color={currentMode === 'Dark' ? 'white' : 'black' }/>
        <h1 className='dark:text-white ml-2'>Add Task</h1>
      </button>
      
      <KanbanComponent id='kanban' dataSource={kanbanData} cardSettings={{contentField: 'Summary', headerField: 'Id'}} keyField='Status'>
        <ColumnsDirective>
          {kanbanGrid.map((item, index)=> (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban