import { totalCountVariants } from '@/constans'
import { Card } from 'antd'
import React from 'react'
type Props ={
  resource:"companies"|"contacts"|"deals",
  isLoading:boolean,
  totalCount:number

}
const DashboardTotalCountCard = ({
  resource,
  isLoading,
  totalCount,

}:Props) => {
  const {primaryColor,secondaryColor,icon,title,data} = totalCountVariants[resource]
  return (
    <Card
    style={{
      height:'96px',
      padding:'0',
    }}
    bodyStyle={{padding:'8px 8px 8px 12px'}}
    size='small'
    >
      <div
        style={{
          display:'flex',
          gap:'8px',
          alignItems:'center',
          whiteSpace:"nowrap"
        }}
      >
        {
          icon
        }

      </div>


    </Card>
  )
}
    
export default DashboardTotalCountCard