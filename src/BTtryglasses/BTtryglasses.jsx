import React, {useState} from 'react'
import './style.css'
import kindGlasses from './data.json'


const BTtryglasses = () => {
    const [imgClasses, setImgClasses] = useState('./img/glassesImage/v1.png')

    const [nameClasses, setNameClasses] = useState('GUCCI G8850U')
    const [priceClasses, setPriceClasses] = useState('30')
    const [descClasses, setDescClasses] = useState('Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ')

    const handleImage = (img,name,price,desc) => {
        setImgClasses(img)
        setNameClasses(name) 
        setPriceClasses(price)
        setDescClasses(desc)
    }
  return (
      <div className='position-positive'>
        <img className='image position-absolute' src="./img/glassesImage/model.jpg" alt="" /> 
        <img className='img-fluid position-absolute glasses'src={imgClasses} alt="..." />
        {
            <div className="infor position-absolute">
                <p>{nameClasses}</p>
                <p>{priceClasses}</p>
                <p>{descClasses}</p>
            </div>
        } 
      <div className="position-absolute kind row">
            {
                kindGlasses.map((glasses) => {
                    return (
                        <div className="col-2">
                            <img className='img-fluid' key={glasses.id} src={glasses.url} alt={glasses.name} onClick={() => {
                                handleImage(glasses.url)
                                setNameClasses(glasses.name) 
                                setPriceClasses(glasses.price)
                                setDescClasses(glasses.desc)
                            }}/>
                        </div>
                    )
                })
            }
       </div>
    </div>
  )
}

export default BTtryglasses