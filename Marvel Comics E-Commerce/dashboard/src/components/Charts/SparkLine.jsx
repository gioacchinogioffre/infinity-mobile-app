import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts' 

const SparkLine = ({ id, height, color, width, type, data, currentColor }) => {
  return (
  <SparklineComponent id={id} height={height} width={width} lineWidth={1} valueType="Numeric" fill={color} border={{color: currentColor, width:2}} dataSource={[
    { x: 1, yval: 2 },
    { x: 2, yval: 6 },
    { x: 3, yval: 8 },
    { x: 4, yval: 5 },
    { x: 5, yval: 10 },
  ]} xName='x' yName='yval' type={type} tooltipSettings={{visible: true, format:'${x} : data ${y}', trackLineSettings: {visible:true}  }}>
    <Inject services={[SparklineTooltip]}/>
  </SparklineComponent >
  )
}

export default SparkLine