All detail about the code and the file structure i use in it.

->FOLDER STRUCUTRE
     src
        --assests ==>> this is use for only to add the image for website. 
       --component
       --context
       --Pages
       --routes

COMPONENTS
   --Navbar.jsx
          maine isme navlink use kiya hai for (NAVIGATION) 
          <NavLink to=""></NavLink>
   --Cart.jsx
        maine isme( useContext()) use kiya hai jo ki help karta hai saare function or dynamic variable [USESTATE] ko use karne mai.
        fir isme map use kiya taki mai cart ke andar ke saare element ek ek kar ke add kar saku.
        {Cart.map(function(element,idx){
            #code
        })}

    --ProductCard.jsx
         iske andar maine use kiya hai:-
         1.useNavigate()
         2.Usecontext(store)
         3.Map ==>> for design the each card from the api which i call for the FAKE STORE .API
        
CONTEXT
    --MyStore.jsx
         iske andar maine saare function likhe hai jaise ki:-
         cart Feature All Function=============>>>>>>>>>>>
            1.Add item in Cart.
            2.Remove item from Cart.
            3.Increase the Quantity.
            4.Decrease the Quantity.
            5.Total price and total Quanity to show in ui.
            6.API call 
            7.Dynamic variable.

PAGES
     --About.jsx
     --Home.jsx
     --Shop.jsx
     --SingleProduct.jsx ===>> THIS IS THE IMPORTANT FILE FOR THE [API]
          -- iske andar [useParams()] ka use kiya hai jo help karta hai single product ko select karne mai jo hum api se lete hai for example:-
           {
            let { id } = useParams();
            let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setSingleData(res.data);
            }

ROUTES
     --Approutes.jsx   
          iske andar humne declarative routes ka use kiya hai 
          <BrowserRouter>
          <Routes>
          <Route path="" element={}/>
          </Route>
          </BrowserRouter>
        