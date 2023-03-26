function configureListeners() {
    var images = document.getElementsByTagName('img');    

     for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)  //when cursor is over image , it will add opacity      
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)        //when cursor leaves image , it will remove the opacity
    } 
}

function addOpacity(event) {
    if (!this.classList.contains('dim')){       // for the addOpacity above if when your curser scrolls on it and it does not have dimness
        this.classList.add('dim')       //add dimness
    }    
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     if (this.classList.contains('dim')){        //if when you are on the image and it contains dim
        this.classList.remove('dim');           //once you get off it removes the dimness
    }

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(partNumber) {           //Changing the variables of price and colorName for each block and then updating the function updatePrice
    let price;
    let colorName;  
    
    switch (partNumber) {
        case 'pn1':           
            price = '$14.99'
            colorName = 'Lime Green'
            updatePrice(colorName, price)           
            break;           
        case 'pn2':
            price = '$11.14'
            colorName = 'Medium Brown' 
            updatePrice(colorName, price)     
            break;            
        case 'pn3':
            price = '$22.99'
            colorName = 'Royal Blue'   
            updatePrice(colorName, price)   
            break;   
        case 'pn4':
            price = '13.42'
            colorName = 'Solid Red'            
            updatePrice(colorName, price)   
            break;   
        case 'pn5':
            price = '$21.98'
            colorName = 'Solid White'      
            updatePrice(colorName, price)             
            break;   
        case 'pn6':
            price = '$4.99'
            colorName = 'Solid Black'       
            updatePrice(colorName, price)               
            break;   
        case 'pn7':
            price = '$8.22'
            colorName = 'Solid Cyan' 
            updatePrice(colorName, price)      
            break;   
        case 'pn8':
            price = '$11.99'
            colorName = 'Solid  Purple'   
            updatePrice(colorName, price)        
            break;   
        case 'pn9':
            price = '$14.99'
            colorName = 'Solid Yellow'                       
            updatePrice(colorName, price)   
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');         // select element with corresponding id
        colorPrice.textContent = price;                                 // display price
        
        let color = document.getElementById('color-name');       // select element with corresponding id
        color.textContent = colorName;                          // display price
    }
    
}