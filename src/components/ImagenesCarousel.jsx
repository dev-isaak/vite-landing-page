const ImagenesCarousel = () => {

    const imagenes = [

        {
            id:'1',
            name:'aventon',
            url:`../assets/carousel/aventon.png`
        },
        {
            id:'2',
            name:'burga',
            url:'../assets/carousel/burga.png'
        },
        {
            id:'3',
            name:'byrider',
            url:'../assets/carousel/byrider.png'
        },
        {
            id:'4',
            name:'catholic',
            url:'../assets/carousel/catholic.png'
        },
        {
            id:'5',
            name:'client3',
            url:'../assets/carousel/client3.png'
        },
        {
            id:'6',
            name:'client4',
            url:'../assets/carousel/client4.png'
        },
        {
            id:'7',
            name:'client5',
            url:'../assets/carousel/client5.png'
        },
        {
            id:'8',
            name:'client6',
            url:'../assets/carousel/client6.png'
        },
        {
            id:'9',
            name:'fittrack',
            url:'../assets/carousel/fittrack.png'
        },
        {
            id:'10',
            name:'harper_collins',
            url:'../assets/carousel/harper_collins.png'
        },
        {
            id:'11',
            name:'HDsupply',
            url:'../assets/carousel/HDsupply.png'
        },
        {
            id:'12',
            name:'nbg_golf',
            url:'../assets/carousel/nbg_golf.png'
        },
        {
            id:'13',
            name:'snow',
            url:'../assets/carousel/snow.png'
        }
    ]

  return (
    imagenes.map((imagen)=>
        <img key={imagen.id} src={imagen.url} alt={`imagen de compañía ${imagen.name}`} className='w-[10rem]'/>
        )
  )
}

 export default ImagenesCarousel