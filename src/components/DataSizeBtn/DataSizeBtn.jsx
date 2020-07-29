import React from 'react'
import { Button } from "react-bootstrap";

const DataSizeBtn=({dataSize,setDataSize})=> {
    return <div className="data-size-block">
        <h4>Выберите объем данных</h4>
        <div className="data-size-block__btn">
        <Button variant="outline-success" className="data-size-block__btn-item big"
            style={!dataSize ? { display: 'block' } : { display: 'none' } } 
            onClick ={()=>{
            setDataSize('big')
            }}
            >
            Big
        </Button>
        <Button variant="outline-warning" className="data-size-block__btn-item small"
            style={!dataSize ? { display: 'block' } : { display: 'none' } }
            onClick ={()=>{
            setDataSize('small')
            }}
            >
            Small
        </Button>
        </div>
            
        </div>
    
}
export default DataSizeBtn;